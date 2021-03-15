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
    descriptionKey: 'models.i-i-s-primer-тип-обращения.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-primer-тип-обращения.validations.код.__caption__',
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
  modelClass.defineProjection('ТипОбращенияE', 'i-i-s-primer-тип-обращения', {
    название: attr('Название', { index: 0 }),
    код: attr('Код', { index: 1 }),
    актуально: attr('Актуально', { index: 2 })
  });

  modelClass.defineProjection('ТипОбращенияL', 'i-i-s-primer-тип-обращения', {
    название: attr('Название', { index: 0 }),
    код: attr('Код', { index: 1 }),
    актуально: attr('Актуально', { index: 2 })
  });
};
