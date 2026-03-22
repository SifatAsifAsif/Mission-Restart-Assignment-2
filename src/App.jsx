import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Pogress from './Components/Progress/Progress'
import DataContainer from './Components/DataContainer/DataContainer'

const fetchData = async () => {
  const res = await fetch("/data.json")
  return res.json()
}

const dataPromise = fetchData()

function App() {

  const [clicked, setClicked] = useState([])
  const [resolved, setResoved] = useState([])


  const inProgressCount = clicked.filter(
    id => !resolved.includes(id)
  ).length;

  return (
    <>
      <Navbar />

      <Pogress
        resolved={resolved.length}
        inProgress={inProgressCount}
      />

      <DataContainer
        resolved={resolved}
        setResoved={setResoved}
        clicked={clicked}
        setClicked={setClicked}
        dataPromise={dataPromise}
      />
    </>
  )
}

export default App