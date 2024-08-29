import React from "react"
import FlashCard from "../../common/FlashCards/FlashCard"
import { Link } from "react-router-dom";

import "./style.css"

const Subprodutos = ({ productItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
        <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <i className='fa-solid fa-border-all'></i>
              <h2>Sementes</h2>
            </div>
           <div className='heading-right row '>
           <Link to={`/cat/sementes`}>
              <span>Ver Tudo</span>
              <i className='fa-solid fa-caret-right'></i>
              </Link> </div>
          </div>
          
          <FlashCard productItems={productItems} addToCart={addToCart} categ={'subprodutos'}/>
        </div>
      </section>
    </>
  )
}

export default Subprodutos
