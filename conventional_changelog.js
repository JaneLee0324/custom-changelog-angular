'use strict';

const Q = require('q');
const parserOpts = require('./parser_opts');
const writerOpts = require('./writer_opts');

module.exports = Q.all([parserOpts, writerOpts]).spread((parserOpts, writerOpts) => {
    return {
        parserOpts,
        writerOpts
    };
});
