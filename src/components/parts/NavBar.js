import React from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
import { useAuth } from "../../contexts/AuthContext"

const apiList = [
  'films',
  'people',
  'planets',
  'species',
  'starships',
  'vehicles'
]

export default function NavBar() {
  const { currentUser, logout } = useAuth()

  const handleLogout = async(e) => {
    e.preventDefault()
    try {
      await logout()
      history.push("/login")
    } catch {
      console.log("Failed to log out")
    }
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>AIA homework</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer exact to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            {
              apiList.map((item, index) => {
                return (
                  <LinkContainer to={`/${item}`} key={`link-${index}`}>
                    <Nav.Link className="text-capitalize">{item}</Nav.Link>
                  </LinkContainer>
                )
              })
            }
            <NavDropdown title="Account" id="basic-nav-dropdown">
              {!currentUser ? 
                <>
                  <LinkContainer to="/login">
                    <NavDropdown.Item>Login</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/signup">
                    <NavDropdown.Item>Sign up</NavDropdown.Item>
                  </LinkContainer>
                </>
                :
                <LinkContainer to="/update-password">
                  <NavDropdown.Item>Update Password</NavDropdown.Item>
                </LinkContainer>
              }
              {currentUser &&
                <>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={(e) => handleLogout(e)}>logout</NavDropdown.Item>
                </>
              }
            </NavDropdown>
          </Nav>
          {currentUser &&
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Logged in as: { currentUser.email }
              </Navbar.Text>
            </Navbar.Collapse>
          }
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
