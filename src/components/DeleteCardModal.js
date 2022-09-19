import React, { Component } from 'react';

export default class DeleteCardModal extends Component {
    render(){
        const { currentList,id,confirmDeleteCardCallback,cancelDeleteCardCallback } = this.props;
        let name = currentList==null||id==null? "" :currentList.songs[id-1].title;
        return(
            <div 
                class="modal" 
                id="delete-card-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-delete-card-root'>
                        <div class="modal-north">
                            Delete Song?
                        </div>
                        <div class="modal-center">
                            <div class="modal-center-content">
                                Are you sure you wish to permanently delete the {name} from playlist?
                            </div>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="delete-card-confirm-button" 
                                class="modal-button" 
                                onClick={confirmDeleteCardCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="delete-card-cancel-button" 
                                class="modal-button"
                                onClick={cancelDeleteCardCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        
        )
    }
    
}