import React, {useState , useEffect } from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

function Restaurants({match}){
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        var restaurantsUrl = 'http://localhost:3000/restaurants';
        fetch(restaurantsUrl)
            .then((resp) => resp.json())
            .then((data) => {
                //displayData(data);
                console.log(data);
                setRestaurants(data);
        });

    },[]);

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