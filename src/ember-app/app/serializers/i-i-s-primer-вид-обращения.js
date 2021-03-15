import { Serializer as ВидОбращенияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-primer-вид-обращения';
import СправочникSerializer from './i-i-s-primer-справочник';

export default СправочникSerializer.extend(ВидОбращенияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
