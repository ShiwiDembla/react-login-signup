
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
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
  }
]);
  return (
    <div className="App">
      <RouterProvider router={BrowserRouter}>
        </RouterProvider>
    </div>
  );
}

export default App;
