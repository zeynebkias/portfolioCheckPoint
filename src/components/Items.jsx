import React from "react";
import styled from 'styled-components';





const Myfooter = styled.div`
background-color: rgb(121, 0, 0);
display : flex;
gap:1rem;
`
const Myimg = styled.img`
height: 2.5rem;
width :50%;
border :  1px solid gray;

`
const Mydiv = styled.div`
background-color: rgb(121, 0, 0);

`
const Title = styled.h5`
background-color: rgb(121, 0, 0);
color: white;
`
const Info = styled.p`
background-color: rgb(121, 0, 0);
width: 17.5vh;
color: white;
`
function Items({ content, info , img }) {
  return (
    <Myfooter>
            <Myimg src={img} alt="" />
        <Mydiv>
        <Title>{content}</Title>
        <Info>{info}</Info>

        </Mydiv>
    </Myfooter>
  );
}

export default Items;
