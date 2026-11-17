import "./App.css";
import Home from "./components/pages/Home";
import Nav from './components/Nav';  
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Books from "./components/pages/Books";
import { books } from "./data";
import BookInfo from "./components/pages/BookInfo";

function App() {
 
  return (
    <Router>
      <div className="App">        
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" render={() => <Books books={books} /> } />
        <Route path="/books/1" render={() => <BookInfo books={books} /> } />
        <Footer />
      </div>
    </Router>
  );

}

export default App;


 // <Router>
  //   <div className="App">
  //     <Nav />
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/books" element={<Books books={books} />} />
  //       <Route path="/books:id" cart={cart} 
  //         element={<BookInfo books={books} addToCart={addToCart} />} /> 
  //       <Route path="/cart"
  //        element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} />} />
  //     </Routes>
  //   </div>
  // </Router>