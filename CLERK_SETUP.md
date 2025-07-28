# Clerk Authentication Setup Guide

## 🚀 Quick Setup Instructions

### 1. Create a Clerk Account
1. Go to [https://clerk.com](https://clerk.com)
2. Sign up for a free account
3. Create a new application

### 2. Get Your Publishable Key
1. In your Clerk dashboard, go to "API Keys"
2. Copy your "Publishable Key"
3. Replace `your_clerk_publishable_key_here` in `.env.local` with your actual key

### 3. Configure Authentication Settings
In your Clerk dashboard:

1. **Sign-in Options**: Go to "User & Authentication" → "Email, Phone, Username"
   - Enable Email addresses
   - Enable Username (optional)
   - Configure social sign-in providers if desired

2. **Paths**: Go to "Paths"
   - Sign-in URL: `/sign-in`
   - Sign-up URL: `/sign-up`
   - User Profile URL: `/profile`
   - After sign-in URL: `/`
   - After sign-up URL: `/`

3. **Appearance**: Go to "Customization" → "Appearance"
   - The app already includes custom styling that matches the design

### 4. Environment Variables
Make sure your `.env.local` file looks like this:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key_here
```

### 5. Test the Authentication
1. Start your development server: `npm run dev`
2. Try signing up with a new account
3. Test signing in and out
4. Check that protected routes require authentication

## 🔐 Features Included

- **Sign Up/Sign In Pages**: Custom styled authentication pages
- **Protected Routes**: Meal Tracker, Meal Planner, Nutrition Info, and Calorie Calculator require authentication
- **User Profile**: Accessible through the user button in the navbar
- **Personalized Experience**: Welcome messages and user-specific data storage
- **Responsive Design**: Works on all screen sizes

## 🎨 Customization

The authentication components are styled to match your app's design system. You can further customize the appearance in the Clerk dashboard or by modifying the CSS classes in `main.css`.

## 📱 Mobile Support

The authentication system is fully responsive and includes mobile-specific navigation handling.

## 🔧 Troubleshooting

1. **"Missing Publishable Key" Error**: Make sure your `.env.local` file has the correct key
2. **Authentication Not Working**: Check that your Clerk app is configured with the correct URLs
3. **Styling Issues**: The custom CSS should automatically apply to Clerk components

## 🚀 Going to Production

When deploying to production:
1. Add your production domain to your Clerk app settings
2. Update environment variables in your hosting platform
3. Test all authentication flows in production

That's it! Your NutriTrack app now has full authentication powered by Clerk! 🎉