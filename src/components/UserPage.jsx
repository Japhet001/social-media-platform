import React, { useContext, useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Context } from "../context/userContext";
import { domain } from "../utils/Utils";
import axios from "axios";
import {
  FaArrowAltCircleLeft,
  FaCommentMedical,
  FaLongArrowAltLeft,
} from "react-icons/fa";
import "./send.css";
import Message from "./Message";

const UserPage = () => {
  const { user, ideas } = useContext(Context);
  const { state } = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [showMsg, setShowMsg] = useState(false);
  const [userPageDetials, setUserPageDetials] = useState({});
  const userideas = ideas.filter((data) => data?.username === state?.username);

  const fetchUserData = async () => {
    try {
      // Fetch user data logic
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchUserData();
    setUserData(userideas);
  }, []);

  return (
    <>
      <div className="user__page">
        {/* User page content */}
        <message/>
      </div>
    </>
  );
};

const SendMessages = ({ userPageDetials, userData }) => {
  const { user } = useContext(Context);

  const validateFile = (file) => {
    // File validation logic
  };

  const fetchMessages = async () => {
    try {
      // Fetch messages logic
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const [file, setFile] = useState(null);
  const [msg_content, setMsgContent] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select an image");
    } else {
      validateFile(file);
      // Send message logic
    }
    await fetchMessages();
  };

  return (
    <div className="m">
      {/* Send messages component */}
    </div>
  );
};

export default UserPage;
