import React from 'react';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {
  
  return (
    <div className="content">
        <section className="profile">
          <div className="profile__avatar-hover" onClick={onEditAvatar}>
            <img src="<%=require('./images/avatar.png')%>" alt="Аватар" className="profile__avatar"/>
          </div>
          <div className="profile__profile-info">
            <h1 className="profile__title-name">Жак-Ив Кусто</h1>
            <button type="button" aria-label="Изменить" className="profile__button-name" onClick={onEditProfile}></button>
            <p className="profile__text">Исследователь океана</p>
          </div>
          <button type="button" aria-label="Добавить" className="profile__add-button" onClick={onAddPlace}></button>
        </section>
        <section className="photo">
          <ul className="elements">

          </ul>
        </section>
      </div>
  );
}
  
export default Main;