import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as СотрудникMixin
} from '../mixins/regenerated/models/i-i-s-primer-сотрудник';

import СправочникModel from './i-i-s-primer-справочник';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-primer-справочник';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = СправочникModel.extend(СотрудникMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
