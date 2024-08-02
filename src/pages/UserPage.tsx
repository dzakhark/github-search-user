import { useParams } from 'react-router-dom';

import UserDetails from '../components/UserDetails'

const UserPage = () => {
  const { login } = useParams<{ login: string }>();

  return (
    <div className="container mx-auto p-4">
      <UserDetails username={login || ''} />
    </div>
  )
}

export default UserPage