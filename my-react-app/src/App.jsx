import Header from './components/Header'
import ResContainer from './components/ResContainer';
import About from './components/About';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Contact from './components/Contact';
import {Outlet} from 'react-router-dom'
import ResDetails from './components/ResDetails';

const Home = () => {
  const name = 'Tomy'
  const a = 20
  return (<>
    <Header />
    <Outlet/>
  </>)
}
const router=createBrowserRouter([{
  path:'/',
  element:<Home/>
,children:[{
  path:'/',
  element: <ResContainer />
},{
  path:'/about',
  element:<About/>
},{
  path:'/contact',
  element:<Contact/>
},{
  path:'/restaurant/:id',
  element:<ResDetails/>
}]}])
const App=()=>{
  return(
    <RouterProvider router={router}/>
  )
}
export default App
