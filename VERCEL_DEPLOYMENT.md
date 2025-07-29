# Vercel Deployment Guide for NutriTrack with Clerk

## 🚀 Step-by-Step Deployment

### 1. Prepare Your Clerk App for Production

1. **Go to your Clerk Dashboard** (https://dashboard.clerk.com)
2. **Select your application**
3. **Go to "Domains"** in the sidebar
4. **Add your Vercel domain**:
   - Add your Vercel preview domain: `your-app-name.vercel.app`
   - If you have a custom domain, add that too

### 2. Configure Environment Variables in Vercel

1. **Go to your Vercel Dashboard** (https://vercel.com/dashboard)
2. **Select your project**
3. **Go to Settings → Environment Variables**
4. **Add the following variable**:
   - **Name**: `VITE_CLERK_PUBLISHABLE_KEY`
   - **Value**: Your Clerk publishable key (starts with `pk_test_` or `pk_live_`)
   - **Environment**: Production, Preview, and Development

### 3. Update Clerk Settings

In your Clerk Dashboard:

1. **Go to "Paths"**:
   - Sign-in URL: `/sign-in`
   - Sign-up URL: `/sign-up`
   - User Profile URL: `/profile`
   - After sign-in URL: `/`
   - After sign-up URL: `/`

2. **Go to "Sessions"**:
   - Make sure "Multi-session handling" is configured as needed

### 4. Deploy to Vercel

#### Option A: Deploy from GitHub
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy when you push to main branch

#### Option B: Deploy using Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

### 5. Test Your Deployment

1. **Visit your deployed app**
2. **Test authentication flows**:
   - Sign up with a new account
   - Sign in with existing account
   - Access protected routes
   - Test sign out functionality

### 6. Common Issues and Solutions

#### Issue: "Missing Publishable Key" Error
**Solution**: 
- Check that `VITE_CLERK_PUBLISHABLE_KEY` is set in Vercel environment variables
- Redeploy after adding environment variables

#### Issue: Authentication redirects not working
**Solution**:
- Verify your domain is added in Clerk Dashboard → Domains
- Check that paths are correctly configured in Clerk Dashboard → Paths

#### Issue: App loads but authentication doesn't work
**Solution**:
- Make sure you're using the correct publishable key for your environment
- Check browser console for any Clerk-related errors

### 7. Production Checklist

- [ ] Clerk publishable key added to Vercel environment variables
- [ ] Production domain added to Clerk app settings
- [ ] All authentication flows tested in production
- [ ] Error handling working correctly
- [ ] Protected routes functioning properly

## 🔧 Quick Fix Commands

If you need to redeploy quickly:

```bash
# Trigger a new deployment
vercel --prod

# Or if using GitHub integration, push to main:
git add .
git commit -m "Fix Clerk configuration"
git push origin main
```

## 📞 Support

If you're still having issues:
1. Check Vercel deployment logs
2. Check browser console for errors
3. Verify Clerk dashboard configuration
4. Test with a fresh incognito browser session

Your NutriTrack app should now work perfectly on Vercel! 🎉