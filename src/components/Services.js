import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan, FaBeer} from 'react-icons/fa'
export default class Services extends Component {
  state={
    services:[
        {
            icon:<FaCocktail/>,
            title:'Free cocktails',
            info:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, reiciendis'
        },
        {
            icon:<FaHiking/>,
            title:'Endless Hiking',
            info:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, reiciendis'
        },
        {
            icon:<FaShuttleVan/>,
            title:'Free shuttle',
            info:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, reiciendis'
        },
        {
            icon:<FaBeer/>,
            title:'Strongest Beer',
            info:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, reiciendis'
        }
    ]
  }
  render() {
    return (
      <section className='services'>
        <Title title='services'/>
        <div className="services-center">
            {this.state.services.map((item,index)=>{
                return <article key={index} className='service'> 
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
                </article>
            })}
        </div>
      </section>
    )
  }
}
