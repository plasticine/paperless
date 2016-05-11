import paperless from './paperless/index';
import {reject} from 'lodash';

ObjC.import('Foundation');
ObjC.import('stdlib');
ObjC.import('Cocoa');

const app = Application.currentApplication();
app.includeStandardAdditions = true;

const args = ObjC.deepUnwrap($.NSProcessInfo.processInfo.arguments).slice(4);
const exitCode = paperless(app, args);
$.exit(exitCode);
