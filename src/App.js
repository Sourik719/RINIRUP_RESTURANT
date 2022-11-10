import React from 'react';
import './App.css';
import Review from "./Pages/review"
import About from './Pages/about';
import Home from './home';
import Navbar from './navbar';
import Footer from './footer';
import Query from './Pages/query';
import Book_Table from './Pages/book_table';
import Order from './Pages/Online Order';
import Order_online from './Pages/Online Order';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';


function App() {
  return(
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/About Us' element={<About/>} />
        <Route path='/Book_Table' element={<Book_Table/>} />
        <Route path='/Query' element={<Query/>} />
        <Route path='/feedback' element={<Review/>}/>
        <Route path='/Order' element={<Order_online/>}/>
    </Routes>
    <Footer/>
    </Router>
  )
}
export default App;


