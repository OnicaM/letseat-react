import React  from 'react';
import Categories from '../components/Categories';

function Banner(){
   
    return (
        <section className="banner">
            <div className="banner-content">
               <div className="banner-slider">
                  <div className="slider-item">
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada quis dolor ut tincidunt. Morbi facilisis justo ac mauris feugiat pulvinar. Etiam enim dui, luctus id consequat a, bibendum in turpis. Nam ut felis lorem. Proin finibus, libero in pharetra dictum, risus leo gravida justo, sit amet tempus nisl nunc vel dui. Maecenas tristique eu justo vitae lobortis. Aenean condimentum orci quis tincidunt ultricies. In commodo vel mauris vitae elementum.</p>
                     <a href="/" className="button">Comanda</a>
                  </div>
               </div>
               <div className="categories categories--desktop">
                      <Categories  />
               </div>

            </div>
         </section>
    )
}

export default Banner;