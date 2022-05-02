export class TableRow {
    public colspan: number = 1;
    public data:any; 
    constructor(colspan: number, data: any){
        this.colspan = colspan;
        this.data = data;
    }

}
