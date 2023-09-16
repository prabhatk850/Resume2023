import styled from "styled-components";
import Typewriter from "typewriter-effect";
import ToggleSwitch from "./Toggleswitch";
import { useState } from "react";
import Education from "./Education";
import Employement from "./Employement";

function P1() {
  const [toggle, setToggle] = useState("false");

  

  const Wrapper = styled.div`
    font-size: 20px;
    padding: 20px 50px;
    margin-bottom: 20px;
    @media (max-width: 767px) {
      padding: 0px 18px;
    }
  `;
  const Headding1 = styled.div`
    font-size: 30px;
    padding: 30px 0;
    display: flex;
    @media (max-width: 767px) {
      padding-top: 0;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  `;
  const Profile = styled.div`
    height: 55px;
    @media (max-width: 767px) {
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
    @media (max-width: 767px) {
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
    @media (max-width: 767px) {
      font-size: 25px;
      padding: 15px 0;
    }
    @media (min-width: 768px) {
      display: none;
    }
  `;
  const HeaddingMobile = styled.div`
    font-size: 30px;
    padding: 30px 0;
    display: flex;
    color: #cc0000;
    width: 300px;
    @media (max-width: 767px) {
      display: none;
    }
  `;
  const Ed = styled.div`
    font-size: 30px;
    margin-left: 20px;
    padding: 30px 0;
    display: flex;
    color: #cc0000;
    width: 300px;
    @media (max-width: 767px) {
      padding: 15px 0;
      margin-left: 15px;
      font-size: 25px;
    }
  `;
  const Emphis = styled.div`
    display: inline-flex;
    justify-content: space-around;
    margin-bottom: 25px;
    width: 100%;

    @media (max-width: 767px) {
      display: none;
    }
  `;

  const EmphisMob = styled.div`
    width: 100%;
    font-size: 16px;
    @media (min-width: 768px) {
      display: none;
    }
  `;

  const Fromto = styled.div`
    width: 110px;
    font-size: 15px;
    margin-right: 70px;
    margin-bottom: 5px;
    @media (max-width: 767px) {
      margin-right: 0px;
      color: gray;
      font-size: 14px;
      width: auto;
    }
  `;

  const Comapany = styled.div`
    font-size: 25px;
    padding-left: 12px;
    width: 100%;
    padding-right: 0;
    margin-bottom: 5px;

    @media (max-width: 767px) {
      padding-left: 0;
      padding-right: 0;
      font-size: 16px;
      margin-bottom: 15px;
    }
  `;
  const Capture = styled.div`
    width: 100%;
  `;

  const Skills = styled.div`
    line-height: 1.6em;
    
  `;

  const Allskills= styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
  @media(max-width: 768px){
      display: none;

    }
  
  `;

  const MobSkills=styled.div`
  line-height: 1.7em;
  font-size:18px;
  @media (min-width: 767px){
    display: none;
  }
  `;

  return (
    <Wrapper>
      <Headding>Profile</Headding>
      <Profile>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay("30")
              .typeString(
                `
                            Experienced Software Developer,
                            Working as a Frontend developer, Backend developer, Full-stack developer & Pega developer.
                            Over the last year working mostly on Frontend part,
                            So wants to keep working as Full-stack developer with a focus on Frontend.
                          `
              )
              .pauseFor(2000)
              .start();
          }}
        />
      </Profile>
      <Headding1>
        <HeaddingMobile>Employment History</HeaddingMobile>
        <Ep>Employment </Ep>
        <br></br>

        <ToggleSwitch setData={setToggle} />
        <Ed>Education</Ed>
      </Headding1>
      {toggle ? <Employement /> : <Education />}

      <Headding>Certifications</Headding>
      <Emphis>
        <Fromto> Nov 2022</Fromto>

        <Comapany>
          Pega Certified Senior system architect(CSSA), Pegasystem
        </Comapany>
      </Emphis>

      <Emphis>
        <Fromto>Jun 2022</Fromto>

        <Comapany>Pega Certified system architect(CSA), Pegasystem</Comapany>
      </Emphis>

      <Emphis>
        <Fromto>Oct 2021</Fromto>

        <Comapany>The Complete 2021 Web Developement Bootcamp, Udemy</Comapany>
      </Emphis>
      <Emphis>
        <Fromto>Nov 2021</Fromto>

        <Comapany>Full Stack Java Developer, Udemy</Comapany>
      </Emphis>
      <Capture>
        <EmphisMob>
          <Fromto> Nov 2022</Fromto>

          <Comapany>Pega Certified Senior System Architect(CSSA)</Comapany>
        </EmphisMob>

        <EmphisMob>
          <Fromto>Jun 2022</Fromto>

          <Comapany>Pega Certified System Architect(CSA)</Comapany>
        </EmphisMob>

        <EmphisMob>
          <Fromto>Nov 2021</Fromto>

          <Comapany>Full Stack Java Developer</Comapany>
        </EmphisMob>

        <EmphisMob>
          <Fromto>Oct 2021</Fromto>

          <Comapany>Complete 2021 Web Developement Bootcamp</Comapany>
        </EmphisMob>

        <Allskills>
        <Skills>
        <Headding>Technical Skills</Headding>
          -Object-Oriented Programming (OOP)<br></br>
          -Data Structures and Algorithms<br></br>
          -Java Programming<br></br>
          -Database Management and SQL<br></br>
          -Agile/Scrum<br></br>
          -React.js<br></br>
          -JavaScript (ES6+)<br></br>
          -HTML/CSS<br></br>
          -React Hooks<br></br>
          -Component Libraries<br></br>
          -Git<br></br>
        </Skills>

        
        <Skills>
        
         <Headding>Soft Skills</Headding>

          -Problem-Solving<br></br>
          -Communication<br></br>
          -Attention to Detail<br></br>
          -Adaptability<br></br>
          -Teamwork<br></br>
        </Skills>
        <skills></skills>
        </Allskills>
        
        
        <MobSkills>
        <Headding>Technical Skills</Headding>
          -Object-Oriented Programming (OOP)<br></br>
          -Data Structures and Algorithms<br></br>
          -Java Programming<br></br>
          -Database Management and SQL<br></br>
          -Agile/Scrum<br></br>
          -React.js<br></br>
          -JavaScript (ES6+)<br></br>
          -HTML/CSS<br></br>
          -React Hooks<br></br>
          -Component Libraries<br></br>
          -Git<br></br>
        </MobSkills>

        
        <MobSkills>
        
         <Headding>Soft Skills</Headding>

          -Problem-Solving<br></br>
          -Communication<br></br>
          -Attention to Detail<br></br>
          -Adaptability<br></br>
          -Teamwork<br></br>
        </MobSkills>
      </Capture>
    </Wrapper>
  );
}

export default P1;
