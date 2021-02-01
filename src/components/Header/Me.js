import React from 'react'
import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";

const Me = props => {
  return (
    <div className="me">
      <h1 className="title">Sander Heieren</h1>
      <div className="connect">
        <h3>Let's Connect</h3>
        <div className="connect-profiles">
          <GrLinkedin className="icon linkedin"/>
          <GrGithub className="icon github"/>
          <GrTwitter className="icon twitter"/>
        </div>
      </div>
    </div>
  )
}

export default Me
