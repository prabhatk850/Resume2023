import React from 'react'
import styled from "styled-components";

function Employement() {
  
  const Emphis = styled.div`
  display: flex;
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
width: 250px;
font-size: 15px;
@media(max-width: 767px){
  color: gray;
  margin-top: 20px;
  padding-bottom: 5px;
}
`;


const Detail = styled.div`
width:950px;
font-size: 20px;
`;

const Place = styled.div`
width: 140px;
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
const Duration1=styled.div`
margin-top: 32em;
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
    <Duration1>6 Months</Duration1>
  </Fromto>
  <Detail>

    <Comapany>Software Developer - Coforge ltd</Comapany>
    <br></br>
    <Info>As a React.js developer, I played a pivotal role in crafting innovative and performant web applications. Leveraging my expertise in React.js and JavaScript (ES6+), I championed component-based development, ensuring the maintainability and scalability of our projects.
    <br></br><br></br>
    Navigational fluency with React Router allowed me to create seamless user experiences, while lifecycle methods and hooks, such as useState and useEffect, empowered me to optimize application behavior and performance.
    <br></br><br></br>
    In collaboration with the team, I adopted Front-End Frameworks such as Material-UI and Bootstrap, ensuring consistency and rapid development. My version control proficiency with Git streamlined code collaboration and facilitated efficient code reviews.
    <br></br><br></br>
    I mastered code splitting techniques to optimize loading times and implemented server-side rendering (SSR) with React, particularly using Next.js, for SEO-friendly single-page applications (SPA).
    <br></br><br></br>
    I embraced Agile/Scrum methodologies, participating actively in sprint planning, stand-up meetings, and retrospectives, consistently delivering high-quality code on time. My problem-solving and troubleshooting skills were instrumental in resolving complex technical challenges, ensuring smooth project execution.
    <br></br><br></br>
    </Info>
    <br></br>
    <Info>As a Pega Developer Designed & Developed using PRPC(8.7)
    according to business requirements.<br></br><br></br> Designed and Implemented UI.<br></br><br></br>
    Implement case management solutions, decision strategies, and business rules for optimized workflow automation.<br></br><br></br>
    Worked on Activity, Flowaction, Flows, Data Transform, Report Definition, Data instances,
    Dynamic System Setting, and Sections.<br></br><br></br>
    Participate in Agile development methodologies and contribute to sprint planning, backlog refinement, and daily stand-up meetings.
</Info>
  </Detail>
  <Place>Greater Noida</Place>
</Emphis>

<Emphis style={{marginTop:"70px"}}>
  <Fromto>Jun 2021 - Jan 2022</Fromto>
  <Detail>
    <Comapany>Intern - Techo Worx</Comapany>
    <br></br>
    During my tenure, I actively contributed to diverse software components, all built with Java. In this dynamic environment, I consistently demonstrated coding proficiency by crafting code blocks aligned with project requirements. This process required a deep understanding of each component's functionality and expert use of Java to deliver efficient solutions.
    <br></br><br></br>
    Adaptability was a hallmark of my work, allowing for seamless transitions between distinct project demands, resulting in consistently high-quality code. My commitment to aligning code with precise project specifications was a cornerstone of our team's overall success.
  </Detail>
  <Place>Ghaziabad</Place>
</Emphis>

<EmphisMob>
<Comapany> Software Developer - Coforge ltd </Comapany>
<Fromto>Mar 2022 - Sept 2022 </Fromto>
<Info>As a React.js developer, a pivotal role was played in crafting innovative and performant web applications. Expertise in React.js and JavaScript (ES6+) was leveraged to champion component-based development, ensuring the maintainability and scalability of projects.
<br></br><br></br>
Navigational fluency with React Router facilitated the creation of seamless user experiences, while lifecycle methods and hooks, such as useState and useEffect, were harnessed to optimize application behavior and performance.
<br></br><br></br>
In collaboration with the team, Front-End Frameworks such as Material-UI and Bootstrap were adopted to ensure consistency and rapid development. Proficiency in version control with Git streamlined code collaboration and facilitated efficient code reviews.
<br></br><br></br>
Code splitting techniques were mastered to optimize loading times, and server-side rendering (SSR) with React, particularly using Next.js, was implemented for SEO-friendly single-page applications (SPA).
<br></br><br></br>
Agile/Scrum methodologies were embraced, actively participating in sprint planning, stand-up meetings, and retrospectives, consistently delivering high-quality code on time. Problem-solving and troubleshooting skills proved instrumental in resolving complex technical challenges, ensuring smooth project execution.
<br></br><br></br>
 </Info>
<Fromto>Sept 2022 - Aug 2023 </Fromto>
<Info>As a Pega Developer Designed & Developed using PRPC(8.7)
    according to business requirements.<br></br><br></br> Designed and Implemented UI.<br></br><br></br>
    Implement case management solutions, decision strategies, and business rules for optimized workflow automation.<br></br><br></br>
    Worked on Activity, Flowaction, Flows, Data Transform, Report Definition, Data instances,
    Dynamic System Setting, and Sections.<br></br><br></br>
    Participate in Agile development methodologies and contribute to sprint planning, backlog refinement, and daily stand-up meetings.

</Info>
<br></br>
<Comapany>Intern - Techo Worx</Comapany>
<Fromto>Jun 2021 - Jan 2022</Fromto>
<Info>
During my tenure, I actively contributed to diverse software components, all built with Java. In this dynamic environment, I consistently demonstrated coding proficiency by crafting code blocks aligned with project requirements. This process required a deep understanding of each component's functionality and expert use of Java to deliver efficient solutions.
<br></br><br></br>
Adaptability was a hallmark of my work, allowing for seamless transitions between distinct project demands, resulting in consistently high-quality code. My commitment to aligning code with precise project specifications was a cornerstone of our team's overall success.

</Info>
</EmphisMob>
</div>
)
}

export default Employement