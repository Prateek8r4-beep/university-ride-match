# 🚀 Deployment Guide

Complete guide to deploy University Ride Match app with Supabase + GitHub + Vercel

## 📋 Prerequisites

- GitHub account
- Supabase account (free tier available)
- Vercel account (free tier available)

---

## 1️⃣ Setup Supabase Database

### Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Create a new organization (if needed)
4. Click "New Project"
5. Fill in:
   - **Name**: university-ride-match
   - **Database Password**: (create a strong password - save it!)
   - **Region**: Choose closest to your users
6. Click "Create new project" (takes ~2 minutes)

### Step 2: Run Database Schema

1. In your Supabase project, go to **SQL Editor** (left sidebar)
2. Click "New Query"
3. Copy the entire content from `supabase/schema.sql` in this repo
4. Paste it into the SQL editor
5. Click "Run" (bottom right)
6. You should see "Success. No rows returned"

### Step 3: Get Supabase Credentials

1. Go to **Project Settings** (gear icon, bottom left)
2. Click **API** in the left menu
3. Copy these values (you'll need them for Vercel):
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (under "Project API keys")
   - **service_role** key (click "Reveal" to see it)

### Step 4: Enable Storage (for ID uploads)

1. Go to **Storage** (left sidebar)
2. Click "Create a new bucket"
3. Create two buckets:
   - **Name**: `id-proofs` (Public: No)
   - **Name**: `driver-licenses` (Public: No)
4. For each bucket, go to **Policies** and add:
   - Policy name: "Users can upload own documents"
   - Policy definition: `(bucket_id = 'id-proofs' AND auth.uid() = owner)`

---

## 2️⃣ Deploy to Vercel

### Step 1: Connect GitHub Repository

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository: `Prateek8r4-beep/university-ride-match`
4. Click "Import"

### Step 2: Configure Environment Variables

In the Vercel project setup, add these environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

**Replace with your actual values from Step 1.3!**

### Step 3: Configure Build Settings

Vercel should auto-detect Next.js. Verify these settings:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### Step 4: Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for build to complete
3. You'll get a URL like: `https://university-ride-match.vercel.app`

---

## 3️⃣ Update Supabase Authentication

### Step 1: Configure Auth Settings

1. Go back to your Supabase project
2. Go to **Authentication** → **URL Configuration**
3. Add your Vercel URL to:
   - **Site URL**: `https://your-app.vercel.app`
   - **Redirect URLs**: `https://your-app.vercel.app/**`

### Step 2: Enable Email Auth

1. Go to **Authentication** → **Providers**
2. Enable **Email** provider
3. Configure email templates (optional)

---

## 4️⃣ Install Supabase Package

The app needs the Supabase client library. Update `package.json`:

```json
{
  "dependencies": {
    "@supabase/supabase-js": "^2.38.0",
    // ... other dependencies
  }
}
```

Then commit and push to trigger a new Vercel deployment.

---

## 5️⃣ Test Your Deployment

1. Visit your Vercel URL
2. Try signing up with a university email
3. Upload verification documents
4. Add class schedule
5. Browse rides

---

## 🔧 Troubleshooting

### Build Fails on Vercel

- Check environment variables are set correctly
- Ensure all dependencies are in `package.json`
- Check build logs for specific errors

### Database Connection Issues

- Verify Supabase URL and keys are correct
- Check if Supabase project is active (not paused)
- Ensure RLS policies are set up correctly

### File Upload Issues

- Verify storage buckets are created
- Check storage policies allow uploads
- Ensure file size limits are appropriate

---

## 📊 Monitor Your App

### Vercel Analytics

1. Go to your Vercel project
2. Click "Analytics" tab
3. View traffic, performance, and errors

### Supabase Monitoring

1. Go to Supabase project
2. Click "Database" → "Logs"
3. Monitor queries and performance

---

## 🔐 Security Checklist

- ✅ Environment variables set in Vercel (not in code)
- ✅ Supabase RLS policies enabled
- ✅ Storage buckets are private
- ✅ Service role key kept secret
- ✅ HTTPS enabled (automatic with Vercel)

---

## 🚀 Next Steps

1. **Custom Domain**: Add your own domain in Vercel settings
2. **Email Service**: Configure SendGrid/Mailgun for emails
3. **Payment Gateway**: Integrate Razorpay for fare collection
4. **Google Maps**: Add maps API for route visualization
5. **Push Notifications**: Set up Firebase Cloud Messaging
6. **Analytics**: Add Google Analytics or Mixpanel

---

## 📞 Support

If you encounter issues:

1. Check Vercel deployment logs
2. Check Supabase logs
3. Review this guide again
4. Open an issue on GitHub

---

## 🎉 Congratulations!

Your University Ride Match app is now live! Share the URL with your university community and start matching rides! 🚗✨
