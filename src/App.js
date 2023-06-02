import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
 import AttaOilandRice from './Components/AttaOilandRice';
// import Bestdeals from './Components/Bestdeals';
import BrandsInFocus from './Components/BrandsInFocus';
import Checkitout from './Components/Checkitout';
import DealsOfTheDay from './Components/DealsOfTheDay';
import ExploreByCategories from './Components/ExploreByCategories';
import ExploreNewCategories from './Components/ExploreNewCategories';
import ExploreNow from './Components/ExploreNow';
import Navbar from './Components/Navbar/Navbar';
// import Routing from './Components/Routing';
// import YourPleasureEssentials from './Components/YourPleasureEssentials';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <ExploreByCategories></ExploreByCategories>
     <BrowserRouter>
     <Routes>
      <Route path="/AttaOilandRice"element={<AttaOilandRice></AttaOilandRice>}>
      </Route>
     </Routes>
     </BrowserRouter>
      <ExploreNewCategories></ExploreNewCategories>
      <ExploreNow></ExploreNow>
      <Checkitout></Checkitout>
      <DealsOfTheDay></DealsOfTheDay>
      {/* <Bestdeals></Bestdeals> */}
      {/* <YourPleasureEssentials></YourPleasureEssentials> */}
      <BrandsInFocus></BrandsInFocus>
       <AttaOilandRice></AttaOilandRice> 
      


    </div>
  );
}

export default App;
