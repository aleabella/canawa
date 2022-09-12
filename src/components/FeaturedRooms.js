import React, { Component } from 'react';
import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';
import Tittle from "./Title";

export default class  FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
    
        let {loading, featuredRooms : rooms} = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room}/>;
        });
   
    return (
        <section className='featured-rooms'>
            <Tittle title='Nuestros Glampings'/>
            <div className='featured-rooms-center'>
                {loading ? <Loading/> : rooms}
            </div>
       </section>
        

        );
  }
}
