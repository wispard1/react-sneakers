import React from 'react';
import styles from './Card.module.scss';

function Card({ imageUrl, title, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img
          src={isLiked ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}
          alt="Unliked"
        />
      </div>
      <img width={140} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b> {price} руб. </b>
        </div>
        <button className="button" onClick={onClickPlus}>
          <img
            width={40}
            height={40}
            src={isAdded ? '/img/btn-add.png' : '/img/Plus.svg'}
            alt="plus"
          />
        </button>
      </div>
    </div>
  );
}
export default Card;
