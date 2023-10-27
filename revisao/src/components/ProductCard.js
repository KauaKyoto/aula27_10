import React from 'react'
import '../ProductCard.css'

function ProductCard (props){
    return(
        <div className='card'>
            <h2 className='nome'>{props.nome}</h2>
            <img src={props.imagem} className='imagem'/>
            <h3 className='preco'>{props.preco}</h3>
            <p className='descricao'>{props.descricao}</p>
            <p className='caractetirstica'>{props.caracteristica}</p>
            <ul className='lista'>
            <li> {props.lista1} </li>
            <li> {props.lista2} </li>
            <li> {props.lista3} </li>
            <li> {props.lista4} </li>
            <li> {props.lista5} </li>
            </ul>
        </div>
    )
}

export default ProductCard