import React, { Component } from 'react';
import './App.css';
import {  BrowserRouter, Route, Switch} from 'react-router-dom';
import HomeContainer from './Home/HomeContainer';
import ArticlePageContainer from "./ArticlePage/ArticlePageContainer";
import connect from "react-redux/es/connect/connect";
import {loadArticles} from "./actions";
import WorldBriefContainer from "./WorldBrief/WordBriefContainer";
import MarketsPage from "./MarketsPage/MarketsPage";

class App extends Component {
    componentWillMount(){
        this.props.loadArticles();
    }
    render() {
        return (
                < BrowserRouter>
                    <Switch>
                        <Route path="/" component={HomeContainer} exact/>
                        <Route path="/article/:id" component={ArticlePageContainer}/>
                        <Route path="/world" component={WorldBriefContainer}/>
                        <Route path="/markets" component={MarketsPage}/>
                    </Switch>
                </BrowserRouter>
        );
  }
}
const mapStateToProps = state => ({
    articles : state.ListReducer.articlesList,
    worldBrief: state.ListReducer.worldBrief
});


const mapDispatchToProps = dispatch => ({
    loadArticles: () => {
        dispatch(loadArticles());
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

