import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  название: DS.attr('string'),
  код: DS.attr('number')
});

export let ValidationRules = {
  название: {
    descriptionKey: 'models.i-i-s-primer-причина.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-primer-причина.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-primer-справочник'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПричинаОбращенияE', 'i-i-s-primer-причина', {
    название: attr('Название', { index: 0 }),
    код: attr('Код', { index: 1 })
  });

  modelClass.defineProjection('ПричинаОбращенияL', 'i-i-s-primer-причина', {
    название: attr('Название', { index: 0 }),
    код: attr('Код', { index: 1 })
  });
};
