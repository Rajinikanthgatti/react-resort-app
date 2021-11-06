import React from 'react'
import { Link } from 'react-router-dom'
import FeaturedRooms from '../FeaturedRooms'
import HeaderPage from '../HeaderPage'
import HeaderPageBanner from '../HeaderPageBanner'
import Services from '../Services'

export default function Home() {
    return (
        <>
        <HeaderPage>
            <HeaderPageBanner title="Luxurious rooms" subtitle="deluxe rooms starting at $299">
                <Link to="/rooms" className="btn-primary">Our rooms</Link>
            </HeaderPageBanner>
        </HeaderPage>
        <Services/>
        <FeaturedRooms/>
        </>
    )
}
