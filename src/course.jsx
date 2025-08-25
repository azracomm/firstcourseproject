import React from 'react'

function course({ course }) {
    const { id, title, description, price, image } = course;
    return (
        <div className='course'>
            <div>
                <div>
                    <img className='course-img' src={image} width={150} height={100} />
                    <h4 className='course-title'>{title}</h4>
                    <h5 className='course-desc'>{description}</h5>
                    <h3 className='course-price'>{price}</h3>


                </div>
            </div>

        </div>
    )
}

export default course
