import { AuthContext , useAuth} from '../store/auth-store';
import './Home.css';
import { useContext, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

export default function Home() {
    // const user = useContext(AuthContext);
    const navigate = useNavigate();
    const { getToken } = useAuth(); // Use useAuth hook to access authentication context

    const token = getToken(); // Get token value using getToken function
    // const token = localStorage.getItem('token');
   
  return (
    <main>
        <section className="section-hero">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                   <p> token hsdhjsd {token} </p>
                        <h1>
                        A Full-Srvice Creative Agency  
                        </h1>
                        <p>
                            jfsdjfajkhdfdksfkjdf
                        </p>
              <div className="btn btn-group">
                    <a href="/about">
                        <button className="btn">Learn More </button>
                        </a>
                    <a href="/contact" >
                        <button className="btn ">Connect now
                        </button></a>
                        
              </div>
                </div>
               

                {/* image section */}
                <div className="hero-img">
                    <img src="https://images.pexels.com/photos/3184323/pexels-photo-3184323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="hero" 
                    height="500"
                    width="500"
                    />
                    </div>
            </div>
        </section>
    </main>
  )
}
