import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Education from './pages/Education';
import Blogs from './pages/Blogs';
import Science from './pages/Science';
import Success from './pages/Success';
import StickySidebar from './components/StickySidebar';

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop/>
        <StickySidebar/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/science" element={<Science />} />
          <Route path="/product" element={<Product />} />
          <Route path="/education" element={<Education />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <Footer/>
      </Router>
    </CartProvider>
  );
}

export default App;
