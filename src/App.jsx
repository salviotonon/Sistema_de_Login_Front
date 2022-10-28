import Home from "./pages/Home"
import Login from "./pages/Login"

import './App.css'
import { StyledContainer } from "./components/Styles"


//loader 

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