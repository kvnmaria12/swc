class C {
    static bar() {
        // type of this is the constructor function type
        var t = this;
        return this;
    }
    constructor(x){}
}
var t = C.bar();
// all ok
var r2 = t.foo + 1;
var r3 = t.bar();
var r4 = new t(1);
class C2 {
    static bar() {
        // type of this is the constructor function type
        var t = this;
        return this;
    }
    constructor(x){}
}
var t2 = C2.bar();
// all ok
var r5 = t2.foo + 1;
var r6 = t2.bar();
var r7 = new t2('');
