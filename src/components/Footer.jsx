import React from 'react'
import styled from 'styled-components';
import Items from "./Items";
import { contact } from "../assets/data/contact";


import call  from '../assets/data/call.jpg';
import email  from '../assets/data/email.jpg';
import follow  from '../assets/data/follow.jpg';
import c  from '../assets/data/c.jpg';

import linkedin from '../assets/data/linkedin.jpg';
import skype from '../assets/data/skype.jpg';
import github from '../assets/data/github.jpg';
import codepen from '../assets/data/codepen.jpg';




const Myfooter = styled.div`
margin-top : 3.8rem;
padding : 10px;
background-color: rgb(121, 0, 0);
display : flex;
justify-content : center;
gap:4rem;

`
// const Myicon = styled.div`
// height: 10px;
// display: flex;
// justify-content : center;
// gap : 2px;
// margin-top: 2rem;
// margin-left : -12rem;

// `
const Myimg = styled.img`
height: 30px;
width : 20%;

`



function Footer() {
    return (
        <Myfooter >

          <Items img={call} content="Call" ><p>{contact.phone}</p></Items>
          <Items img={email} content="Email" ><p>{contact.email}</p></Items>
          <Items img={follow} content="Follow" >
            <div>
                <Myimg src={linkedin}/>    
                <Myimg src={skype}/>
                <Myimg src={github}/>
                <Myimg src={codepen}/>
            </div>   
          </Items>
          <Items img={c} content="GoMyCode" ><p>Recreated by me</p></Items>
                  
        </Myfooter>
    )
}

export default Footer;
