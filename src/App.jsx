import { Provider } from "react-redux";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import store from "./app/store";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div>
      <Provider store={store}>
        <AddTodo />
        <Todos />
        <UsersList />
      </Provider>
    </div>
  );
}

export default App;
