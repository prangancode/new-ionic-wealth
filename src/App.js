// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Cart from "./component/Cart/Cart";
// import Checkout from "./component/Checkout/Checkout";
// import Home from "./component/Home/Home";
// import AllProducts from "./component/Product/AllProducts";
// import ProductDetails from "./component/Product/ProductDetails";
// import Login from "./component/User/Login/Login";
// import Profile from "./component/User/Profile/Profile";
// import Registration from "./component/User/Registration/Registration";

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/product-details/:id" component={ProductDetails} />
//         <Route exact path="/products" component={AllProducts} />
//         <Route exact path="/signin" component={Login} />
//         <Route exact path="/registration" component={Registration} />
//         <Route exact path="/profile" component={Profile} />
//         <Route exact path="/cart" component={Cart} />
//         <Route exact path="/checkout" component={Checkout} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MainAdminDashboard from "./Pages/Dashboard/Dashboard/MainAdminDashboard";
import ContentCA from "./Pages/Dashboard/DashboardHome/ContentCA";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/Home/Home";
import LoginForm from "./Pages/Login/LoginForm/LoginForm";
import RegisterForm from "./Pages/Login/RegisterForm/RegisterForm";
import ClientAgreement from "./Pages/Policies/ClientAgreement/ClientAgreement";
import PrivacyPolicy from "./Pages/Policies/PrivacyPolicy/PrivacyPolicy";
import TermsandConditions from "./Pages/Policies/TermsandConditions/TermsandConditions";
import ReviewForm from "./Pages/Review/ReviewForm";
import ServiceDetailsList from "./Pages/ServiceDetailsList/ServiceDetailsList/ServiceDetailsList";
import PreLoader from "./Pages/Shared/PreLoader/PreLoader";
import StartFromTop from "./Pages/Shared/StartFromTop/StartFromTop";
import Testimonial from "./Pages/Testimonial/Testimonial";
import Webviewer from "./Pages/Webviewer/Webviewer";
import MainDashboard from "./Pages/Dashboard/Dashboard/MainDashboard";
import AddDocuments from "./Pages/Dashboard/UploadDocument/AddDocuments";
const LazyContactUs = React.lazy(() => import("./Pages/ContactUs/ContactUs"));
const LazyHome = React.lazy(() => import("./Pages/Home/Home/Home"));

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/allservices" component={ServiceDetailsList} />
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/testimonial" component={Testimonial} />
        <Route exact path="/reviewform" component={ReviewForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/terms-conditions" component={TermsandConditions} />
        {/* <Route exact path="/dashboard" component={Dashboard} /> */}
        {/* <Route exact path="/dashboard" component={MainDashboard} /> */}
        <Route path="/dashboard">
          <MainDashboard />
        </Route>

        {/* <Route exact path="/admindashboard" component={MainAdminDashboard} /> */}
        <Route exact path="/pdf" component={Webviewer} />
      </Switch>
    </Router>
    // <div >
    //   <AuthProvider>
    //     <Router>
    //       <StartFromTop />
    //       <Switch>
    //         <Route exact path="/">
    //           <React.Suspense fallback={<PreLoader />}>
    //             <LazyHome />
    //           </React.Suspense>
    //           {/* <Home /> */}
    //         </Route>
    //         <Route path="/home">
    //           <React.Suspense fallback={<PreLoader />}>
    //             <LazyHome />
    //           </React.Suspense>
    //           {/* <Home /> */}
    //         </Route>

    //         <Route path="/allservices">
    //           <ServiceDetailsList />
    //         </Route>
    //         <Route path="/contactus">
    //           <React.Suspense fallback='Loading..'>
    //             <LazyContactUs />
    //           </React.Suspense>
    //           {/* <ContactUs /> */}
    //         </Route>

    //         <Route path="/testimonial">
    //           <Testimonial />
    //         </Route>
    //         <Route path="/reviewform">
    //           <ReviewForm />
    //         </Route>
    //         <Route path="/login">
    //           <LoginForm />
    //         </Route>
    //         <Route path="/register">
    //           <RegisterForm />
    //         </Route>
    //         <Route path="/privacy-policy">
    //           <PrivacyPolicy />
    //         </Route>
    //         <Route path="/terms-conditions">
    //           <TermsandConditions />
    //         </Route>
    //         <Route path="/dashboard">
    //           <Dashboard />
    //         </Route>
    //         <Route path="/admindashboard">
    //           <MainAdminDashboard />
    //         </Route>
    //         <Route path="/pdf">
    //           <Webviewer />
    //         </Route>
    //       </Switch>
    //     </Router>
    //   </AuthProvider>
    // </div>
  );
}

export default App;
