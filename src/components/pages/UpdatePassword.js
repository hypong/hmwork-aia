import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Input from "../button/Input"

export default function UpdateProfile() {
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    } else if (passwordRef.current.value.length < 6) {
      return setError("The password must be 6 characters long or more.")
    }

    setLoading(true)
    setError("")
    
    try {
      await updatePassword(passwordRef.current.value)
      setLoading(false)
      history.push("/")
    } catch (err){
      setLoading(false)
      setError(err.message)
    }
  }


  return (
    <>
      <Card className="mt-4">
        <Card.Body>
          <h2 className="text-center mb-4">Update Password</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Input id="email" label="Email" type="email" disabled={true} defaultValue={currentUser.email}/>
            <Input forwardedRef={passwordRef} id="password" label="Password" type="password" placeholder="Leave blank to keep the same"/>
            <Input forwardedRef={passwordConfirmRef} id="password-confirm" label="Password Confirmation" type="password" placeholder="Leave blank to keep the same"/>
            <Button disabled={loading} className="w-100" type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/">Cancel</Link>
      </div>
    </>
  )
}