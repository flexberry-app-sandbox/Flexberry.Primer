import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('справочник', 'Справочникs');
inflector.irregular('обращения', 'Обращенияs');
inflector.irregular('обращение', 'Обращениеs');
inflector.irregular('сотрудник', 'Сотрудникs');
inflector.irregular('причина', 'Причинаs');

export default {};
