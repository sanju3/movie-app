import * as types from '../constants';

const initialState = {};

export const movieReviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATA_REQUEST:
      return {loading: true};
    case types.GET_DATA_SUCCESS:
      return {loading: false, data: action.payload};
    case types.GET_DATA_ERROR:
      return {loading: false, error: action.payload};
    case types.CREATE_REVIEW:
      return {
        ...state,
        data: [
          ...state.data,
          {
            display_title: action.payload.movieName,
            multimedia: {src: action.payload.imagePath},
            headline: action.payload.movieHeadline,
            summary_short: action.payload.movieSummary,
            byline: action.payload.movieByline,
            publication_date: action.payload.moviePublicationDate,
          },
        ],
      };
    case types.UPDATE_REVIEW:
      for (let i in state.data) {
        if (state.data[i].display_title === action.payload.movieName) {
          state.data[i].multimedia.src = action.payload.imagePath;
          state.data[i].headline = action.payload.movieHeadline;
          state.data[i].summary_short = action.payload.movieSummary;
          state.data[i].byline = action.payload.movieByline;
          state.data[i].publication_date = action.payload.moviePublicationDate;
          break;
        }
      }
      return state;
    case types.DELETE_REVIEW:
      return {
        ...state,
        data: state.data.filter(item => item.display_title !== action.payload),
      };
    default:
      return state;
  }
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {loading: true};
    case types.LOGIN_SUCCESS:
      return {loading: false, data: action.payload};
    case types.LOGIN_ERROR:
      return {loading: false, error: action.payload};
    case types.SIGNUP_REQUEST:
      return {loading: true};
    case types.SIGNUP_SUCCESS:
      return {loading: false, data: action.payload};
    case types.SIGNUP_ERROR:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
