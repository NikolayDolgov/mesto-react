import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

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
    <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name='update-avatar' title='Обновить аватар' button='Сохранить'/>
    <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name='change-profile' title='Редактировать профиль' button='Сохранить'/>
    <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name='add' title='Новое место' button='Создать'/>

    <PopupWithForm isOpen={isDeletePlacePopupOpen} onClose={closeAllPopups} name='confirm-deletion' title='Вы уверены?' button='Да'/>

    <ImagePopup isOpen={isImagePopupOpen} card={selectedCard} onClose={closeAllPopups}/>

    <Header />
    <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} onCardDeleteClick={handleDeleteCardClick}/>
    <Footer />
  </div>
);
}

export default App;
