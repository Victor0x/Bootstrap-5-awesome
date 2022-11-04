import logo from './logo.svg';
import './App.css';
import NavbarComp from  './komponen/NavbarComp'
import FooterComp from './komponen/FooterComp';
import GalleryComp from './komponen/GalleryComp'
import FaqComp from './komponen/FaqComp';
import Services from './komponen/Services';
import HeroComp from './komponen/HeroComp';
function App() {
  return (
    <div>
          {/*content */}

          <HeroComp/>
          <NavbarComp/>
          <GalleryComp/>
         
          <Services/>
          <FaqComp/>
          {/*end content*/}

          <FooterComp/>

    </div>

    
  );
 
}




export default App;
