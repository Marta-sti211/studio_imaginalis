import './App.scss';
import { Header, Footer } from "./components";
import { Work, Exhibs, Education } from "./containers";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex-parent">
          <div className="flex-item"><Work /></div>
          <div className="flex-item"><Exhibs /></div>
          <div className="flex-item"><Education /></div>
      </div>
    </div>
  );
}

export default App;
