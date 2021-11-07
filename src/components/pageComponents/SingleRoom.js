import React, { Component } from 'react'
import defaultBcg from '../../images/room-1.jpeg'
import HeaderPageBanner from '../HeaderPageBanner'
import { RoomContext } from '../../context'
import { Link } from 'react-router-dom'
import StyledHeader from '../StyledHeader'

export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state = {
            slug: this.props.match.params.type,
            defaultBcg
        }
    }
    static contextType = RoomContext
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug)
        if(!room){
            return(
                <div className="err-msg">
                    <h3>No Such Room Could be found...</h3>
                    <Link to="/rooms" className="btn-primary">Back to rooms</Link>
                </div>
            )
        }
        console.log(room)
        const {name, description, capacity, size, price, pets, images, breakfast, extras} = room
        const [mainImg, ...defaultImgs] = images;
        return (
            <>
            <StyledHeader img={mainImg || this.state.defaultBcg}>
                <HeaderPageBanner title={`${name} room`} >
                <Link to="/rooms" className="btn-primary">Back to rooms</Link>
            </HeaderPageBanner>
            </StyledHeader>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultImgs.map((item, key) => {
                        return <img key={key} src={item} alt={name}/>
                    })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price : ${price}</h6>
                        <h6>size : {size} SQFT</h6>
                        <h6>
                            max capacity :
                            {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                        </h6>
                        <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                        <h6>{breakfast && "free breakfast included"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras </h6>
                <ul className="extras">
                    {extras.map((item, index) => (
                    <li key={index}>- {item}</li>
                    ))}
                </ul>
            </section>
            </>
        )
    }
}
