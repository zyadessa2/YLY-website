import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Layout from './components/Layout';
import Login from './pages/Login/Login';
import Siginin from './pages/Signin/Siginin';
import About from './components/about/About';


let routers = createBrowserRouter([
  {path:'',element:<Layout/>,children:[ 
    {index:true,element:<Home/>}, 
    {path:'login',element:<Login/>}, 
    {path:'about',element:<About/>}, 
    {path:'signup',element:<Siginin/>}, 
    // {path:'*',element:<Notfound/>},
  ]}
])

function App() {
  return <RouterProvider router={routers}></RouterProvider>
}

export default App;
