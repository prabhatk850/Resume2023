
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import ToggleSwitch from "./Toggleswitch";
import { useState } from "react";
import Education from "./Education";
import Employement from "./Employement";




function P1() {

  const [toggle,setToggle] =useState("true")

  const handleChange = ()=>{
    setToggle(!toggle)
    // console.log("first",toggle)
  }
  
  const Wrapper = styled.div`
    font-size: 20px;
    padding: 20px 50px;
  `;
  const Headding1 = styled.div`
  font-size: 30px;
  padding: 30px 0;
  display: flex;
`;
  const Profile = styled.div`
    height: 55px;
  `;
  const Headding = styled.div` 
    font-size: 30px;
    padding: 30px 0;
    margin-left: 5px;
    display: flex;
    color: #cc0000;
    width: 300px;
  `;
  const Ed=styled.div`
  padding-left: 10px;
  font-size: 30px;
  padding-top: 30px;
    display: flex;
    color: #cc0000;
    width: 300px;
  `;
  const Emphis = styled.div`
  display: inline-flex;
  justify-content: space-around;
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
      <Headding>Employement History</Headding>
      <br></br>
      
      <ToggleSwitch setData={setToggle}/>
      <Ed>Education</Ed>

      
         
      </Headding1>
      {toggle?<Education/>:<Employement/>}
      <br></br>
      <br></br>
     

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
