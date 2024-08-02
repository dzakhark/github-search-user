import { memo } from 'react'
import UserCard from '../UserCard'
import { User } from '../../features/users/userListSlice'

interface ListProps {
  users: User[]
}

const List = ({ users }: ListProps) => {
  return (
    <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id}>
            <UserCard
              login={user.login}
              avatarUrl={user.avatar_url}
            />
          </li>
        ))}
      </ul>
  )
}

export default memo(List);