import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utlis/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utlis/userSlice';
import { LOGO, SupportedLanguages } from '../utlis/constants';
import { toggleGptSearchView } from '../utlis/GptSearchSlice';
import { changeLanguage } from '../utlis/configSlice';

const Header = () => {
  const user = useSelector(store => store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
    }); 
  }

  const toggleGPTSearch = () => {
    dispatch(toggleGptSearchView());
  }

  useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid : uid, email : email, displayName: displayName}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/")
      }

      return ( ) => unsubscribe();
    });
  },[ ])
  
  const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='absolute bg-gradient-to-b from-black z-10 w-full flex justify-between'>
      <img src={LOGO}
      alt="logo" className='w-44'/>
      { user &&
        <div className='flex px-2 m-2'>
        <select className='bg-black text-slate-400 p-2 m-2' onChange={handleLanguageChange}>
          {SupportedLanguages.map((lang) => (<option key={lang.identifier} value={lang.identifier}> {lang.name} </option>))}
        </select>
        <button onClick={toggleGPTSearch} className='m-2 py-2 px-3 bg-blue-500 text-white rounded-md'>GPT Search</button>

        <img src="https://occ-0-5261-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABWHwk9T_pV0xwh3qNnsqDHzMMwdoVXMlbNmSTmbon3-Pf3JVUOAWzIbk8EpYNsSkZ7kFHSZRw-0WLJAPcrvWDUiIIivqBtE.png?r=ab6"
        alt="userImage"
        className='w-12 h-12'/>

        <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
      </div>
      }
    </div>
  )
}

export default Header;