export class Section {
    private first: string;
    private second: string;
    constructor(first: string, second: string) {
        this.first = first;
        this.second = second;
    }
    getFirstStartingPoint() {
        let element = document.getElementById(this.first);        
        return element?.offsetTop ?? 0 + (element?.offsetHeight ?? 0);
    }
    getSecondStartingPoint() {
        let element = document.getElementById(this.second);
        return element?.offsetTop ?? 0 + (element?.offsetHeight ?? 0);
    }
}