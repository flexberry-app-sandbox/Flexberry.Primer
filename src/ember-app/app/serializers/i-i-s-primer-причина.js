import { Serializer as ПричинаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-primer-причина';
import СправочникSerializer from './i-i-s-primer-справочник';

export default СправочникSerializer.extend(ПричинаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
