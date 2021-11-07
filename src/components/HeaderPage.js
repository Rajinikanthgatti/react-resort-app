import React from 'react'

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