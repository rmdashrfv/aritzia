import './App.css';
import { useState, useEffect } from 'react'

function App() {
  // const [stateVariable, functionToUpdateTheVariable] = useState(initialStateValue)
  const [cars, setCars] = useState([])

  useEffect(() => {
    const request = async () => {
      let req = await fetch("https://raw.githubusercontent.com/rmdashrfv/aritzia/main/MOCK_DATA.json")
      let res = await req.json()
      console.log(res)
    }
    request()
  }, [])
   

  return (
    <div>
      <nav id="navbar">
        <div id="notification-bar">
          <p>Free shipping & returns on all orders, all the time. Shop now</p>
        </div>
        <div>
          <div>
            <a href="/">ARITZIA</a>
          </div>
          <div>
            <input type="search" placeholder="Search" />
          </div>
        </div>
      </nav>
      <div>
        <div id="left-panel"></div>
        <div id="right-panel"></div>
      </div>
      <h2>Aritzia Cars</h2>
      {
        cars.map((car) => {
          return(
            <div>{car.model}</div>
          )
        })
      }
    </div>
  );
}

export default App;
