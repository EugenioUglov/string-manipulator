'use strict';

/**
 * CommonJS wrapper for require() compatibility.
 * Allows importing the package in a regular CJS environment:
 *   const StringManipulator = require('string-manipulator');
 */

const { createRequire } = require('module');
const createReq = createRequire(__filename);

const esmMod = createReq('./string-manipulator.js');

const StringManipulator = esmMod.default || esmMod;

module.exports = StringManipulator;
module.exports.StringManipulator = esmMod.StringManipulator || esmMod.default || esmMod;