import { memo } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../shared/Avatar';

interface UserCardProps {
  login: string;
  avatarUrl: string;
}

const UserCard = ({ login, avatarUrl }: UserCardProps) => {
  return (
    <article className="block max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:bg-gray-100 transition duration-300">
      <Link to={`/user/${login}`} className="flex items-center space-x-4 p-4">
        <Avatar src={avatarUrl} alt={login} />
        <div>
          <h2 className="text-xl font-medium text-black">{login}</h2>
        </div>
      </Link>
    </article>
  );
};

export default memo(UserCard);
