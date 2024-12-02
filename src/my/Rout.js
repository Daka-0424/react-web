import '../assets/css/Info.css';
import TitleImageWebp from '../assets/img/img1.webp';
import TitleImageJpg from '../assets/img/img1.jpg';
import Header from './partial/header';

export default function App() {
  const Motto = "aaa";
  return (
    <div id="root" class="wrapper">
      <Header />
      <picture>
        <source srcset={TitleImageWebp} type="image/webp" />
        <source srcset={TitleImageJpg} type="image/jpeg" />
        <img class="title-img"/>
      </picture>
    </div>
  );
}