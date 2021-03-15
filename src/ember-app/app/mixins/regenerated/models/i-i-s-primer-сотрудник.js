import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string'),
  eMail: DS.attr('string')
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-primer-сотрудник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  eMail: {
    descriptionKey: 'models.i-i-s-primer-сотрудник.validations.eMail.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-primer-справочник'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-primer-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    eMail: attr('E mail', { index: 1 }),
    актуально: attr('Актуально', { index: 2 })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-primer-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    eMail: attr('E mail', { index: 1 }),
    актуально: attr('Актуально', { index: 2 })
  });
};
