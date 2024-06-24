import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Travify</h1>
      <p>Your journey begins here.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Learn more about our mission and values.</p>
    </div>
  );
}

function Service() {
  return (
    <div>
      <h1>Our Services</h1>
      <p>Discover the wide range of services we offer.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Get in touch with us for more information.</p>
    </div>
  );
}

function Signup() {
  return (
    <div>
      <h1>Sign Up</h1>
      <p>Create an account to get started.</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}