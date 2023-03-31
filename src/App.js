import Card from './Components/Card';
import Header from './Components/Header';
import CartBlock from './Components/CartBlock';

const arr = [
  {
    title: 'Кроссовки Nike Blazer mid Suede',
    price: 12999,
    imageUrl: '/img/sneakers/1.svg',
  },
  {
    title: 'Кроссовки Nike Air Max 270',
    price: 14500,
    imageUrl: '/img/sneakers/2.jpg',
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    imageUrl: '/img/sneakers/4.jpg',
  },
  {
    title: 'Кроссовки Under Armour Curry 8',
    price: 15200,
    imageUrl: '/img/sneakers/5.png',
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <CartBlock />
      <Header />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
