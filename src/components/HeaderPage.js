import React from 'react'
import { Link } from 'react-router-dom'
import HeaderPageBanner from './HeaderPageBanner'

export default function HeaderPage({type, children}) {
    return (
        <header className={type}>
            {children}
        </header>
    )
}
HeaderPage.defaultProps = {
    type: "defaultHomePage",
}