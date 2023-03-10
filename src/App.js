import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./Header-Footer/Footer";
import Header from "./Header-Footer/Header";
import CandidateProfileDetails from "./Pages/CandidateProfileDetails";
import CandidateList from "./Pages/CandidateList";
import CandidateProfile from "./Pages/CandidateProfile";
import EmployerDetails from "./Pages/EmployerDetails";
import EmployerList from "./Pages/EmployerList";
import EmployerProfile from "./Pages/EmployerProfile";
import EmployerProfileDetails from "./Pages/EmployerProfileDetails";

import Index from "./Pages/Index";
import Index2 from "./Pages/Index2";

import Index4 from "./Pages/Index4";
import Index5 from "./Pages/Index5";
import Login from "./Pages/Login";
import CandidateDetail from "./Pages/CandidateDetail";
import EmployerPostJob from "./Pages/EmployerPostJob";
import EmployerDashboard from "./Pages/EmployerDashboard";
import DashboardCandidate from "./Pages/DashboardCandidate";
import EmployerManageJob from "./Pages/EmployerManageJob";
import EmployerJobDetail from "./Pages/EmployerJobDetail";
// import About from "./pages/About";
// import Author from "./pages/Author";
// import Blog from "./pages/Blog";
// import Career from "./pages/Career";
// import Contact from "./pages/Contact";
// import Faq from "./pages/Faq";
// import Forgot from "./pages/Forgot";
// import HowItwork from "./pages/HowItwork";
// import Login from "./pages/Login";
// import PlaceYourOrder from "./pages/PlaceYourOrder";
// import Prices from "./pages/Prices";
// import Privacy from "./pages/Privacy";
// import Register from "./pages/Register";
// import Reviews from "./pages/Reviews";
// import Sample from "./pages/Sample";
// import Services from "./pages/Services";
// import Terms from "./pages/Terms";
// import ViewCart from "./pages/ViewCart";
// import ViewDetails from "./pages/ViewDetails";
// import Success from "./pages/Success";
// import Failed from "./pages/Failed";
// import PurchaseSuccess from "./pages/PurchaseSuccess";
// import OnlineManagement from "./pages/OnlineManagement";
// import Ordersuccess from "./pages/Ordersuccess";
// import Payplesuccess from "./pages/Payplesuccess";
// // import WorkSampleroute from "./pages/routes/WorkSampleroute";
// // import BlogRoute from "./pages/routes/BlogRoute";
// import StripeSubscription from "./pages/StripeSubscription";
// // import AuthorRoute from "./pages/routes/AuthorRoute";
// import StripeGuestPaymentSuccess from "./pages/StripeGuestPaymentSuccess";
// import GuestPayment from "./pages/GuestPayment";
// import PendingPaymentStripeSuccess from "./pages/PendingPaymentStripeSuccess";
// // import Join from "./pages/Join";
// import TransactionHistory from "./pages/TransactionHistory";
// import Dashboard from "./pages/Dashboard";
// import ViewProfile from "./pages/ViewProfile";
// import AccountSettingServices from "./pages/AccountSettingServices";
// import AccountSettingSubscriptions from "./pages/AccountSettingSubscriptions";
// import AccountSettingPaymentMethod from "./pages/AccountSettingPaymentMethod";
// import AccountSettingBillingInfo from "./pages/AccountSettingBillingInfo";
// import OrderPaypalSuccess from "./pages/OrderPaypalSuccess";
// import PendingPaymentPaypalSuccess from "./pages/PendingPaymentPaypalSuccess";
// import PaypalGuestPaymentSuccess from "./pages/PaypalGuestPaymentSuccess";
// import WalletPaymentSuccess from "./pages/WalletPaymentSuccess";
// import OrderWithoutPayment from "./pages/OrderWithoutPayment";
// import GhostwritingServices from "./pages/GhostwritingServices";
// import BlogWritingServices from "./pages/BlogWritingServices";
// import FreelanceWritingServices from "./pages/FreelanceWritingServices";
// import ReviewWritingServices from "./pages/ReviewWritingServices";
// import PaypalSubscriptionSuccess from "./pages/PaypalSubscriptionSuccess";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index-2" element={<Index2 />} />

        <Route path="/index-4" element={<Index4 />} />
        <Route path="/index-5" element={<Index5 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/candidate-list" element={<CandidateList />} />
        <Route path="/employer-list" element={<EmployerList />} />

        <Route path="/employer-profile" element={<EmployerProfile />} />
        <Route
          path="/employer-profile-details"
          element={<EmployerProfileDetails />}
        />

        <Route path="/employer-detail/:id" element={<EmployerDetails />} />
        <Route path="/candidate-profile" element={<CandidateProfile />} />
        <Route path="/candidate-list" element={<CandidateList />} />
        <Route
          path="/candidate-profile-detail"
          element={<CandidateProfileDetails />}
        />
        <Route path="/candidate-detail/:id" element={<CandidateDetail />} />
        <Route path="/employer-post-job" element={<EmployerPostJob />} />
        <Route path="/employer-dashboard" element={<EmployerDashboard />} />
        <Route path="/candidate-dashboard" element={<DashboardCandidate />} />
        <Route path="/employer-manage-job" element={<EmployerManageJob />} />
        <Route
          path="/employer-job-detail/:id"
          element={<EmployerJobDetail />}
        />
        {/*  <Route path="/reviews" element={<Reviews />} />
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
        <Route path="/stripesubscription" element={<StripeSubscription />} />
       
        <Route
          path="/stripeguestpaymentSuccess"
          element={<StripeGuestPaymentSuccess />}
        />
        <Route path="/guestpayment" element={<GuestPayment />} />
        <Route
          path="/pendingpaymentstripesuccess"
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
          path="/accountsettingsubscriptions"
          element={<AccountSettingSubscriptions />}
        />
        <Route
          path="/accountsettingpaymentmethod"
          element={<AccountSettingPaymentMethod />}
        />
        <Route
          path="/accountsettingbillinginfo"
          element={<AccountSettingBillingInfo />}
        />
        <Route path="/orderpaypalsuccess" element={<OrderPaypalSuccess />} />
        <Route
          path="/pendingpaymentpaypalsuccess"
          element={<PendingPaymentPaypalSuccess />}
        />
        <Route
          path="/paypalguestpaymentsuccess"
          element={<PaypalGuestPaymentSuccess />}
        />
        <Route
          path="/walletpaymentsuccess"
          element={<WalletPaymentSuccess />}
        />
        <Route path="/orderwithoutpayment" element={<OrderWithoutPayment />} />
        <Route
          path="/ghost-writing-services"
          element={<GhostwritingServices />}
        />
        <Route
          path="/blog-writing-services"
          element={<BlogWritingServices />}
        />
        <Route
          path="/freelance-writing-services"
          element={<FreelanceWritingServices />}
        />
        <Route
          path="/review-writing-services"
          element={<ReviewWritingServices />}
        />{" "}
        <Route
          path="/paypalsubscriptionsuccess"
          element={<PaypalSubscriptionSuccess />}
        /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
