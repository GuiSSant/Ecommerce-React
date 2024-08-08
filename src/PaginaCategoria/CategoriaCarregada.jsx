import React from "react"
import { useParams } from 'react-router-dom';

import Home from "../components/MainPage/Home"
import Descontos from "../components/Descontos/Descontos"
import Equipamentos from "../components/Equipamentos/Equipamentos"
import TopCate from "../components/top/TopCate"
import NewArrivals from "../components/newarrivals/NewArrivals"
import Discount from "../components/discount/Discount"
import Shop from "../components/shops/Shop"
import Annocument from "../components/annocument/Annocument"
import Wrapper from "../components/wrapper/Wrapper"


const CategoriaCarregada = ({ productItems, addToCart, CartItem, shopItems }) =>{
  const { cat } = useParams();


  return (<>
       <Shop shopItems={shopItems} addToCart={addToCart} Cat={cat} />

 
 </>);
}
  export default CategoriaCarregada


