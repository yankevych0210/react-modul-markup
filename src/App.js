import logo from './logo.svg';
import './App.css';
import Header from "./components/header"
import Numbers from "./components/numbers"
import Section from "./components/sectionskill"
import GallaryList from "./components/gallarylist"
import Clients from "./components/clients"
import Form from "./components/form"
import Footer from "./components/footer"

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <div className="container">
        <div className="frame">
          <img src="./img/Frame.png" alt="PC" />
        </div>
        <div className="first-screen">
          <h1>Дизайн и верстка</h1>
          <p>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
            является стандартной "рыбой" для текстов на латинице с начала XVI века.
          </p>
          <button className="button">НАПИСАТЬ МНЕ</button>
        </div>
      </div>
      <div className="about-me">
        <h2>Обо мне</h2>
        <p>
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
          является стандартной "рыбой" для текстов на латинице с начала XVI века.
        </p>
      </div>
      <Numbers />
      <div className="skills">
        <Section />
        <div className="skills-img"><img src="./img/Rectangle-3.png" alt="skills-img" /></div>
      </div>
      <div className="video">
        <h2>Как я работаю</h2>
        <p>
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
          является стандартной "рыбой" для текстов на латинице с начала XVI века.
        </p>
        <div className="film">
          <div className="video-play">
            <img src="./img/Rectangle-5.png" alt="video" />
          </div>
          <div className="btn-play">
            <img src="./img/play-button.png" alt="play" />
          </div>
        </div>
      </div>
      <div className="section-gallery">
        <GallaryList />
        <Clients />
      </div>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
