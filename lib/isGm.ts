import { Session } from 'next-auth';

export default function isGm(session: Session | null) {
  return session?.user?.name === process.env.NEXT_PUBLIC_GM_NAME
}