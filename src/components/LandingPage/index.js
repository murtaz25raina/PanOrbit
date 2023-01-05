import React, { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import ScrollabeCard from "../ScrollableCard";
import "./index.css";
import { getUsers } from "../../redux/actions/users";

const LandingPage = () => {
  const dispatch = useDispatch();
  const fetchedUsers = useSelector((state)=>state.users);
  useEffect( () => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div>
      <div className="background-color"></div>
      <div className="landing-page">
        <ScrollabeCard contacts={fetchedUsers} />
      </div>
    </div>
  );
};

export default LandingPage;
