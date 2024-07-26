var numbers = [3, 56, 2, 48, 5];
//map() function

function MapFunction() {
  const newArray = numbers.map((x) => x * x).join(", ");
  return (
    <div>
      <p>Square values of array element</p>
      <p>{newArray}</p>
    </div>
  );
}

//filter() function
function FilterFunction() {
  const newArray = numbers.filter((x) => x > 10).join(", ");
  return (
    <div>
      <p>Array elements greater than 10</p>
      <p>{newArray}</p>
    </div>
  );
}

//reduce() function
function ReduceFunction() {
  const value = numbers.reduce((x, y) => x + y);
  return (
    <div>
      <p>Sum of array elements</p>
      <p>{value}</p>
    </div>
  );
}

//find() function
function FindFunction(){
    const value=numbers.find((x)=>x>20);
    return(
        <div>
            <p>First number in the array greater than 20</p>
            <p>{value}</p>
        </div>
    )
}

//findIndex() function
function FindIndexOfFunction(){
    const value=numbers.findIndex((x)=>x>20);
    return(
        <div>
            <p>First number in the array greater than 20</p>
            <p>{value}</p>
        </div>
    )
}
function JSFunctions() {
  return (
    <div>
      <MapFunction />
      <FilterFunction />
      <ReduceFunction />
      <FindFunction />
      <FindIndexOfFunction />
    </div>
  );
}
export default JSFunctions;
