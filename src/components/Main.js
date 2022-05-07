import React from 'react';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import {api} from '../utils/Api.js';

class Main extends React.Component {
	constructor(props) {
    super(props);

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
        
        cardArray.push(<li class="elements__element">
        <button type="button" aria-label="Удалить" class="elements__button-delete"></button>
        <img class="elements__img" src={card.link} />
        <div class="elements__interaction">
          <h2 class="elements__text">{card.name}</h2>
          <div class="elements__like-group">
            <button type="button" aria-label="Оценить" class="elements__button-view"></button>
            <p class="elements__like-quantity">{card.likes.length}</p>
          </div>
        </div>
        </li>)

      });
      this.setState({cards: cardArray});
      })
      .catch(err => {
        console.log(err);
      })

    this.state = {
      onEditAvatar: this.props.isPopupOpen.isEditAvatarPopupOpen,
      onAddPlace: this.props.isPopupOpen.isAddPlacePopupOpen,
      onDelete: this.props.isPopupOpen.isDeletePlacePopupOpen,
      onEditProfile: this.props.isPopupOpen.isEditProfilePopupOpen,
      closeAllPopups: this.props.closeAllPopups.isCloseAll,

      userName: 'Имя',
      userDescription: 'О себе',
      userAvatar: '',
      cards: []
    }
    
  }

  onEditAvatar = () => {
    this.setState({
      onEditAvatar: true,
      onAddPlace: this.props.isPopupOpen.isAddPlacePopupOpen,
      onDelete: this.props.isPopupOpen.isDeletePlacePopupOpen,
      onEditProfile: this.props.isPopupOpen.isEditProfilePopupOpen
    });
  };

  onAddPlace = () => {
    this.setState({
      onEditAvatar: this.props.isPopupOpen.isEditAvatarPopupOpen,
      onAddPlace: true,
      onDelete: this.props.isPopupOpen.isDeletePlacePopupOpen,
      onEditProfile: this.props.isPopupOpen.isEditProfilePopupOpen
    });
  };

  onDelete = () => {
    this.setState({
      onEditAvatar: this.props.isPopupOpen.isEditAvatarPopupOpen,
      onAddPlace: this.props.isPopupOpen.isAddPlacePopupOpen,
      onDelete: true,
      onEditProfile: this.props.isPopupOpen.isEditProfilePopupOpen
    });
  };

  onEditProfile = () => {
    this.setState({
      onEditAvatar: this.props.isPopupOpen.isEditAvatarPopupOpen,
      onAddPlace: this.props.isPopupOpen.isAddPlacePopupOpen,
      onDelete: this.props.isPopupOpen.isDeletePlacePopupOpen,
      onEditProfile: true
    });
  };

  onStateBack = () => {
    this.setState({
      onEditAvatar: this.props.isPopupOpen.isEditAvatarPopupOpen,
      onAddPlace: this.props.isPopupOpen.isAddPlacePopupOpen,
      onDelete: this.props.isPopupOpen.isDeletePlacePopupOpen,
      onEditProfile: this.props.isPopupOpen.isEditProfilePopupOpen
    });
  };

  render(){ 
    
    return (
      <main class="content">
        <ImagePopup />
        <section class="profile">
          <div class="profile__avatar-hover" onClick={this.onEditAvatar}>
            <img src={this.state.userAvatar} alt="Аватар" class="profile__avatar" />
          </div>
          <div class="profile__profile-info">
            <h1 class="profile__title-name">{this.state.userName}</h1>
            <button type="button" aria-label="Изменить" class="profile__button-name" onClick={this.onEditProfile}></button>
            <p class="profile__text">{this.state.userDescription}</p>
          </div>
          <button type="button" aria-label="Добавить" class="profile__add-button" onClick={this.onAddPlace}></button>
        </section>
        <section class="photo">
          <ul class="elements">
            
          {this.state.cards}

          </ul>
        </section>
        
        {this.state.onEditProfile && (<PopupWithForm name="change-profile" title="Редактировать профиль" button="Сохранить" isOpen={this.state.onEditProfile} onClose={this.state.closeAllPopups}/>)}
        {this.state.onEditAvatar && <PopupWithForm name="update-avatar" title="Обновить аватар" button="Сохранить" isOpen='popup_opened' onClose={this.state.closeAllPopups}/>}
        {this.state.onAddPlace && <PopupWithForm name="add" title="Новое место" button="Создать" isOpen='popup_opened' onClose={this.state.closeAllPopups}/>}
        {this.state.onEditProfile && ((!this.state.closeAllPopups) &&(this.state.onEditProfile = false))}
        <PopupWithForm name="confirm-deletion" title="Вы уверены?" button="Да" isOpen=''/>
      </main>);
  }
}
  
export default Main;