import AppBar from "@material-ui/core/Toolbar/Toolbar";
import {Link} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton/IconButton";
import React from "react";

function ToolBar(props) {
    return(
        <AppBar className="appbar" position="fixed">
            <Link to="/">
                <IconButton>
                    <i className="material-icons">
                        keyboard_backspace
                    </i>
                </IconButton>
            </Link>
            <span>{props.headline}</span>
        </AppBar>
        );

}
export default ToolBar;
