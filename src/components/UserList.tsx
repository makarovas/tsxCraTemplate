import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const UserList: React.FC = () => {
  const {users, error, loading} = useTypedSelector(state => state.user );
  const {fetchUsers} = useActions()

  useEffect(()=> {
    fetchUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      {loading && <div>loading</div>}
      {error && !users && <div>{error}</div>}
      {users && users.map((user,i) => <div key={`${i}-${user.id}-${user.name}`}>{user.name}</div>)}
    </div>
  )
}

export default UserList
