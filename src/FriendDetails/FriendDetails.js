import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetails = () => {
  const { friendId } = useParams();
  const [friendINfo, setFriendInfo] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
      .then((res) => res.json())
      .then((friendData) => setFriendInfo(friendData));
  }, [friendId]);
  const { name, email, phone, website } = friendINfo;
  const finfoStyle = {
    textAlign: "justify",
    color: "#d90166",
    fontSize: "35px",
    fontWeight: "bold",
    border: "5px solid pink",
    width: "50%",
    margin: "auto",
  };
  return (
    <div style={finfoStyle}>
      <p> This is friend name: {name} </p>
      <p> This is friend email: {email} </p>
      <p> This is friend phone: {phone} </p>
      <p> This is friend website: {website} </p>
    </div>
  );
};

export default FriendDetails;
