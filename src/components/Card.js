import React from 'react';

class Card extends React.Component {
	constructor(props) {
    super(props);
  }

  render(){ 
    return (<li className="elements__element" >
    <button type="button" aria-label="Удалить" className="elements__button-delete"></button>
    <img className="elements__img" src={`${this.props.card.link}`} onClick={this.props.selectedCard}/>
    <div className="elements__interaction">
      <h2 className="elements__text">{`${this.props.card.name}`}</h2>
      <div className="elements__like-group">
        <button type="button" aria-label="Оценить" className="elements__button-view"></button>
        <p className="elements__like-quantity">{`${this.props.card.likes.length}`}</p>
      </div>
    </div>
    </li>);
  }
}
  
export default Card;