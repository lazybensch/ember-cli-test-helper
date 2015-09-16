import { startApp } from 'ember-cli-test-helper';
import config from '../../config/environment';
import Application from '../../app';

export default startApp.bind(this, Application, config);
