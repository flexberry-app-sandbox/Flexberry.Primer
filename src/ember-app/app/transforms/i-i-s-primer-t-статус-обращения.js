import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tСтатусОбращенияEnum from '../enums/i-i-s-primer-t-статус-обращения';

export default FlexberryEnum.extend({
  enum: tСтатусОбращенияEnum,
  sourceType: 'IIS.Primer.tСтатусОбращения'
});
