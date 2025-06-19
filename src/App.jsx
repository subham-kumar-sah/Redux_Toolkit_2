import { Provider } from "react-redux";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import store from "./app/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <AddTodo />
        <Todos />
      </Provider>
    </div>
  );
}

export default App;
