import { Session } from 'next-auth';

export const ALLOWED_EMAILS = ['kubacki.jk@gmail.com']

export default function isUserAllowed(session: Session | null) {
  const email = session?.user?.email
  return email && ALLOWED_EMAILS.includes(email)
}