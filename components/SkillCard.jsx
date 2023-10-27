import React from 'react'
import { Tag } from './Tag'

const SkillCard = ({skill}) => {
    
   const {id, name, skills} = skill;


    return (
        <div className='flex flex-col border-2 border-black rounded-lg p-4 bg-black'>
                <h2 className=' text font-bold py-2 '>{name}</h2>
                <div className='flex flex-wrap gap-4'>
                {skills.map((e) => (
                    <Tag  key={id} tag={e.tech} color={e.color} />
                       
                ))}
                </div>

        </div>
    )
}

export default SkillCard