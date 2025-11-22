'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaCar } from 'react-icons/fa'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock login - redirect to rides page
    window.location.href = '/rides'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige-50 to-beige-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FaCar className="text-beige-600 text-4xl" />
            <h1 className="text-3xl font-bold text-beige-900">UniRide</h1>
          </div>
          <p className="text-beige-700">Welcome back! Login to your account</p>
        </div>

        {/* Login Form */}
        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-beige-800 font-medium mb-2">University Email</label>
              <input
                type="email"
                className="input-field"
                placeholder="student@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-beige-800 font-medium mb-2">Password</label>
              <input
                type="password"
                className="input-field"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-beige-700">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <Link href="/forgot-password" className="text-beige-600 hover:text-beige-900">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="btn-primary w-full">
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-beige-700">
              Don't have an account?{' '}
              <Link href="/verification" className="text-beige-600 hover:text-beige-900 font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link href="/" className="text-beige-700 hover:text-beige-900">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
