import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribing when component is unmounted
    return () => unsubscribe();
  }, []);
  return (
    <div className="py-10 top-0 left-0 right-0 mx-32 absolute z-30 flex justify-between">
      <div>
        <img
          className=" w-52"
          src={NETFLIX_LOGO}
          alt="logo"
        />
      </div>
      {user && (
        <div className="flex items-center mx-4 ">
          <img
            alt="logo-profile"
            className="w-12 h-12  rounded-lg mr-7"
            src={user?.photoURL}
          />
          <p className=" text-gray-800 text-lg font-bold font-sans">{user.displayName}</p>
          <p
            onClick={handleSignout}
            className=" ml-2 cursor-pointer text-red-700 text-lg font-bold font-sans"
          >
            (Sign out)
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
