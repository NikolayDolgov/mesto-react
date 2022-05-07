import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.isPopupOpen = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      isDeletePlacePopupOpen: false
    }

    this.closeAllPopups = {
      isCloseAll: false
    }
  }


  render() {
    return (
  <html lang="ru">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Место</title>
    </head>
    <body>
      <div class="root">
        <Header />
        <Main isPopupOpen = {this.isPopupOpen} closeAllPopups = {this.closeAllPopups}/>
        <Footer />
      </div>
    </body>
  </html>
  );
  }
}

export default App;
