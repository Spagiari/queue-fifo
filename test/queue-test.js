/* globals describe it beforeEach afterEach */

var should = require('should');
var Queue = require('../');

describe('Queue Unit Tests', function() {

    var queue;

    beforeEach(function () {
        queue = new Queue();
    });

    afterEach(function () {
        queue = null;
    });

    it('should have a working test environment', function() {
        true.should.equal(true);
    });

    it('should instantiate a queue instance', function () {
        queue.should.be.ok;
    });

    it('should be empty when first instantiated', function () {
        queue.isEmpty().should.equal(true);
        queue.size().should.equal(0);
    });

    it('should queue up data into the queue', function () {
        queue.queue('some test data');
        queue.queue('some more test data');
        queue.queue('and yet some more...');
        queue.queue({
            "id": 1,
            "payload": {
                "number": 42,
                "desc": "the answer"
            }
        });
        queue.size().should.equal(4);
    });

    it('should dequeue data from the front of the queue', function () {
        queue.queue('some test data');
        queue.queue('some more test data');
        queue.queue('and yet some more...');
        queue.size().should.equal(3);

        var first = queue.dequeue();
        first.should.equal('some test data');

        queue.size().should.equal(2);

        queue.dequeue().should.equal('some more test data');
        queue.size().should.equal(1);
    });
});
