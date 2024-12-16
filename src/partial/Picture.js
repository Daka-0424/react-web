import '../assets/css/Info.css';

export default function Picture({jpeg, webp, children}){
  return (
    <picture>
      <source srcset={webp} type="image/webp" />
      <source srcset={jpeg} type="image/jpeg" />
      {children}
    </picture>
  );
}