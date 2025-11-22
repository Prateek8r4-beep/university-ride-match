'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaStar, FaThumbsUp, FaCar, FaUser, FaTrophy, FaShieldAlt, FaEdit } from 'react-icons/fa'

export default function Profile() {
  const [activeTab, setActiveTab] = useState<'overview' | 'ratings' | 'rewards'>('overview')

  // Mock user data
  const user = {
    name: 'Priya Sharma',
    email: 'priya.sharma@university.edu',
    university: 'Delhi University',
    studentId: 'DU2024001',
    phone: '+91 98765 43210',
    gender: 'Female',
    verified: true,
    isDriver: true,
    rating: 4.8,
    totalRides: 45,
    thumbsUp: 42,
    rewardPoints: 850,
    memberSince: 'January 2024',
  }

  const recentRatings = [
    { id: '1', from: 'Rahul Kumar', rating: 5, comment: 'Great driver! Very punctual and safe.', date: '2024-11-20' },
    { id: '2', from: 'Anjali Verma', rating: 5, comment: 'Friendly and professional. Highly recommend!', date: '2024-11-18' },
    { id: '3', from: 'Amit Singh', rating: 4, comment: 'Good ride, slight delay but overall nice experience.', date: '2024-11-15' },
  ]

  const rewards = [
    { id: '1', title: 'Early Bird', description: '10 rides before 8 AM', points: 100, unlocked: true },
    { id: '2', title: 'Night Owl', description: '5 rides after 10 PM', points: 150, unlocked: true },
    { id: '3', title: 'Trusted Driver', description: '50 rides with 4.5+ rating', points: 200, unlocked: false },
    { id: '4', title: 'Safety Champion', description: '100 rides with zero incidents', points: 300, unlocked: false },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige-50 to-beige-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-beige-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-beige-900">My Profile</h1>
            <div className="flex space-x-4">
              <Link href="/timetable" className="btn-secondary">
                Timetable
              </Link>
              <Link href="/rides" className="btn-primary">
                Find Rides
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="card">
              <div className="text-center">
                <div className="w-24 h-24 bg-beige-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUser className="text-4xl text-beige-600" />
                </div>
                <h2 className="text-2xl font-bold text-beige-900 mb-1">{user.name}</h2>
                <p className="text-beige-700 mb-4">{user.university}</p>
                
                {user.verified && (
                  <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <FaShieldAlt className="mr-2" />
                    Verified Student
                  </div>
                )}

                {user.isDriver && (
                  <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 ml-2">
                    <FaCar className="mr-2" />
                    Driver
                  </div>
                )}

                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-beige-200">
                  <div>
                    <div className="text-2xl font-bold text-beige-900">{user.rating}</div>
                    <div className="text-xs text-beige-600">Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-beige-900">{user.totalRides}</div>
                    <div className="text-xs text-beige-600">Rides</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-beige-900">{user.thumbsUp}</div>
                    <div className="text-xs text-beige-600">Thumbs Up</div>
                  </div>
                </div>

                <button className="btn-primary w-full mt-6">
                  <FaEdit className="inline mr-2" />
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="card mt-6">
              <h3 className="font-semibold text-beige-900 mb-4">Contact Information</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-beige-600">Email</div>
                  <div className="text-beige-900">{user.email}</div>
                </div>
                <div>
                  <div className="text-beige-600">Phone</div>
                  <div className="text-beige-900">{user.phone}</div>
                </div>
                <div>
                  <div className="text-beige-600">Student ID</div>
                  <div className="text-beige-900">{user.studentId}</div>
                </div>
                <div>
                  <div className="text-beige-600">Member Since</div>
                  <div className="text-beige-900">{user.memberSince}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="card mb-6">
              <div className="flex space-x-4 border-b border-beige-200">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`pb-3 px-4 font-medium transition-colors ${
                    activeTab === 'overview'
                      ? 'text-beige-900 border-b-2 border-beige-600'
                      : 'text-beige-600 hover:text-beige-900'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('ratings')}
                  className={`pb-3 px-4 font-medium transition-colors ${
                    activeTab === 'ratings'
                      ? 'text-beige-900 border-b-2 border-beige-600'
                      : 'text-beige-600 hover:text-beige-900'
                  }`}
                >
                  Ratings & Reviews
                </button>
                <button
                  onClick={() => setActiveTab('rewards')}
                  className={`pb-3 px-4 font-medium transition-colors ${
                    activeTab === 'rewards'
                      ? 'text-beige-900 border-b-2 border-beige-600'
                      : 'text-beige-600 hover:text-beige-900'
                  }`}
                >
                  Rewards
                </button>
              </div>
            </div>

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-xl font-semibold text-beige-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    <ActivityItem
                      icon={<FaCar className="text-beige-600" />}
                      title="Completed ride to Delhi University"
                      time="2 hours ago"
                    />
                    <ActivityItem
                      icon={<FaThumbsUp className="text-green-600" />}
                      title="Received thumbs up from Rahul Kumar"
                      time="5 hours ago"
                    />
                    <ActivityItem
                      icon={<FaStar className="text-yellow-500" />}
                      title="Received 5-star rating"
                      time="1 day ago"
                    />
                  </div>
                </div>

                <div className="card bg-gradient-to-r from-beige-100 to-beige-200 border-beige-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-beige-900 mb-2">Reward Points</h3>
                      <p className="text-beige-700">Earn points for every ride and unlock rewards!</p>
                    </div>
                    <div className="text-4xl font-bold text-beige-900">{user.rewardPoints}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Ratings Tab */}
            {activeTab === 'ratings' && (
              <div className="space-y-4">
                {recentRatings.map((rating) => (
                  <div key={rating.id} className="card">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-beige-900">{rating.from}</h4>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`${
                                i < rating.rating ? 'text-yellow-500' : 'text-beige-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-beige-600">{rating.date}</span>
                    </div>
                    <p className="text-beige-700">{rating.comment}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Rewards Tab */}
            {activeTab === 'rewards' && (
              <div className="space-y-4">
                {rewards.map((reward) => (
                  <div
                    key={reward.id}
                    className={`card ${
                      reward.unlocked
                        ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-300'
                        : 'opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            reward.unlocked ? 'bg-yellow-400' : 'bg-beige-300'
                          }`}
                        >
                          <FaTrophy className="text-2xl text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-beige-900">{reward.title}</h4>
                          <p className="text-sm text-beige-700">{reward.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-beige-900">+{reward.points}</div>
                        <div className="text-xs text-beige-600">points</div>
                      </div>
                    </div>
                    {reward.unlocked && (
                      <div className="mt-3 text-sm text-green-700 font-medium">✓ Unlocked!</div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ActivityItem({ icon, title, time }: { icon: React.ReactNode; title: string; time: string }) {
  return (
    <div className="flex items-center space-x-3 pb-4 border-b border-beige-200 last:border-0">
      <div className="w-10 h-10 bg-beige-100 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-beige-900">{title}</div>
        <div className="text-sm text-beige-600">{time}</div>
      </div>
    </div>
  )
}
