import './App.css';
import Interview from './component/Interview'
import Interviewform from './component/interviewform';

function App() {
  return (
    <div className="App">
      <Interview type='interviewlist' titlenm="사전인터뷰"></Interview>
      <Interviewform type='interviewwrite' titlenm='인터뷰글쓰기'></Interviewform>
    </div>
  );
}

export default App;
