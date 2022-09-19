import React from "react";

export default class SongCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDragging: false,
            draggedTo: false
        }
    }
    handleDragStart = (event) => {
        event.dataTransfer.setData("song", event.target.id);
        this.setState(prevState => ({
            isDragging: true,
            draggedTo: prevState.draggedTo
        }));
    }
    handleDragOver = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragEnter = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragLeave = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: false
        }));
    }
    handleDrop = (event) => {
        event.preventDefault();
        let target = event.target;
        let targetId = target.id;
        targetId = targetId.substring(target.id.indexOf("-") + 1);
        //line 46 condition : own code
        if(targetId!==""){
            let sourceId = event.dataTransfer.getData("song");
            sourceId = sourceId.substring(sourceId.indexOf("-") + 1);
            this.setState(prevState => ({
                isDragging: false,
                draggedTo: false
            }));

            // ASK THE MODEL TO MOVE THE DATA
            this.props.moveCallback(sourceId, targetId);

            }
        }

    getItemNum = () => {
        return this.props.id.substring("playlist-song-".length);
    }
    //own code
    getClick=(event)=>{
        let num=this.getItemNum();
        if(event.detail===2){
            this.props.editSongCallback(num);
        }

    }

    //own code
    deleteSong=()=>{
        let id=this.getItemNum();
        this.props.deleteSongCallback(id);
    
    }

    render() {
        const {song} = this.props;
        let num = this.getItemNum();
        console.log("num: " + num);
        let itemClass = "playlister-song";
        if (this.state.draggedTo) {
            itemClass = "playlister-song-dragged-to";
        }
        let link="https://www.youtube.com/watch?v="+song.youTubeId;
        let delete_button_id="play_card_delete_button_"+num;
        return (
            <div
                id={'song-' + num}
                className={itemClass}
                onDragStart={this.handleDragStart}
                onDragOver={this.handleDragOver}
                onDragEnter={this.handleDragEnter}
                onDragLeave={this.handleDragLeave}
                onDrop={this.handleDrop}
                draggable="true"
                onClick={this.getClick}
            >
                <span>{num}.</span>
                <a href={link} draggable="false">{song.title} by {song.artist} </a>
 
                <button class="play_card_delete_button" id={delete_button_id} onClick={this.deleteSong}>🗑</button>
            </div>
        )
    }
}