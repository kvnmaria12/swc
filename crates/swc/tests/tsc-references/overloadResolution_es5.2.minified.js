function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _getPrototypeOf(o) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    }, _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: !0,
            configurable: !0
        }
    }), superClass && _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        return o.__proto__ = p, o;
    }, _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (e) {
            return !1;
        }
    }();
    return function() {
        var obj, self, call, result, Super = _getPrototypeOf(Derived);
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return self = this, (call = result) && ("object" == ((obj = call) && "undefined" != typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj) || "function" == typeof call) ? call : (function(self) {
            if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return self;
        })(self);
    };
}
var SomeBase = function() {
    "use strict";
    _classCallCheck(this, SomeBase);
}, SomeDerived1 = function(SomeBase1) {
    "use strict";
    _inherits(SomeDerived1, SomeBase1);
    var _super = _createSuper(SomeDerived1);
    function SomeDerived1() {
        return _classCallCheck(this, SomeDerived1), _super.apply(this, arguments);
    }
    return SomeDerived1;
}(SomeBase), SomeDerived2 = function(SomeBase2) {
    "use strict";
    _inherits(SomeDerived2, SomeBase2);
    var _super = _createSuper(SomeDerived2);
    function SomeDerived2() {
        return _classCallCheck(this, SomeDerived2), _super.apply(this, arguments);
    }
    return SomeDerived2;
}(SomeBase), SomeDerived3 = function(SomeBase3) {
    "use strict";
    _inherits(SomeDerived3, SomeBase3);
    var _super = _createSuper(SomeDerived3);
    function SomeDerived3() {
        return _classCallCheck(this, SomeDerived3), _super.apply(this, arguments);
    }
    return SomeDerived3;
}(SomeBase);
function fn1() {
    return null;
}
function fn2() {}
function fn3() {
    return null;
}
function fn4() {}
function fn5() {}
fn1(void 0), fn1({}), fn2(0, void 0), fn2(0, ""), fn2("", 0), fn2("", 0), fn3(3), fn3("", 3, ""), fn3(5, 5, 5), fn3(4), fn3("", "", ""), fn3("", "", 3), fn3(), fn4("", 3), fn4(3, ""), fn4("", 3), fn4(3, ""), fn4("", 3), fn4(3, ""), fn4(3, void 0), fn4("", null), fn4(null, null), fn4(!0, null), fn4(null, !0), fn5(function(n) {
    return n.toFixed();
}), fn5(function(n) {
    return n.substr(0);
});
