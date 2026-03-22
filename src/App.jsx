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
  const [resolved, setResoved] = useState(0)
  const [inProgress, setInprogress] = useState(0)

  return (
    <>
      <Navbar></Navbar>

      <Pogress resolved={resolved} inProgress={inProgress} > </Pogress>

      <DataContainer inProgress={inProgress} setInprogress={setInprogress} resolved={resolved} setResoved ={setResoved} clicked={clicked} setClicked={setClicked}  dataPromise={dataPromise}> </DataContainer>
    </>
  )
}

export default App
