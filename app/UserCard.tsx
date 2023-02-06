import { DefaultSession } from 'next-auth';

export function UserCard({ user }: { user: DefaultSession['user'] }) {
  return (
    <div>Logged in as {user?.name}</div>
  )
}