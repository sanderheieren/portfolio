import React from 'react'
import me from './me1.jpg'
import './about.css'

function About(props) {
  return (
    <section className="about">
      <div className="picture">
        <img className="img-me" src={me} alt=""/>
      </div>
      <article className="info">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum corporis dicta dignissimos enim iusto eligendi delectus atque! Assumenda necessitatibus eos consequuntur accusamus, dolore minus est debitis ratione voluptatum iste sint.
        Harum error nobis illum at, facere sit eaque adipisci sequi, vitae nam, tempore natus aspernatur. Aspernatur tempore nesciunt, porro commodi libero soluta, praesentium officia hic ipsa quasi repudiandae unde nulla.
      </article>
    </section>
  )
}


export default About

