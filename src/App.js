import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Button, Form } from "react-bootstrap";
import app from "./firebase.init";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [validated, setValidated] = useState(false);
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleOnBlurEmail = event => {
    setEmail(event.target.value)
  }
  const handleOnBlurPass = event => {
    setPassword(event.target.value)
  }
  const handleFromSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    setValidated(true);
    createUserWithEmailAndPassword(auth,email,password)
    .then(result => {
      const user = result.user;
      console.log(user)
    })
    .catch(error => {
      console.log(error)
    })
    event.preventDefault()
  }

  return (
    <div className='w-25 mx-auto mt-5 shadow p-4 rounded'>
      <Form noValidate validated={validated} onSubmit={handleFromSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control className="shadow-sm"  onBlur={handleOnBlurEmail} type="email" placeholder="Enter email" required/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handleOnBlurPass} type="password" placeholder="Password" required />
          <Form.Control.Feedback type="invalid">
            Please enter a valid password.
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
