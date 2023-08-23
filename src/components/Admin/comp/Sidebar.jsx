import React from "react";
 
const SideBar = ({ curr, setCurr }) => {
  return (
    <div>
      <h1
        onClick={() => {
          setCurr("user");
        }}
      >
        user
      </h1>
      <h1
        onClick={() => {
          setCurr("transactions");
        }}
      >
        transactions
      </h1>
      <h1
        onClick={() => {
          setCurr("addUsers");
        }}
      >
        add users
      </h1>
    </div>
  );
};
 
export default SideBar;