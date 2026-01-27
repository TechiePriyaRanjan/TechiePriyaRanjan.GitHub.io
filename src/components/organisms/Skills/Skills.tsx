import React from 'react'

import { skills } from '../../../data'
import Image from 'next/image';

function Skills() {
  return (
    <section className='p-16 m-12 flex flex-wrap justify-center relative'>
      {/* <h3 className='my_skills'>My Skills</h3> */}
      {skills?.map((skill) => (
        <div key={skill.id} className='m-4 p-4 flex flex-col justify-center items-center'>
          <Image title={skill.name} src={skill.icon} height={100} width={100} alt={skill.name} />
          <small className='mt-2 font-medium'>{skill.name}</small>
        </div>
      ))}
    </section>
  )
}

export default Skills