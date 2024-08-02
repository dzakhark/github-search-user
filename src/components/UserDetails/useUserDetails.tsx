import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState, AppDispatch } from '../../store';
import { fetchUserDetails } from '../../features/users/userDetailsSlice';

export const useUserDetails = ({ username }: { username: string | undefined }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { userDetails, loading, error } = useSelector((state: RootState) => state.userDetails);

  useEffect(() => {
    if (username) {
      dispatch(fetchUserDetails({ username }));
    }
  }, [username]);

  return { userDetails, loading, error }
}