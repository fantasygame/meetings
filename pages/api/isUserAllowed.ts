import { Session } from 'next-auth';

export const ALLOWED_EMAILS = process.env.ALLOWED_EMAILS?.split(';') || []

export default function isUserAllowed(session: Session | null) {
  const email = session?.user?.email
  return email && ALLOWED_EMAILS.includes(email)
}