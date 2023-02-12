import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Author from "./pages/Author";
import Blog from "./pages/Blog";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Forgot from "./pages/Forgot";
import HowItwork from "./pages/HowItwork";
import Login from "./pages/Login";
import PlaceYourOrder from "./pages/PlaceYourOrder";
import Prices from "./pages/Prices";
import Privacy from "./pages/Privacy";
import Register from "./pages/Register";
import Review from "./pages/Review";
import Sample from "./pages/Sample";
import Services from "./pages/Services";
import Terms from "./pages/Terms";
import ViewCart from "./pages/ViewCart";
import ViewDetails from "./pages/ViewDetails";
import Success from "./pages/Success";
import Failed from "./pages/Failed";
import PurchaseSuccess from "./pages/PurchaseSuccess";
import OnlineManagement from "./pages/OnlineManagement";
import Ordersuccess from "./pages/Ordersuccess";
import Payplesuccess from "./pages/Payplesuccess";
// import WorkSampleroute from "./pages/routes/WorkSampleroute";
// import BlogRoute from "./pages/routes/BlogRoute";
import StripeSubscription from "./pages/StripeSubscription";
// import AuthorRoute from "./pages/routes/AuthorRoute";
import StripeGuestPaymentSuccess from "./pages/StripeGuestPaymentSuccess";
import GuestPayment from "./pages/GuestPayment";
import PendingPaymentStripeSuccess from "./pages/PendingPaymentStripeSuccess";
// import Join from "./pages/Join";
import TransactionHistory from "./pages/TransactionHistory";
import Dashboard from "./pages/Dashboard";
import ViewProfile from "./pages/ViewProfile";
import AccountSettingServices from "./pages/AccountSettingServices";
import AccountSettingSubscriptions from "./pages/AccountSettingSubscriptions";
import AccountSettingPaymentMethod from "./pages/AccountSettingPaymentMethod";
import AccountSettingBillingInfo from "./pages/AccountSettingBillingInfo";
import OrderPaypalSuccess from "./pages/OrderPaypalSuccess";
import PendingPaymentPaypalSuccess from "./pages/PendingPaymentPaypalSuccess";
import PaypalGuestPaymentSuccess from "./pages/PaypalGuestPaymentSuccess";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/author" element={<Author />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/howitwork" element={<HowItwork />} />
        <Route path="/login" element={<Login />} />
        <Route path="/placeyourorder" element={<PlaceYourOrder />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/review" element={<Review />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/services" element={<Services />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/viewCart" element={<ViewCart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/viewdetails/:id" element={<ViewDetails />} />
        <Route path="/failed" element={<Failed />} />
        <Route path="/purchasesuccess" element={<PurchaseSuccess />} />
        <Route path="/onlinemanagement/:id" element={<OnlineManagement />} />
        <Route path="/ordersuccess" element={<Ordersuccess />} />
        <Route path="/payplesuccess" element={<Payplesuccess />} />

        <Route path="/StripeSubscription" element={<StripeSubscription />} />

        {/* <Route path="/BlogRoute" element={<BlogRoute />} />
        <Route path="/AuthorRoute" element={<AuthorRoute />} /> */}
        <Route
          path="/stripeGuestPaymentSuccess"
          element={<StripeGuestPaymentSuccess />}
        />
        <Route path="/GuestPayment" element={<GuestPayment />} />
        <Route
          path="/pendingPaymentStripeSuccess"
          element={<PendingPaymentStripeSuccess />}
        />

        <Route path="/transactionhistory" element={<TransactionHistory />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/viewprofile" element={<ViewProfile />} />
        <Route
          path="/accountsettingservices"
          element={<AccountSettingServices />}
        />
        <Route
          path="accountsettingsubscriptions"
          element={<AccountSettingSubscriptions />}
        />
        <Route
          path="accountsettingpaymentmethod"
          element={<AccountSettingPaymentMethod />}
        />
        <Route
          path="accountsettingbillinginfo"
          element={<AccountSettingBillingInfo />}
        />
        <Route path="orderpaypalsuccess" element={<OrderPaypalSuccess />} />
        <Route
          path="pendingpaymentpaypalsuccess"
          element={<PendingPaymentPaypalSuccess />}
        />
        <Route
          path="paypalguestpaymentsuccess"
          element={<PaypalGuestPaymentSuccess />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
