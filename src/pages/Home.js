import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';  
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import Map from '../components/Map';


export default function Home() {
  return ( 
  <>
  <Hero>
    <Banner title='Canawa Glampings' subtitle='vive la experiencia'>
    <Link to='/rooms' className='btn-primary'> Reserva</Link>
    </Banner>
  </Hero>
 <Services/>
 <FeaturedRooms/>


  </>
  );

}
