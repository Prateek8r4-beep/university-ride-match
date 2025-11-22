'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaCar, FaShieldAlt, FaCalendarAlt, FaStar, FaUserCheck, FaFemale } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-beige-50 to-beige-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-beige-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FaCar className="text-beige-600 text-3xl" />
              <h1 className="text-2xl font-bold text-beige-800">UniRide</h1>
            </div>
            <div className="flex space-x-4">
              <Link href="/login" className="text-beige-700 hover:text-beige-900 font-medium">
                Login
              </Link>
              <Link href="/verification" className="btn-primary">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-beige-900 mb-6">
            Ride with Your Classmates
          </h2>
          <p className="text-xl text-beige-700 mb-8 max-w-3xl mx-auto">
            Match with verified university students who share your class schedule. 
            Safe, affordable, and convenient carpooling for students.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/verification" className="btn-primary text-lg">
              Get Started
            </Link>
            <Link href="/rides" className="btn-secondary text-lg">
              Browse Rides
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="card text-center">
            <div className="text-4xl font-bold text-beige-600 mb-2">5,000+</div>
            <div className="text-beige-700">Verified Students</div>
          </div>
          <div className="card text-center">
            <div className="text-4xl font-bold text-beige-600 mb-2">₹50-150</div>
            <div className="text-beige-700">Average Fare</div>
          </div>
          <div className="card text-center">
            <div className="text-4xl font-bold text-beige-600 mb-2">4.8★</div>
            <div className="text-beige-700">Average Rating</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-beige-900 text-center mb-12">
            Why Choose UniRide?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FaCalendarAlt className="text-4xl text-beige-600" />}
              title="Timetable Sync"
              description="Automatically match with students who have similar class schedules"
            />
            <FeatureCard
              icon={<FaFemale className="text-4xl text-beige-600" />}
              title="Women-Only Mode"
              description="Safe travel option for women with verified women drivers and passengers"
            />
            <FeatureCard
              icon={<FaUserCheck className="text-4xl text-beige-600" />}
              title="Strict Verification"
              description="All users verified with Aadhaar/ID and drivers with valid licenses"
            />
            <FeatureCard
              icon={<FaStar className="text-4xl text-beige-600" />}
              title="Rating System"
              description="Thumbs-up system with rewards for trusted drivers and passengers"
            />
            <FeatureCard
              icon={<FaShieldAlt className="text-4xl text-beige-600" />}
              title="Safe & Secure"
              description="Emergency contacts, live tracking, and verified peer network"
            />
            <FeatureCard
              icon={<FaCar className="text-4xl text-beige-600" />}
              title="Transparent Pricing"
              description="See exact fare, pickup time, and drop time before booking"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-3xl font-bold text-beige-900 text-center mb-12">
          How It Works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <StepCard number="1" title="Sign Up" description="Verify with university email and upload ID" />
          <StepCard number="2" title="Add Timetable" description="Enter your class schedule" />
          <StepCard number="3" title="Find Matches" description="Get matched with students on similar routes" />
          <StepCard number="4" title="Book & Ride" description="See fare, time, and book your ride" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-beige-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 UniRide. Safe student carpooling for universities.</p>
          <div className="mt-4 space-x-6">
            <Link href="/about" className="hover:text-beige-300">About</Link>
            <Link href="/safety" className="hover:text-beige-300">Safety</Link>
            <Link href="/contact" className="hover:text-beige-300">Contact</Link>
            <Link href="/terms" className="hover:text-beige-300">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="card text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <h4 className="text-xl font-semibold text-beige-900 mb-2">{title}</h4>
      <p className="text-beige-700">{description}</p>
    </div>
  )
}

function StepCard({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-beige-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h4 className="text-xl font-semibold text-beige-900 mb-2">{title}</h4>
      <p className="text-beige-700">{description}</p>
    </div>
  )
}
