import React from "react";
import Card from "./Card";
import contact from "../contact";
import Avatar from './Avatar'
function App() {
  return (
    <div className="mainDiv">
      <h1 className="contactHeader">My Contacts</h1>
      <Avatar imgURL="https://as1.ftcdn.net/v2/jpg/01/12/70/16/1000_F_112701616_X71EL4aiwMMv6y8hmjpXcwpKGqDqSm7q.jpg"/>
      <div className="card">
        <Card
          name={contact[0].name}
          imgURL={contact[0].imgURL}
          phone={contact[0].phone}
          email={contact[0].email}
        />
      </div>
      <div className="card">
        <Card
          name={contact[1].name}
          imgURL={contact[1].imgURL}
          phone={contact[1].phone}
          email={contact[1].email}
        />
      </div>
      <div className="card">
        <Card
          name={contact[2].name}
          imgURL={contact[2].imgURL}
          phone={contact[2].phone}
          email={contact[2].email}
        />
      </div>
    </div>
  );
}
export default App;
