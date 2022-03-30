import './App.css';
// import Getout from './component/Getout'
// import Postout from './component/Postout'
// import Sql from './component/Sql'
import Interview from './component/Interview'

function App() {
  return (
    <div className="App">
      {/* <Getout></Getout>
      <Postout></Postout>
      <Sql></Sql> */}
      <Interview type='aws'></Interview>
    </div>
  );
}

export default App;
