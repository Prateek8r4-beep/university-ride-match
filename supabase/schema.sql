-- University Ride Match Database Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    university VARCHAR(255) NOT NULL,
    student_id VARCHAR(100) NOT NULL,
    gender VARCHAR(20) NOT NULL,
    is_driver BOOLEAN DEFAULT FALSE,
    is_verified BOOLEAN DEFAULT FALSE,
    rating DECIMAL(3,2) DEFAULT 0.00,
    total_rides INTEGER DEFAULT 0,
    thumbs_up INTEGER DEFAULT 0,
    reward_points INTEGER DEFAULT 0,
    id_proof_url TEXT,
    driver_license_url TEXT,
    profile_image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Class schedules table
CREATE TABLE class_schedules (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    day_of_week VARCHAR(20) NOT NULL,
    class_name VARCHAR(255) NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    location VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Rides table
CREATE TABLE rides (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    driver_id UUID REFERENCES users(id) ON DELETE CASCADE,
    from_location VARCHAR(255) NOT NULL,
    to_location VARCHAR(255) NOT NULL,
    ride_date DATE NOT NULL,
    pickup_time TIME NOT NULL,
    drop_time TIME NOT NULL,
    fare DECIMAL(10,2) NOT NULL,
    total_seats INTEGER NOT NULL,
    available_seats INTEGER NOT NULL,
    is_women_only BOOLEAN DEFAULT FALSE,
    status VARCHAR(50) DEFAULT 'active', -- active, completed, cancelled
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Ride bookings table
CREATE TABLE ride_bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ride_id UUID REFERENCES rides(id) ON DELETE CASCADE,
    passenger_id UUID REFERENCES users(id) ON DELETE CASCADE,
    seats_booked INTEGER DEFAULT 1,
    booking_status VARCHAR(50) DEFAULT 'confirmed', -- confirmed, completed, cancelled
    match_score INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(ride_id, passenger_id)
);

-- Ratings table
CREATE TABLE ratings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ride_id UUID REFERENCES rides(id) ON DELETE CASCADE,
    from_user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    to_user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    thumbs_up BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Rewards table
CREATE TABLE rewards (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    reward_type VARCHAR(100) NOT NULL,
    reward_title VARCHAR(255) NOT NULL,
    reward_description TEXT,
    points INTEGER NOT NULL,
    unlocked BOOLEAN DEFAULT FALSE,
    unlocked_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Notifications table
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    type VARCHAR(50) NOT NULL, -- ride_match, booking, rating, reward
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_university ON users(university);
CREATE INDEX idx_class_schedules_user_id ON class_schedules(user_id);
CREATE INDEX idx_class_schedules_day ON class_schedules(day_of_week);
CREATE INDEX idx_rides_driver_id ON rides(driver_id);
CREATE INDEX idx_rides_date ON rides(ride_date);
CREATE INDEX idx_rides_status ON rides(status);
CREATE INDEX idx_ride_bookings_ride_id ON ride_bookings(ride_id);
CREATE INDEX idx_ride_bookings_passenger_id ON ride_bookings(passenger_id);
CREATE INDEX idx_ratings_to_user_id ON ratings(to_user_id);
CREATE INDEX idx_notifications_user_id ON notifications(user_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers for updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_class_schedules_updated_at BEFORE UPDATE ON class_schedules
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_rides_updated_at BEFORE UPDATE ON rides
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_ride_bookings_updated_at BEFORE UPDATE ON ride_bookings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) Policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE class_schedules ENABLE ROW LEVEL SECURITY;
ALTER TABLE rides ENABLE ROW LEVEL SECURITY;
ALTER TABLE ride_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE ratings ENABLE ROW LEVEL SECURITY;
ALTER TABLE rewards ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Users can read their own data
CREATE POLICY "Users can view own profile" ON users
    FOR SELECT USING (auth.uid() = id);

-- Users can update their own data
CREATE POLICY "Users can update own profile" ON users
    FOR UPDATE USING (auth.uid() = id);

-- Users can view other verified users (for ride matching)
CREATE POLICY "Users can view verified users" ON users
    FOR SELECT USING (is_verified = true);

-- Class schedules policies
CREATE POLICY "Users can manage own schedules" ON class_schedules
    FOR ALL USING (auth.uid() = user_id);

-- Rides policies
CREATE POLICY "Anyone can view active rides" ON rides
    FOR SELECT USING (status = 'active');

CREATE POLICY "Drivers can manage own rides" ON rides
    FOR ALL USING (auth.uid() = driver_id);

-- Ride bookings policies
CREATE POLICY "Users can view own bookings" ON ride_bookings
    FOR SELECT USING (auth.uid() = passenger_id);

CREATE POLICY "Users can create bookings" ON ride_bookings
    FOR INSERT WITH CHECK (auth.uid() = passenger_id);

-- Ratings policies
CREATE POLICY "Users can view ratings about them" ON ratings
    FOR SELECT USING (auth.uid() = to_user_id OR auth.uid() = from_user_id);

CREATE POLICY "Users can create ratings" ON ratings
    FOR INSERT WITH CHECK (auth.uid() = from_user_id);

-- Rewards policies
CREATE POLICY "Users can view own rewards" ON rewards
    FOR SELECT USING (auth.uid() = user_id);

-- Notifications policies
CREATE POLICY "Users can view own notifications" ON notifications
    FOR ALL USING (auth.uid() = user_id);

-- Insert sample rewards
INSERT INTO rewards (user_id, reward_type, reward_title, reward_description, points, unlocked) VALUES
(uuid_generate_v4(), 'early_bird', 'Early Bird', '10 rides before 8 AM', 100, false),
(uuid_generate_v4(), 'night_owl', 'Night Owl', '5 rides after 10 PM', 150, false),
(uuid_generate_v4(), 'trusted_driver', 'Trusted Driver', '50 rides with 4.5+ rating', 200, false),
(uuid_generate_v4(), 'safety_champion', 'Safety Champion', '100 rides with zero incidents', 300, false);
