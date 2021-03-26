import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';

const UserList: React.FC = () => {
  // const {state, setState}  =  useState('')
  const {users} = useTypedSelector(state => state.user );
  console.log(users);
  return (
    <div>
      UserList
    </div>
  )
}

export default UserList
