import { Serializer as СправочникSerializer } from
  '../mixins/regenerated/serializers/i-i-s-primer-справочник';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СправочникSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
