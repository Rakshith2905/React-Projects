import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateAction from './components/CreateAction.jsx';
import ReadAction from './components/ReadAction.jsx';
import UpdateAction from './components/UpdateAction.jsx';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<CreateAction />} />
        <Route exact path="/read" element={<ReadAction />} />
        <Route exact path="/edit/:id" element={<UpdateAction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
