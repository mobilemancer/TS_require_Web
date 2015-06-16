class Main {
    runString: string;

    constructor() {
        this.runString = 'hello from main';
    }

    run() {
        alert(this.runString);
    }
}

export = Main;