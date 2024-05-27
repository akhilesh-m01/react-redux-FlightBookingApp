import { createStore } from "redux";
import bookingReducer from "./bookingReducer";

// passing reducer function into the createStore()
const store = createStore(bookingReducer);

export default store;