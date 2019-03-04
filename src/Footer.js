import React, { Component } from 'react';
import Link from './Link';

const Footer =props =>{
return(
      <React.Fragment>
      <span>show</span>
      <Link type="ALL" listType={props.listType} active={props.active}/>
      <Link type="ACTIVE" listType={props.listType} active={props.active}/>
      <Link type="COMPLETED" listType={props.listType} active={props.active}/>
      </React.Fragment>    
);
}

export default Footer;