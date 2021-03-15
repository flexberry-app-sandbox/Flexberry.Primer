import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      допОбращение: { serialize: 'odata-id', deserialize: 'records' },
      ответственный: { serialize: 'odata-id', deserialize: 'records' },
      типОбращения: { serialize: 'odata-id', deserialize: 'records' },
      причина: { serialize: 'odata-id', deserialize: 'records' },
      видОбращения: { serialize: 'odata-id', deserialize: 'records' },
      оператор: { serialize: 'odata-id', deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
