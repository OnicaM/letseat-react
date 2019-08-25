import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {CategoryContext} from '../App';

function Index(){
   const categories = useContext(CategoryContext);
   console.log("from index: ",categories);
    return (
        <section className="container container--home">
            <div className="container-content clearfix">
                  
                  <h1 className="title">Let's seat and let's eat</h1>
                  <div className="promo float-left">
                     <div className="promo-box">
                        <div className="promo-box--inner">
                           <div className="slider">
                              <span className="box-title">Promotii</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada quis dolor ut tincidunt. Morbi facilisis justo ac mauris feugiat pulvinar. Etiam enim dui, luctus id consequat a, bibendum in turpis. Nam ut felis lorem. Proin finibus, libero in pharetra dictum, risus leo gravida justo, sit amet tempus nisl nunc vel dui. Maecenas tristique eu justo vitae lobortis. Aenean condimentum orci quis tincidunt ultricies. In commodo vel mauris vitae elementum.</p>
                           </div>
                        </div>
                     </div>
                     <div className="promo-box">
                        <div className="promo-box--inner">
                            <span className="box-title">Categorii</span> 
                            <ul className="categoies-list">
                              {
                                 categories.map(item => 
                                    <li key={item.id}><a href="#">{item.name}</a></li>
                                 )
                              }
                            </ul>
                        </div>
                     </div>
                   </div>
                  <div className="quick-order float-right">
                      <div className="smiley"><i className="far fa-smile-beam"></i></div>
                      <div className="quick-order_content">
                        <div className="quick-order--inner">
                            <p>Maecenas tristique eu justo vitae lobortis. Aenean condimentum orci quis tincidunt ultricies. In commodo vel mauris vitae elementum.</p>
                            <div className="quick-order_select">
                                  <span id="pick"><Link to="/restaurants">Alege restaurantul</Link></span>
                            </div>
                        </div>
                      </div>
                      
                  </div>
            </div>
         </section>
    )
}
export default Index;