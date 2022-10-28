import './App.css';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import LinkTree from './component/linkItem/linkItem';


function App() {
  
  return (
    <div className="px-3">
      <Header/>
       <LinkTree/>
      <Footer/>
    </div>
  );
}

export default App;
