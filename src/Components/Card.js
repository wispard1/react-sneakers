function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={140} height={112} src="/img/Sneakers/1.svg" alt="Sneakers" />
      <h5>Мужские кроссовки Nike Blazer mid Suede</h5>
      <div className="d-flex justify-between">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b> 12 999 руб.</b>
        </div>
        <button className="button">
          <img width={40} height={40} src="/img/Plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}
export default Card;