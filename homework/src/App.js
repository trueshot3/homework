import './App.css';
import React from 'react';
import Title from './components/Title';
import Select from './components/Select';
import Add from './components/Add';
import Reset from './components/Reset';
import ItemList from './components/ItemList'

const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  }
};

const App = () => {
  const [mainColor, setMainColor] = React.useState('img/red.png');
  const [itemList, setItemList] = React.useState(() => {
    return jsonLocalStorage.getItem('itemList') || [];
  });

  function handleSelect(event) {
    setMainColor(event.target.value);
  }

  function handleAddClick(event) {
    setItemList((pre) => {
      const nextItem = [...pre, mainColor];
      jsonLocalStorage.setItem('itemList', nextItem);
      return nextItem;
    });
  }
  function handleResetClick(event) {
    window.localStorage.clear();
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }

  return (
    <div>
      <Title>CHEAPER PLAN</ Title>
      <Select handleSelect={handleSelect} />
      <Add handleAddClick={handleAddClick} />
      <Reset handleResetClick={handleResetClick} />
      <hr />
      <ItemList itemList={itemList} />
    </div>
  );
};

export default App;
