import React from 'react'
import { Link } from 'react-router-dom'
import HeaderPage from '../HeaderPage'
import HeaderPageBanner from '../HeaderPageBanner'

export default function ErrorPage() {
    return (
        <HeaderPage>
            <HeaderPageBanner title="404" subtitle="Page Not Found">
                <Link to="/" className="btn-primary">RETURN HOME</Link>
            </HeaderPageBanner>
        </HeaderPage>
    )
}
