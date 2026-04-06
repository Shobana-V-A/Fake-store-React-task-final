import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => (
  <nav className="bg-red-600 text-white p-4 shadow-md sticky top-0 z-40">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Fake Store Shop</Link>
      <Link to="/cart" className="bg-white text-red-600 font-semibold py-2 px-4 rounded shadow hover:bg-gray-100 transition">
        Cart ({cartCount})
      </Link>
    </div>
  </nav>
);

export default Navbar;