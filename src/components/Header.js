import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utlis/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector(store => store.user)
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
    
  }
  return (
    <div className='absolute my-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
      <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt="logo" className='w-44'/>
      { user &&
        <div className='flex p-2'>
        <img src="https://occ-0-5261-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABWHwk9T_pV0xwh3qNnsqDHzMMwdoVXMlbNmSTmbon3-Pf3JVUOAWzIbk8EpYNsSkZ7kFHSZRw-0WLJAPcrvWDUiIIivqBtE.png?r=ab6"
        alt="userImage"
        className='w-12 h-12'/>
        <button onClick={handleSignOut} className='font-bold text-red-600'>Sign Out</button>
      </div>
}
    </div>
  )
}

export default Header;