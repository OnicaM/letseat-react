import React, {useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { CategoryContext } from '../App';

function Categories({match}){
     const categoies = useContext(CategoryContext);
     
    return(
        <div>
            <ul className="categoies-list">
              {categoies.map(item =>(
                  <li key={item.id}><Link to={`/restaurants/`} >{item.name}</Link></li>
              ))}
            </ul>
        </div>
        
    )
}

export default Categories;