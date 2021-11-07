import React from 'react'
import { withRoomConsumer } from '../context'
import Loading from './Loading'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
/**
 * 
 * @param {Context} will be received from context file
 * Using higher order function to access the context data
 * @returns 
 */
function RoomContainer({context}) {
    const {loading, rooms, sortedRooms} = context;
    //console.log(context)
    if(loading){
        return <Loading/>
    }
    return(
        <div>
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
            </div>
    )
}
export default withRoomConsumer(RoomContainer);
/**
 * using regular approach to access context data
 * @returns 
 * export default function RoomContainer() {
    return (
        <RoomConsumer>{ value => {
            console.log(value);
            const {loading, rooms, sortedRooms} = value;
            if(loading){
                return <Loading/>
            }
            return(
                <div>
                    <RoomFilter rooms={rooms}/>
                    <RoomList rooms={sortedRooms}/>
                    </div>
            )
        }}
        </RoomConsumer>
    )
}

 */