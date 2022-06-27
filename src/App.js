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
import MakeupFaceProductList from './components/MakeupFaceProductList/makeupFaceProductList';



function App() {
  /* const isDesktop = useMedia('(min-width: 993px)') */

  return (
    <ScrollToTop>
      <div className="page-container">
        <div className="content-wrap">
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
            <Route path="/bronzer" element={<MakeupFaceProductList />} />
          </Routes>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
}

export default App;
