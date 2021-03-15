import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  статус: DS.attr('i-i-s-primer-t-статус-обращения'),
  датаПоступления: DS.attr('date'),
  датаЗакрытия: DS.attr('date'),
  телефон: DS.attr('string'),
  адрес: DS.attr('string'),
  обратившийся: DS.attr('string'),
  допОбращение: DS.belongsTo('i-i-s-primer-обращение', { inverse: null, async: false }),
  ответственный: DS.belongsTo('i-i-s-primer-сотрудник', { inverse: null, async: false }),
  типОбращения: DS.belongsTo('i-i-s-primer-тип-обращения', { inverse: null, async: false }),
  причина: DS.belongsTo('i-i-s-primer-причина', { inverse: null, async: false }),
  видОбращения: DS.belongsTo('i-i-s-primer-вид-обращения', { inverse: null, async: false }),
  оператор: DS.belongsTo('i-i-s-primer-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-primer-обращение.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-primer-обращение.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаПоступления: {
    descriptionKey: 'models.i-i-s-primer-обращение.validations.датаПоступления.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаЗакрытия: {
    descriptionKey: 'models.i-i-s-primer-обращение.validations.датаЗакрытия.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-primer-обращение.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-primer-обращение.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  обратившийся: {
    descriptionKey: 'models.i-i-s-primer-обращение.validations.обратившийся.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  допОбращение: {
    descriptionKey: 'models.i-i-s-primer-обращение.validations.допОбращение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ответственный: {
    descriptionKey: 'models.i-i-s-primer-обращение.validations.ответственный.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  типОбращения: {
    descriptionKey: 'models.i-i-s-primer-обращение.validations.типОбращения.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  причина: {
    descriptionKey: 'models.i-i-s-primer-обращение.validations.причина.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  видОбращения: {
    descriptionKey: 'models.i-i-s-primer-обращение.validations.видОбращения.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оператор: {
    descriptionKey: 'models.i-i-s-primer-обращение.validations.оператор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОбращениеE', 'i-i-s-primer-обращение', {
    номер: attr('Номер', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    обратившийся: attr('ФИО обратившегося', { index: 2 }),
    датаПоступления: attr('Дата поступления', { index: 3 }),
    датаЗакрытия: attr('Дата закрытия', { index: 4 }),
    адрес: attr('Адрес', { index: 5 }),
    телефон: attr('Телефон', { index: 6 }),
    причина: belongsTo('i-i-s-primer-причина', '', {

    }, { index: 7, displayMemberPath: 'название' }),
    допОбращение: belongsTo('i-i-s-primer-обращение', '', {

    }, { index: 8, displayMemberPath: 'номер' }),
    ответственный: belongsTo('i-i-s-primer-сотрудник', 'Ответственный', {

    }, { index: 9, displayMemberPath: 'фИО' }),
    типОбращения: belongsTo('i-i-s-primer-тип-обращения', 'Тип обращения', {

    }, { index: 10, displayMemberPath: 'название' }),
    видОбращения: belongsTo('i-i-s-primer-вид-обращения', 'Вид обращения', {

    }, { index: 11, displayMemberPath: 'название' }),
    оператор: belongsTo('i-i-s-primer-сотрудник', 'Оператор', {

    }, { index: 12, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ОбращениеL', 'i-i-s-primer-обращение', {
    номер: attr('Номер', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    датаПоступления: attr('Дата поступления', { index: 2 }),
    датаЗакрытия: attr('Дата закрытия', { index: 3 }),
    адрес: attr('Адрес', { index: 4 }),
    телефон: attr('Телефон', { index: 5 }),
    допОбращение: belongsTo('i-i-s-primer-обращение', 'Дополнительное обращение', {
      номер: attr('Дополнительное обращение', { index: 6 })
    }, { index: -1, hidden: true }),
    обратившийся: attr('ФИО обратившегося', { index: 7 }),
    причина: belongsTo('i-i-s-primer-причина', 'Причина', {
      название: attr('Причина', { index: 8 })
    }, { index: -1, hidden: true }),
    ответственный: belongsTo('i-i-s-primer-сотрудник', 'Ответственный', {

    }, { index: 9, hidden: true }),
    типОбращения: belongsTo('i-i-s-primer-тип-обращения', 'Название', {

    }, { index: 10, hidden: true }),
    видОбращения: belongsTo('i-i-s-primer-вид-обращения', 'Название', {

    }, { index: 11, hidden: true }),
    оператор: belongsTo('i-i-s-primer-сотрудник', 'Оператор', {

    }, { index: 12, hidden: true })
  });
};
