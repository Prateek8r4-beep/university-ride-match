'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaCar, FaShieldAlt, FaCalendarAlt, FaStar, FaUserCheck, FaFemale, FaRocket, FaHeart } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-page">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-primary-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-primary p-2 rounded-xl">
                <FaCar className="text-white text-2xl" />
              </div>
              <h1 className="text-3xl font-bold gradient-text">UniRide</h1>
            </div>
            <div className="flex space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-primary-600 font-semibold transition-colors">
                Login
              </Link>
              <Link href="/verification" className="btn-primary">
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fadeIn">
        <div className="text-center">
          <div className="inline-block mb-4">
            <span className="badge-primary text-sm px-4 py-2">🎓 For University Students</span>
          </div>
          <h2 className="text-6xl font-extrabold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Ride with Your</span>
            <br />
            <span className="bg-gradient-secondary bg-clip-text text-transparent">Classmates</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Match with <span className="font-bold text-primary-600">verified university students</span> who share your class schedule. 
            Safe, affordable, and convenient carpooling made easy! 🚗✨
          </p>
          <div className="flex justify-center space-x-4 flex-wrap gap-4">
            <Link href="/verification" className="btn-primary text-lg flex items-center gap-2">
              <FaRocket /> Get Started Free
            </Link>
            <Link href="/rides" className="btn-secondary text-lg flex items-center gap-2">
              <FaCar /> Browse Rides
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="stat-card animate-fadeIn">
            <div className="text-5xl font-bold mb-2">5,000+</div>
            <div className="text-white/90 text-lg">Verified Students</div>
          </div>
          <div className="bg-gradient-secondary text-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 animate-fadeIn">
            <div className="text-5xl font-bold mb-2">₹50-150</div>
            <div className="text-white/90 text-lg">Average Fare</div>
          </div>
          <div className="bg-gradient-accent text-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 animate-fadeIn">
            <div className="text-5xl font-bold mb-2">4.8★</div>
            <div className="text-white/90 text-lg">Average Rating</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Why Choose UniRide?</span>
            </h3>
            <p className="text-gray-600 text-lg">Everything you need for safe and affordable student rides</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FaCalendarAlt className="text-5xl text-primary-500" />}
              title="Timetable Sync"
              description="Automatically match with students who have similar class schedules"
              color="primary"
            />
            <FeatureCard
              icon={<FaFemale className="text-5xl text-pink-500" />}
              title="Women-Only Mode"
              description="Safe travel option for women with verified women drivers and passengers"
              color="pink"
            />
            <FeatureCard
              icon={<FaUserCheck className="text-5xl text-success-500" />}
              title="Strict Verification"
              description="All users verified with Aadhaar/ID and drivers with valid licenses"
              color="success"
            />
            <FeatureCard
              icon={<FaStar className="text-5xl text-warning-500" />}
              title="Rating System"
              description="Thumbs-up system with rewards for trusted drivers and passengers"
              color="warning"
            />
            <FeatureCard
              icon={<FaShieldAlt className="text-5xl text-secondary-500" />}
              title="Safe & Secure"
              description="Emergency contacts, live tracking, and verified peer network"
              color="secondary"
            />
            <FeatureCard
              icon={<FaCar className="text-5xl text-accent-500" />}
              title="Transparent Pricing"
              description="See exact fare, pickup time, and drop time before booking"
              color="accent"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">How It Works</span>
          </h3>
          <p className="text-gray-600 text-lg">Get started in 4 simple steps</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <StepCard 
            number="1" 
            title="Sign Up" 
            description="Verify with university email and upload ID"
            color="primary"
          />
          <StepCard 
            number="2" 
            title="Add Timetable" 
            description="Enter your class schedule"
            color="secondary"
          />
          <StepCard 
            number="3" 
            title="Find Matches" 
            description="Get matched with students on similar routes"
            color="accent"
          />
          <StepCard 
            number="4" 
            title="Book & Ride" 
            description="See fare, time, and book your ride"
            color="success"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h3>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of students already saving money and making friends!
          </p>
          <div className="flex justify-center space-x-4 flex-wrap gap-4">
            <Link href="/verification" className="bg-white text-primary-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Sign Up Now - It's Free!
            </Link>
            <Link href="/rides" className="bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-xl border-2 border-white hover:bg-white/30 transition-all duration-300">
              Browse Rides
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-gradient-primary p-2 rounded-xl">
                <FaCar className="text-white text-2xl" />
              </div>
              <h1 className="text-2xl font-bold">UniRide</h1>
            </div>
            <p className="text-gray-400 mb-6">Safe student carpooling for universities</p>
            <div className="flex justify-center space-x-8 mb-6">
              <Link href="/about" className="text-gray-400 hover:text-primary-400 transition-colors">About</Link>
              <Link href="/safety" className="text-gray-400 hover:text-primary-400 transition-colors">Safety</Link>
              <Link href="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">Terms</Link>
            </div>
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              Made with <FaHeart className="text-red-500" /> for university students
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description, color }: { icon: React.ReactNode, title: string, description: string, color: string }) {
  const colorClasses = {
    primary: 'hover:border-primary-300 hover:shadow-primary-200',
    secondary: 'hover:border-secondary-300 hover:shadow-secondary-200',
    accent: 'hover:border-accent-300 hover:shadow-accent-200',
    success: 'hover:border-success-300 hover:shadow-success-200',
    warning: 'hover:border-warning-300 hover:shadow-warning-200',
    pink: 'hover:border-pink-300 hover:shadow-pink-200',
  }

  return (
    <div className={`feature-card ${colorClasses[color as keyof typeof colorClasses]}`}>
      <div className="flex justify-center mb-4">{icon}</div>
      <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

function StepCard({ number, title, description, color }: { number: string, title: string, description: string, color: string }) {
  const gradients = {
    primary: 'bg-gradient-primary',
    secondary: 'bg-gradient-secondary',
    accent: 'bg-gradient-accent',
    success: 'bg-gradient-success',
  }

  return (
    <div className="text-center group">
      <div className={`w-20 h-20 ${gradients[color as keyof typeof gradients]} text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        {number}
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
