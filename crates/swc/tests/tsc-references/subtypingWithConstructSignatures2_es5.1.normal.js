function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived1) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived1), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var Base = function Base() {
    "use strict";
    _classCallCheck(this, Base);
};
var Derived = /*#__PURE__*/ function(Base) {
    "use strict";
    _inherits(Derived, Base);
    var _super = _createSuper(Derived);
    function Derived() {
        _classCallCheck(this, Derived);
        return _super.apply(this, arguments);
    }
    return Derived;
}(Base);
var Derived2 = /*#__PURE__*/ function(Derived) {
    "use strict";
    _inherits(Derived2, Derived);
    var _super = _createSuper(Derived2);
    function Derived2() {
        _classCallCheck(this, Derived2);
        return _super.apply(this, arguments);
    }
    return Derived2;
}(Derived);
var OtherDerived = /*#__PURE__*/ function(Base) {
    "use strict";
    _inherits(OtherDerived, Base);
    var _super = _createSuper(OtherDerived);
    function OtherDerived() {
        _classCallCheck(this, OtherDerived);
        return _super.apply(this, arguments);
    }
    return OtherDerived;
}(Base);
var r1arg1;
var r1arg2;
var r1 = foo1(r1arg1); // any, return types are not subtype of first overload
var r1a = [
    r1arg2,
    r1arg1
]; // generic signature, subtype in both directions
var r1b = [
    r1arg1,
    r1arg2
]; // generic signature, subtype in both directions
var r2arg1;
var r2arg2;
var r2 = foo2(r2arg1);
var r2a = [
    r2arg1,
    r2arg2
];
var r2b = [
    r2arg2,
    r2arg1
];
var r3arg1;
var r3arg2;
var r3 = foo3(r3arg1);
var r3a = [
    r3arg1,
    r3arg2
];
var r3b = [
    r3arg2,
    r3arg1
];
var r4arg1;
var r4arg2;
var r4 = foo4(r4arg1); // any
var r4a = [
    r4arg1,
    r4arg2
];
var r4b = [
    r4arg2,
    r4arg1
];
var r5arg1;
var r5arg2;
var r5 = foo5(r5arg1); // any
var r5a = [
    r5arg1,
    r5arg2
];
var r5b = [
    r5arg2,
    r5arg1
];
var r6arg1;
var r6arg2;
var r6 = foo6(r6arg1); // any
var r6a = [
    r6arg1,
    r6arg2
];
var r6b = [
    r6arg2,
    r6arg1
];
var r7arg1;
var r7arg2;
var r7 = foo7(r7arg1); // any
var r7a = [
    r7arg1,
    r7arg2
];
var r7b = [
    r7arg2,
    r7arg1
];
var r8arg1;
var r8arg2;
var r8 = foo8(r8arg1); // any
var r8a = [
    r8arg1,
    r8arg2
];
var r8b = [
    r8arg2,
    r8arg1
];
var r9arg1;
var r9arg2;
var r9 = foo9(r9arg1); // any
var r9a = [
    r9arg1,
    r9arg2
];
var r9b = [
    r9arg2,
    r9arg1
];
var r10arg1;
var r10arg2;
var r10 = foo10(r10arg1); // any
var r10a = [
    r10arg1,
    r10arg2
];
var r10b = [
    r10arg2,
    r10arg1
];
var r11arg1;
var r11arg2;
var r11 = foo11(r11arg1); // any
var r11a = [
    r11arg1,
    r11arg2
];
var r11b = [
    r11arg2,
    r11arg1
];
var r12arg1;
var r12arg2;
var r12 = foo12(r12arg1); // any
var r12a = [
    r12arg1,
    r12arg2
];
var r12b = [
    r12arg2,
    r12arg1
];
var r13arg1;
var r13arg2;
var r13 = foo13(r13arg1); // any
var r13a = [
    r13arg1,
    r13arg2
];
var r13b = [
    r13arg2,
    r13arg1
];
var r14arg1;
var r14arg2;
var r14 = foo14(r14arg1); // any
var r14a = [
    r14arg1,
    r14arg2
];
var r14b = [
    r14arg2,
    r14arg1
];
var r15arg1;
var r15 = foo15(r15arg1); // any
var r16arg1;
var r16 = foo16(r16arg1);
var r17arg1;
var r17 = foo17(r17arg1); // any
var r18arg1;
var r18 = foo18(r18arg1);
