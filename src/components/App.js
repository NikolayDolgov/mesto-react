import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick(){
    console.log("аватар");
    setIsEditAvatarPopupOpen(true);
  };
  function handleEditProfileClick(){
    setIsEditProfilePopupOpen(true);
  };
  function handleAddPlaceClick(){
    setIsAddPlacePopupOpen(true);
  };

  function handleCardClick(card){
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  };

  function handleDeleteCardClick(card){
    setIsDeletePlacePopupOpen(true);
  };

  function closeAllPopups(){
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setIsDeletePlacePopupOpen(false);
  }

return (
  <div className="root">
    <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name='update-avatar' title='Обновить аватар' button='Сохранить'>
      <input id="link-avatar" type="url" placeholder="Ссылка" className="popup__input" required />
        <span className="popup__input-error popup__input-error_type_link-avatar">Текст ошибки</span>
    </PopupWithForm>

    <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name='change-profile' title='Редактировать профиль' button='Сохранить'>
      <input id="name" type="text" placeholder="Имя" className="popup__input" minLength="2" maxLength="40" required />
        <span className="popup__input-error popup__input-error_type_name">Текст ошибки</span>
      <input id="description" type="text" placeholder="О себе" className="popup__input" minLength="2" maxLength="200" required />
        <span className="popup__input-error popup__input-error_type_description">Текст ошибки</span>
    </PopupWithForm>
    
    <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name='add' title='Новое место' button='Создать'>
      <input id="place-card" type="text" placeholder="Название" className="popup__input" minLength="2" maxLength="30" required />
        <span className="popup__input-error popup__input-error_type_place-card">Текст ошибки</span>
      <input id="link-card" type="url" placeholder="Ссылка на картинку" className="popup__input" required />
        <span className="popup__input-error popup__input-error_type_link-card">Текст ошибки</span>
    </PopupWithForm>

    <PopupWithForm isOpen={isDeletePlacePopupOpen} onClose={closeAllPopups} name='confirm-deletion' title='Вы уверены?' button='Да'/>

    <ImagePopup isOpen={isImagePopupOpen} card={selectedCard} onClose={closeAllPopups}/>

    <Header />
    <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} onCardDeleteClick={handleDeleteCardClick}/>
    <Footer />
  </div>
);
}

export default App;
