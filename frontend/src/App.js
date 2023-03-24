import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom'
import Editor from './pages/Editor/Editor'

function App() {
  return (
    <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/editor" element={<Editor />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* <Route path="/admin" element={<Admin />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
