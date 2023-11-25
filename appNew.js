'use strict';
import { exportLet } from './util.js';
import { exportConst } from './util.js';
import { exportConst as key } from './util.js';
import { multipleExport0, multipleExport1, multipleExport2 } from './util.js';
// import withoutExportLet from "./util.js";
// import withoutExportConst from "./util.js";
import exportDefaultConst from './util.js';
import * as All from './util.js';

import alertMesssage from './utilInstance.js';
import anyName from './utilInstance.js';

console.log('exportLet is ' + exportLet);
console.log('exportConst is ' + exportConst);
console.log('exportConst as key is ' + key);
console.log('exportDefaultConst is ' + exportDefaultConst);
console.log(All);
console.log('exportConst from object is named All ' + All.exportConst);

console.log("We can define any name if there's export default.\n" + anyName);

console.log(multipleExport0);
console.log(multipleExport1);
console.log(multipleExport2);

alert(alertMesssage);
