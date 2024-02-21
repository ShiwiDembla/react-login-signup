import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import  {useAuth}  from '../store/auth-store'
import {toast} from 'react-toastify'

export default function Login() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const {saveToken} = useAuth()
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault()
    try{
    const response = await fetch("http://localhost:5000/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const result = await response.json()
    console.log(result)
    setIsLoading(false);
    if(response.ok){
      
        toast.success('Logged in Successfully');
      setData({
        email: '',
        password: ''
      })
      // localStorage.setItem('token', result.token)
      console.log("logged in")
      saveToken(result.token)
      sessionStorage.setItem('user',result.token)
      
      navigate('/home')
    }
    
    else{
      // alert('Invalid Credentials')
      toast.error('Email or Password is incorrect');
    }

  }
    catch(error){
      
      toast.error('Internal Server Error');
      setIsLoading(false);
      console.log(error)
    }
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    // console.log(name, value)
    setData({...data, [name]: value})
  }


  return (
    <>
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img src="/src/assets/registration.svg" alt="registration" 
              height="500" width="500"/>
            </div>

            <div className="registration-form">
              <h1 className="main-heading mb-3">Login Form</h1>
              <br/>
              <form onSubmit={handleSubmit}>
             
                  <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email"
                  onChange={handleInput}
                  value={data.email}
                   required/>
                  </div>
            
                  <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" 
                  onChange={handleInput}
                  value={data.password}
                  required/>
                  </div>
                  <br/>
                  <button type="submit" className="btn btn-submit" onClick={handleSubmit}
                  disabled={isLoading}
                  >Login</button>
              
              </form>

              </div>

          </div>
        </div>
      </main>
    </section>
    </>
  )
}
