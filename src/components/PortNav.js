import React from 'react';
import {Link} from '@reach/router';
import styled from 'styled-components';


const Nav=styled.div `
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    max-width:1650px;
    margin-left:auto;
    margin-right:auto;
    h1{display:none;}
`
const PortImg=styled.img`
    position:relative;
    height:400px;
    width:400px;
    object-fit:cover;
`
const Box=styled.div `
    position:relative;
    box-sizing:border-box;
    overflow:hidden;
    text-align:center;
    width:400px;
    height:400px;
    overflow:hidden;
    margin:5px 5px 5px 5px;
`
const Overlay= styled.div`
    position:absolute;
    z-index:1;
    width:100%;
    height:100%;
    max-width:400px;
    max-height:400px;
    opacity:0;
    padding:160px 10px;
    box-sizing:border-box;
    @media (hover: none)
        { 
        opacity:1;
        background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8));
        color:white;
        padding:280px 10px 40px 10px;
        }
    @media(hover: hover){${Box} &:hover{
        opacity:1;
        background-color: rgba(0,0,0,0.5);
        color:white;}}
`
export default function PortNav(props){
    const lang = props.lang;
    const Articles = props.articles;
    const items = Articles.map(article => 
        
        <Box className='index' key={article.id}>
            <Link to={`/${lang}portfolio/${article.id}`}>
                <Overlay>
                    <h2>{article.name}</h2>
                </Overlay>
                <PortImg src={article.image} alt={article.name} />
            </Link>
        </Box>
        );
    return(
        <Nav>
        <h1>Portfolio</h1>
        {items}
        </Nav>);};
