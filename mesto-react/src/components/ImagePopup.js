import React from 'react';

class ImagePopup extends React.Component {
	constructor(props) {
    super(props);
  }
  render() {
    return (<section class="popup popup_task_img">
    <div class="popup__container">
      <button type="button" aria-label="Закрыть" class="popup__close"></button>
      <figure class="figure">
        <img src="#" alt="#" class="figure__img" />
        <figcaption class="figure__caption">Без текста textContent не работает.</figcaption>
      </figure>
    </div>
  </section>)
	}
}
  
export default ImagePopup;