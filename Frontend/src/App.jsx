import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Education from "./pages/Education";
import Blogs from "./pages/Blogs";
import Science from "./pages/Science";
import Success from "./pages/Success";
import StickySidebar from "./components/StickySidebar";
import { AuthProvider } from "./context/AuthContext";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import CheckoutForm from "./components/CheckoutForm";
import OurStory from "./pages/OurStory";
import AboutUs from "./pages/AboutUs";
import TermsAndConditions from "./pages/Terms&Conditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <StickySidebar />
          <Navbar />
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/" element={<Home />} />
            <Route path="/science" element={<Science />} />
            <Route path="/product" element={<Product />} />
            <Route path="/education" element={<Education />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/success" element={<Success />} />
            <Route path="/checkoutForm" element={<CheckoutForm />} />
            <Route path="/ourStory" element={<OurStory />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/t&c" element={<TermsAndConditions />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
