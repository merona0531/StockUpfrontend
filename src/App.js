import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/login';
import MainPage from './pages/main/main'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;