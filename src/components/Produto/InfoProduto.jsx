import React, { useState, useRef } from "react"
import {Input} from '@mui/material'
import { Link } from "react-router-dom"


const InfoProduto = ({ productItems, addToCart, produto }) => {
    const [quant, setQuant] = useState(1)
    const compraFeita = useRef()
    const erro = useRef();
    const estoque = useRef();
   


    const increment = () => {
      setQuant(quant -0 +1)
        }
    const decrease = () =>{
      if(quant > 1)setQuant(quant - 1)

    }

    const handleChange = e =>{
      if(quant != 0)setQuant(e.target.value-0);
      setQuant(e.target.value);
    }

    const blockInvalidChar = e => ['e', 'E', '+', '-', ',', '.'].includes(e.key) && e.preventDefault();


  return (
    <>
      {productItems.filter(produ => produ.id == produto).map(filteredProd => (
     <>

     <div className="container c_flex">
     <p  className = "rota">
      <Link to='/'>Página Inicial </Link> &gt;
      <Link to={'/cat/'+filteredProd.cat}> {filteredProd.cat} </Link>  &gt;
      <Link > {filteredProd.name}</Link>
     
     </p>

     </div>



            <div className='Protudo container f_flex'>
              <div className='product'>
                <div className='img'>
                  
                  
                  <div><img src={'.'+filteredProd.cover} alt='' width='670px'/></div>
                
                </div>
                
              </div>

              <div className='product'>
                <div className='detalhes product-details'>
                  <h2>{filteredProd.name}</h2>
                  
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='descricao'>
                    <p>{filteredProd.desc}</p>
                  </div>
                  <div className="preco">
                  {(filteredProd.discount > 0)  &&<h4 className='old'><s>R${filteredProd.price.toFixed(2)}</s> {filteredProd.discount}% de desconto </h4> }
                  <div className='price'>
                   
                    <h2>R${(filteredProd.price-(filteredProd.price*(filteredProd.discount/100))).toFixed(2)}</h2>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                   
                  </div></div>
                  <div className='quantidade'>
                  <button className='btn-primary' onClick={decrease}>
                      <i className='fa fa-minus'></i>
                    </button>

                    <input className="number" type="number" min="1"  value={quant} onKeyDown={blockInvalidChar} onChange={handleChange}></input>

                    <button className='btn-primary' onClick={increment}>
                      <i className='fa fa-plus'></i>
                    </button>

                  </div>
                  <p className='mensagem' ref={erro} style={{display:'none', color:'#e94560'}}>Insira um valor válido</p>
                  <p className='mensagem' ref={estoque} style={{display:'none', color:'#e94560'}}>No momento há apenas <b>25</b> em estoque</p>
                  <p className='mensagem' ref={compraFeita} style={{display:'none', fontWeight:'bold', color:'#007744'}}>Item adicionado ao carrinho!</p></div>



                  <div className="botaoCarrinho">
                  <button className='btn-primary' onClick={() => {
                    if(quant > 0 && quant <=25){
                      addToCart(filteredProd, quant);
                      compraFeita.current.style.display = ''
                      estoque.current.style.display = 'none'
                      erro.current.style.display = 'none'}

                    else if(quant > 25){
                      compraFeita.current.style.display = 'none'
                      estoque.current.style.display = ''
                      erro.current.style.display = 'none'}
                    
                      
                    else{erro.current.style.display = '';
                      estoque.current.style.display = 'none'
                      compraFeita.current.style.display = 'none';
                      setQuant(1);
                    }
                      }}>
                      <h4>Adicionar ao Carrinho</h4>
                    </button>
                </div>

              </div>
            </div></>
          )
        )}
    </>
  )
}

export default InfoProduto
