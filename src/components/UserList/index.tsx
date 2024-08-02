import List from './List';
import SearchField from './SearchField';
import Loading from '../shared/Loading';
import Error from '../shared/Error';
import InfiniteScroll from '../shared/InfiniteScroll';

import { useUserList } from './useUserList';

const UserList = () => {
  const {
    username,
    users,
    loading,
    error,
    hasMore,
    onChangeUsername,
    onLoadMore
  } = useUserList();

  return (
    <section className="p-4">
      <SearchField
        value={username}
        onChangeHandler={onChangeUsername}
      />
      <InfiniteScroll
        loading={loading}
        hasMore={hasMore}
        onLoadMore={onLoadMore}
      >
        <List users={users} />
        {loading && <Loading />}
        {error && <Error error={error} />}
      </InfiniteScroll>

    </section>
  );
};

export default UserList;
