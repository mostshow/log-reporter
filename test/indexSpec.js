var expect = require('chai').expect;
var ReporterLog = require('../index.js');

describe('ReporterLog',function(){
    describe('#concatParams()',function(){
        it('合并参数',function(){
            var results = ReporterLog.concatParams({a:1,b:2,c:3});
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
            ReporterLog.init(config);
            expect(ReporterLog.config).to.have.property('url').and.equal('localhost');
            expect(ReporterLog.config).to.have.property('debugModel').and.to.be.true;
            expect(ReporterLog.config).to.have.property('onSuccess').and.an.instanceof(Object);
        });
    });
});


