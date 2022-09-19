import jsTPS_Transaction from "../common/jsTPS.js"

export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp,initid,initoldSong, initnewSong) {
        super();
        this.app = initApp;
        this.id=initid;
        this.oldSong = initoldSong;
        this.newSong=initnewSong;
    }

    doTransaction() {
        this.app.editPlayList(this.id,this.newSong);
    }
    
    undoTransaction() {
        this.app.editPlayList(this.id,this.oldSong);
    }
}