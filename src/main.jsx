import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App'
import './index.css'

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

console.log('Environment check:', {
  hasKey: !!PUBLISHABLE_KEY,
  keyPrefix: PUBLISHABLE_KEY ? PUBLISHABLE_KEY.substring(0, 10) + '...' : 'undefined',
  env: import.meta.env.MODE
})

if (!PUBLISHABLE_KEY) {
  console.error("❌ Missing Clerk Publishable Key!")
  console.error("Available env vars:", Object.keys(import.meta.env))
  throw new Error("Missing VITE_CLERK_PUBLISHABLE_KEY environment variable")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
) 