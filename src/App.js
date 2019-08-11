import React ,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Restaurants from './components/Restaurants';
import About from './components/About';
import Index from './components/Index';
import Order from './components/Order';
import Contact from './components/Contact';


export const CategoryContext = React.createContext(null);
export const RestaurantContext = React.createContext(null);
export const FilterContext = React.createContext(null);
function App() {
  



const [category, setCategory] = useState([]);
const [restaurants, setRestaurants] = useState([]); 



  useEffect(() => {
      var categoryUrl = 'http://localhost:3000/category';
        fetch(categoryUrl)
            .then((resp) => resp.json())
            .then((data) => {
                
                console.log("Categories: ",data);
                setCategory(data);
        });
  },[]);


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
    <Router>

      <RestaurantContext.Provider value={restaurants}>

      <div className="App">

          <CategoryContext.Provider value={category}>
              <Header />
          </CategoryContext.Provider>

          <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/about" component={About} />
              <Route path="/restaurants" exact component={Restaurants} />
              <Route path="/contact" component={Contact} />
              <Route path="/restaurants/:id" component={Order} />
              <Route path="restaurants/:categoryId" exact component={Restaurants} />
          </Switch>
          
      </div> 
       
      </RestaurantContext.Provider>

    </Router>
  );
}

export default App;
