import * as Arithametic from "./Arithametic"
import './App.css'
function App(){
  return(
    <div>
      <ul>
        <li>{Arithametic.Add(3,4)}</li>
        <li>{Arithametic.Sub(10,5)}</li>
        <li>{Arithametic.Mul(4,8)}</li>
        <li>{Arithametic.Div(7,9)}</li>
      </ul>
    </div>
  );
}


export default App
