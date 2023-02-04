import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Message from "./components/Message";

function App() {

  return (
    <div className="App">
      <h1>Refresh to see a new greeting</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Message />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
