// import the useContext hook from 'react', no need for Component since we are using an RFC
import React, { useContext} from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

// import the useParams hook from React Router
import {Link, useParams} from 'react-router-dom'
import { RoomContext } from '../context'

// Transform the RCC to an RFC
export default function SingleRoom() {
    // Get the slug using React Router's useParams hook
    const { slug } = useParams();
    
    // Get the context we defined in context.js using React's useContext hook
    const context = useContext(RoomContext);

    // Similar to the tutorial, we access the getRoom function through our context (no need for 'this')
    const { getRoom } = context;

    // Get the room object that matches our slug like in the tutorial (no need to access state)
    const room = getRoom(slug);

    // Other than no longer needing the render function, everything else should be the same as in the tutorial
    if (!room){
      return <div className='error'>
        <h3>no such room could be found</h3>
        <Link to='/rooms' className='btn-primary'>
          back to rooms
        </Link>
      </div>
    }
    const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
    return (
      <Hero hero='roomsHero'>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className='btn-primary'>
            back to rooms
          </Link>
        </Banner>
      </Hero>
    )
  }
