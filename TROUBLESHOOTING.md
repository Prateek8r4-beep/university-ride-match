# 🔧 Troubleshooting Guide

Common issues and solutions for University Ride Match deployment.

---

## 🚨 Deployment Issues

### ❌ Vercel Build Fails

**Error**: `Module not found: Can't resolve '@supabase/supabase-js'`

**Solution**:
```bash
# Ensure package.json has the dependency
npm install @supabase/supabase-js
git add package.json package-lock.json
git commit -m "Add Supabase dependency"
git push
```

---

**Error**: `Environment variable NEXT_PUBLIC_SUPABASE_URL is not defined`

**Solution**:
1. Go to Vercel project settings
2. Click "Environment Variables"
3. Add all required variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Redeploy

---

**Error**: `Build failed with exit code 1`

**Solution**:
1. Check Vercel build logs for specific error
2. Common fixes:
   - Fix TypeScript errors
   - Update dependencies
   - Check for syntax errors
3. Test locally first: `npm run build`

---

## 🗄️ Database Issues

### ❌ Can't Connect to Supabase

**Error**: `Failed to fetch` or `Network error`

**Solution**:
1. Verify Supabase project is active (not paused)
2. Check Project URL is correct
3. Verify API keys are correct
4. Check Supabase project status page

---

**Error**: `Row Level Security policy violation`

**Solution**:
1. Go to Supabase SQL Editor
2. Run the RLS policies from `supabase/schema.sql`
3. Verify policies are enabled:
```sql
SELECT * FROM pg_policies;
```

---

**Error**: `relation "users" does not exist`

**Solution**:
1. Database schema not created
2. Go to Supabase SQL Editor
3. Copy entire `supabase/schema.sql`
4. Run the SQL
5. Verify tables exist:
```sql
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public';
```

---

## 🔐 Authentication Issues

### ❌ Can't Sign Up

**Error**: `Invalid email` or `Email not allowed`

**Solution**:
1. Check email provider is enabled in Supabase
2. Go to Authentication → Providers
3. Enable "Email" provider
4. Save changes

---

**Error**: `Redirect URL not allowed`

**Solution**:
1. Go to Supabase Authentication → URL Configuration
2. Add your Vercel URL to:
   - Site URL: `https://your-app.vercel.app`
   - Redirect URLs: `https://your-app.vercel.app/**`
3. Save changes

---

**Error**: `Email confirmation not received`

**Solution**:
1. Check spam folder
2. Verify email templates in Supabase
3. For development, disable email confirmation:
   - Go to Authentication → Settings
   - Toggle "Enable email confirmations" OFF (dev only!)

---

## 📁 Storage Issues

### ❌ File Upload Fails

**Error**: `Storage bucket not found`

**Solution**:
1. Go to Supabase Storage
2. Create buckets:
   - `id-proofs` (Private)
   - `driver-licenses` (Private)
3. Verify bucket names match code

---

**Error**: `Permission denied` on upload

**Solution**:
1. Go to Storage → Policies
2. Add policy for each bucket:
```sql
CREATE POLICY "Users can upload own files"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'id-proofs' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);
```

---

**Error**: `File too large`

**Solution**:
1. Check file size limits in Supabase
2. Default limit: 50MB
3. Compress images before upload
4. Or increase limit in Supabase settings

---

## 🎨 UI/Display Issues

### ❌ Styles Not Loading

**Error**: Beige theme not applied

**Solution**:
1. Verify Tailwind is configured
2. Check `tailwind.config.js` exists
3. Ensure `globals.css` imports Tailwind:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
4. Clear browser cache
5. Rebuild: `npm run build`

---

**Error**: Icons not showing

**Solution**:
```bash
npm install react-icons
```

---

### ❌ Women-Only Toggle Not Working

**Error**: Toggle doesn't filter rides

**Solution**:
1. Check state management in rides page
2. Verify filter logic:
```typescript
const filteredRides = allRides.filter((ride) => {
  if (womenOnlyMode && !ride.is_women_only) return false
  return true
})
```
3. Check `is_women_only` field in database

---

## 🔄 Data Issues

### ❌ Rides Not Showing

**Error**: Empty rides list

**Solution**:
1. Check if rides exist in database:
```sql
SELECT * FROM rides WHERE status = 'active';
```
2. Add sample data for testing
3. Verify RLS policies allow reading rides
4. Check console for errors

---

**Error**: Match score always 0

**Solution**:
1. Verify user has class schedule
2. Check match score calculation logic
3. Ensure time formats match
4. Add debug logs to see calculation

---

### ❌ Timetable Not Saving

**Error**: Schedule disappears after refresh

**Solution**:
1. Check if data is being saved to database
2. Verify `class_schedules` table exists
3. Check RLS policies allow insert
4. Look for console errors
5. Verify user is authenticated

---

## 🚀 Performance Issues

### ❌ Slow Page Load

**Solution**:
1. Enable Vercel Analytics to identify bottlenecks
2. Optimize images:
```typescript
import Image from 'next/image'
<Image src="..." width={500} height={300} />
```
3. Add loading states
4. Implement pagination for large lists
5. Use React.memo for expensive components

---

**Error**: Database queries slow

**Solution**:
1. Check if indexes exist:
```sql
SELECT * FROM pg_indexes WHERE tablename = 'rides';
```
2. Add indexes for frequently queried columns
3. Limit query results
4. Use Supabase query builder efficiently

---

## 🔒 Security Issues

### ❌ Service Role Key Exposed

**Solution**:
1. **IMMEDIATELY** regenerate key in Supabase
2. Update Vercel environment variables
3. Never commit keys to Git
4. Check `.gitignore` includes `.env*`
5. Audit code for hardcoded secrets

---

**Error**: Users can see other users' data

**Solution**:
1. Verify RLS policies are enabled
2. Check policy definitions
3. Test with different users
4. Use Supabase policy simulator

---

## 📱 Mobile Issues

### ❌ Layout Broken on Mobile

**Solution**:
1. Test responsive design:
```bash
# Chrome DevTools → Toggle device toolbar
```
2. Use Tailwind responsive classes:
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```
3. Test on real devices
4. Check viewport meta tag in layout

---

**Error**: Touch interactions not working

**Solution**:
1. Use proper touch event handlers
2. Increase button sizes for mobile
3. Add touch feedback
4. Test on actual mobile devices

---

## 🌐 Browser Issues

### ❌ Works in Chrome but not Safari

**Solution**:
1. Check for browser-specific CSS
2. Test with different browsers
3. Use autoprefixer (already included)
4. Check console for Safari-specific errors
5. Avoid Chrome-only APIs

---

## 🔍 Debugging Tips

### Enable Debug Mode

Add to `.env.local`:
```env
NEXT_PUBLIC_DEBUG=true
```

### Check Logs

**Vercel Logs**:
1. Go to Vercel project
2. Click "Deployments"
3. Click on deployment
4. View "Build Logs" and "Function Logs"

**Supabase Logs**:
1. Go to Supabase project
2. Click "Logs"
3. Filter by type (API, Database, Auth)

**Browser Console**:
1. Open DevTools (F12)
2. Check Console tab for errors
3. Check Network tab for failed requests

---

## 🆘 Still Having Issues?

### 1. Check Documentation
- [QUICKSTART.md](QUICKSTART.md)
- [DEPLOYMENT.md](DEPLOYMENT.md)
- [ARCHITECTURE.md](ARCHITECTURE.md)

### 2. Search Existing Issues
- Check GitHub Issues for similar problems
- Search Supabase docs
- Search Vercel docs

### 3. Create New Issue
Include:
- **Description**: What's wrong?
- **Steps to reproduce**: How to trigger the error?
- **Expected behavior**: What should happen?
- **Actual behavior**: What actually happens?
- **Screenshots**: If applicable
- **Environment**: Browser, OS, versions
- **Logs**: Error messages from console/logs

### 4. Community Help
- Supabase Discord
- Vercel Discord
- Next.js GitHub Discussions

---

## 📞 Quick Fixes Checklist

When something breaks, try these first:

- [ ] Clear browser cache
- [ ] Hard refresh (Ctrl+Shift+R)
- [ ] Check environment variables
- [ ] Verify Supabase project is active
- [ ] Check Vercel deployment status
- [ ] Review recent code changes
- [ ] Check console for errors
- [ ] Test in incognito mode
- [ ] Try different browser
- [ ] Restart development server
- [ ] Rebuild project: `npm run build`
- [ ] Check Supabase and Vercel status pages

---

## 🎯 Prevention Tips

1. **Test locally before deploying**
2. **Use version control** (Git)
3. **Keep dependencies updated**
4. **Monitor error logs regularly**
5. **Have staging environment**
6. **Document changes**
7. **Use TypeScript** (catches errors early)
8. **Write tests** (optional but recommended)

---

## 📚 Useful Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

---

**Remember**: Most issues are configuration-related. Double-check your environment variables and database setup! 🔍
