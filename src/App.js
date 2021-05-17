import { Provider } from "react-redux";
import Header from "./Components/Header";
import MobileShop from "./Components/MobileShop";
import Store from "./Redux/Store";

function App() {
  return (
    <Provider store={Store}>
    <div>
      <Header/>
      <div className='container'>
      <MobileShop />
      </div>
      
    </div>
    </Provider>
  );
}

export default App;
