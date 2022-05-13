import React, {useState, useEffect} from 'react';
import {api} from "../utils/Api";
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardDeleteClick}) {
  
  const [userData, setUserData] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUser()
    .then((res) => {
      setUserData(res);
    })
    .catch((err) =>{
      console.log(err);
    });
    }, []);

  useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCards(res);      
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div className="content">
        <section className="profile">
          <div className="profile__avatar-hover" onClick={onEditAvatar}>
            <img src={userData.avatar} alt="Аватар" className="profile__avatar"/>
          </div>
          <div className="profile__profile-info">
            <h1 className="profile__title-name">{userData.name}</h1>
            <button type="button" aria-label="Изменить" className="profile__button-name" onClick={onEditProfile}></button>
            <p className="profile__text">{userData.about}</p>
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