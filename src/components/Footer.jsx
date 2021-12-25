import React from 'react'
import styled from 'styled-components';
import Follow from './Follow'
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
const Myicon = styled.div`
height: 0px;
display: flex;
justify-content : center;
gap : 2px;
margin-top: 2rem;
margin-left : -12rem;

`


function Footer() {
    return (
        <Myfooter >

          <Items img={call} content="Call" info={contact.phone}/>
          <Items  img={email} content="Email"  info={contact.email}/>

          <Items img={follow} content="Follow" />
          <Myicon >
          <Follow img={linkedin} link={contact.linkedin}/>
          <Follow img={skype} link={contact.skype}/>
          <Follow img={github} link={contact.github}/>
          <Follow img={codepen} link={contact.codepen}/>
          </Myicon>            
          
          <Items  img={c} content="GoMyCode" info='recreated by me'/>

        </Myfooter>
    )
}

export default Footer;
