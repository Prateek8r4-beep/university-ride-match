# 🚗 University Ride Match

A university-based ride-matching app where students can find rides with peers who have similar class schedules.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Prateek8r4-beep/university-ride-match)

## ✨ Features

- **🎓 University Verification**: Students verify with university email and government ID
- **📅 Timetable Sync**: Automatic ride matching based on class schedules
- **👩 Women-Only Mode**: Safe travel option for women (toggle on top-right)
- **✅ Strict Verification**: Aadhaar/ID upload + driver license verification
- **⭐ Rating System**: Thumbs-up system with rewards for good behavior
- **💰 Fare Calculation**: Transparent pricing based on distance and time
- **🕐 Ride Timing**: See exact pickup and drop times
- **🎨 Beige Theme**: Clean, simple UI design
- **🔒 Secure Database**: PostgreSQL with Row Level Security
- **☁️ Cloud Storage**: Secure document storage for IDs and licenses

## 🚀 Quick Deploy (15 minutes)

### Option 1: One-Click Deploy
1. Click the "Deploy with Vercel" button above
2. Follow [QUICKSTART.md](QUICKSTART.md) for Supabase setup
3. Add environment variables in Vercel
4. Done! 🎉

### Option 2: Manual Setup
See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed step-by-step guide.

## 📋 Prerequisites

- Node.js 18+ installed
- Supabase account (free tier)
- Vercel account (free tier)
- GitHub account

## 🛠️ Local Development

### 1. Clone the repository
```bash
git clone https://github.com/Prateek8r4-beep/university-ride-match.git
cd university-ride-match
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 4. Setup Supabase database
1. Create a Supabase project
2. Run the SQL from `supabase/schema.sql` in SQL Editor
3. Create storage buckets: `id-proofs` and `driver-licenses`

### 5. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Pages

- **Home** (`/`): Landing page with app overview
- **Verification** (`/verification`): Multi-step ID and license upload
- **Timetable** (`/timetable`): Enter and manage class schedule
- **Rides** (`/rides`): Browse rides with Women-Only Mode toggle
- **Profile** (`/profile`): View ratings, rewards, and stats
- **Login** (`/login`): User authentication

## 🏗️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Custom beige theme)
- **Icons**: React Icons
- **Date Handling**: date-fns

### Backend
- **Database**: PostgreSQL (Supabase)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **API**: Next.js API Routes

### Deployment
- **Hosting**: Vercel
- **Database**: Supabase Cloud
- **CDN**: Vercel Edge Network

## 📊 Database Schema

See [ARCHITECTURE.md](ARCHITECTURE.md) for complete system architecture.

**Core Tables:**
- `users` - User profiles and verification status
- `class_schedules` - Student timetables
- `rides` - Available rides with fare and timing
- `ride_bookings` - Booking records with match scores
- `ratings` - User ratings and reviews
- `rewards` - Achievement system
- `notifications` - User notifications

## 🎯 Target Users

- University students commuting to campus
- Students seeking cheaper shared rides
- Women requiring safe night-time travel
- Students preferring verified peer rides

## 🔒 Security Features

- **Strict Verification**: Aadhaar/Government ID + Driver License
- **Row Level Security**: Database-level access control
- **Encrypted Storage**: Secure document storage
- **JWT Authentication**: Secure session management
- **HTTPS Only**: All traffic encrypted
- **Women-Only Mode**: Safe travel option

## 🌟 Key Features Explained

### Women-Only Mode
Toggle switch (top-right on rides page) filters rides to show only:
- Women drivers
- Women passengers only
- Enhanced safety for night-time commuting

### Fare Display
Each ride shows:
- **Base fare**: ₹50-150 per person
- **Pickup time**: Exact time (e.g., 08:00 AM)
- **Drop time**: Estimated arrival (e.g., 08:45 AM)
- **Match score**: How well it fits your schedule (0-100%)

### Timetable Sync
- Add your class schedule
- System automatically finds rides matching your timing
- Higher match scores for better time alignment

### Rating & Rewards
- Give thumbs-up to good drivers/passengers
- Earn reward points for completed rides
- Unlock achievements (Early Bird, Night Owl, etc.)
- Build trust through verified ratings

## 📚 Documentation

- [QUICKSTART.md](QUICKSTART.md) - 15-minute deployment guide
- [DEPLOYMENT.md](DEPLOYMENT.md) - Detailed deployment instructions
- [ARCHITECTURE.md](ARCHITECTURE.md) - System architecture and design
- [.env.example](.env.example) - Environment variables template

## 🚀 Deployment Checklist

- [ ] Create Supabase project
- [ ] Run database schema
- [ ] Create storage buckets
- [ ] Get Supabase API keys
- [ ] Deploy to Vercel
- [ ] Add environment variables
- [ ] Configure Supabase Auth URLs
- [ ] Test user registration
- [ ] Test ride booking
- [ ] Enable Women-Only Mode

## 🔧 Environment Variables

Required variables for deployment:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

## 🎨 Customization

### Change Theme Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  beige: {
    50: '#fdfcfb',
    // ... customize colors
  }
}
```

### Add University
Update university list in verification page.

### Modify Fare Calculation
Edit fare logic in rides page component.

## 📈 Future Enhancements

- [ ] Real-time ride tracking with WebSockets
- [ ] Push notifications for ride matches
- [ ] Payment gateway integration (Razorpay/Stripe)
- [ ] Google Maps route visualization
- [ ] In-app chat between riders
- [ ] Mobile apps (React Native)
- [ ] Advanced analytics dashboard
- [ ] Multi-language support

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this project for your university!

## 🐛 Bug Reports

Found a bug? Please open an issue with:
- Description of the bug
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)

## 💬 Support

- **Documentation**: Check the docs folder
- **Issues**: Open a GitHub issue
- **Discussions**: Use GitHub Discussions

## 🙏 Acknowledgments

- Built with Next.js and Supabase
- Deployed on Vercel
- Icons by React Icons
- Styled with Tailwind CSS

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**Made with ❤️ for university students seeking safe, affordable rides**

⭐ Star this repo if you find it helpful!
