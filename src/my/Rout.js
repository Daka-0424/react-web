import React, { useState } from "react";
import '../assets/css/Info.css';
import TitleImageWebp from '../assets/img/img1.webp';
import TitleImageJpg from '../assets/img/img1.jpg';
import Header from './partial/header';
import Picture from '../partial/Picture';
//import Popup from '../Popup';

export default function App() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div id="root" class="wrapper">
      <Header />
      <Picture jpeg={TitleImageJpg} webp={TitleImageWebp} />
      {/*<button onClick={togglePopup}>Popupを開くでごわす！</button>
      {isPopupVisible && (
        <Popup>
          <div class="popup">
            <p>ここにポップアップの内容を記載するでごわす！</p>
            <button onClick={togglePopup}>Popupを閉じるでごわす！</button>
          </div>
        </Popup>
      )}*/}
    </div>
  );
}