import React from 'react';


// const Card = (props) =>{
    const Card = ({name, email, id}) =>{
// const {name, email, id} = props // destructuring
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            
            <div>
                <img alt='robot' src={`https://robohash.org/${id}?200x200` }/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;