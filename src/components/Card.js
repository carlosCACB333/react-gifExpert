import React from 'react'
import  './styles/Card.css'

const Card = (props) => {

    

    return (
      <div className='col-3 '>
            <div className="card border-info bg-transparent" >
               
                <img src={props.dato.url} alt="foto" />
                <div className="card-body text-info">
                    <h5 className="card-title">{props.dato.title ? props.dato.title:'sin titulo'}</h5>
                    <p className="card-text">fecha:{ props.dato.date }</p>
                </div>
                <div className="card-footer bg-transparent border-info">Footer</div>
            </div>
      </div>
    )
}

export default Card
