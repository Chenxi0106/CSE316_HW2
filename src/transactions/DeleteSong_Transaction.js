import jsTPS_Transaction from "../common/jsTPS.js"


export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initApp,initid,initsong) {
        super();
        this.app = initApp;
        this.id = initid;
        this.song = initsong;
    }

    doTransaction() {
        this.app.deleteSong(this.id);
    }
    
    undoTransaction() {
        this.app.insertNewSong(this.id,this.song);
    }
}