import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductListingPage from './pages/ProductListingPage'
import AuthPage from './pages/AuthPage'

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<ProductListingPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
    <Footer />
  </Router>
)

export default App
