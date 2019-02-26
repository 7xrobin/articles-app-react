import {connect} from 'react-redux';
import WorldBrief from "./WorldBrief";

const mapStateToProps = state => ({
    briefsList : state.ListReducer.briefsList,
});

export default connect(mapStateToProps)(WorldBrief);