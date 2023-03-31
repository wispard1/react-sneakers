import styles from './Card.module.scss'

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={140} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b> {props.price} руб. </b>
        </div>
        <button className="button" onClick={props.onClick}>
          <img width={40} height={40} src="/img/Plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}
export default Card;
