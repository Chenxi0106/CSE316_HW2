import React, { Component } from 'react';

export default class EditPlayListModal extends Component{
    render(){
        const {cancelModal, confirmModal,id,currentList}=this.props;
        let title_value=currentList==null||id==null?"" :currentList.songs[id-1].title;
        let artist_value=currentList==null||id==null?"" :currentList.songs[id-1].artist;
        let youtube_value=currentList==null||id==null?"" :currentList.songs[id-1].youTubeId;
        return(
            <div class="modal" id="playlist_card_edit_box" data-animation="slideInOutLeft">
                <div class="modal-root">
                <div class="modal-north">
                    Edit Song
                </div>
                <div class="modal-center" id="input_text_box">
                    <label class="input_label" id="input_label_1">Title:</label>
                    <input class="input_box" type='text' id="title_input" defaultValue={title_value} />
                    <label class="input_label" id="input_label_2">Artist:</label>
                    <input class="input_box" type='text' id="artist_input" defaultValue={artist_value} />
                    <label class="input_label" id="input_label_3">YouTubeId:</label>
                    <input class="input_box" type='text' id="youtubeid_input" defaultValue={youtube_value}/>
                </div>
                <div class="modal-south">
                    <input type="button" class="modal-button" id="play_card_edit_confirm"
                    onClick={confirmModal}
                     value='Confirm' />
                    <input type="button" class="modal-button" id="play_card_edit_cancel"
                    onClick={cancelModal}
                     value='Cancel' />
                </div>
                </div>
                
            </div>

        )
    }

   
}