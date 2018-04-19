// ./react-redux-client/src/actions/todoActions.js

const apiUrl = "/api/";


export const getData = (data) => {console.log(data)
  return (dispatch) => {
    dispatch(getDataRequest(data));
    return fetch(apiUrl, {
      method:'post',
      body: data,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data.todo);
          dispatch(getDataSuccess(data.todo, data.message))
        })
      }
      else{
        response.json().then(error => {
          dispatch(getDataFailed(error))
        })
      }
    })
  }
}

export const saveData = (data) => {console.log(data)
  return (dispatch) => {
    dispatch(getDataRequest(data));
    return fetch(apiUrl, {
      method:'post',
      body: data,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data.todo);
          dispatch(getDataSuccess(data.todo, data.message))
        })
      }
      else{
        response.json().then(error => {
          dispatch(getDataFailed(error))
        })
      }
    })
  }
}

export const getDataRequest = (todo) => {
  return {
    type: 'FETCH_DATA_REQUEST',
    todo
  }
}

export const getDataSuccess = (todo,message) => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    todo:todo,
    message:message
  }
}

export const getDataFailed = (error) => {
  return {
    type: 'FETCH_DATA_FAILED',
    error
  }
}
