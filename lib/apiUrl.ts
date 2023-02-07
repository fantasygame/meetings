export default function apiUrl() {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL
  } else {
    return `https://${process.env.VERCEL_URL}`
  }
}