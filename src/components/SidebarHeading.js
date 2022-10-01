import React from "react";

export default class SidebarHeading extends React.Component {

    handleClick = (event) => {
        const {createNewListCallback,canAddList} = this.props;
        createNewListCallback();
    };
    render() {
        let name=this.props.canAddList?"add-list-button" :"add-list-button-disabled" 
        return (
            <div id="sidebar-heading">
                <input 
                    type="button" 
                    id={name}
                    className="toolbar-button" 
                    onClick={this.handleClick}
                    value="+" />
                Your Playlists
            </div>
        );
    }
}