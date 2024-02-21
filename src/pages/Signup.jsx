import { useState } from "react"
import {useNavigate} from 'react-router-dom'

export default function Signup() {

  const navigate = useNavigate()
  const [data, setData] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  })

  const handleSubmit = async(e) =>  {
    e.preventDefault()
    try{

    const response = await fetch('http://localhost:5000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const result = await response.json()
    console.log(result)
    if(response.ok){
      alert('User Registered Successfully')
      setData ({
        username: '',
        email: '',
        phone: '',
        password: ''
      })
      navigate('/login')


    }
  }
    catch(error){
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
              <h1 className="main-heading mb-3">Registration Form</h1>
              <br/>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" name="username"
                  onChange={handleInput}
                  value={data.username}
                  required/>
                  </div>
                  <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email"
                  onChange={handleInput}
                  value={data.email}
                   required/>
                  </div>
                  <div>
                  <label htmlFor="phone">Phone</label>
                  <input type="text" id="phone" name="phone"
                  onChange={handleInput}
                  value={data.phone}
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
                  <button type="submit" className="btn btn-submit" onClick={handleSubmit}>Signup</button>
              
              </form>

              </div>

          </div>
        </div>
      </main>
    </section>
    </>
  )
}
