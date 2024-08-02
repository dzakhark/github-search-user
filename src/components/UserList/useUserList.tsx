import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { RootState, AppDispatch } from '../../store';
import { fetchUsers, resetUsers, incrementPage } from '../../features/users/userListSlice';
import { debounce } from '../../utils/debounce';

export const useUserList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [username, setUsername] = useState(searchParams.get('query') || '');
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error, page, hasMore } = useSelector((state: RootState) => state.userList);

  useEffect(() => {
    console.log('should reset users: ', { username })
    dispatch(resetUsers());
  }, [username]);

  useEffect(() => {
    if (username) {
      dispatch(fetchUsers({ username, page }));
    }
  }, [username, page]);

  const onLoadMore = useCallback(() => {
    dispatch(incrementPage())
  }, [])

  const onChangeUsernameHandler = useCallback((value: string) => {
    setUsername(value);
    setSearchParams({ query: value });
  }, [])

  const debounceHandler = useCallback(debounce(onChangeUsernameHandler, 300), [])

  const onChangeUsername = useCallback((value: string) => {
    debounceHandler(value);
  }, []);

  return { username, users, loading, error, hasMore, onChangeUsername, onLoadMore }
}