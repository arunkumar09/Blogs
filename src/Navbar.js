import { Link } from 'react-router-dom';

//use sfc - stateless functional components
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;