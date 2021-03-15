import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-primer-обращение', 'Unit | Model | i-i-s-primer-обращение', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-primer-вид-обращения',
    'model:i-i-s-primer-обращение',
    'model:i-i-s-primer-причина',
    'model:i-i-s-primer-сотрудник',
    'model:i-i-s-primer-справочник',
    'model:i-i-s-primer-тип-обращения',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
