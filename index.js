'use strict';

const Q = require('q');
const conventionalChangelog = require('./conventional/conventional_changelog');
const parserOpts = require('./options/parser_opts');
const recommendedBumpOpts = require('./conventional_recommended_bump');
const writerOpts = require('./options/writer_opts');

module.exports = Q.all([
    conventionalChangelog,
    parserOpts,
    recommendedBumpOpts,
    writerOpts
]).spread((conventionalChangelog, parserOpts, recommendedBumpOpts, writerOpts) => {
    return {
        conventionalChangelog, 
        parserOpts,
        recommendedBumpOpts,
        writerOpts
    };
});
