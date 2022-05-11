import React from 'react';

class PopupWithForm extends React.Component {
	constructor(props) {
    super(props);
  }

  render() {
    return (<section className={`popup popup_task_${this.props.name} ${this.props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button type="button" aria-label="Закрыть" className="popup__close" onClick={this.props.onClose}></button>
        <form name={`${this.props.name}`}  className="popup__form" id={`${this.props.name}`} noValidate>
          <h2 className="popup__heading">{`${this.props.title}`}</h2>
          
          {this.props.name == 'change-profile' && <>
          <input id="name" type="text" placeholder="Имя" className="popup__input" minLength="2" maxLength="40" required />
          <span className="popup__input-error popup__input-error_type_name">Текст ошибки</span>
          <input id="description" type="text" placeholder="О себе" className="popup__input" minLength="2" maxLength="200" required />
          <span className="popup__input-error popup__input-error_type_description">Текст ошибки</span>
          </>
          }
          
          {this.props.name == 'update-avatar' && <>
          <input id="link-avatar" type="url" placeholder="Ссылка" className="popup__input" required />
          <span className="popup__input-error popup__input-error_type_link-avatar">Текст ошибки</span>
          </>
          }
          
          {this.props.name == 'add' && <>
          <input id="place-card" type="text" placeholder="Название" className="popup__input" minLength="2" maxLength="30" required />
          <span className="popup__input-error popup__input-error_type_place-card">Текст ошибки</span>
          <input id="link-card" type="url" placeholder="Ссылка на картинку" className="popup__input" required />
          <span className="popup__input-error popup__input-error_type_link-card">Текст ошибки</span>
          </>
          }
          
          {this.props.name == 'confirm-deletion' && <></>}
          
          <button type="submit" aria-label={`${this.props.button}`} className="popup__button">{`${this.props.button}`}</button>
        </form>
      </div>
    </section>)
	}
}
  
export default PopupWithForm;