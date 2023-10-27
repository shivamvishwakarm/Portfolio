import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from './Tag';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
    const {id, title, description, image, link, technology } = project;

    return (
        <Link href={link} target="_blank"> 

        <div className="flex flex-col border border-[#0365F9] bg-black rounded-md max-w-sm  m-2 p-2">
            <div className='flex border border-black px-10 py-16  bg-gradient-to-r from-blue-500 to-purple-400 to-black  justify-center'>
                <h2 className='font-black	'>{title}</h2>
            </div>
            <div className='border border-black my-2 '>
                <p>{description}</p>
            </div>
            <div className='flex flex-wrap gap-2 '>
                {
                    technology.map((e)=>(
                        <Tag key={id} tag={e.tech} color={e.color} />
                    )
                    )
                }
               
            </div>
        </div>
        </Link>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        projectUrl: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectCard;
