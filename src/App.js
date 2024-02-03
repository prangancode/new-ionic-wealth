import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./component/Cart/Cart";
import Checkout from "./component/Checkout/Checkout";
import Home from "./component/Home/Home";
import AllProducts from "./component/Product/AllProducts";
import ProductDetails from "./component/Product/ProductDetails";
import Login from "./component/User/Login/Login";
import Profile from "./component/User/Profile/Profile";
import Registration from "./component/User/Registration/Registration";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product-details/:id" component={ProductDetails} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
}

export default App;
