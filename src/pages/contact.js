import React,{useContext} from 'react';
import {LangContext} from '../LangContext';
import styled from 'styled-components';
import Form from '../components/contactForm';
const Contact=styled.div `
    display:grid;
    margin-bottom:110px;
    grid-template-columns:repeat(12,8.333vw);
    grid-auto-rows:minmax(1vw,auto);
    h1{
        grid-column:2/12;
        grid-row:1/2;
        text-align:center ;
        font-size:35px;
    }
    @media only screen and (min-width:900px) {
        .inprnt{
            margin:auto;
            grid-column:7/12;
            grid-row:4/6;
            text-align:center;
            a{
                font-size:1.5vw;
                font-weight:bold;
            }
        }
        .main{
            grid-column:7/12;
            grid-row:2/4;
            margin:auto;
            a{
                margin:15px 0;
                display:block;
                font-weight:bold;
                font-size:30px;
                text-align:left;
            }
        }
        .CForm{
            margin:auto 0 auto auto;
            grid-column:2/6;
            grid-row:2/6;
        }
        .basic{
           display:none;
        }
        .footer{
            .more{
                grid-column:1/3;
                grid-row:1/2;
                margin:auto;
                p{font-size:20px;
                display:inline;}
                .link{display:inline;}
            }
            .basic{
                margin:20px 0;  
                display:block;
                grid-row:1/2;
                text-align:right;
                margin-right:20px;
                p{display:inline-block;
                text-align:left;
                font-size:12px;
                margin:0 15px;}
                grid-column:3/4;

            }
        }
    }
    @media only screen and (max-width:900px) {
        .inprnt{
        margin:auto;
        grid-column:2/12;
        grid-row:4/5;
        text-align:center;
            a{
                font-size:18px;
                font-weight:bold;
            }
        }
        .basic{
            grid-column:2/12;
            grid-row:6/7;
            text-align:center;
            p{text-align:left;}
            margin:50px auto 0 auto;
        }
        .main{
            grid-column:2/12;
            grid-row:2/3;
            margin:auto;
            a{
                text-align:center;
                margin:15px 0;
                display:block;
                font-weight:bold;
                font-size:20px;
            }
        }
        .CForm{
            margin:auto;
            grid-column:1/13;
            grid-row:3/4;
        }
        .footer{
            .more{ 
                grid-column:1/4;
                margin:0 10px;
                
            }
            .basic{
                display:none;}
        }
    }
.link{
    margin:16px;
    font-weight:bold;
    a{margin:0 15px}
    }
.footer{
    border-top:1px solid black;
    background-color:white;
    max-width:100%;
    width:100%;
    text-align:center;
    position: fixed;
    bottom:0;
    display:grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: auto;
};
`
export default()=>{
    const [lang,setLang]= useContext(LangContext);
    const Main =(
        <div className="main">
            <a href="mailto:fischmeister.art%40gmail.com">fischmeister.art&#064;gmail.com</a>
            <a href="tel:+420 607 028 769">+420 607 028 769</a>
        </div>
    );
    const Legal =(
        <div className="basic">
                    <p>Martina Světlíková<br/>
                    Volutová 2521/18<br/> 158 00<br/> Praha 5 - Stodůlky</p>
                    <p>IČ: 07798164<br/>
                    Fyzická osoba zapsaná<br/> v Živnostenském rejstříku<br/> od 15.01.2019</p>
                </div>
        );
    const Link =(
        <div className="link">
            <a href="https://www.facebook.com/martinafischmeister/" target="_blank">Facebook</a>
            {"|"}
            <a href="https://www.instagram.com/fischmeisterr/" target="_blank"> Instagram </a>
            {"|"}
            <a href="https://www.behance.net/fischmeister" target="_blank">Behance</a>
        </div>
        );
    switch(lang){
    case 'en':
        return(
            <Contact>
                <h1>Contact Me</h1>
                <Form/>
                {Main}
                <div className="inprnt">
                    <a href="https://www.inprnt.com/gallery/fischmeister/" target="blank">
                        You can purchase my prints at INPRNT.com
                    </a>
                </div>
                {Legal}
                <div className="footer">
                    <div className="more">
                        <p>You can find news and more of my art here:</p>
                        {Link}
                    </div>
                    {Legal}
                </div>
            </Contact>
        );
    case 'cz' :
        return(
            <Contact>
                <h1>Kontaktujte mě</h1>
                <Form/>
                {Main}
                <div className="inprnt">
                    <a href="https://www.inprnt.com/gallery/fischmeister/" target="blank">
                        Mé tisky můžete zakoupit na INPRNT.com
                    </a>
                </div>
                {Legal}
                <div className="footer">
                    <div className="more">
                        <p>Novinky a další ukázky tvorby naleznete zde:</p>
                        {Link}
                    </div>
                    {Legal}
                </div>
            </Contact>
        );
    default:return null;
    }
}