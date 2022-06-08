import Home from './components/Home/Home';
import Header from './components/Header/Header'
import style from './App.module.css';
import { Route, Routes, Navigate } from 'react-router-dom'
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className={style.App}>
      <div className={style.header}>
        <Header />
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>

  );
}

export default App;
