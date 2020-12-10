class HistoryObserver{
    constructor(){
        this.historyColor=[];
    }

    update(model){
        this.historyColor.unshift(model.color[0].toUpperCase());
        let msg = 'The most recent 5 colors were: ';
        for (let i=0; i<5;i++){
            if(this.historyColor[i]){
                msg += this.historyColor[i].toUpperCase()+ ' ';
            }
        }
        console.log(msg);
    }
}