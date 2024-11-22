// src/components/Navbar.tsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/login");  // Redirect to login page after logout
  };

  return (
    <nav className="bg-[#105A89] text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        {/* Logo / Home Link */}
        <Link to="/" className="text-2xl font-bold">
          Hamisha Epic Tours
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              {/* Profile Link */}
              <Link
                to="/profile"
                className="bg-[#C56D00] text-white py-2 px-4 rounded hover:bg-opacity-90"
              >
                Profile
              </Link>
              {/* Bookings Link */}
              <Link
                to="/bookings"
                className="bg-[#C56D00] text-white py-2 px-4 rounded hover:bg-opacity-90"
              >
                Bookings
              </Link>
              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="bg-[#C56D00] text-white py-2 px-4 rounded hover:bg-opacity-90"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Login Link */}
              <Link
                to="/login"
                className="bg-[#C56D00] text-white py-2 px-4 rounded hover:bg-opacity-90"
              >
                Login
              </Link>
              {/* Sign Up Link */}
              <Link
                to="/signup"
                className="bg-[#C56D00] text-white py-2 px-4 rounded hover:bg-opacity-90"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
