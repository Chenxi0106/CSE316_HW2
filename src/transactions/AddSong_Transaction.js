import jsTPS_Transaction from "../common/jsTPS.js"

export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initApp,initid,initsong) {
        super();
        this.app = initApp;
        this.id=initid;
        this.song=initsong;
    }

    doTransaction() {
        this.app.addSong(this.song);
    }
    
    undoTransaction() {
        this.app.deleteSong(this.id);
    }
}