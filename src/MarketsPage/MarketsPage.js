import  React, {Component} from 'react';
import ToolBar from "../ToolBar/ToolBar";
import './markets.css';
import ListItem from "@material-ui/core/ListItem/ListItem";
import Divider from "@material-ui/core/Divider/Divider";
import List from "@material-ui/core/List/List";

class MarketsPage extends Component{
    render(){
        return (
            <div id="markets-page-container">
                <ToolBar headline='Markets'/>
                <div className="session-divider currency">Markets and Currencies</div>
                <div id="market-header">International Markets</div>
                <List id="markets-list">
                    <ListItem className="market-item">
                        <div className="market-name">DJIA</div>
                        <div className="market-cotation">
                            <div className="market-value">99999999</div>
                            <div className="market-tag">
                                <div className="market-point">-98,000</div>
                                <div className="market-percentage">-0.78%</div>
                            </div>
                        </div>
                    </ListItem>
                    <Divider/>
                </List>
            </div>
        )
    }
}

export default MarketsPage;