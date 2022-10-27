import Home from "./pages/Home"
import Login from "./pages/Login"

import './App.css'
import Form from "./components/Form"
import { StyledContainer } from "./components/Styles"

import { BrowserRouter as Router,  Route } from "react-router-dom"

function App() {
    return (
      <Router>
        <StyledContainer>
          <Login />
        </StyledContainer>
      </Router>
    );
  }

export default App;