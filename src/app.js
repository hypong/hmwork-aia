import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import styles from './app.styl'
import CSSModules from 'react-css-modules'
import Films from './components/pages/Films'
import People from './components/pages/People'
import Planets from './components/pages/Planets'
import Species from './components/pages/Species'
import Starships from './components/pages/Starships'
import Vehicles from './components/pages/Vehicles'
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'
import NavBar from './components/parts/NavBar'
import UpdatePassword from './components/pages/UpdatePassword'
import { Container } from "react-bootstrap"
import PrivateRoute from "./utils/PrivateRoute"

const App = () => {
  
  return (
    <Router>
      <NavBar/>
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <div className="w-100">
          <Switch>
            <PrivateRoute path="/update-password" component={UpdatePassword} />
            <Route path="/films" component={Films} />
            <Route path="/people" component={People} />
            <Route path="/planets" component={Planets} />
            <Route path="/species" component={Species} />
            <Route path="/starships" component={Starships} />
            <Route path="/vehicles" component={Vehicles} />

            <Route path="/signup" component={Signup} />
            <Route path="/Login" component={Login} />
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </div>
      </Container>
    </Router>
  )
}

function Home() {
  return (
    <>
      <h2>Home Page</h2>
    </>
  )
}

export default CSSModules(App, styles)