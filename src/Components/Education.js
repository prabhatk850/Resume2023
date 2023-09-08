import React from 'react'
import styled from "styled-components";

function Education() {
    const Emphis = styled.div`
    display: inline-flex;
    justify-content: space-around;
  `;
 const Fromto = styled.div`
 width: max-content;
 font-size: 15px;
 padding-right: 30px;
`;


const Detail = styled.div`
 width:950px;
 font-size: 20px;
 padding-left: 40px;
 padding-right: 40px;
`;

const Place = styled.div`
 width: max-content;
 font-size: 15px;
`;
  const Degree = styled.div`
    font-size: 25px;
  `;
  const Headding = styled.div` 
  font-size: 30px;
  display: flex;
  color: #cc0000;
  width: 300px;
`;
  
  return (
    <div>  <Emphis>
    <Fromto>Mar 2022 - Mar 2024
    </Fromto>
    <Detail>
      <Degree>Swami Vivekanand Subharti University</Degree>
      Master of Business Administration (Information Technology & Finanace Management)
      
    </Detail>
    <Place>Meerut</Place>
  </Emphis>
  <br></br>
  <br></br>
  <Emphis>
    <Fromto>Aug 2017 - Aug 2021</Fromto>
    <Detail>
    <Degree>Dr. A.P.J. Abdul Kalam Technical University</Degree>
      B.Tech (Computer Science)
      </Detail>
    <Place>Ghaziabad</Place>
  </Emphis>
  <br></br>
  <br></br>
  <Emphis>
    <Fromto>Mar 2016 - Mar 2017
    </Fromto>
    <Detail>
      <Degree>Kendriya Vidyalaya NFC Vigyan Vihar</Degree>
      Intermediate
    </Detail>
    <Place>Delhi</Place>
  </Emphis>
  <br></br>
  <br></br>
  <Emphis>
  <Fromto>Mar 2014 - Mar 2015
    </Fromto>
    <Detail>
      <Degree>Kendriya Vidyalaya No.1 AFS Hindon</Degree>
      High School
    </Detail>
    <Place>Ghaziabad</Place>
    </Emphis>
 </div>
  )
}

export default Education