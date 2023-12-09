import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./MainPage.js"
import ActivitiesContent from "./components/activities_content/ActivitiesContent.js"
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path="/:act" element={<ActivitiesContent/>} component={ActivitiesContent} />
      </Routes>
      </BrowserRouter>
 );
}

export default App;
