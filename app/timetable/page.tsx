'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaPlus, FaTrash, FaClock, FaMapMarkerAlt } from 'react-icons/fa'

interface ClassSchedule {
  id: string
  day: string
  startTime: string
  endTime: string
  className: string
  location: string
}

export default function Timetable() {
  const [schedules, setSchedules] = useState<ClassSchedule[]>([])
  const [showForm, setShowForm] = useState(false)
  const [newSchedule, setNewSchedule] = useState({
    day: '',
    startTime: '',
    endTime: '',
    className: '',
    location: '',
  })

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  const addSchedule = () => {
    if (newSchedule.day && newSchedule.startTime && newSchedule.endTime && newSchedule.className) {
      setSchedules([
        ...schedules,
        {
          id: Date.now().toString(),
          ...newSchedule,
        },
      ])
      setNewSchedule({
        day: '',
        startTime: '',
        endTime: '',
        className: '',
        location: '',
      })
      setShowForm(false)
    }
  }

  const deleteSchedule = (id: string) => {
    setSchedules(schedules.filter((s) => s.id !== id))
  }

  const groupedSchedules = days.map((day) => ({
    day,
    classes: schedules.filter((s) => s.day === day).sort((a, b) => a.startTime.localeCompare(b.startTime)),
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige-50 to-beige-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-beige-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-beige-900">My Timetable</h1>
            <div className="flex space-x-4">
              <Link href="/rides" className="btn-secondary">
                Find Rides
              </Link>
              <Link href="/profile" className="btn-primary">
                Profile
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add Class Button */}
        <div className="mb-6">
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-primary"
          >
            <FaPlus className="inline mr-2" />
            Add Class
          </button>
        </div>

        {/* Add Class Form */}
        {showForm && (
          <div className="card mb-6">
            <h3 className="text-xl font-semibold text-beige-900 mb-4">Add New Class</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-beige-800 font-medium mb-2">Day</label>
                <select
                  className="input-field"
                  value={newSchedule.day}
                  onChange={(e) => setNewSchedule({ ...newSchedule, day: e.target.value })}
                >
                  <option value="">Select Day</option>
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-beige-800 font-medium mb-2">Class Name</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="e.g., Computer Science 101"
                  value={newSchedule.className}
                  onChange={(e) => setNewSchedule({ ...newSchedule, className: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-beige-800 font-medium mb-2">Start Time</label>
                <input
                  type="time"
                  className="input-field"
                  value={newSchedule.startTime}
                  onChange={(e) => setNewSchedule({ ...newSchedule, startTime: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-beige-800 font-medium mb-2">End Time</label>
                <input
                  type="time"
                  className="input-field"
                  value={newSchedule.endTime}
                  onChange={(e) => setNewSchedule({ ...newSchedule, endTime: e.target.value })}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-beige-800 font-medium mb-2">Location</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="e.g., Building A, Room 301"
                  value={newSchedule.location}
                  onChange={(e) => setNewSchedule({ ...newSchedule, location: e.target.value })}
                />
              </div>
            </div>

            <div className="flex space-x-4 mt-4">
              <button onClick={addSchedule} className="btn-primary">
                Add Class
              </button>
              <button onClick={() => setShowForm(false)} className="btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Timetable Display */}
        {schedules.length === 0 ? (
          <div className="card text-center py-12">
            <FaClock className="text-6xl text-beige-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-beige-900 mb-2">No Classes Added Yet</h3>
            <p className="text-beige-700 mb-4">Add your class schedule to find matching rides</p>
            <button onClick={() => setShowForm(true)} className="btn-primary">
              Add Your First Class
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {groupedSchedules.map(({ day, classes }) => (
              classes.length > 0 && (
                <div key={day} className="card">
                  <h3 className="text-xl font-semibold text-beige-900 mb-4">{day}</h3>
                  <div className="space-y-3">
                    {classes.map((schedule) => (
                      <div
                        key={schedule.id}
                        className="flex items-center justify-between bg-beige-50 p-4 rounded-lg border border-beige-200"
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold text-beige-900">{schedule.className}</h4>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-beige-700">
                            <span className="flex items-center">
                              <FaClock className="mr-1" />
                              {schedule.startTime} - {schedule.endTime}
                            </span>
                            {schedule.location && (
                              <span className="flex items-center">
                                <FaMapMarkerAlt className="mr-1" />
                                {schedule.location}
                              </span>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => deleteSchedule(schedule.id)}
                          className="text-red-500 hover:text-red-700 p-2"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        )}

        {/* Action Buttons */}
        {schedules.length > 0 && (
          <div className="mt-8 text-center">
            <Link href="/rides" className="btn-primary text-lg">
              Find Matching Rides →
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
