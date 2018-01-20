import {
  readFileSync
} from 'fs';

export let readJsonFileSync = (filepath, encoding) => {
    encoding = encoding||'utf8';
    var file = readFileSync(filepath, encoding);
    return JSON.parse(file);
}
