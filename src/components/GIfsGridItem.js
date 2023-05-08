import React from 'react'

export const GIfsGridItem = ({id, title, url}) => {

    // console.log(id, title, url);
    return (
        <div className='card animate__animated animate__fadeIn'>
           <div>
            <img src={url} alt={title} />
            <p>{title}</p>
           </div>
        </div>
    )
}

