// two interfaces with the same root module should merge
// root module now multiple module declarations
var M2;
(function(M2) {
    var a;
    var r1 = a.foo;
    var r2 = a.bar;
})(M2 || (M2 = {}));
(function(M2) {
    var a;
    var r1 = a.foo;
    var r2 = a.bar;
})(M2 || (M2 = {}));
(function(M21) {
    let M3;
    (function(M3) {
        var a;
        var r1 = a.foo;
        var r2 = a.bar;
    })(M3 = M21.M3 || (M21.M3 = {}));
})(M2 || (M2 = {}));
(function(M22) {
    let M3;
    (function(M3) {
        var a;
        var r1 = a.foo;
        var r2 = a.bar;
    })(M3 = M22.M3 || (M22.M3 = {}));
})(M2 || (M2 = {}));
