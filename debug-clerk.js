// Debug script to check Clerk configuration
// Run with: node debug-clerk.js

console.log('🔍 Clerk Configuration Debug\n');

// Check if we're in Node.js environment
if (typeof process !== 'undefined') {
  console.log('📦 Environment Variables:');
  const envVars = Object.keys(process.env).filter(key => 
    key.includes('CLERK') || key.includes('VITE')
  );
  
  if (envVars.length === 0) {
    console.log('❌ No Clerk or Vite environment variables found');
  } else {
    envVars.forEach(key => {
      const value = process.env[key];
      console.log(`  ${key}: ${value ? value.substring(0, 10) + '...' : 'undefined'}`);
    });
  }
  
  console.log('\n📋 Checklist for Vercel Deployment:');
  console.log('□ VITE_CLERK_PUBLISHABLE_KEY set in Vercel environment variables');
  console.log('□ Domain added to Clerk dashboard');
  console.log('□ Paths configured in Clerk dashboard');
  console.log('□ App redeployed after setting environment variables');
  
  console.log('\n🔧 Quick fixes:');
  console.log('1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables');
  console.log('2. Add VITE_CLERK_PUBLISHABLE_KEY with your Clerk key');
  console.log('3. Set for Production, Preview, and Development');
  console.log('4. Redeploy your application');
  
} else {
  console.log('❌ This script should be run with Node.js');
}