const INITIAL_STATE = {
  datas: [],
  isFetching: false,
  error: null,
  successMsg: null
}

export const scrapReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return {
        ...currentState,
        datas: [],
        isFetching: true,
        error: null,
        successMsg: null
      }

    case 'FETCH_DATA_SUCCESS':
      return {
        ...currentState,
        datas: [],
        isFetching: true,
        error: null,
        successMsg: null
      }
    case 'FETCH_DATA_FAILED':
      return {
        ...currentState,
        datas: [],
        isFetching: true,
        error: null,
        successMsg: null
      }

    default:
      return currentState;

  }
}
