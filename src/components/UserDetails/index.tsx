import Loading from '../shared/Loading';
import Error from '../shared/Error';
import Avatar from '../shared/Avatar';
import UserField from '../shared/UserField';
import { useUserDetails } from './useUserDetails';

interface UserDetailsProps {
  username: string
}

const UserDetails = ({ username }: UserDetailsProps) => {
  const { userDetails, loading, error } = useUserDetails({ username })

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <article className="p-4">
      {userDetails && (
        <section className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex items-center space-x-4 p-4">
            <Avatar src={userDetails.avatar_url} alt={userDetails.login} />
            <div>
              <h1 className="text-xl font-medium text-black">{userDetails.name}</h1>
              <p className="text-gray-500">@{userDetails.login}</p>
            </div>
          </div>
          <div className="p-4">
            <UserField label='Followers' field={userDetails.followers} defaultValue={0} />
            <UserField label='Following' field={userDetails.following} defaultValue={0} />
            <UserField label='Company' field={userDetails.company} defaultValue='' />
            <UserField label='Email' field={userDetails.email} defaultValue='' />
            <UserField label='blog' field={userDetails.blog} defaultValue='' />
          </div>
        </section>
      )}
    </article>
  );
};

export default UserDetails;
