import React from 'react'

export const Tag = ({tag, color='#008000'}) => {
   
    return (
        <div className={`flex justify-center border text-gray-400  rounded-lg px-2 d`} style={{ borderColor: `${color}`, boxShadow: `0px 2px 5px ${color}` }}>
            {tag}
        </div>
    )
}

