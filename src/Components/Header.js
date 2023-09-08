import React from 'react'
import styled  from 'styled-components';
import { AiFillMobile } from 'react-icons/ai';
import { MdEmail} from 'react-icons/md';
import { Container } from 'react-bootstrap';


<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    prabhat
  </div>
</nav>

function Header
() {
  const Wrapper=styled.div`
  background-color: #ff3333;
  padding: 30px 20px 0px 50px;
  `;

  const Name=styled.div`
  padding-top: 5px;
  font-size: 40px;
  color: white;
  font-weight: bold;
  font-style: italic;
  `;

  const Contact =styled.div`
 padding-left: 5px;
 margin-right: 20px;
  `;

  const Contact2 =styled.div`
 /* margin-left:30px ; */
 padding-left: 5px;
  `;

  const Title =styled.div`
  font-size: 20px;
  color: white;
  `;

  const Detail=styled.div`
  display:flex;
  padding: 20px 0;
  font-size: 15px;
  `;

  return (
    <Wrapper>
        <Name>
           Prabhat Kumar Verma
        </Name>
        <Title>
          Software Developer
        </Title>
        <Detail>
        <MdEmail/>
          <Contact>
            Prabhatk850@gmail.com  
          </Contact>
          <AiFillMobile/>
          <Contact2>    
            +91 9968301177
          </Contact2>
        </Detail>

    </Wrapper>
  )
}

export default 
Header