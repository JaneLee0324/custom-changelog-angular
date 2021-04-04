'use strict';

const Q = require('q');
const parserOpts = require('../options/parser_opts');
const writerOpts = require('../options/writer_opts');

module.exports = Q.all([parserOpts, writerOpts]).spread((parserOpts, writerOpts) => {
    return {
        parserOpts,
        writerOpts
    };
});
