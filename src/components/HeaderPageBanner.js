import React from 'react'

export default function HeaderPageBanner({title, subtitle, children}) {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}
