import { Serializer as ТипОбращенияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-primer-тип-обращения';
import СправочникSerializer from './i-i-s-primer-справочник';

export default СправочникSerializer.extend(ТипОбращенияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
