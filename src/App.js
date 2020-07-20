import React, { Component } from 'react'
import NavBar from './components/NavBar'
import PlantContainer from './components/PlantContainer'
import Spreadsheet from './components/Spreadsheet'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <PlantContainer />
        <Spreadsheet />
      </div>
    )
  }
}
export default App