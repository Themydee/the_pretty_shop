import React from 'react'
import './descriptionbox.css'

const Descriptionbox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>

        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus corrupti temporibus fugiat sit fuga esse, totam suscipit in, harum mollitia eos itaque quaerat natus?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt id voluptatibus, iste eum error necessitatibus dicta perspiciatis recusandae nihil totam, repellat ratione maxime quibusdam deserunt. Labore fugit aut nam assumenda!</p>
            
        </div>
    </div>
  )
}

export default Descriptionbox