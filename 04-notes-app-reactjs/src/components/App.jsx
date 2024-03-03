/* eslint-disable react/no-unknown-property */
import { useState } from "react";

// Components
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

    const groceryItems = [
      // {
      //   id: 1,
      //   name: 'Kopi Bubuk',
      //   quantity: 2,
      //   checked: true,
      // },
      // {
      //   id: 2,
      //   name: 'Gula Pasir',
      //   quantity: 5,
      //   checked: false,
      // },
      // {
      //   id: 3,
      //   name: 'Air Mineral',
      //   quantity: 3,
      //   checked: false,
      // },
    ];

export default function App() {

  // New State
  const [items, setItems] = useState(groceryItems);

  // Handle to add Item with state
  function handleAddItem (item){
    // Immutablity
    setItems([...items, item])
  }

  // Handle Delete Item
  function handleDeleteItem (id){
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // Handle Toggle
  function handleToggleItem (id) {                                 
    // (HFO-MAP) items petakan dari setiap item nya karna ada salahsatu yang akan berubah, (expresi) item.id sama tidak dengan id yang di klik ?(ternary) jika benar maka (spread) buatkan object array item dengan checked nya yang berbeda dengan isi nya tergantung kondisi pada saat ini apa (!item.checked) NOT yang tadinya true > false, sebalik nya. Jika tidak atau selain yang user klik maka biarkan saja 
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  // Handle Clear
  function handleBtnClearItems (){
    setItems([])
  }

  return (
    <div className="App">
      <Header />
      <Form onAddItem={handleAddItem}/>
      <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearBtnItems={handleBtnClearItems} />
      <Footer items={items}/>
    </div>
  );
}