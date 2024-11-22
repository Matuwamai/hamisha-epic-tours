// src/App.tsx
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/mainLayout"; // Import MainLayout
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import UserProfilePage from "./pages/UserProfilePage";
import BookingHistoryPage from "./pages/BookingHistoryPage";

const App = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmation/:bookingId" element={<ConfirmationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/bookings" element={<BookingHistoryPage />} />
        </Routes>
      </MainLayout>
    </div>
  );
};

export default App;