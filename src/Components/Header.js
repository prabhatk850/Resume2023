import React from 'react'
import styled  from 'styled-components';
import { AiFillMobile } from 'react-icons/ai';
import { MdEmail} from 'react-icons/md';



function Header
() {
  const Wrapper=styled.div`
  
  background-color: #ff3333;
  padding: 30px 20px 0px 50px;
  @media (max-width:767px){
    position: sticky;
    top: 0;
    position: -webkit-sticky;
  background-color: #ff3333;
  padding: 30px 20px 0px 20px;
  }
  `;

  const Name=styled.div`
  padding-top: 5px;
  font-size: 40px;
  color: white;
  font-weight: bold;
  font-style: italic;
  @media (max-width: 767px){
    font-size: 35px;
  }
  `;

  const Contact =styled.div`
 padding-left: 5px;
 padding-top: 5px;
 margin-right: 20px;
 @media (max-width:767px){
  margin-right:5px ;
 }
  `;

  const Contact2 =styled.div`
 padding-left: 5px;
 padding-top: 5px;
 @media (max-width: 767px){
  padding-left: 0;
 }
  `;

  const Title =styled.div`
  font-size: 25px;
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
        <MdEmail style={{height:"25px", width:"25px"}} />
          <Contact>
            Prabhatk850@gmail.com  
          </Contact>
          <AiFillMobile style={{height:"25px", width:"25px"}}/>
          <Contact2>    
            +91 9968301177
          </Contact2>
        </Detail>

    </Wrapper>
  )
}

export default 
Header