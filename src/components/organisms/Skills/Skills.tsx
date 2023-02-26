import React from 'react'
import './Skills.scss';
import { skills } from '../../../data'
import Image from 'next/image';

function Skills() {
  return (
    <section className='skill__container'>
      {/* <h3 className='my_skills'>My Skills</h3> */}
      {skills?.map((skill) => (
        <div key={skill.id} className='skill_wrapper'>
          <Image title={skill.name} src={skill.icon} height="100" width="100" alt={skill.name} />
          <small>{skill.name}</small>
        </div>
      ))}
    </section>
  )
}

export default Skills