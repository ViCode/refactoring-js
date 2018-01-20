import express      from 'express';
import logger       from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser   from 'body-parser';
import http         from 'http';
import expressTranslate from 'express-translate';
import locale from 'locale';
import {readdirSync} from 'fs';

import {readJsonFileSync} from './common/lib/json-loader';

var app = express();
const server = http.createServer(app);
let port = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set translations
app.use(locale(["en", "fr"], "en"));
let translator = new expressTranslate();
let translations = readJsonFileSync(__dirname + '/common/config/translate.json', 'utf8');
Object.keys(translations).forEach((key) => {
  translator.addLanguage(key, translations[key]);
});
app.use(translator.middleware());

// Set twig views
app.set("view engine","twig");
app.use(express.static(__dirname + '/common/styles'));
app.use(express.static(__dirname + '/common/img'));
app.set("views", __dirname + '/common/views');

// Set routes
readdirSync(__dirname + '/routes')
.map(name => {
  let router = require('./routes/' + name).default;
  app.set("views", __dirname + '/routes/' + name + '/views');
  app.use('/' + name, router);
});

app.close = function() {
    server.close();
}

app.listen(() => {
    server.listen(port, () => {
        console.log("Express server listening on port " + port + " in " + app.settings.env + " mode");
    });
});

export default app;
