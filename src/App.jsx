import React from "react"
import { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Login from "./auth/Login"
import Profile from "./auth/Profile"
import CategoriaCarregada from "./PaginaCategoria/CategoriaCarregada"
import Register from "./auth/Register"
import Produto from "./components/Produto/Produto"
import Pedido from "./components/Pedido/Pedido"
import Pesquisa from "./components/Pesquisa/Pesquisa"


function App() {
  /*
  step1 :  const { productItems } = Data 
  lai pass garne using props
  
  Step 2 : item lai cart ma halne using useState
  ==> CartItem lai pass garre using props from  <Cart CartItem={CartItem} /> ani import garrxa in cartItem ma
 
  Step 3 :  chai flashCard ma xa button ma

  Step 4 :  addToCart lai chai pass garne using props in pages and cart components
  */

  //Step 1 :
  const { productItems } = Data

  //Step 2 :
  const [CartItem, setCartItem] = useState([])

  //Step 4 :
  const addToCart = (product, qtd) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id)
    // if productExit chai alredy exit in cart then will run fun() => setCartItem
    // ani inside => setCartItem will run => map() ani yo map() chai each cart ma
    // gayara check garxa if item.id ra product.id chai match bhayo bhane
    // productExit product chai display garxa
    // ani increase  exits product QTY by 1
    // if item and product doesnt match then will add new items
    if(qtd == null) qtd = 1
    else qtd = qtd - 0

    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 0 + qtd } : item)))
    } else {
      // but if the product doesnt exit in the cart that mean if card is empty
      // then new product is added in cart  and its qty is initalize to 1
      setCartItem([...CartItem, { ...product, qty: qtd }])
    }
  }

  // Stpe: 6
  const decreaseQty = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id)

    // if product is exit and its qty is 1 then we will run a fun  setCartItem
    // inside  setCartItem we will run filter to check if item.id is match to product.id
    // if the item.id is doesnt match to product.id then that items are display in cart
    // else
    if (productExit.qty === 1) {
      removeFromCart(product)
    } else {
      // if product is exit and qty  of that produt is not equal to 1
      // then will run function call setCartItem
      // inside setCartItem we will run map method
      // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }


  const removeFromCart = (product) => {
    setCartItem(CartItem.filter((item) => item.id !== product.id))

  }

  const removeAll = (CartItem) => {
    
    let remover = CartItem;

    { remover.map( (item) => setCartItem(CartItem.filter((item) => item.id !== item.id))) }


    }

  
  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Routes>
          <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart} shopItems={productItems}/>}/>
           
         <Route path='/cart' element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} removeFromCart={removeFromCart} removeAll={removeAll}/>}/>
            
      
          <Route path="/cat/:cat" element={<CategoriaCarregada productItems={productItems} addToCart={addToCart} shopItems={productItems}/>}/>
          <Route path="/psq/:psq" element={<Pesquisa productItems={productItems} addToCart={addToCart} shopItems={productItems}/>}/>
          <Route path="/prod/:prod" element={<Produto productItems={productItems} addToCart={addToCart} shopItems={productItems}/>}/>


          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/pedido" element={<Pedido/>}/>
       


          
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
