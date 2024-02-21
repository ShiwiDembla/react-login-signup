import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
// import './App.css';
// import Nav from './components/Nav';

function App() {
  const BrowserRouter = createBrowserRouter([{
    path:'/',
    element: <Signup ></Signup>
  },
  {
    path:'/login',
    element: <Login></Login>
  },
  {
    path:'/about',
    element: <About></About>
  },
  {
    path:'/contact',
    element: <Contact></Contact>
  },
  {
    path:'/services',
    element: <Services></Services>
  },

]);
  return (
    <div className="App">
      <RouterProvider router={BrowserRouter}>
        </RouterProvider>
    </div>
  );
}

export default App;
