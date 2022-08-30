import "./App.css";
import View from "./Pages/View";
import "./Fonts.scss";
import { Provider } from "react-redux";
import store from "./Store/store";

function App() {
  return (
    <Provider store={store}>
      <View />
    </Provider>
  );
}

export default App;
