function CartBlock() {
  return (
    <div style={{ display: 'none' }} className="cart-shadow">
      <div style={{ display: 'none' }} className="cart-block">
        <h2 className="mb-40 d-flex justify-between">
          Корзина
          <img
            className="removeBtn cu-p"
            src="/img/btn-cart-st2.svg"
            alt="button"
          />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center justify-around ml-10">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/sneakers/1.svg"
              alt="sneakers"
            />
            <div>
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn-cart-st2.svg"
              alt="button"
            />
          </div>
          <div className="cartItem d-flex align-center justify-around ml-10">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/sneakers/1.svg"
              alt="sneakers"
            />
            <div>
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn-cart-st2.svg"
              alt="button"
            />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartBlock;
