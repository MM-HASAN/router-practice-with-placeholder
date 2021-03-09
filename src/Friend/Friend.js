import React from "react";
import { Link, useHistory } from "react-router-dom";

const Friend = (props) => {
  const history = useHistory();
  const friendHandler = (infoId) => {
    history.push(`/friend/${infoId}`);
  };
  const { id, name, email } = props.friend;
  const friendStyle = {
    border: "1px solid red",
    color: "pink",
    padding: "25px",
    margin: "10%",
    textTransform: "uppercase",
  };
  return (
    <div style={friendStyle}>
      <Link to={`/friend/${id}`}> friend id is : {id}</Link>
      <h1> friend name is :{name}</h1>
      <b> friend email is ; {email}</b>

      <button onClick={() => friendHandler(id)}> show friend info </button>
    </div>
  );
};

export default Friend;
