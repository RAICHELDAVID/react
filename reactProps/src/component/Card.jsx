import Avatar from "./Avatar";
import Details from "./Details";
function Card(props) {
  return (
    <div>
      <div className="top">
        <h1 className="contactName">{props.name}</h1>
        <Avatar imgURL={props.imgURL}/>
      </div>
      <div className="bottom">
        <Details phone={props.phone} email={props.email}/>
      </div>
    </div>
  );
}
export default Card;
