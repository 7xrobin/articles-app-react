import {connect} from "react-redux";
import {ArticlesList} from "./ArticlesList";
import {loadArticles} from "../actions.js";


const mapStateToProps = state => ({
    articles : state.ListReducer.articlesList,
    worldBrief: state.ListReducer.worldBrief
});


const mapDispatchToProps = dispatch => ({
    loadArticles: () => {
        dispatch(loadArticles());
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
