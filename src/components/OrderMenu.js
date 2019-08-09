import React, {useEffect} from 'react';

function OrderMenu({match}){
    useEffect(() =>{
        console.log(match.params)
    })
    return(
        <div>
            <h1>Here you can orderrrrrrrrrrrrr</h1>
        </div>
    )
}

export default OrderMenu;