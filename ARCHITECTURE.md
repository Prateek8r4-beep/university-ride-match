# 🏗️ Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         USER DEVICES                         │
│              (Mobile Browsers, Desktop Browsers)             │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ HTTPS
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                      VERCEL (Hosting)                        │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Next.js Application                      │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐     │  │
│  │  │   Pages    │  │ Components │  │    API     │     │  │
│  │  │  - Home    │  │  - Header  │  │  Routes    │     │  │
│  │  │  - Rides   │  │  - Cards   │  │            │     │  │
│  │  │  - Profile │  │  - Forms   │  │            │     │  │
│  │  └────────────┘  └────────────┘  └────────────┘     │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ API Calls
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   SUPABASE (Backend)                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              PostgreSQL Database                      │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐     │  │
│  │  │   Users    │  │   Rides    │  │  Ratings   │     │  │
│  │  │ Schedules  │  │  Bookings  │  │  Rewards   │     │  │
│  │  └────────────┘  └────────────┘  └────────────┘     │  │
│  └──────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Authentication                           │  │
│  │  - Email/Password Auth                               │  │
│  │  - Row Level Security (RLS)                          │  │
│  │  - JWT Tokens                                        │  │
│  └──────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Storage Buckets                          │  │
│  │  - id-proofs/                                        │  │
│  │  - driver-licenses/                                  │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow

### 1. User Registration Flow
```
User → Verification Page → Upload ID → Supabase Storage
                         ↓
                    User Record → Supabase Database
                         ↓
                    Email Verification → Supabase Auth
```

### 2. Ride Matching Flow
```
User → Add Timetable → Class Schedules Table
                     ↓
              Matching Algorithm
                     ↓
         Find Rides with Similar Times
                     ↓
              Display Matched Rides
```

### 3. Booking Flow
```
User → Select Ride → Check Availability
                   ↓
              Create Booking → Bookings Table
                   ↓
              Update Available Seats
                   ↓
              Send Notification
```

## Database Schema

### Core Tables

**users**
- id, email, name, university
- is_driver, is_verified
- rating, total_rides, thumbs_up
- reward_points

**class_schedules**
- user_id, day_of_week
- class_name, start_time, end_time
- location

**rides**
- driver_id, from_location, to_location
- ride_date, pickup_time, drop_time
- fare, available_seats
- is_women_only, status

**ride_bookings**
- ride_id, passenger_id
- seats_booked, match_score
- booking_status

**ratings**
- from_user_id, to_user_id
- rating, comment, thumbs_up

**rewards**
- user_id, reward_type
- points, unlocked

## Security Features

### Row Level Security (RLS)
```sql
-- Users can only view verified users
CREATE POLICY "view_verified" ON users
  FOR SELECT USING (is_verified = true);

-- Users can only manage their own data
CREATE POLICY "manage_own" ON class_schedules
  FOR ALL USING (auth.uid() = user_id);
```

### Authentication
- JWT-based authentication
- Email verification required
- Secure password hashing
- Session management

### Storage Security
- Private buckets for sensitive documents
- User-specific upload policies
- Encrypted file storage

## Technology Stack

### Frontend
- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Date Handling**: date-fns

### Backend
- **Database**: PostgreSQL (Supabase)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **API**: Next.js API Routes

### Deployment
- **Hosting**: Vercel
- **CDN**: Vercel Edge Network
- **SSL**: Automatic HTTPS
- **CI/CD**: GitHub Integration

## Key Features Implementation

### Women-Only Mode
```typescript
// Filter rides based on toggle
const filteredRides = allRides.filter((ride) => {
  if (womenOnlyMode && !ride.is_women_only) return false
  return true
})
```

### Fare Calculation
```typescript
// Base fare + distance + time multiplier
const calculateFare = (distance: number, time: number) => {
  const baseFare = 50
  const distanceFare = distance * 10
  const timeFare = time * 2
  return baseFare + distanceFare + timeFare
}
```

### Match Score Algorithm
```typescript
// Compare user schedule with ride timing
const calculateMatchScore = (userSchedule, rideTime) => {
  const timeDiff = Math.abs(userSchedule - rideTime)
  const score = 100 - (timeDiff * 5)
  return Math.max(0, Math.min(100, score))
}
```

## Performance Optimizations

1. **Database Indexing**: Indexes on frequently queried columns
2. **Edge Caching**: Static pages cached at edge
3. **Image Optimization**: Next.js automatic image optimization
4. **Code Splitting**: Automatic route-based splitting
5. **Lazy Loading**: Components loaded on demand

## Scalability Considerations

- **Database**: PostgreSQL can handle millions of records
- **Hosting**: Vercel auto-scales based on traffic
- **Storage**: Unlimited file storage with Supabase
- **CDN**: Global edge network for fast delivery

## Future Enhancements

1. **Real-time Updates**: WebSocket for live ride updates
2. **Push Notifications**: Firebase Cloud Messaging
3. **Payment Integration**: Razorpay/Stripe
4. **Maps Integration**: Google Maps for routes
5. **Chat System**: In-app messaging
6. **Analytics**: User behavior tracking
7. **Mobile Apps**: React Native versions
