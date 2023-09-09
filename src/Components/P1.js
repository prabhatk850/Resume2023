
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import ToggleSwitch from "./Toggleswitch";
import { useState } from "react";
import Education from "./Education";
import Employement from "./Employement";




function P1() {

  const [toggle,setToggle] =useState("false")

  // const handleChange = ()=>{
  //   setToggle(!toggle)
  //    console.log("first",toggle)
  // }
  
  const Wrapper = styled.div`
    font-size: 20px;
    padding: 20px 50px;
    @media (max-width:767px){
      padding: 0px 18px;
    }
  `;
  const Headding1 = styled.div`
  font-size: 30px;
  padding: 30px 0;
  display: flex;
   @media (max-width:767px){
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: 0;
   
    }  
`;
  const Profile = styled.div`
    height: 55px;
    @media (max-width:767px){
      height: 140px;
      font-size: 18px;
    }  
  `;
  
  const Headding = styled.div` 
    font-size: 30px;
    padding: 30px 0;
    display: flex;
    color: #cc0000;
    width: 300px;
    @media (max-width:767px){
      font-size: 25px;
      padding: 15px 0;
      padding-right: 5px;
    }
  `;
  const Ep = styled.div` 
  font-size: 30px;
  padding: 30px 0;
  display: flex;
  color: #cc0000;
  width: 300px;
  @media (max-width:767px){
    font-size: 25px;
    padding: 15px 0;
    padding-right: 5px;
  }
  @media (min-width:768px){
    display: none;
  }
`;
  const HeaddingMobile = styled.div` 
  font-size: 30px;
  padding: 30px 0;
  display: flex;
  color: #cc0000;
  width: 300px;
  @media (max-width:767px){
    display: none;
   
  }
`;
  const Ed=styled.div`
   font-size: 30px;
   margin-left: 10px;
    padding: 30px 0;
    display: flex;
    color: #cc0000;
    width: 300px;
    @media (max-width:767px){
      padding: 15px 0;
      margin-left: 15px;
       font-size: 25px;
    }
  `;
  const Emphis = styled.div`
  display: inline-flex;
  justify-content: space-around;

  @media(max-width:767px ){
    display: none;
  }

`;
const Fromto = styled.div`
width: 77px;
font-size: 15px;
margin-right: 96px;
`;
  
const Detail = styled.div`
width:950px;
font-size: 20px;
padding-left: 40px;
padding-right: 40px;
`;

const Comapany = styled.div`
  font-size: 25px;
  padding-left:12px;
`;


  return (
    <Wrapper>
      <Headding>Profile</Headding>
      <Profile>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay("30")
              .typeString(`
                            Experienced Software Developer,
                            Working as a Frontend developer, Backend developer, Full-stack developer & Pega developer.
                            Over the last year working mostly on Frontend part,
                            So wants to keep working as Full-stack developer with a focus on Frontend.
                          `)
              .pauseFor(2000)
              .start();
          }}
        />
      </Profile>
      <Headding1>
      <HeaddingMobile>Employment History</HeaddingMobile>
      <Ep>Employment </Ep>
      <br></br>
      
      <ToggleSwitch setData={setToggle}/>
      <Ed>Education</Ed>

      
         
      </Headding1>
      {toggle?<Education/>:<Employement/>}
      
      
  <Headding>Certifications</Headding>
  <Emphis>
      <Fromto> Nov 2022
          <br></br>
      </Fromto>
    <Detail>
        <Comapany>Pega Certified Senior system architect(CSSA), Pegasystem</Comapany>
          <br></br>
    </Detail>
  </Emphis>
  <br></br>
  <br></br>
  <Emphis>
      <Fromto>Jun 2022
          <br></br>
      </Fromto>
    <Detail>
        <Comapany>Pega Certified system architect(CSA), Pegasystem</Comapany>
          <br></br>
    </Detail>
  </Emphis>
  <br></br>
  <br></br>
  <Emphis>
      <Fromto>Nov 2021
          <br></br>
      </Fromto>
    <Detail>
        <Comapany>Full Stack Java Developer, Udemy</Comapany>
          <br></br>
    </Detail>
  </Emphis>
  <br></br>
  <br></br>
  <Emphis>
      <Fromto>Oct 2021
          <br></br>
      </Fromto>
    <Detail>
        <Comapany>The Complete 2021 Web Developement Bootcamp, Udemy</Comapany>
          <br></br>
    </Detail>
  </Emphis>

  <Headding>
    Skills
  </Headding>
  
    
 </Wrapper>
  );
}

export default P1;
