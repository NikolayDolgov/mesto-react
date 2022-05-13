import React from 'react';

function Card(props) {
  
  function handleClick() {
    props.onCardClick(props.card);
  } 

  return (<li className="elements__element">
    <button type="button" aria-label="Удалить" className="elements__button-delete" onClick={props.onCardDeleteClick}></button>
    <img alt={props.card.name} className="elements__img" src={props.card.link} onClick={handleClick}/>
    <div className="elements__interaction">
      <h2 className="elements__text">{props.card.name}</h2>
      <div className="elements__like-group">
        <button type="button" aria-label="Оценить" className="elements__button-view"></button>
        <p className="elements__like-quantity">{props.card.likes.length}</p>
      </div>
    </div>
    </li>
  );
}
  
export default Card;