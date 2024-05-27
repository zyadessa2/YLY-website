import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Layout from './components/Layout';
import Login from './pages/Login/Login';
import Siginin from './pages/Signin/Siginin';
import About from './components/about/About';
import OurGoals from './components/ourGoals/OurGoals';
import News from './components/News/News';
import Board from './components/Board/Board';
import Governments from './components/Governments/Governments';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Users from './components/users/Users';


let routers = createBrowserRouter([
  {path:'',element:<Layout/>,children:[ 
    {index:true,element:<Home/>}, 
    {path:'about',element:<About/>}, 
    {path:'ourGoals',element:<OurGoals/>}, 
    {path:'news',element:<News/>}, 
    {path:'board',element:<Board/>}, 
    {path:'governments',element:<Governments/>}, 
    {path:'users',element:<Users/>}, 
    {path:'login',element:<Login/>}, 
    {path:'signup',element:<Siginin/>}, 
    // {path:'*',element:<Notfound/>},
  ]}
])

function App() {
  const {currentUser} = useContext(AuthContext)
  return <RouterProvider router={routers}></RouterProvider>
}

export default App;
