import React from 'react'
import styled  from 'styled-components';
import { AiFillMobile } from 'react-icons/ai';
import { MdEmail} from 'react-icons/md';
import {AiFillGithub} from 'react-icons/ai'
import { Link } from '@material-ui/core';
import {AiFillLinkedin} from 'react-icons/ai'



function Header
() {
  const Wrapper=styled.div`
  
  background-color: #ff3333;
  padding: 30px 20px 30px 50px;
  @media (max-width:767px){
    position: sticky;
    top: 0;
    position: -webkit-sticky;
  background-color: #ff3333;
  padding: 30px 20px 20px 20px;
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
 margin-right: 20px;
 @media (max-width: 767px){
 
 }
  `;

  const Title =styled.div`
  font-size: 25px;
  color: white;
  `;

  const Detail=styled.div`
  display:flex;
  justify-content: space-between;
  font-size: 15px;
  margin-bottom: 10px;
  @media(max-width: 767px){
    display: none;
  } 
  `;
   const Detail1=styled.div`
   display:flex;
   justify-content: space-between;
   font-size: 15px;
   margin-bottom: 10px;
   
   `;
  const MobDetail=styled.div`
  display: flex;
  font-size: 15px;
  justify-content: space-between;
  @media (min-width: 768px){
    display: none;
  }
  `;
  
  const A= styled.div`
  display:flex;
  `;
   const W= styled.div`
   margin-top: 10px;
   @media(min-width: 767px){
    display: flex;
   }
   `;

  return (
    <Wrapper>
        <Name>
           Prabhat Kumar Verma
        </Name>
        <Title>
          Software Developer
        </Title>
        <W>
        <Detail1>
        <A>
          <MdEmail style={{height:"25px", width:"25px"}} />
          <Contact>
            <Link target='_blank' style={{color:"black"}} href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfrsvvtdNKJgTLQwRKGkNmXGPLsQzbtWwmcrtPPxhTGGbQmSWkwSbHxQhjBPpwwVVTsGzg'>Prabhatk850@gmail.com</Link>
          </Contact>
        </A>
        <A>
          <AiFillGithub style={{height:"25px", width:"25px"}} />
          <Contact2>    
            <Link  target='_blank' style={{color:"black"}} href='https://github.com/prabhatk850'>Prabhatk850</Link>
          </Contact2>
        </A>
        </Detail1>
        <Detail>
          <A>
          <AiFillLinkedin style={{height:"25px", width:"25px"}} />
          <Contact2>    
            <Link  target='_blank' style={{color:"black"}} href='https://www.linkedin.com/in/prabhatk850/'>Prabhatk850</Link>
          </Contact2>
          </A>
          <A>
          <AiFillMobile style={{height:"25px", width:"25px"}}/>
          <Contact2>    
            +91 9968301177
          </Contact2>
          </A>
        </Detail>
        <MobDetail>
          <A>
          <AiFillMobile style={{height:"25px", width:"25px"}}/>
          <Contact2>    
            +91 9968301177
          </Contact2>
          </A>
          <A>
          <AiFillLinkedin style={{height:"25px", width:"25px"}} />
          <Contact2>    
            <Link  target='_blank' style={{color:"black"}} href='https://www.linkedin.com/in/prabhatk850/'>Prabhatk850</Link>
          </Contact2>
          </A>
        </MobDetail>
        </W>

    </Wrapper>
  )
}

export default 
Header