import React from 'react'
import { Link } from 'react-router-dom';
import defautlImg from '../images/room-1.jpeg'

export default function Room({room}) {
    const {name, images, slug, price} = room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defautlImg} alt="single Room"></img>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>Per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                    Features
                </Link>
            </div>
            <div className="room-info">
                {name}
            </div>
        </article>
    )
}
