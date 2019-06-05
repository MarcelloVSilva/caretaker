class Caretaker {
    queries = [];
    constructor(queryList) {
        this.queries = queryList;
    }

    get queries() {
        return this.queryList;
    }

    set queries(newQueryList) {
        this.queryList = newQueryList
    }

    static logSomething(toLog) {
        console.log(toLog);
    }
}

export default Caretaker;