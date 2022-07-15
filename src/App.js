import Home from './components/Home/Home';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom'
import Footer from './components/Footer/footer';
import LegalNotice from './components/LegalNotice/legalNotice';
import PrivacyPolicy from './components/PrivacyPolicy/privacyPolicy';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ComingSoon from './components/ComingSoon/comingSoon';
import Terms from './components/Terms/terms';
import About from './components/About/about';
import Header from './components/Header/Header';
import Login from './components/Login/login';
import MakeupProductList from './components/MakeupProductList/makeupProductList';
import { SpinnerContextProvider } from './context/SpinnerContext';
import ProductDescription from './components/ProductsDescription/productDescription';



function App() {
  /* const isDesktop = useMedia('(min-width: 993px)') */

  return (
    <ScrollToTop>
      <div className="page-container">
        <div className="content-wrap">
          <SpinnerContextProvider>
            <Header />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/*" element={<Navigate to="/home" />} />
              <Route path="/legal" element={<LegalNotice />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/comingSoon" element={<ComingSoon />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/:productType" element={<MakeupProductList />} />
              <Route path="/search/:keyword" element={<MakeupProductList />} />
              <Route path="product/:id" element={<ProductDescription />} />
            </Routes>
          </SpinnerContextProvider>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
}

export default App;
