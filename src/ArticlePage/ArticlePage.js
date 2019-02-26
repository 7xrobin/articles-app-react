import React, {Component} from 'react';
import Header from '../Header/Header';
import Title from "../Title/Title";
import "./article.css";
import Divider from "@material-ui/core/Divider/Divider";
import ToolBar from "../ToolBar/ToolBar";

class ArticlePage extends Component{
    render(){
        const article = this.props.article;
        const isLoading = this.props.listLoading;
        if(isLoading){
            return (
                <div>isLoading</div>
            )
        }
        else {
            this.props.loadArticle(article);
            return (
                <div>
                    <ToolBar headline={article.headline}/>
                    <Header imageUri={article.leaderImage}/>
                    <Title text={
                        <p  className="h-top">{article.headline}</p>
                    }/>
                    <div className="content">
                        <div dangerouslySetInnerHTML={{__html: article.body}} />
                    </div>
                    <Divider />
                    <div className="share-container">
                        <i className="material-icons red">
                            share
                        </i>
                        <p className="red">Share this History</p>
                    </div>
                    <Divider />
                </div>
            );
        }

    }
}

export default ArticlePage;