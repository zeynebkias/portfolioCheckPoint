import React from 'react'
import styled from 'styled-components';

const Myimg = styled.img`
height: 22px;
width : 100%;
border : 1px solid gray; 
`
const Mydiv = styled.div`
height: 0px;

`
function Follow({img, link}) {
    return (
        <Mydiv>
            <Myimg src={img} alt={link}/> 

        </Mydiv>
    )
}

export default Follow;
