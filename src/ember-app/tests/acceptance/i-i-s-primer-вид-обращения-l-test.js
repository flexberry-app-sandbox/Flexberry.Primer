import { test } from 'qunit';

import moduleForAcceptance from 'ember-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | i i s primer вид обращения l');

test('testing /i-i-s-primer-вид-обращения-l', function(assert) {
  visit('/i-i-s-primer-вид-обращения-l');

  andThen(() => {
    checkOlvConfig('[data-test-olv]', null, assert, [
      'refreshButton',
      'createNewButton',
      'colsConfigButton',
    ]);

    const controller = this.application.__container__.lookup('controller:' + currentRouteName());
    const newFormRoute = controller.get('editFormRoute') + '.new';
    goToNewForm('[data-test-olv]', null, assert, newFormRoute);
  });
});
