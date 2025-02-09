import './nav.css';
import { Link } from 'react-router-dom';

function Nav() {  // Capitalize component name to follow React conventions
  return (
    <div>
      <ul>
        <Link to="/"><li>Home</li></Link>  {/* Fixed Home path */}
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        <Link to="/projects"><li>Projects</li></Link>
      </ul>
    </div>
  );
}

export default Nav;
