import '../assets/css/Info.css'
import Header from './partial/header'

function App() {
  return (
    <div id="root" class="wrapper">
      <Header />
      <div class="motto-text vertical-text">
        出る杭は<br />
        　打たれる<br />
        　出過ぎた杭は<br />
        　　抜かれる<br />
      </div>
      <div>
        中途半端な人間は、矯正される<br />
        突出したは、引き抜かれる<br />
        引き抜かれる、人間を目指そう<br />
      </div>
    </div>
  );
}

export default App;