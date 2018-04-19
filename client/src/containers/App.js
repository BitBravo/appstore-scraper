// ./react-redux-client/src/containers/App.js
import { connect } from 'react-redux';
import App from '../components/App';
import * as scrapActions from '../actions/scrapActions';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedAppState: state.appState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedsaveData: param  => dispatch(scrapActions.saveData(param)),
    mappedgetData: param  => dispatch(scrapActions.getData(param))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
