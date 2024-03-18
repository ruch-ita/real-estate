import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignnUp from './pages/SignnUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/sign-up" element={<SignnUp />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
  </BrowserRouter>;
}

export default App
