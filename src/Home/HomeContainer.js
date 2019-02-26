import {connect} from "react-redux";
import Home from "./Home"


const mapStateToProps = state => ({
    firstArticle : state.ListReducer.articlesList[0],
});

export default connect(mapStateToProps)(Home);