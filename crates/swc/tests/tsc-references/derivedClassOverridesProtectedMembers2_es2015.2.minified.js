class Base {
    b(a) {}
    get c() {
        return x;
    }
    set c(v) {}
    static s(a) {}
    static get t() {
        return x;
    }
    static set t(v) {}
    constructor(a){}
}
class Derived extends Base {
    b(a) {}
    get c() {
        return y;
    }
    set c(v) {}
    static s(a) {}
    static get t() {
        return y;
    }
    static set t(a) {}
    constructor(a){
        super(a);
    }
}
var x, y, d2, d = new Derived(y);
d.a, d.b(y), d.c, d.d, d.c = y, Derived.s(y), Derived.t = y, d2[""], d2[1];
