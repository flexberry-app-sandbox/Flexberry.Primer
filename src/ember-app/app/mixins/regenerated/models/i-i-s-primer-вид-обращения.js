import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  название: DS.attr('string'),
  код: DS.attr('number'),
  типОбращения: DS.belongsTo('i-i-s-primer-тип-обращения', { inverse: null, async: false })
});

export let ValidationRules = {
  название: {
    descriptionKey: 'models.i-i-s-primer-вид-обращения.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-primer-вид-обращения.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  типОбращения: {
    descriptionKey: 'models.i-i-s-primer-вид-обращения.validations.типОбращения.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-primer-справочник'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВидОбращенияE', 'i-i-s-primer-вид-обращения', {
    название: attr('Название', { index: 0 }),
    код: attr('Код', { index: 1 }),
    типОбращения: belongsTo('i-i-s-primer-тип-обращения', 'Тип обращения', {
      название: attr('Название', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'название' })
  });

  modelClass.defineProjection('ВидОбращенияL', 'i-i-s-primer-вид-обращения', {
    название: attr('Название', { index: 0 }),
    код: attr('Код', { index: 1 }),
    типОбращения: belongsTo('i-i-s-primer-тип-обращения', 'Название', {
      название: attr('Название', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
