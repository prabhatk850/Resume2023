import React, { useState } from "react";


function Toggleswitch(props) {
  const [toggle, setToggle] = useState(true);

  // var  x = toggle
  function changeX(){
   
    props.setData(toggle)
  }
  function handleChange(){
    setToggle(!toggle)
    console.log("first",toggle)
    changeX()
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
