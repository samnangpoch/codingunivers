import React, { useState } from 'react'
import './Skills.css'
import {SKILLS} from '../../Util/data'
import SkillsCard from './SkillsCard/SkillsCard'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectSkill = (data) => {
        setSelectedSkill(data);
    }
  return (
    <div className='skills-container'>
        <section id="skills">
            <h5>My Skills</h5>

            <div className="skills-content">
                <div className="skills">
                    {SKILLS.map((item) => (
                        <SkillsCard
                            key={item.title}
                            iconUrl= {item.icon}
                            title={item.title}
                            isActive={selectedSkill.title === item.title}
                            onClick={() => {
                                handleSelectSkill(item);
                            }}
                        />
                    ))}
                </div>

                <div className="skills-info">
                    <SkillsInfoCard
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills}
                    />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Skills