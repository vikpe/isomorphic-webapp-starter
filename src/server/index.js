import database from './database';
import webserver from './webserver';

database.connect(() => webserver.start());
