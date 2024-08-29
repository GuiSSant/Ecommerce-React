import React from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import "./style.css"
import Categories from "../MainPage/Categories"

const Shop = ({ addToCart, shopItems, Cat }) => {
  const teste = shopItems.filter(produ => produ.cat == Cat).map(shopItems => (shopItems.id))

 
    return (
      <>
        <section className='shop background'>


          <div className='container d_flex'>
          <Categories />


            {teste.length > 0 ? 
            <div className='contentWidth'>
           
            <div className="quantidade heading d_flex">{teste.length} itens na categoria "{Cat.charAt(0).toUpperCase() + Cat.slice(1)}" </div>

              <div className='heading d_flex'>

                <div className='heading-left row  f_flex'>

                <h2>{Cat}</h2>
                </div>
              
              </div>
              <div className='product-content  grid1'>
                <ShopCart addToCart={addToCart} shopItems={shopItems} Cat={Cat}/>
              </div>
            </div>
           :
           <div className='contentWidth'><h2>Categoria "{Cat.charAt(0).toUpperCase() + Cat.slice(1)}" não encontrada</h2> </div>}
          </div>
        </section>
      </>
    )
  
}

export default Shop
