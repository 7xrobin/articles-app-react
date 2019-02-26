import {connect} from "react-redux";
import ArticlePage from "./ArticlePage";
import {loadArticle} from "../actions"

const mapStateToProps = (state, props) => {
    return {
        listLoading: state.ListReducer.loading,
        article: state.ListReducer.articlesList.find(art => art.nid === props.match.params.id )
    }
};

const mapDispatchToProps = dispatch => ({
    loadArticle: (article) => {
        dispatch(loadArticle(article));
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(ArticlePage);



