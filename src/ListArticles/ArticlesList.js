import  React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DayTitle from '../DayTitle/DayTitle';
import './listarticles.css';
import {Link} from 'react-router-dom';

export class ArticlesList extends Component {
    render(){
        const { articles, worldBrief} = this.props;
        return (
            <div>
                <DayTitle/>
                <List component="nav" className='articles-list'>
                    <div className="session-divider today">Today's agenda</div>
                    {articles.map((article) => {
                        return(
                            <React.Fragment key={article.nid}>
                                <ListItem button >
                                    <Link to={`/article/${article.nid}`}>
                                        <ListItemText primary={article.headline} />
                                    </Link>
                                </ListItem>
                                <Divider/>
                            </React.Fragment>
                        );
                    })}
                    <div className="session-divider world">The world in a Brief</div>
                    <ListItem button >
                        <Link to="/world">
                            <ListItemText primary={worldBrief.text} />
                        </Link>
                    </ListItem>
                    <div className="session-divider currency">Markets and Currencies</div>
                    <ListItem button>
                        <Link to="/markets">
                            <ListItemText primary="Market indices, commodity prices and exchange rates" />
                        </Link>
                    </ListItem>
                </List>
            </div>
        );
    }

}
