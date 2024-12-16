import '../assets/css/Info.css';

export default function Picture({jspg, webp}){
  return (
    <picture>
      <source srcset={webp} type="image/webp" />
      <source srcset={jspg} type="image/jpeg" />
      <img class="title-img"/>
    </picture>
  );
}