import React from 'react'
import styled from "styled-components";

function Education() {
    const Emphis = styled.div`
    display: inline-flex;
    margin-bottom: 25px;
    justify-content: space-around;
   
    @media(max-width: 767px){
    display: none;
  }
`;

const EmphisMob=styled.div`
margin-bottom: 10px;

@media(min-width:768px){
  display: none;
}
`;

 const Fromto = styled.div`
 width: 220px;
 font-size: 15px;
 @media(max-width: 767px){
  color: gray;
  font-size:12px;
  margin-bottom: 30px;
  padding-top: 2px;
}
`;


const Detail = styled.div`
 width:950px;
 font-size: 20px;
 /* padding-left: 30px; */
 padding-right: 40px;

 @media (max-width: 767px) {
  font-size: 14px;
   width:100%;
   padding-right:0px;
 }
`;

const Place = styled.div`
 width: 100px;
 font-size: 15px;

`;
  const Degree = styled.div`
    font-size: 25px;
    font-weight: 900;
    @media(max-width: 767px){
      font-size: 18px;
      padding-bottom: 7px;
      
    }
  `;
//   const Headding = styled.div` 
//   font-size: 30px;
//   display: flex;
//   color: #cc0000;
//   width: 300px;
// `;
  
  return (
<div>  
<Emphis>
    <Fromto>Mar 2022 - Mar 2024
    </Fromto>
    <Detail>
      <Degree>Swami Vivekanand Subharti University</Degree>
      Master of Business Administration (Information Technology & Finanace Management)
      
    </Detail>
    <Place>Meerut</Place>
</Emphis>
  
<Emphis>
    <Fromto>Aug 2017 - Aug 2021</Fromto>
    <Detail>
    <Degree>Dr. A.P.J. Abdul Kalam Technical University</Degree>
      B.Tech (Computer Science)
      </Detail>
    <Place>Ghaziabad</Place>
</Emphis>
  
<Emphis>
    <Fromto>Mar 2016 - Mar 2017
    </Fromto>
    <Detail>
      <Degree>Kendriya Vidyalaya NFC Vigyan Vihar</Degree>
      Intermediate
    </Detail>
    <Place>Delhi</Place>
</Emphis>
  
<Emphis>
  <Fromto>Mar 2014 - Mar 2015
    </Fromto>
    <Detail>
      <Degree>Kendriya Vidyalaya No.1 AFS Hindon</Degree>
      High School
    </Detail>
    <Place>Ghaziabad</Place>
</Emphis>




<EmphisMob>
      <Degree>Swami Vivekanand Subharti University</Degree>
    <Detail>
      MBA(Information Technology & Finanace Management)
    </Detail>
<Fromto>Mar 2022 - Mar 2024 </Fromto>

    <Degree>Dr. A.P.J. Abdul Kalam Technical University</Degree>
<Detail>
      B.Tech (Computer Science)
</Detail>
<Fromto>Aug 2017 - Aug 2021 </Fromto>


      <Degree>Kendriya Vidyalaya NFC Vigyan Vihar</Degree>
<Detail>
      Intermediate
</Detail>
<Fromto>Mar 2016 - Mar 2017</Fromto>

      <Degree>Kendriya Vidyalaya No.1 AFS Hindon</Degree>
<Detail>
      High School
</Detail>
<Fromto>Mar 2014 - Mar 2015</Fromto>

</EmphisMob>
</div>
  )
}

export default Education