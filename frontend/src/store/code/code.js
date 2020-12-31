import { combineReducers } from "redux";

const UPDATE_CODE = "UPDATE_CODE";

export function updateCode(code) {
  return {
    type: UPDATE_CODE,
    code: code.code,
    language: code.language,
  };
}

const defaultCode = {
  language: "python",
  code: "print('Python is the Best')",
};
function code(state = defaultCode, action) {
  switch (action.type) {
    case UPDATE_CODE:
      return {
        language: action.language,
        code: action.code,
      };

    default:
      return state;
  }
}

const codeApp = combineReducers({
  code,
});
export default codeApp;
