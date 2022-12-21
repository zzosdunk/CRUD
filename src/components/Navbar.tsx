import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Dashboard</h1>
      <Link to="/">All Hotels</Link>
      <Link to="/create">New Hotel</Link>
    </nav>
  );
}

export default Navbar;
