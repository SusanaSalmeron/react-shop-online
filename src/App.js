import Home from './components/Home/Home'
import style from './App.module.css';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className={style.App}>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Home />
    </div>
  );
}

export default App;
