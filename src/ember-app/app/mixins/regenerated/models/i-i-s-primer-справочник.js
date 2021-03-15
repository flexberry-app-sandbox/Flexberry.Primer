import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  актуально: DS.attr('boolean')
});

export let ValidationRules = {
  актуально: {
    descriptionKey: 'models.i-i-s-primer-справочник.validations.актуально.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СправочникE', 'i-i-s-primer-справочник', {
    актуально: attr('Актуально', { index: 0 })
  });

  modelClass.defineProjection('СправочникL', 'i-i-s-primer-справочник', {
    актуально: attr('Актуально', { index: 0 })
  });
};
