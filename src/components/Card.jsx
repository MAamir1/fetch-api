import React from 'react'

function Card(props) {
    return (

        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" >
            <img src={props.product.image} className="card-img-top object-fit-contain " alt="..." style={{ height: '250px' }} />
            <div className="card-body">
                <h5 className="card-title text-truncate">{props.product.title}</h5>
                <p className="card-text text-truncate">{props.product.description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    )
}

export default Card