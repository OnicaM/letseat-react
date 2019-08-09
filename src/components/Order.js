import React, {useState , useEffect } from 'react';
import Banner from '../components/Banner';

function Order({match}){
    const [menu, setMenu] = useState([]);
    const [productId, setProductId] = useState(1);
    const [order, setOrder] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const orderLength = order.length;
console.log(menu);
    function removeProduct(index) {
        const arrayTodos = [...order];
        arrayTodos.splice(order[index], 1);
        setOrder(arrayTodos);
      }
    const sendOrder = (e) => {
        e.preventDefault();
        alert('Comanda dumneavoastra a fost inregistrata!');
    }
    const clearCart = (e) =>{
        e.preventDefault();
        setOrder([]);
    }
    useEffect(() => {
        var menuUrl = `http://localhost:3000/food?restaurantsId=${match.params.id}`;
        fetch(menuUrl)
            .then((resp) => resp.json())
            .then((data) => {
                //displayData(data);
                console.log(data);
                setMenu(data);
        });
       
    },[]);
    useEffect(()=>{
        var productUrl = `http://localhost:3000/food?id=${productId}`;
        fetch(productUrl)
            .then((resp) => resp.json())
            .then((orderData) => {
                console.log("orderData", orderData);
                console.log("order", order);
                orderData.forEach(element => {
                    setOrder([...order, element]);
                });
                  
                
            })
            console.log(menu);
    },[productId]);
    useEffect(() => {
        var restaurantsUrl = `http://localhost:3000/restaurants?id=${match.params.id}`;
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
        <section className="container">
            <div className="container-content clearfix">
               <div className="container-title">
                   {restaurants.map( element => (
                      
                       <h1 className="title">{element.name}</h1>
                   ))} 
               </div>
               <div className="container-content_left">
                  <div className="tabs products">
                 
                     <div className="tab-content products-menu">
                        <div className="tab active" id="pizza">
                           <h3></h3>
                           <table className="table-items">
                           {menu.map(food => (
                               <tr key={food.id}>
                                   <td className="product-name"> 
                                        <span className="product-name">{food.name}</span>
                                        <span className="product-description">{food.description}</span>
                                    </td>
                                    <td>
                                        <span className="product-price">{food.price}</span>
                                        <span className="product-add-to-cart">
                                            
                                            <button className="add-to-cart"
                                                    onClick={(e => setProductId(e.target.value))}
                                                    value={food.id}
                                                    
                                             >Add+</button>
                                             
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            </table>
                        </div>
                       
                     </div>
                  </div>
               </div>
               <div className="container-content_right">
                  <h2>Comanda mea</h2>
                  <div className="cart-head">
                       <span className="product-quantity">{order.length}</span> Produse in cos
                       <a href="#" onClick={clearCart} className="button empty-cart-btn">Clear</a>
                   </div>
                  <form>
                     <div className="order-box">
                        
                        <table className="order-box_container">
                            {order.map( (prod ,index) => (
                                 <tr className="order-box_item">
                                     <td className="remove-button">
                                        <button 
                                        className="remove"
                                        onClick= {() => removeProduct(prod[index])}
                                        >X</button>
                                     </td>
                                <td className="order-box_item order-box_item-name"><span>{prod.name}</span></td>
                                <td className="order-box_item order-box_item-quantity"><span>1</span></td>
                                <td className="order-box_item order-box_item-price"><span>{prod.price} lei</span></td></tr>
                            ))}
                        </table>
                          <span className="total-price">Total 0</span>
                        <div className="order-box_details">
                           <select name="selectCity" id="selectCity" className="order-box_item">
                              <option value="craiova">Craiova</option>
                              <option value="cluj">Cluj</option>
                              <option value="bucuresti">Bucuresti</option>
                              <option value="timisoara">Timisoara</option>
                              <option value="arad">Arad</option>
                           </select>
                           <input type="text" name="address" placeholder="Adresa" className="order-box_item" id="address" />
                           <input type="tel" name="phone" placeholder="Telefon" className="order-box_item" id="phone" />
                           <textarea rows="3" className="order-box_item" value="...">Observatii</textarea>
                        </div>
                        <input type="submit" onClick={sendOrder} name="order" text="Plaseaza comanda" id="send" />
                     </div>
                  </form>
               </div>
            </div>
         </section>
         </div>




    )
}
export default Order;