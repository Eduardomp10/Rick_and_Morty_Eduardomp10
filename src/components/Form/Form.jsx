import React from "react";
import style from './Form.module.css'
import { useState } from "react";
import { validateEmail, validatePassword } from './validation'




const Form = ({login, navigateToHome, }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({

  })


const handleChange = (event) => {
  setUserData ({
    ...userData,
    [event.target.name] : event.target.value
  });
}

const handleChangeSubmit = (event) => {
  event.preventDefault()
    const emailError = validateEmail(userData.email)
    const passwordError = validatePassword(userData.password)
  
    setErrors({
      email: emailError,
      password: passwordError
    })

}
const handleSubmit = (event) => {
  event.preventDefault()
  login(userData)
  navigateToHome();
}



    return (
      <form className={style.loginContainer} onSubmit={handleChangeSubmit}>
        <div className={style.loginInputs}>
          <label>Email:</label>
          <input onChange={handleChange}  type="email" name='email'/>
          {errors.email && <span className={style.errorMessage}>{errors.email}</span>}
        </div>
        <div className={style.loginInputs}>
          <label>Password:</label>
          <input onChange={handleChange}  type="password" id="password" />
          {errors.password && <span className={style.errorMessage}>{errors.password}</span>}
        </div >
        <button onClick={handleSubmit} type="submit">Submit</button>
      </form>
    );
  }
export default Form