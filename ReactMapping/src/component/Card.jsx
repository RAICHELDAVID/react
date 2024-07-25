function Card(props) {
  
    return (
      <div className="values">
        
        <dl className="dictionary">
          <div className="term">
            <dt>
              <span>{props.emoji}</span>
              <span>{props.name}</span>
            </dt>
            <dd>{props.meaning}</dd>
          </div>
        </dl>
      </div>
    );
}
export default Card;
