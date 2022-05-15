//---------------------------------------//
// объявление и инициализация переменных //
//---------------------------------------//
// изначальные переменные
const buttonProfileInfo = document.querySelector('.profile__button-name');
const buttonAddCard = document.querySelector('.profile__add-button');
const profileData = {profileName: '.profile__title-name', profileDescription: '.profile__text', profileAvatar: '.profile__avatar'};
const profileAvatar = document.querySelector('.profile__avatar-hover');

// попап изменения имени/аватара
const popupChangeProfile = document.querySelector('.popup_task_change-profile');
const inputName = popupChangeProfile.querySelector('#name');
const inputDescription = popupChangeProfile.querySelector('#description');
const popupAvatar = document.querySelector('.popup_task_update-avatar');

// попап добавления карточки
const popupAdd = document.querySelector('.popup_task_add');

// селектор контейнера
const containerSelector = '.elements';

const validationSettings = { // селекторы для валидации
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive', // деактивация кнопки
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  patternErrorClass: '.popup__input-error_type_' // шаблон ошибки
}

export {
  buttonProfileInfo,
  buttonAddCard,
  profileData,
  profileAvatar,
  popupAvatar,
  popupChangeProfile,
  inputName,
  inputDescription,
  popupAdd,
  containerSelector,
  validationSettings,
}