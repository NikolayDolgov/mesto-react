import React from 'react';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import {api} from '../utils/Api.js';
import Card from './Card';

class Main extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      onEditAvatar: this.props.isPopupOpen.isEditAvatarPopupOpen,
      onAddPlace: this.props.isPopupOpen.isAddPlacePopupOpen,
      onDelete: this.props.isPopupOpen.isDeletePlacePopupOpen,
      onEditProfile: this.props.isPopupOpen.isEditProfilePopupOpen,
      closeAllPopups: this.props.closeAllPopups.isCloseAll,

      onImagePopup: this.props.isPopupOpen.isEditImagePopupOpen,

      userName: 'Имя',
      userDescription: 'О себе',
      userAvatar: '',
      cards: [],

      selectedCard: ''
    }

    api.getUser()
    .then((res) => {
    // присваиваем полученные значения

    this.setState({userName: res.name,
      userDescription: res.about,
      userAvatar: res.avatar
    });
    })
    .catch((err) =>{ //обязательно ловим возможные ошибки в конце запроса)
      console.log(err);
    });

    // отрисовка карточек
      Promise.all([api.getUser(), api.getInitialCards()]) // не проверено
      .then(([userData, cards]) => {
      // тут установка данных пользователя
      // и тут отрисовка карточек
      const cardArray = [];

      cards.forEach(card => {
        this.card = card;
        cardArray.push(<Card card = {this.card} key={this.card._id} selectedCard={this.onStateImagePopup} />)
      });
      this.setState({cards: cardArray});
      })
      .catch(err => {
        console.log(err);
      })

    
    
  }

  onEditAvatar = () => {
    this.setState({
      onEditAvatar: true,
    });
  };

  onAddPlace = () => {
    this.setState({

      onAddPlace: true,


    });
  };

  onDelete = () => {
    this.setState({
      onDelete: true,

    });
  };

  onEditProfile = () => {
    this.setState({
      onEditProfile: true
    });
  };

  onStateBack = () => {
    this.setState({
      onEditAvatar: this.props.isPopupOpen.isEditAvatarPopupOpen,
      onAddPlace: this.props.isPopupOpen.isAddPlacePopupOpen,
      onDelete: this.props.isPopupOpen.isDeletePlacePopupOpen,
      onEditProfile: this.props.isPopupOpen.isEditProfilePopupOpen,
      onImagePopup: this.props.isPopupOpen.isEditImagePopupOpen
    });
  };

  onStateImagePopup = () => {

    this.setState({
      onImagePopup: true,
      selectedCard:  this.card
    });
  };

  render(){ 
    
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-hover" onClick={this.onEditAvatar}>
            <img src={this.state.userAvatar} alt="Аватар" className="profile__avatar" />
          </div>
          <div className="profile__profile-info">
            <h1 className="profile__title-name">{this.state.userName}</h1>
            <button type="button" aria-label="Изменить" className="profile__button-name" onClick={this.onEditProfile}></button>
            <p className="profile__text">{this.state.userDescription}</p>
          </div>
          <button type="button" aria-label="Добавить" className="profile__add-button" onClick={this.onAddPlace}></button>
        </section>
        <section className="photo">
          <ul className="elements">
            
          {this.state.cards}

          </ul>
        </section>
        
        {this.state.onEditProfile && (<PopupWithForm name="change-profile" title="Редактировать профиль" button="Сохранить" isOpen={this.state.onEditProfile} onClose={this.state.closeAllPopups}/>)}
        {this.state.onEditAvatar && <PopupWithForm name="update-avatar" title="Обновить аватар" button="Сохранить" isOpen='popup_opened' onClose={this.state.closeAllPopups}/>}
        {this.state.onAddPlace && <PopupWithForm name="add" title="Новое место" button="Создать" isOpen='popup_opened' onClose={this.state.closeAllPopups}/>}
        {this.state.onEditProfile && ((!this.state.closeAllPopups) &&(this.state.onEditProfile = false))}
        <PopupWithForm name="confirm-deletion" title="Вы уверены?" button="Да" isOpen=''/>
        {this.state.onImagePopup && <ImagePopup cardElement={this.state.selectedCard} isOpen='popup_opened' onClose={this.state.closeAllPopups}/>}
      </main>);
  }
}
  
export default Main;