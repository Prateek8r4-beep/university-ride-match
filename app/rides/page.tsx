'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaCar, FaFemale, FaStar, FaClock, FaMapMarkerAlt, FaRupeeSign, FaUser } from 'react-icons/fa'

interface Ride {
  id: string
  driver: {
    name: string
    rating: number
    totalRides: number
    gender: string
    verified: boolean
  }
  from: string
  to: string
  date: string
  pickupTime: string
  dropTime: string
  fare: number
  availableSeats: number
  matchScore: number
  isWomenOnly: boolean
}

export default function Rides() {
  const [womenOnlyMode, setWomenOnlyMode] = useState(false)
  const [selectedDate, setSelectedDate] = useState('')
  const [searchFrom, setSearchFrom] = useState('')
  const [searchTo, setSearchTo] = useState('')

  // Mock ride data
  const allRides: Ride[] = [
    {
      id: '1',
      driver: { name: 'Priya Sharma', rating: 4.8, totalRides: 45, gender: 'female', verified: true },
      from: 'Sector 18, Noida',
      to: 'Delhi University',
      date: '2024-11-23',
      pickupTime: '08:00 AM',
      dropTime: '08:45 AM',
      fare: 80,
      availableSeats: 2,
      matchScore: 95,
      isWomenOnly: true,
    },
    {
      id: '2',
      driver: { name: 'Rahul Kumar', rating: 4.9, totalRides: 78, gender: 'male', verified: true },
      from: 'Dwarka, Delhi',
      to: 'Delhi University',
      date: '2024-11-23',
      pickupTime: '07:30 AM',
      dropTime: '08:30 AM',
      fare: 100,
      availableSeats: 3,
      matchScore: 88,
      isWomenOnly: false,
    },
    {
      id: '3',
      driver: { name: 'Anjali Verma', rating: 4.7, totalRides: 32, gender: 'female', verified: true },
      from: 'Gurgaon',
      to: 'Delhi University',
      date: '2024-11-23',
      pickupTime: '07:45 AM',
      dropTime: '08:50 AM',
      fare: 120,
      availableSeats: 1,
      matchScore: 82,
      isWomenOnly: true,
    },
    {
      id: '4',
      driver: { name: 'Amit Singh', rating: 4.6, totalRides: 56, gender: 'male', verified: true },
      from: 'Rohini, Delhi',
      to: 'Delhi University',
      date: '2024-11-23',
      pickupTime: '08:15 AM',
      dropTime: '09:00 AM',
      fare: 70,
      availableSeats: 2,
      matchScore: 75,
      isWomenOnly: false,
    },
  ]

  const filteredRides = allRides.filter((ride) => {
    if (womenOnlyMode && !ride.isWomenOnly) return false
    return true
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige-50 to-beige-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-beige-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-beige-900">Available Rides</h1>
            <div className="flex items-center space-x-4">
              {/* Women-Only Mode Toggle */}
              <div className="flex items-center space-x-2 bg-pink-50 border border-pink-200 rounded-lg px-4 py-2">
                <FaFemale className="text-pink-600" />
                <span className="text-sm font-medium text-pink-900">Women-Only</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={womenOnlyMode}
                    onChange={(e) => setWomenOnlyMode(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-pink-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
                </label>
              </div>
              <Link href="/timetable" className="btn-secondary">
                Timetable
              </Link>
              <Link href="/profile" className="btn-primary">
                Profile
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Filters */}
        <div className="card mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-beige-800 font-medium mb-2">From</label>
              <input
                type="text"
                className="input-field"
                placeholder="Enter pickup location"
                value={searchFrom}
                onChange={(e) => setSearchFrom(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-beige-800 font-medium mb-2">To</label>
              <input
                type="text"
                className="input-field"
                placeholder="Enter destination"
                value={searchTo}
                onChange={(e) => setSearchTo(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-beige-800 font-medium mb-2">Date</label>
              <input
                type="date"
                className="input-field"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Women-Only Mode Banner */}
        {womenOnlyMode && (
          <div className="bg-pink-100 border border-pink-300 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <FaFemale className="text-pink-600 text-2xl mr-3" />
              <div>
                <h3 className="font-semibold text-pink-900">Women-Only Mode Active</h3>
                <p className="text-sm text-pink-700">Showing only rides with women drivers and passengers</p>
              </div>
            </div>
          </div>
        )}

        {/* Rides List */}
        <div className="space-y-4">
          {filteredRides.length === 0 ? (
            <div className="card text-center py-12">
              <FaCar className="text-6xl text-beige-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-beige-900 mb-2">No Rides Available</h3>
              <p className="text-beige-700">Try adjusting your filters or check back later</p>
            </div>
          ) : (
            filteredRides.map((ride) => (
              <div key={ride.id} className="card hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  {/* Driver Info */}
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="w-16 h-16 bg-beige-300 rounded-full flex items-center justify-center">
                      <FaUser className="text-2xl text-beige-600" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-beige-900">{ride.driver.name}</h3>
                        {ride.driver.verified && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">✓ Verified</span>
                        )}
                        {ride.isWomenOnly && (
                          <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded flex items-center">
                            <FaFemale className="mr-1" /> Women Only
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-3 mt-1 text-sm text-beige-700">
                        <span className="flex items-center">
                          <FaStar className="text-yellow-500 mr-1" />
                          {ride.driver.rating}
                        </span>
                        <span>{ride.driver.totalRides} rides</span>
                        <span className="bg-beige-200 text-beige-800 px-2 py-1 rounded text-xs font-medium">
                          {ride.matchScore}% Match
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Ride Details */}
                  <div className="flex-1 md:mx-8">
                    <div className="flex items-center space-x-2 mb-2">
                      <FaMapMarkerAlt className="text-beige-600" />
                      <span className="text-beige-900 font-medium">{ride.from}</span>
                      <span className="text-beige-500">→</span>
                      <span className="text-beige-900 font-medium">{ride.to}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-beige-700">
                      <span className="flex items-center">
                        <FaClock className="mr-1" />
                        Pickup: {ride.pickupTime}
                      </span>
                      <span className="flex items-center">
                        <FaClock className="mr-1" />
                        Drop: {ride.dropTime}
                      </span>
                      <span>{ride.availableSeats} seats left</span>
                    </div>
                  </div>

                  {/* Fare & Book Button */}
                  <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-beige-900 flex items-center">
                        <FaRupeeSign className="text-xl" />
                        {ride.fare}
                      </div>
                      <div className="text-xs text-beige-600">per person</div>
                    </div>
                    <button className="btn-primary">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Info Box */}
        <div className="card mt-8 bg-beige-100 border-beige-300">
          <h3 className="font-semibold text-beige-900 mb-2">💡 How Matching Works</h3>
          <p className="text-beige-700 text-sm">
            Rides are automatically matched based on your class timetable. The match score shows how well the ride timing aligns with your schedule. Higher scores mean better timing matches!
          </p>
        </div>
      </div>
    </div>
  )
}
