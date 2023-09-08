import React, { useState } from "react";
import Education from "./Education";
import Employement from "./Employement";

function Toggleswitch(props) {
  const [toggle, setToggle] = useState(true);
  // const handleClick = () => {
  //   setToggle(!toggle)

  // };
  var  x = false
  function changeX(){
 
    return !x
  }
  function handleChange(){
    setToggle(!toggle)
    let data=changeX()
    // console.log("first",data)
    props.setData(toggle)
  }
  return (
    <>
      <div onClick={handleChange} className="ToggleSwitch">
	  <div className={toggle ? 'active' : 'knob'} /><br></br>
	{/* {toggle ?  <Education/>: <Employement/>} */}
      </div>
	</>
  );
}

export default Toggleswitch;
