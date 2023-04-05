import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from './Components/Card';
import Header from './Components/Header';
import CartBlock from './Components/CartBlock';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  const cartOpen = () => {
    setCartOpened(true);
  };
  const cartClose = () => {
    setCartOpened(false);
  };

  useEffect(() => {
    fetch('https://642ae59e00dfa3b54751f9d9.mockapi.io/Items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCard = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };
  console.log(cartItems);

  return (
    <div className="wrapper clear">
      {cartOpened && <CartBlock items={cartItems} onCloseCart={cartClose} />}
      <Header onClickCart={cartOpen} onCloseCart={cartClose} />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log('Добавили в закладки')}
              onPlus={(obj) => onAddToCard(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
