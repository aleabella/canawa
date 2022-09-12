import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
  state={
    services:[
      {
        icon:<FaHiking/>,
        title: 'Bar',
        info: 'Disfruta nuestros cocteles que te llevaran a una experiencia. '
      },
      {
        icon:<FaShuttleVan/>,
        title: 'Cuatrimotos',
        info: 'Retate y experimente la adrenalina de andar en cuatro ruedas de forma extrema.'
      },
      {
        icon:<FaBeer/>,
        title: 'Bar',
        info: 'Diviertete en nuestro bar donde encontraras diferentes atracciones para disfrutar en compañía.'
      },
      {
        icon:<FaCocktail/>,
        title: 'Contelería',
        info: 'Disfruta nuestros cocteles que te llevaran a una experiencia. '
      }
    ]
  }
  render() {
    return (
      <section className='services'>
        <Title title='services'/>
      <div className='services-center'>
      {this.state.services.map((item,index) => {
         return <article key={index} className='service'>
          <span> {item.icon} </span>
          <h6> {item.title} </h6>
          <p>{item.info} </p>
         </article>
      } )}
      </div>
        </section>
    );
  }
}
 