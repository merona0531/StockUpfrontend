import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/login';
import MainPage from './pages/main/main'
import Signin from './pages/signin/signin'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;