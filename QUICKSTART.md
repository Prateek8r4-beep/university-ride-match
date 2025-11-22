# 🎯 Quick Start Guide

Follow these steps to deploy your University Ride Match app in 15 minutes!

---

## ✅ Step 1: Setup Supabase (5 minutes)

### 1.1 Create Project
1. Visit [supabase.com](https://supabase.com) and sign up/login
2. Click **"New Project"**
3. Fill in:
   - **Name**: `university-ride-match`
   - **Database Password**: Create strong password (SAVE THIS!)
   - **Region**: Choose closest to you
4. Click **"Create new project"** (wait 2 minutes)

### 1.2 Setup Database
1. Click **"SQL Editor"** in left sidebar
2. Click **"New Query"**
3. Open `supabase/schema.sql` from this repo
4. Copy ALL content and paste into SQL editor
5. Click **"Run"** button
6. ✅ Success! Database tables created

### 1.3 Get API Keys
1. Click **"Project Settings"** (gear icon, bottom left)
2. Click **"API"** in left menu
3. **COPY THESE** (you'll need them):
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: (long string under "Project API keys")
   - **service_role key**: Click "Reveal" to see it

### 1.4 Setup Storage
1. Click **"Storage"** in left sidebar
2. Click **"Create a new bucket"**
3. Create bucket:
   - **Name**: `id-proofs`
   - **Public**: OFF (keep private)
4. Repeat for second bucket:
   - **Name**: `driver-licenses`
   - **Public**: OFF

---

## 🚀 Step 2: Deploy to Vercel (5 minutes)

### 2.1 Import Repository
1. Visit [vercel.com](https://vercel.com) and sign up/login
2. Click **"Add New"** → **"Project"**
3. Click **"Import Git Repository"**
4. Find `Prateek8r4-beep/university-ride-match`
5. Click **"Import"**

### 2.2 Add Environment Variables
In the **"Configure Project"** screen, add these:

Click **"Environment Variables"** and add:

**Variable 1:**
- **Name**: `NEXT_PUBLIC_SUPABASE_URL`
- **Value**: Your Supabase Project URL (from Step 1.3)

**Variable 2:**
- **Name**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value**: Your Supabase anon key (from Step 1.3)

**Variable 3:**
- **Name**: `SUPABASE_SERVICE_ROLE_KEY`
- **Value**: Your Supabase service_role key (from Step 1.3)

### 2.3 Deploy!
1. Click **"Deploy"**
2. Wait 2-3 minutes ☕
3. 🎉 You'll get a URL like: `https://university-ride-match.vercel.app`

---

## 🔗 Step 3: Connect Everything (2 minutes)

### 3.1 Update Supabase Auth
1. Go back to Supabase project
2. Click **"Authentication"** → **"URL Configuration"**
3. Add your Vercel URL:
   - **Site URL**: `https://your-app.vercel.app` (your actual URL)
   - **Redirect URLs**: `https://your-app.vercel.app/**`
4. Click **"Save"**

### 3.2 Enable Email Auth
1. Still in **"Authentication"**
2. Click **"Providers"**
3. Toggle **"Email"** to ON
4. Click **"Save"**

---

## ✨ Step 4: Test Your App (3 minutes)

1. Visit your Vercel URL
2. Click **"Sign Up"**
3. Fill in verification form
4. Upload sample ID (any image for testing)
5. Add a class schedule
6. Browse rides page
7. Toggle **Women-Only Mode** (top-right)

---

## 🎊 You're Done!

Your app is now LIVE! Share the URL with your university community!

**Your Live App**: `https://your-app.vercel.app`

---

## 📱 What's Working:

✅ User registration & verification
✅ Timetable management
✅ Ride browsing with fare & time
✅ Women-Only Mode toggle
✅ Rating system
✅ Rewards tracking
✅ Profile management
✅ Database storage
✅ Secure authentication

---

## 🔧 Troubleshooting

**Build Failed?**
- Check environment variables are correct
- Ensure no typos in Supabase keys

**Can't Login?**
- Verify Supabase Auth is enabled
- Check redirect URLs are set

**Database Errors?**
- Ensure schema.sql ran successfully
- Check Supabase project is active

---

## 🚀 Next Steps

1. **Custom Domain**: Add in Vercel settings
2. **Email Templates**: Customize in Supabase Auth
3. **Google Maps**: Add API key for routes
4. **Payment**: Integrate Razorpay
5. **Analytics**: Add Google Analytics

---

## 📞 Need Help?

- Check `DEPLOYMENT.md` for detailed guide
- Review Vercel deployment logs
- Check Supabase logs
- Open GitHub issue

---

**Congratulations! 🎉 Your ride-matching app is live!**
