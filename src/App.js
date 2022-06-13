import Home from './components/Home/Home';
import Header from './components/Header/Header'
import style from './App.module.css';
import { Route, Routes, Navigate } from 'react-router-dom'
import Footer from './components/Footer/footer';
import LegalNotice from './components/LegalNotice/legalNotice';
import PrivacyPolicy from './components/PrivacyPolicy/privacyPolicy';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ComingSoon from './components/ComingSoon/comingSoon';

function App() {
  return (
    <div className={style.App}>
      <ScrollToTop>
        <div className={style.header}>
          <Header />
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/*" element={<Navigate to="/home" />} />
          <Route path="/legal" element={<LegalNotice />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/comingSoon" element={<ComingSoon />} />
        </Routes>
        <div className={style.footer}>
          <Footer />
        </div>
      </ScrollToTop>
    </div>

  );
}

export default App;
