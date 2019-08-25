import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {RestaurantContext, CategoryContext} from '../App';
import Banner from '../components/Banner';

function Restaurants({match}){

    const restaurants = useContext(RestaurantContext);
    const category = useContext(CategoryContext);


    return (
        <div>
            <Banner />
            <section className="container container--restaurants">
                <div className="container-content">
                    <div className="container-title">
                        <h1>Restaurante</h1>
                    </div>
                    <div className="boxes">
                    {restaurants.map( restaurant => (
                         <div key={restaurant.id} className="boxes_item boxes_item--traditional">
                            <div className="boxes_item-content">
                                <Link to={`/restaurants/${restaurant.id}`} className="link">
                                    <span className="link-text">{restaurant.name}</span> 
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                         </div>
                    ))}

                   
                </div>
                </div>
            </section>
        </div>
    )
}
export default Restaurants;