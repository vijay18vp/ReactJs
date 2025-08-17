import React , {useState} from 'react';

function ItemList() {
    
    //Example Data 
    const Item = [
        {id : 1 , name : "Iphone"},
        {id : 2 , name : "macBook"},
        {id : 3 , name : "Sony sLog3"}
    ];

    const [selectedItem , setSelectedItem ] = useState(null);

    const handleClick = (itemId) => {
        console.log("Selected item id " , itemId);
        setSelectedItem(itemId);
    };

    return (
        <div>
            <h1>Products 🛒 </h1>
            <ul>
                {Item.map((item) => (
                    <li key={item.id}>
                        {item.name}{" "}
                        <button onClick={() => handleClick(item.id)}> Select </button>
                    </li>
                ))}
            </ul>

            //show which item is selected 
           {selectedItem && (
            <p>
                You Selected : {" "}
                {Item.find((item) => item.id === selectedItem)?.name}
            </p>
           )}
        </div>
    )
}

export default ItemList ; 