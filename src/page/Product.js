import React, {useState} from 'react'
import '../App.scss';
import {Link, BrowserRouter, Route, Routes} from 'react-router-dom';
import cat from "../img/img_blackguy.jpeg";
import women from "../img/636321834645775407.png";


function Product() {
    return (
        <div className='productDiv'>
            React State & Props
            <img src="./img/img_blackguy.jpeg"/>
            <img src="./img/636321834645775407.png"/>
            <br/>
            <br/>
            <hr/>
            <img src={cat}/>
            <img src={women}/>
        </div>
    )
}

export default Product