import React from 'react';
const Link = props=> {
    function isDisabled(){
        if(props.active === props.type){
            return true;
        }
        else{
            return false;
        }
    }
    return (
        <button type="submit" onClick={()=>{props.listType(props.type)}} disabled={isDisabled()}>{props.type}</button>
    );
}

export default Link;