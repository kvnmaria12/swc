import regeneratorRuntime from "regenerator-runtime";
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var _marked = regeneratorRuntime.mark(g);
//@target: ES6
function g() {
    var x;
    return regeneratorRuntime.wrap(function g$(_ctx1) {
        while(1)switch(_ctx1.prev = _ctx1.next){
            case 0:
                _ctx1.t0 = _defineProperty;
                _ctx1.t1 = {};
                _ctx1.next = 4;
                return 0;
            case 4:
                _ctx1.t2 = _ctx1.sent;
                _ctx1.t3 = regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                });
                x = (0, _ctx1.t0)(_ctx1.t1, _ctx1.t2, _ctx1.t3);
            case 7:
            case "end":
                return _ctx1.stop();
        }
    }, _marked);
}
