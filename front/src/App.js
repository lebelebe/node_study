import './App.css';
import Interview from './component/Interview'
import Interviewform from './component/Interviewform';
import Header from './component/Header';
import Swiper from './component/Swiper';
import Portfolio from './component/Portfolio';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Interview type='interviewlist' titlenm="사전인터뷰"></Interview> */}
      {/* <Interviewform type='interviewwrite' titlenm='인터뷰글쓰기'></Interviewform> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
