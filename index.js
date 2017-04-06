;(function () {

    var root = typeof self == 'object' && self.self === self && self ||
        typeof global == 'object' && global.global === global && global ||
            this ||
                {};
    var ObjProto = Object.prototype;
    var toString = ObjProto.toString,
        hasOwnProperty = ObjProto.hasOwnProperty;

    function isType (name){
        return function(obj){
            return toString.call(obj) === '[object ' + name + ']';
        }
    }

    function extend (destination, source, override) {

        if (override === undefined) override = true;
        for (var property in source) {
            if (override || !(property in destination)) {
                destination[property] = source[property];
            }
        }
        return destination;
    }


    var httpClient = (function(){

    })()

    var LogReporter = {

        clientLogSendCount:0,

        clientLogSendMax:50,

        noop : function () {},

        init : function(config){
            this.config = {
                url: '',
                random: 1,
                onSuccess: this.noop,
                onError: this.noop,
                onTimeout: this.noop,
                ignore: [/Script error/i],
                debugModel: false
            };
            extend(this.config,config)
        },

        send : function(options){

            if (!options) return;

            if (this.clientLogSendCount > this.clientLogSendMax) {
                return;
            }

            if (!options.name) options.name = "NONE";
            if (!options.level) options.level = "ERROR";

            this.clientLogSendCount++;
        },

        checkIgnoreMsg : function(msg){

        },

        fixParams : function(params) {
            var temp = {
                referer : root.location.href,
                resolution : root.screen.width + '*' + root.screen.height,
                from : root.document.referrer
            }

            return extend(params,temp);
        },

        concatParams : function(obj) {
            var arr = [];
            for (var key in obj) {
                if (hasOwnProperty.call(obj, key) && obj[key]) arr.push(key + '=' + encodeURIComponent(obj[key]));
            }

            return arr.join('&');
        },

        needReport : function(sampling){
            // sampling: 0 - 1
            return Math.random() <= sampling;
        }
    }

    root.onerror = function (msg, src, row, col, error) {

        return true;
    };

    if (typeof exports != 'undefined' && !exports.nodeType) {
        if (typeof module != 'undefined' && !module.nodeType && module.exports) {
            exports = module.exports = LogReporter;
        }
        exports.LogReporter = LogReporter;

    } else {

        root.LogReporter = LogReporter;
    }


})();

