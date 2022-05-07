import React from 'react';

class PopupWithForm extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = {
      closeAllPopups: false//this.props.onClose
    }
    
  }

  closeAllPopups = () => {
    console.log('dd');
    this.setState({
      closeAllPopups: !this.state.closeAllPopups
    });
  };

  render() {
    return (<><section className={`popup popup_task_${this.props.name} ${this.props.isOpen && 'popup_opened'}`}>
      <div class="popup__container">
        <button type="button" aria-label="Закрыть" class="popup__close" onClick={this.closeAllPopups}></button>
        <form name={`${this.props.name}`}  class="popup__form" id={`${this.props.name}`} novalidate>
          <h2 class="popup__heading">{`${this.props.title}`}</h2>
          
          {this.props.name == 'change-profile' && <>
          <input id="name" type="text" placeholder="Имя" class="popup__input" minlength="2" maxlength="40" required />
          <span class="popup__input-error popup__input-error_type_name">Текст ошибки</span>
          <input id="description" type="text" placeholder="О себе" class="popup__input" minlength="2" maxlength="200" required />
          <span class="popup__input-error popup__input-error_type_description">Текст ошибки</span>
          </>
          }
          
          {this.props.name == 'update-avatar' && <>
          <input id="link-avatar" type="url" placeholder="Ссылка" class="popup__input" required />
          <span class="popup__input-error popup__input-error_type_link-avatar">Текст ошибки</span>
          </>
          }
          
          {this.props.name == 'add' && <>
          <input id="place-card" type="text" placeholder="Название" class="popup__input" minlength="2" maxlength="30" required />
          <span class="popup__input-error popup__input-error_type_place-card">Текст ошибки</span>
          <input id="link-card" type="url" placeholder="Ссылка на картинку" class="popup__input" required />
          <span class="popup__input-error popup__input-error_type_link-card">Текст ошибки</span>
          </>
          }
          
          {this.props.name == 'confirm-deletion' && <></>}
          
          <button type="submit" aria-label={`${this.props.button}`} class="popup__button">{`${this.props.button}`}</button>
        </form>
      </div>
      {this.state.closeAllPopups && (document.querySelector(`.popup_task_${this.props.name}`).classList.remove('popup_opened'), this.state.closeAllPopups = false)}
    </section>
</>)
	}
}
  
export default PopupWithForm;