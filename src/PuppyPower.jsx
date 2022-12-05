import React from "react";
import Form from "./components/Form";
import Main from "./components/Main";

const PuppyPower = () => { 
    
    return ( 
        <>
        <div id="new-player-form"><Form/></div>
        <div id="all-players-container"></div>
        <Main />
        </>
    )
}
export default PuppyPower