import { FETCH_FILES_SUCCESS,  FETCH_FILE_SUCCESS} from '../actions/actions';

const initialState = {
  files: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILES_SUCCESS:
      return {
        ...state,
        files: action.payload,
      };
    case FETCH_FILE_SUCCESS:
        return {
          ...state,
          file: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
