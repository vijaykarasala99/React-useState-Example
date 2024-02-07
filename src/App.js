import { Navbar, Cards } from "./navbar";
import{BrowserRouter,Routes,Route,Link} from "react-router-dom";
import { useState } from "react";
function App() {
  const[state,setState]=useState("HARSHA");
  const [count, setCount] = useState(0);

  function handleData() {
    setState("VIJAY"); 
  }
  return (
    <div className="App" style={{fontFamily:"cursive"}}>
     <h1 className="text-center">Vijay Karasala</h1>
     
     <h2>{state}</h2>
     <button onClick={handleData}> UPDATE </button>
     <button onClick={() => setState("HARSHA")}>UNDO</button>

     <br></br>
     <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

     <br></br>
     <BrowserRouter>
     <Routes>
      <Route path="/nav" element={<Navbar/>}/>
      <Route path="/card" element={<Cards/>}/>
     </Routes>
     <Link to='/nav'> Go To Nav </Link><br></br>
     <Link to='/card'>Go To Card </Link>
     </BrowserRouter>
     </div>


  );
}
export default App;
