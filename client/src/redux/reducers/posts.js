import { INIT_STATE } from "../../constant";
import { getPosts, getType } from "../actions";

export default function postsReducers(state = INIT_STATE.posts, action) {
  switch (action.type) {
    case getType(getPosts.getPostsRequest): //case 'getPostsRequest'
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPosts.getPostsSuccess): //case 'getPostsSuccess'
      return {
        ...state,
        isLoading: true,
        data: action.payload,
      };
    case getType(getPosts.getPostsFailure): //case 'getPostsFailure'
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
