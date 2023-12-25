import React, { useEffect } from 'react';
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utlis/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utlis/userSlice';

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Login />
    },
    {
        path:"/browse",
        element:<Browse />
    },
  ]);

  useEffect( () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid : uid, email : email, displayName: displayName}));
      } else {
        dispatch(removeUser);
      }
    });
  },[ ])

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;