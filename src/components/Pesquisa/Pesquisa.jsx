import React from "react"
import Catg from "../shops/Catg"
import ShopCart from "../shops/ShopCart"
import "./style.css"
import Categories from "../MainPage/Categories"
import { useParams } from 'react-router-dom';


const Pesquisa = ({ addToCart, shopItems, Cat }) => {
    const { psq } = useParams();

  const teste = shopItems.filter(produ => produ.cat.toLowerCase() == psq.toLowerCase() || produ.name.toLowerCase().includes(psq)).map(shopItems => (shopItems.id))

 
    return (
      <>
      
        <section className='shop background'>


          <div className='container d_flex'>

            <Categories />
            <div className='contentWidth'>
           
            <div className="quantidade heading d_flex">{teste.length} resultados </div>

              <div className='heading d_flex'>

                <div className='heading-left row  f_flex'>

                <h2>{psq}</h2>
                </div>
              
              </div>
              <div className='product-content  grid1'>
                <ShopCart addToCart={addToCart} shopItems={shopItems} Cat={psq}/>
              </div>
            </div>
           
          </div>
        </section>
      </>
    )
  
}

export default Pesquisa
