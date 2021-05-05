import { INIT_STATE } from "../../constant";
import { getType, hideModal, showModal } from "../actions";

export default function modalReducer(state = INIT_STATE.modal, action) {
  switch (action.type) {
    case getType(showModal):
      return {
        isShow: true,
      };
    case getType(hideModal):
      return {
        isShow: false,
      };

    default:
      return state;
  }
}
