function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
// @filename: file.tsx
// @jsx: preserve
// @module: amd
// @noLib: true
// @skipLibCheck: true
// @libFiles: react.d.ts,lib.d.ts
const React = require('react');
// OK
function Baz(arg1, arg2) {
    let a0 = /*#__PURE__*/ React.createElement(OverloadComponent, _extends({}, arg1, {
        a: "hello",
        "ignore-prop": true
    }));
    let a1 = /*#__PURE__*/ React.createElement(OverloadComponent, _extends({}, arg2, {
        "ignore-pro": "hello world"
    }));
    let a2 = /*#__PURE__*/ React.createElement(OverloadComponent, _extends({}, arg2));
    let a3 = /*#__PURE__*/ React.createElement(OverloadComponent, _extends({}, arg1, {
        "ignore-prop": true
    }));
    let a4 = /*#__PURE__*/ React.createElement(OverloadComponent, null);
    let a5 = /*#__PURE__*/ React.createElement(OverloadComponent, _extends({}, arg2, {
        "ignore-prop": "hello"
    }, arg1));
    let a6 = /*#__PURE__*/ React.createElement(OverloadComponent, _extends({}, arg2, {
        "ignore-prop": true
    }, arg1));
}
function createLink(func) {
    let o = /*#__PURE__*/ React.createElement(Link, {
        func: func
    });
    let o1 = /*#__PURE__*/ React.createElement(Link, {
        func: (a, b)=>{}
    });
}
export { };
