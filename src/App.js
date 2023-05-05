import Navbar from "./components/navbar";

import './App.css';
import News from './components/news';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" key="Home" element={<News category="General"/>}/>
        <Route exact path="/Science" key="Science" element={<News category="Science" />}/>
        <Route exact path="/General" key="General" element={<News category="General" />} />
        <Route exact path="/Technology" key="Technology" element={<News category="Technology" />} />
        <Route exact path="/Business" key="Business" element={<News category="Business" />}/>
        <Route exact path="/Sports" key="Sports" element={<News category="Sports" />}/>
        <Route exact path="/Health" key="Health" element={<News category="Health" />}/>
        <Route exact path="/Entertainment" key="Entertainment" element={<News category="Entertainment" />}/>
      </Routes>
    </Router>
  );
}

export default App;
