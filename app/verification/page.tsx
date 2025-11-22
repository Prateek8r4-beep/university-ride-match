'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaUpload, FaCheckCircle, FaIdCard, FaCar } from 'react-icons/fa'

export default function Verification() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    studentId: '',
    phone: '',
    gender: '',
    isDriver: false,
    idProof: null as File | null,
    driverLicense: null as File | null,
  })

  const handleFileUpload = (field: 'idProof' | 'driverLicense', file: File | null) => {
    setFormData({ ...formData, [field]: file })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Submit verification
      alert('Verification submitted! You will be notified once approved.')
      window.location.href = '/timetable'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige-50 to-beige-100 py-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-beige-900 mb-2">Verification</h1>
          <p className="text-beige-700">Complete verification to start using UniRide</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step >= s ? 'bg-beige-600 text-white' : 'bg-beige-200 text-beige-600'
                }`}>
                  {s}
                </div>
                {s < 3 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    step > s ? 'bg-beige-600' : 'bg-beige-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-beige-700">
            <span>Basic Info</span>
            <span>ID Upload</span>
            <span>Driver Info</span>
          </div>
        </div>

        {/* Form */}
        <div className="card">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-beige-900 mb-4">Basic Information</h2>
                
                <div>
                  <label className="block text-beige-800 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    className="input-field"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-beige-800 font-medium mb-2">University Email</label>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="student@university.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-beige-800 font-medium mb-2">University Name</label>
                  <input
                    type="text"
                    className="input-field"
                    value={formData.university}
                    onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-beige-800 font-medium mb-2">Student ID</label>
                  <input
                    type="text"
                    className="input-field"
                    value={formData.studentId}
                    onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-beige-800 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="input-field"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-beige-800 font-medium mb-2">Gender</label>
                  <select
                    className="input-field"
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-beige-900 mb-4">ID Verification</h2>
                
                <div className="border-2 border-dashed border-beige-300 rounded-lg p-8 text-center">
                  <FaIdCard className="text-5xl text-beige-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-beige-900 mb-2">Upload Government ID</h3>
                  <p className="text-beige-700 mb-4">Aadhaar Card, Passport, or Driver's License</p>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => handleFileUpload('idProof', e.target.files?.[0] || null)}
                    className="hidden"
                    id="idProof"
                    required
                  />
                  <label htmlFor="idProof" className="btn-primary cursor-pointer inline-block">
                    <FaUpload className="inline mr-2" />
                    Choose File
                  </label>
                  {formData.idProof && (
                    <div className="mt-4 flex items-center justify-center text-green-600">
                      <FaCheckCircle className="mr-2" />
                      {formData.idProof.name}
                    </div>
                  )}
                </div>

                <div className="bg-beige-100 border border-beige-300 rounded-lg p-4">
                  <h4 className="font-semibold text-beige-900 mb-2">Why we need this:</h4>
                  <ul className="text-beige-700 space-y-1 text-sm">
                    <li>• Verify your identity for safety</li>
                    <li>• Ensure only university students use the platform</li>
                    <li>• Build trust in the community</li>
                    <li>• Your data is encrypted and secure</li>
                  </ul>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-beige-900 mb-4">Driver Information</h2>
                
                <div className="bg-beige-100 border border-beige-300 rounded-lg p-4">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isDriver}
                      onChange={(e) => setFormData({ ...formData, isDriver: e.target.checked })}
                      className="w-5 h-5 text-beige-600"
                    />
                    <span className="text-beige-900 font-medium">I want to offer rides as a driver</span>
                  </label>
                </div>

                {formData.isDriver && (
                  <div className="border-2 border-dashed border-beige-300 rounded-lg p-8 text-center">
                    <FaCar className="text-5xl text-beige-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-beige-900 mb-2">Upload Driver's License</h3>
                    <p className="text-beige-700 mb-4">Valid driving license required for drivers</p>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileUpload('driverLicense', e.target.files?.[0] || null)}
                      className="hidden"
                      id="driverLicense"
                      required={formData.isDriver}
                    />
                    <label htmlFor="driverLicense" className="btn-primary cursor-pointer inline-block">
                      <FaUpload className="inline mr-2" />
                      Choose File
                    </label>
                    {formData.driverLicense && (
                      <div className="mt-4 flex items-center justify-center text-green-600">
                        <FaCheckCircle className="mr-2" />
                        {formData.driverLicense.name}
                      </div>
                    )}
                  </div>
                )}

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">✓ Almost Done!</h4>
                  <p className="text-green-700 text-sm">
                    Your verification will be reviewed within 24 hours. You'll receive an email once approved.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="btn-secondary"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className="btn-primary ml-auto"
              >
                {step === 3 ? 'Submit Verification' : 'Next'}
              </button>
            </div>
          </form>
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
