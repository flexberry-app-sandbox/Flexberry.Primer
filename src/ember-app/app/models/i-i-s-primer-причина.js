import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as ПричинаMixin
} from '../mixins/regenerated/models/i-i-s-primer-причина';

import СправочникModel from './i-i-s-primer-справочник';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-primer-справочник';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = СправочникModel.extend(ПричинаMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
