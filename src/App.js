import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Layout from './components/Layout';


let routers = createBrowserRouter([
  {path:'',element:<Layout/>,children:[ 
    {index:true,element:<Home/>}, 
    // {path:'*',element:<Notfound/>},
  ]}
])

function App() {
  return <RouterProvider router={routers}></RouterProvider>
}

export default App;
