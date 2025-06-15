import Header from './Components/Header';
import Footer from './Components/Footer';
import FeatureSelection from './Components/FeatureSelection';
import { Routes, Route } from 'react-router-dom';
import Terms from './Components/Terms';
import Cancel from './Components/Cancel';
import Agreements from './Components/Agreements';
import Blogs from './Components/Blogs';
import About from './Components/About';
import FAQ from './Components/FAQ';
import Error403 from './Components/Error403';
import BlogDetail from './Components/BlogDetail';
import Contact from './Components/Contact';
import HostDashboard from './Components/HostDashboard';
import DashboardLayout from './Components/DashboardLayout';
import Privacy from './Components/Privacy';
import Profile from './Components/Profile';
import AddProperty from './Components/AddProperty';
import BookingHistory from './Components/BookingHistory';
import Invoices from './Components/Invoices';
import RenterMap from './Components/RenterMap';
import React, { Suspense } from 'react';
import Host from './Components/Host';
import PropertyDetails from './Components/PropertyDetails';
import ForgotPassword from './Components/ForgotPassword';

const Payout = React.lazy(() => import('./Components/Payout'));

export default function App() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeatureSelection /> 
                <FAQ />
              </>
            }
          />
          <Route path="/T&C" element={<Terms/>} />
           
          <Route path="/Cancel" element={<Cancel/>} />
          <Route path="/Host&Agreements" element={<Agreements/>} />
          <Route path="/Blogs" element={<Blogs/>} />
          <Route path="/blogs/:id" element={<BlogDetail/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/403" element={<Error403 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/renter-map" element={<RenterMap />} />
          <Route path="/host" element={<Host />} />
         
         {/* Forgot Password Route */}
          <Route path="/forgot-password" element={<ForgotPassword />} />

         {/* Dashboard */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<HostDashboard />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="profile" element={<Profile />} />
            <Route path="add-property" element={<AddProperty />} />
            <Route path="bookings" element={<BookingHistory />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="payout" element={
              <Suspense fallback={<div className='text-center py-8'>Loading...</div>}>
                <Payout />
              </Suspense>
            } />
          </Route>
          <Route path="/property-details" element={<PropertyDetails />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
