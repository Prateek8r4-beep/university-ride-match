import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'University Ride Match - Safe Student Carpooling',
  description: 'Match with verified university students for safe, affordable rides based on your class schedule',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-beige-50">{children}</body>
    </html>
  )
}
