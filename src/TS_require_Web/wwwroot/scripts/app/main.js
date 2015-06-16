define(["require", "exports"], function (require, exports) {
    var Main = (function () {
        function Main() {
            this.runString = 'hello from main';
        }
        Main.prototype.run = function () {
            alert(this.runString);
        };
        return Main;
    })();
    return Main;
});
