import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-primer-вид-обращения-l');
  this.route('i-i-s-primer-вид-обращения-e',
  { path: 'i-i-s-primer-вид-обращения-e/:id' });
  this.route('i-i-s-primer-вид-обращения-e.new',
  { path: 'i-i-s-primer-вид-обращения-e/new' });
  this.route('i-i-s-primer-обращение-l');
  this.route('i-i-s-primer-обращение-e',
  { path: 'i-i-s-primer-обращение-e/:id' });
  this.route('i-i-s-primer-обращение-e.new',
  { path: 'i-i-s-primer-обращение-e/new' });
  this.route('i-i-s-primer-причина-обращения-l');
  this.route('i-i-s-primer-причина-обращения-e',
  { path: 'i-i-s-primer-причина-обращения-e/:id' });
  this.route('i-i-s-primer-причина-обращения-e.new',
  { path: 'i-i-s-primer-причина-обращения-e/new' });
  this.route('i-i-s-primer-сотрудник-l');
  this.route('i-i-s-primer-сотрудник-e',
  { path: 'i-i-s-primer-сотрудник-e/:id' });
  this.route('i-i-s-primer-сотрудник-e.new',
  { path: 'i-i-s-primer-сотрудник-e/new' });
  this.route('i-i-s-primer-справочник-l');
  this.route('i-i-s-primer-справочник-e',
  { path: 'i-i-s-primer-справочник-e/:id' });
  this.route('i-i-s-primer-справочник-e.new',
  { path: 'i-i-s-primer-справочник-e/new' });
  this.route('i-i-s-primer-тип-обращения-l');
  this.route('i-i-s-primer-тип-обращения-e',
  { path: 'i-i-s-primer-тип-обращения-e/:id' });
  this.route('i-i-s-primer-тип-обращения-e.new',
  { path: 'i-i-s-primer-тип-обращения-e/new' });
});

export default Router;
