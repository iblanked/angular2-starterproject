System.register(['angular2/platform/browser', './components/app-component/MyApp'], function(exports_1) {
    var browser_1, MyApp_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (MyApp_1_1) {
                MyApp_1 = MyApp_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(MyApp_1.MyApp)
                .catch(function (err) { return console.log(err); });
        }
    }
});
//# sourceMappingURL=boot.js.map