import { Reducer } from 'redux'
import { ContactListState, ContactListTypes } from './types'

const INITIAL_STATE: ContactListState = {
  data: { success: false, data: [] },
  error: false,
  loading: false,
}

const reducer: Reducer<ContactListState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ContactListTypes.LOAD_REQUEST:
      return { ...state, loading: true }
    case ContactListTypes.LOAD_SUCCESS:
      return {
        ...state,
        success: true,
        data: action.payload.data,
      }
    case ContactListTypes.LOAD_FAILURE:
      return {
        ...state,
        success: false,
        data: [],
      }
    case ContactListTypes.DELETE_CONTACT_REQUEST:
      return { ...state, loading: true }
    case ContactListTypes.DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        success: true,
        data: action.payload.data,
      }
    case ContactListTypes.DELETE_CONTACT_FAILURE:
      return {
        ...state,
        success: false,
        data: [],
      }
    default:
      return state
  }
}

export default reducer
