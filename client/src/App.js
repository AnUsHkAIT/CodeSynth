import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import MainPage from './components/MainPage';
import EditorPage from './components/EditorPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <div>
      <Toaster  position='top-center'></Toaster>
    </div>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/join-room" element={<Home />} /> {/* Add this line */}
      <Route path="/editor/:roomId" element={<EditorPage />} />
    </Routes>
    </>
  );
}

export default App;