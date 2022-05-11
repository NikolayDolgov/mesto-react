import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

import PopupWithForm from "./PopupWithForm";

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

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

  function closeAllPopups(){
    console.log("pfrhsnm");
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

return (
  <div className="root">
    <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name='update-avatar' title='Обновить аватар' button='Сохранить'/>
    <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name='change-profile' title='Редактировать профиль' button='Сохранить'/>
    <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name='add' title='Новое место' button='Создать'/>

    <Header />
    <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
    <Footer />
  </div>
);
}

export default App;
