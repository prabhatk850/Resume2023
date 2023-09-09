import React from 'react'
import styled from "styled-components";

function Employement() {
  
  const Emphis = styled.div`
  display: inline-flex;
  justify-content: space-around;
  margin-bottom: 25px;

  @media(max-width: 768px){
    display: none;
  }
`;

const EmphisMob=styled.div`
margin-bottom: 10px;

@media(min-width:767px){
  display: none;
}
`;

const Fromto = styled.div`
width: max-content;
font-size: 15px;
@media(max-width: 767px){
  color: gray;
  margin-top: 20px;
  padding-bottom: 5px;
}
`;

// const Headding = styled.div` 
//     font-size: 30px;
//     display: flex;
//     color: #cc0000;
//     width: 300px;
//   `;

const Detail = styled.div`
width:950px;
font-size: 20px;
padding-left: 58px;
padding-right: 40px;
`;

const Place = styled.div`
width: max-content;
font-size: 15px;

`;
const Comapany = styled.div`
  font-size: 25px;
  font-weight: 900;

@media(max-width: 767px){
  font-size: 20px;
}  
`;
const Duration=styled.div`
padding-top: 30px;
`;
const Info =styled.div`
@media (max-width: 767px) {
font-size: 18px;
}
`;

return (
  <div><Emphis>
  <Fromto>Mar 2022 - Aug 2023
    <br></br>
    <br></br>
    <Duration>1 Year</Duration>
    <br></br>
    <br></br>
    <br></br>
    <Duration>6 Months</Duration>
  </Fromto>
  <Detail>
    <Comapany>Software Developer - Coforge ltd</Comapany>
    <br></br>
    <Info>Worked as React Developer - Designed and Implemented user interfaces(UIs)
    and UI components using React as a Frontend developement framework.
    Worked on Backend according to the requirements using Node as a Backend developer framework. 
    </Info>
    <br></br>
    <Info>Worked as a Pega Developer - Developed using PRPC(8.7)
    according to business requirements. Designed and Implemented UI.
    Worked on Case Management. Worked on Activity, Flow
    action, Flows, Data Transform, Report Definition, Data instances,
    Dynamic System Setting, and Sections.
    </Info>
  </Detail>
  <Place>Greater Noida</Place>
</Emphis>

<Emphis>
  <Fromto>Jun 2021 — Jan 2022</Fromto>
  <Detail>
    <Comapany>Intern - Techo Worx</Comapany>
    <br></br>
    Worked on multiple software components using JAVA
    <div>Written various blocks of codes according to requirements</div>
  </Detail>
  <Place>Ghaziabad</Place>
</Emphis>

<EmphisMob>
<Comapany> Software Developer - Coforge ltd </Comapany>
<Fromto>Mar 2022 - Sept 2022 </Fromto>
<Info>Worked as React Developer - Designed and Implemented user interfaces(UIs)
    and UI components using React as a Frontend developement framework.
    Worked on Backend according to the requirements using Node as a Backend developer framework. 
</Info>
<Fromto>Sept 2022 - Aug 2023 </Fromto>
<Info>Worked as a Pega Developer - Developed using PRPC(8.7)
    according to business requirements. Designed and Implemented UI.
    Worked on Case Management. Worked on Activity, Flow
    action, Flows, Data Transform, Report Definition, Data instances,
    Dynamic System Setting, and Sections.
</Info>
<br></br>
<Comapany>Intern - Techo Worx</Comapany>
<Fromto>Jun 2021 - Jan 2022</Fromto>
<Info>
Worked on multiple software components using JAVA
<div>Written various blocks of codes according to requirements</div>
</Info>
</EmphisMob>
</div>
)
}

export default Employement