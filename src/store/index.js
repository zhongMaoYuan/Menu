import { legacy_createStore as createStore } from "redux";
import menuname from './reducer/m';
const store = createStore(menuname)

export default store