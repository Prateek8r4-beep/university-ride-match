import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface User {
  id: string
  email: string
  name: string
  phone?: string
  university: string
  student_id: string
  gender: string
  is_driver: boolean
  is_verified: boolean
  rating: number
  total_rides: number
  thumbs_up: number
  reward_points: number
  id_proof_url?: string
  driver_license_url?: string
  profile_image_url?: string
  created_at: string
  updated_at: string
}

export interface ClassSchedule {
  id: string
  user_id: string
  day_of_week: string
  class_name: string
  start_time: string
  end_time: string
  location?: string
  created_at: string
  updated_at: string
}

export interface Ride {
  id: string
  driver_id: string
  from_location: string
  to_location: string
  ride_date: string
  pickup_time: string
  drop_time: string
  fare: number
  total_seats: number
  available_seats: number
  is_women_only: boolean
  status: string
  created_at: string
  updated_at: string
  driver?: User
}

export interface RideBooking {
  id: string
  ride_id: string
  passenger_id: string
  seats_booked: number
  booking_status: string
  match_score?: number
  created_at: string
  updated_at: string
}

export interface Rating {
  id: string
  ride_id: string
  from_user_id: string
  to_user_id: string
  rating: number
  comment?: string
  thumbs_up: boolean
  created_at: string
}

export interface Reward {
  id: string
  user_id: string
  reward_type: string
  reward_title: string
  reward_description?: string
  points: number
  unlocked: boolean
  unlocked_at?: string
  created_at: string
}

export interface Notification {
  id: string
  user_id: string
  title: string
  message: string
  type: string
  is_read: boolean
  created_at: string
}
