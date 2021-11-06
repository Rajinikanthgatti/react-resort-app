import React from 'react'
import { Link } from 'react-router-dom'
import HeaderPage from '../HeaderPage'
import HeaderPageBanner from '../HeaderPageBanner'

export default function Rooms() {
    return (
       <HeaderPage type="roomHeader">
           <HeaderPageBanner title="Our Rooms" subtitle="">
               <Link to="/" className="btn-primary">RETURN HOME</Link>
           </HeaderPageBanner>
       </HeaderPage>
    )
}
