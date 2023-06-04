import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
import pkg from 'file-saver'
const {saveAs} = pkg


const Finals_json_1 = require('../data/Finals.json');

const indexed = Finals_json_1.map((item, index) => Object.assign({index}, item))
console.dir(indexed, {'maxArrayLength': null})

var blob = new Blob([JSON.stringify(indexed)], {type: "application/JSON"});
saveAs(blob, "data.json");

saveAs(indexed, 'finalsID.json' )