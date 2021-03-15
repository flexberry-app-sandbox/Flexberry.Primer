import { Serializer as СотрудникSerializer } from
  '../mixins/regenerated/serializers/i-i-s-primer-сотрудник';
import СправочникSerializer from './i-i-s-primer-справочник';

export default СправочникSerializer.extend(СотрудникSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
