import { Serializer as ОбращениеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-primer-обращение';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОбращениеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
