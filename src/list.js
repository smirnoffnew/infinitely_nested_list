import React, { useState } from "react";
import DefaultItem from "./defaultItem";
import CustomItem from "./customItem";
import { setID } from "./functions";

const List = () => {


  const [items, setItems] = useState([]);

  const addNewItem = name => {

    const newItem = {
      name,
      id: setID(),
      sublist: false
    };

    setItems(prev => [newItem, ...prev]);
  };


  const alterList = (itemId, type) => {

    const index = items.findIndex(i => i.id === itemId);
    const list = JSON.parse(JSON.stringify(items));
    let temp;

    
    switch (type) {

      case "remove":
        list.splice(index, 1);
        break;

      case "up":
        temp = list[index];
        list[index] = list[index - 1];
        list[index - 1] = temp;
        break;

      case "down":
        temp = list[index];
        list[index] = list[index + 1];
        list[index + 1] = temp;
        break;

      default:
        return null;
    }

    setItems(list);
  };


  const renderItems = items => {

    return items.map((i, index) => {

      return (
        <CustomItem
          name={i.name}
          index={index}
          key={i.id}
          itemsLength={items.length}
          id={i.id}
          alterList={alterList}
        />
      );
    });
  };

  return (
    <ul style={{ marginTop: '1rem', marginBottom: '1rem'}}>

      {renderItems(items)}
      <DefaultItem addItem={addNewItem} />

    </ul>
  );
};

export default List;
