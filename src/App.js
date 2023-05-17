
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './components/MainPage';
import ViewAddedProducts from './components/ViewAddedProducts';
import AddProduct from './components/AddProduct';
import ViewProductsById from './components/ViewProductsById';
import EditProductPage from './components/EditProductPage';
import EditImage from './components/EditImageUrl';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: [ <MainPage/>,<ViewAddedProducts/>],
    },
    {
      path: "/addProduct",
      element: <AddProduct/>
    },
    {
      path: "/viewproduct/:id",
      element: <ViewProductsById/>
    },
    {
      path: "/editproduct/:id",
      element: <EditProductPage/>
    },
    {
      path: "/editImage",
      element: <EditImage/>
    },
  ]);
  return (
    <div className="App p-2 m-2">
   <RouterProvider router={router} />
    </div>
  );
}

export default App;
