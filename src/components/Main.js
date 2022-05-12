import React from 'react';
import {api} from "../utils/Api";
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardDeleteClick}) {
  
  const [userName, setUserName] = React.useState([]);
  const [userDescription, setUserDescription] = React.useState([]);
  const [userAvatar, setUserAvatar] = React.useState([]);
  const [cards, setCards] = React.useState([]);

  const cardArray = [];

  React.useEffect(() => {
    api.getUser()
    .then((res) => {
      setUserName(res);
    })
    .catch((err) =>{
      console.log(err);
    });
    });

  React.useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCards(res);      
      })
      .catch(err => {
        console.log(err);
      })
  });

  return (
    <div className="content">
        <section className="profile">
          <div className="profile__avatar-hover" onClick={onEditAvatar}>
            <img src={userName.avatar} alt="Аватар" className="profile__avatar"/>
          </div>
          <div className="profile__profile-info">
            <h1 className="profile__title-name">{userName.name}</h1>
            <button type="button" aria-label="Изменить" className="profile__button-name" onClick={onEditProfile}></button>
            <p className="profile__text">{userName.about}</p>
          </div>
          <button type="button" aria-label="Добавить" className="profile__add-button" onClick={onAddPlace}></button>
        </section>
        <section className="photo">
          <ul className="elements">
            {
              cards.map((item) => (<Card card={item} key={item._id} onCardClick={onCardClick} onCardDeleteClick={onCardDeleteClick}/>))
            }
          </ul>
        </section>
      </div>
  );
}
  
export default Main;