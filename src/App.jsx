import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/Header.css";
import "./styles/ProductAdd.css";
import "./styles/Category.css";
import "./styles/product.css";
import "./styles/ProductListing.css";
import "./styles/ProductDetail.css";
import "./styles/ProductReview.css";
import "./styles/Footer.css";
import "./styles/cart.css";
import "./styles/categoryProducts.css"
import "./styles/signIn.css"
import "./styles/Me.css"
import "./styles/Loader.css"
import "./styles/Orders.css"
import ProductReviews from "./pages/ProductReviews";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import Carts from "./pages/carts";
import CetegoryPage from "./pages/Cetegory.page";
import { SignUp, SingIn} from "./commponets";
import Loader1 from "./commponets/loader1";
import { useState } from "react";
import Loader from "./commponets/Loader";
import Orders from "./pages/Orders";



function App() {
  const [loader,setLoader]=useState(false)
  return loader?<Loader/>:(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="productDetial/:id" element={<ProductDetails />} />
          <Route path="productReview/:id" element={<ProductReviews />} />
          <Route path="cart" element={<Carts />} />
          <Route path="category/:name" element={<CetegoryPage/>}/>
          <Route path="signin" element={<SingIn/>}/>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
