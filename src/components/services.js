import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './title';

export default class services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info: "Sed ut quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            },
            {
                icon:<FaBeer/>,
                title:"Drink Beer",
                info: "Totam rem aperiam, eaque ipsa quaelores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in."
            },
            {
                icon:<FaHiking/>,
                title:"Explore your Psychie",
                info: "Sed ut perspiciatis unde eum fugiat quo voluptas nulla pariatur?"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Travel you Mind",
                info: "Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totantore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam?"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    );
                        
                }
            )}
                </div>
            </section>
        )
    }
}
