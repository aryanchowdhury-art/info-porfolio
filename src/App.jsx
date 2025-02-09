import { Route, Routes } from 'react-router-dom';
import Nav from './navigation/nav.jsx';
import About from './pages/about.jsx'; // Correct casing for import
import Contact from './pages/contact.jsx'; // Correct casing for import
import Projects from './pages/projects.jsx'; // Correct casing for import
import Content from './pages/content.jsx';
import Home from './pages/home.jsx'; // Correct casing for import

function App() {
  return (
    <div>
      <Nav />
      <Routes>
  <Route path="/" element={<Home />} /> {/* Default route */}
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/content" element={<Content />} />
</Routes>

    </div>
  );
}

export default App;
