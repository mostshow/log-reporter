var expect = require('chai').expect;
var LogReporter = require('../index.js');

describe('LogReporter',function(){
    describe('#concatParams()',function(){
        it('合并参数',function(){
            var results = LogReporter.concatParams({a:1,b:2,c:3});
            expect(results).to.equal('a=1&b=2&c=3');
        });
    });

    describe('#init()',function(){
        it('初始化配置',function(){
            var config = {
                url: 'localhost',
                random: 1,
                ignore: [/Script error/i],
                debugModel: true
            }
            LogReporter.init(config);
            expect(LogReporter.config).to.have.property('url').and.equal('localhost');
            expect(LogReporter.config).to.have.property('debugModel').and.to.be.true;
            expect(LogReporter.config).to.have.property('onSuccess').and.an.instanceof(Object);
        });
    });
});


