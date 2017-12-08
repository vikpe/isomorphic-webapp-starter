import database from 'server/database';
import webserver from 'server/webserver';

database.connect(() => webserver.start());
