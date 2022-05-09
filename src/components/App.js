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
      isDeletePlacePopupOpen: false,
      isImagePopupOpen: false
    }

    this.closeAllPopups = {
      isCloseAll: false
    }
  }

  render() {
    return (
    <div lang="ru">
      <div className="root">
        <Header />
        <Main isPopupOpen = {this.isPopupOpen} closeAllPopups = {this.closeAllPopups}/>
        <Footer />
      </div>
    </div>
  );
  }
}

export default App;
