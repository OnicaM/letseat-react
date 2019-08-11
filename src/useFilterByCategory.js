import {useState} from 'react';
export  const ALL = '';
export  const PIZZA = 'pizza';
export  const TRADITIONAL = 'traditional';
export  const ARABIC = 'arabic';
export  const FASTFOOD = 'fastfood';
export  const GREEK = 'greek';



function useFilterByCategory(){
   
    
    const [activeFilter, setActiveFilter] = useState(ALL);

    function filterRestaurants(filter){
        switch (filter){
            case ALL:
                return restaurants.filter(r => r.done === true);
            case PIZZA: 
                return restaurants.filter(r => r.done === false);
            case TRADITIONAL: 
                return restaurants.filter(r => r.done === false);
            case ARABIC: 
                return restaurants.filter(r => r.done === false);
            case FASTFOOD: 
                return restaurants.filter(r => r.done === false);
            case GREEK: 
                return restaurants.filter(r => r.done === false);
            default:
                return restaurants;
        }
        
      }
    const restauratsToDisplay = filterRestaurants(activeFilter);
    return(
       restaurants,
       activeFilter,
       setRestaurants,
       setActiveFilter,
       category,
       setCategory,
       restauratsToDisplay
    )
}

export default useFilterByCategory;