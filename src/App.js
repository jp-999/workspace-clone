import { Analytics } from "@vercel/analytics/react"
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Footer from './components/navigation/Footer';
import Home from './pages/Home';
import ListingDetails from './pages/ListingDetails';
import About from './pages/About';
import Explore from './pages/Explore';
import Contact from './pages/Contact';
import ListWorkspace from './pages/ListWorkspace';
import Communities from './pages/Communities';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/listing/:id" element={<ListingDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/list-workspace" element={<ListWorkspace />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App; 