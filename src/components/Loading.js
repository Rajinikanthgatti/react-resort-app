import React from 'react'
import loading from '../images/gif/loading-gear.gif'

export default function Loading() {
    return (
        <div className="loading">
            <h4>rooms data loading...</h4>
            <img src={loading} alt=""></img>
        </div>
    )
}
