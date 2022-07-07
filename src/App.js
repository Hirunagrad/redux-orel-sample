import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import AddCourse from './components/Add/AddCourse';
import EditCourse from './components/Edit/EditCourse';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<AddCourse/>} />
        <Route path="/edit/:id" element={<EditCourse/>} />
      </Routes>
     
    </div>
  );
}

export default App;
