import React, {Component, Fragment} from "react";
import Header from "../Header/Header";
import Title from "../Title/Title";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ToolBar from "../ToolBar/ToolBar";

class WorldBrief extends Component{
    render(){
        let briefsList = this.props.briefsList;
        let count =0 ;
        if(briefsList.length>0){
            return(
                <div>
                    <ToolBar headline='World in a Brief'/>
                    <Header imageUri={briefsList[0].image}/>
                    <Title text= {<p  className="h-top">World in a Brief</p>}/>
                    <div className="content">
                        <List>
                        {briefsList.map(brief =>{
                            return(
                                <React.Fragment key={count++}>
                                    <ListItem >
                                        <div dangerouslySetInnerHTML={{__html: brief.body}} />
                                </ListItem>
                                    <Divider/>
                                </React.Fragment>
                            );
                        })}
                        </List>
                    </div>
                </div>
            )
        }
        else {
            return <div>Loadind...</div>
        }
    }
}
export default WorldBrief;