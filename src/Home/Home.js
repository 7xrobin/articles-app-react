import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import Header from "../Header/Header";
import ListArticlesContainer from '../ListArticles/ListArticlesContainer';

class Home extends Component {
    render() {
        const firstArticle = this.props.firstArticle;
        if(!firstArticle){
            return <p>Loading...</p>
        }
        else{
            return (
                <Grid container >
                    <Grid item xs={12}>
                        <Header imageUri={firstArticle.leaderImage}/>
                        <ListArticlesContainer/>
                    </Grid>
                </Grid>
            );
        }
    }
}
export default Home;