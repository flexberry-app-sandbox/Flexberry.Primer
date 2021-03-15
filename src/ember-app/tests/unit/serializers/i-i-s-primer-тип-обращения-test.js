import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-primer-тип-обращения', 'Unit | Serializer | i-i-s-primer-тип-обращения', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-primer-тип-обращения',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-primer-t-статус-обращения',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
