import React from 'react';

class ImagePopup extends React.Component {
	constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      closeAllPopups: this.props.onClose
    }
  }

  closeAllPopups = () => {
    console.log('dd');
    this.setState({
      closeAllPopups: !this.state.closeAllPopups
    });
  };


  
  render() {
    return (<section className={`popup popup_task_img ${this.props.isOpen && 'popup_opened'}`}>
    <div className="popup__container">
      <button type="button" aria-label="Закрыть" className="popup__close" onClick={this.closeAllPopups}></button>
      <figure className="figure">
        <img src={this.props.cardElement.link} alt={this.props.cardElement.name} className="figure__img" />
        <figcaption className="figure__caption">{this.props.cardElement.name}</figcaption>
      </figure>
    </div>
    {this.state.closeAllPopups && (document.querySelector(`.popup_task_img`).classList.remove('popup_opened'), this.state.closeAllPopups = false)}
  </section>)
	}
}
  
export default ImagePopup;