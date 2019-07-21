if (!globalThis.range) {
    (function() {
        'use strict'; // needed to support `apply`/`call` with `undefined`/`null`

        var defineProperty = (function() {
            // IE 8 only supports `Object.defineProperty` on DOM elements.
            try {
                var object = {};
                var $defineProperty = Object.defineProperty;
                var result = $defineProperty(object, object, object) && $defineProperty;
            } catch (exception) {}
            return result;
        })();

        var range = function(num, func) {
            var mapFunc = x => x;
            if (arguments.length < 1) {
                throw SyntaxError('At lease 1 parameter needs to be supplied.');
            }
            if (arguments.length > 2) {
                throw SyntaxError('No more than 2 parameter should be supplied.');
            }

            if (typeof num !== 'number') {
                throw TypeError('First parameter (num) needs to be a number.');
            }
            if (!!func && typeof func !== 'function') {
                throw TypeError('Second parameter (func) needs to be a function.');
            }

            if (!Number.isInteger(num)) {
                throw TypeError('First parameter (num) needs to be an integer.');
            }
            if (num < 1) {
                throw RangeError(
                    'First parameter (num) needs to be greater than zero.'
                );
            }

            if (!!func && func.length !== 1) {
                throw SyntaxError(
                    'Second parameter (func) needs to be a function that expects a single argument.'
                );
            }
            if (!!func) {
                mapFunc = func;
            }

            var array = [];
            for (var index = 0; index < num; index++) {
                array.push(mapFunc(index));
            }

            console.log(`\tresult: ${array.join()}`);
            return array;
        };

        if (defineProperty) {
            defineProperty(globalThis, 'range', {
                value: range,
                configurable: true,
                writable: true
            });
        } else {
            globalThis.range = range;
        }
    })();
}