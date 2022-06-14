import Home from './components/Home/Home';
import Header from './components/Header/Header'
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom'
import Footer from './components/Footer/footer';
import LegalNotice from './components/LegalNotice/legalNotice';
import PrivacyPolicy from './components/PrivacyPolicy/privacyPolicy';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ComingSoon from './components/ComingSoon/comingSoon';
import Terms from './components/Terms/terms';
import About from './components/About/about';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <ScrollToTop>
          <div className="header">
            <Header />
          </div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/*" element={<Navigate to="/home" />} />
            <Route path="/legal" element={<LegalNotice />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/comingSoon" element={<ComingSoon />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <div className="footer">
            <Footer />
          </div>
        </ScrollToTop>
      </div>
    </div>
  );
}

export default App;
