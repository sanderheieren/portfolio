import React from 'react'
import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";

const Me = props => {
  return (
    <div className="me">
      <h1 className="title">Sander Heieren</h1>
      <div className="connect">
        <h3 className="sub-title">Let's Connect</h3>
        <div className="connect-profiles">
          <a href="https://www.linkedin.com/in/sanderheieren/" target="_blank">
          <GrLinkedin className="icon-link linkedin"/>
          </a>
          <a href="https://github.com/sanderheieren" target="_blank">
          <GrGithub className="icon-link github"/>
          </a>
          <a href="https://twitter.com/Sanderheieren" target="_blank">
          <GrTwitter className="icon-link twitter"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Me
