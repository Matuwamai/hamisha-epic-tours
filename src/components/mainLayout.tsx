// components/MainLayout.tsx
import Navbar from "./Navbar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar for contact details */}
      <div className="bg-gray-100 text-sm py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex space-x-4">
            <p>Email: <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a></p>
            <p>Phone: <a href="tel:+123456789" className="text-blue-600 hover:underline">+123 456 789</a></p>
          </div>
          {/* Social Media Links */}
          <div className="flex space-x-3">
            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-blue-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-blue-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-blue-500">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        {children}
      </main>
      
      {/* Footer (optional) */}
      <footer className="bg-gray-800 text-gray-300 py-4">
        <div className="container mx-auto text-center">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
