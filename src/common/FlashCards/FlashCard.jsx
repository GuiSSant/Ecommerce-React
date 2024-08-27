import React, { useState } from "react"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const FlashCard = ({ productItems, addToCart, categ }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  



  return (
    <>
      <Slider {...settings}>
      {productItems.filter(produ => produ.cat == categ).map(filteredProd => (
        <>
        
        <div className='box'>
              <div className='product mtop compra'>
              <Link to={'/prod/'+filteredProd.id} ><div className='img'>
                  
                  {(filteredProd.discount > 0)  && <span className='discount'>-{filteredProd.discount}%</span>}
                    
                    <div><img src={filteredProd.cover} alt='' height='270px' width='270px'/></div>
                  {/*}  <div className='product-like'>
                      <label>{count}</label> <br />
                      <i className='fa-regular fa-heart' onClick={increment}></i>
                    </div>*/}
                  </div></Link>
                  <div className='product-details'>
                  <Link to={'/prod/'+filteredProd.id} ><h3>{filteredProd.name}</h3></Link>
                  
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  {(filteredProd.discount > 0)  &&<s><h5 className='old'>R${filteredProd.price.toFixed(2)} </h5></s>}
                  <div className='price'>
                   
                    <h4>R${(filteredProd.price-(filteredProd.price*(filteredProd.discount/100))).toFixed(2)}</h4>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                    <button onClick={() => addToCart(filteredProd)}>
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          
          </>))}
      </Slider>
    </>
  )
}

export default FlashCard
