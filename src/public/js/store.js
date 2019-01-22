/**
 * Store là singleton object trong Redux - giống như global state object.
 * Trong trường hợp đơn giản đầu tiên này là store sẽ dispatch action với payload là 
 * tracklist mà chúng ta đã tạo ra (by hand!) trước đó.
 * Do đó, chúng ta sẽ không pass tracks này vào trong component nữa
 */

import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "../../reducers";

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export function configureStore(initialState) {
 return createStoreWithMiddleware(rootReducer, initialState);
}