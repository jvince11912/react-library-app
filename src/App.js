import "./App.css";
import Home from "./components/pages/Home";
import Nav from './components/Nav';  
import Footer from "./components/Footer"; 
import Books from "./components/pages/Books";
import { books } from "./data";
import BookInfo from "./components/pages/BookInfo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import { useLocation } from "react-router-dom";
import Cart from "./components/pages/Cart";
import { useEffect, useState } from "react";

// function RouteDebugger() {
//   const location = useLocation();
//   //console.log("Router location:", location.pathname);
//   return null;
// }


function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
     setCart([...cart, {...book, quantity: 1}]);
    // const dupItem = cart.find((item) => +item.id === +book.id)
    // if (dupItem) {
    //   setCart(cart.map((item) => {
    //       if (item.id === dupItem.id) {
    //       return {
    //         ...item, 
    //         quantity: item.quantity + 1,
    //       };
    //     } else {
    //         return item;        
    //     }
    //     }))    
    // } else {
    // setCart([...cart, {...book, quantity: 1}]);
  }

function changeQuantity(book, quantity) { 
  setCart(
    cart.map(item => item.id === book.id 
      ? {...item, quantity: +quantity, }  : item
    )
  );
}

function removeItem(item) {
  console.log('removeItem');
  setCart(cart.filter(book => book.id !== item.id))
}

function numberOfItems() {
  let counter=0;
  cart.forEach(item => {
    counter += item.quantity
  })
  return counter;
}

//we need to console log of cart changes in useEffect
// we cannot put console.log(cart) after line 26, because line 26 is aysnc, 
// /  nothing will be captured to log yet, because it is async
useEffect(()=> {  
  console.log('useEffect');
  //console.log(cart);
},[cart])

return (
    <Router>        
      <div className="App">        
        <Nav  numberOfItems={numberOfItems()} />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/books" exact render={() => <Books books={books} /> } />
            <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} cart={cart} /> } /> 
            <Route path="/cart" render={() => <Cart books={books} cart={cart} 
            changeQuantity={changeQuantity}  removeItem={removeItem}/> } /> 
        </Switch>
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