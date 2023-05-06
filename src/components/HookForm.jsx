import { useState } from "react";
import axios from "axios";

const HookForm = () => {
  const [inputs, setInputs] = useState({})
  const [disable, setDisable] = useState(false)
  const[message, setMessage] = useState({})

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault()
      setDisable(true)
      setInputs({})

      axios({
        method: "POST",
        url: "https://getform.io/f/e390532c-f2b0-4dec-955f-c54ad80f2086",
        data: inputs,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })

      .then(response => {
        setMessage({
          success: true,
          text: "Message sent successfully",
        })
        setDisable(true)
      })

      .catch(err => {
        setMessage({
          success: false,
          text: "An error occurred. Please try again later.",
          error: err,
        })

        setDisable(false)
      })
    }
  }
  const handleInputChange = (e) => {
    e.persist()
    setInputs(inputs => ({
      ...inputs, 
      [e.target.name]: e.target.value,
    }))
  }
  return {
    handleSubmit, 
    handleInputChange,
    inputs,
    disable,
    message,
  }
}

export default HookForm