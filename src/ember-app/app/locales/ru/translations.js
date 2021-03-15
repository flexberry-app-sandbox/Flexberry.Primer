import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISPrimerВидОбращенияLForm from './forms/i-i-s-primer-вид-обращения-l';
import IISPrimerОбращениеLForm from './forms/i-i-s-primer-обращение-l';
import IISPrimerПричинаОбращенияLForm from './forms/i-i-s-primer-причина-обращения-l';
import IISPrimerСотрудникLForm from './forms/i-i-s-primer-сотрудник-l';
import IISPrimerСправочникLForm from './forms/i-i-s-primer-справочник-l';
import IISPrimerТипОбращенияLForm from './forms/i-i-s-primer-тип-обращения-l';
import IISPrimerВидОбращенияEForm from './forms/i-i-s-primer-вид-обращения-e';
import IISPrimerОбращениеEForm from './forms/i-i-s-primer-обращение-e';
import IISPrimerПричинаОбращенияEForm from './forms/i-i-s-primer-причина-обращения-e';
import IISPrimerСотрудникEForm from './forms/i-i-s-primer-сотрудник-e';
import IISPrimerСправочникEForm from './forms/i-i-s-primer-справочник-e';
import IISPrimerТипОбращенияEForm from './forms/i-i-s-primer-тип-обращения-e';
import IISPrimerВидОбращенияModel from './models/i-i-s-primer-вид-обращения';
import IISPrimerОбращениеModel from './models/i-i-s-primer-обращение';
import IISPrimerПричинаModel from './models/i-i-s-primer-причина';
import IISPrimerСотрудникModel from './models/i-i-s-primer-сотрудник';
import IISPrimerСправочникModel from './models/i-i-s-primer-справочник';
import IISPrimerТипОбращенияModel from './models/i-i-s-primer-тип-обращения';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-primer-вид-обращения': IISPrimerВидОбращенияModel,
    'i-i-s-primer-обращение': IISPrimerОбращениеModel,
    'i-i-s-primer-причина': IISPrimerПричинаModel,
    'i-i-s-primer-сотрудник': IISPrimerСотрудникModel,
    'i-i-s-primer-справочник': IISPrimerСправочникModel,
    'i-i-s-primer-тип-обращения': IISPrimerТипОбращенияModel
  },

  'application-name': 'Primer',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Primer',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Primer',
          title: 'Primer'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'учет-заявок': {
          caption: 'Учет заявок',
          title: 'Учет заявок',
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-primer-сотрудник-l': {
              caption: 'Сотрудники',
              title: 'Сотрудник'
            },
            'i-i-s-primer-причина-обращения-l': {
              caption: 'Причина обращения',
              title: 'Причина обращения'
            },
            'i-i-s-primer-вид-обращения-l': {
              caption: 'Вид обращения',
              title: 'Вид обращения'
            },
            'i-i-s-primer-тип-обращения-l': {
              caption: 'Тип обращения',
              title: 'Тип обращения'
            }
          },
          обращения: {
            caption: 'Обращения',
            title: 'Обращения',
            'i-i-s-primer-обращение-l': {
              caption: 'ОбращениеL',
              title: 'Обращение'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-primer-вид-обращения-l': IISPrimerВидОбращенияLForm,
    'i-i-s-primer-обращение-l': IISPrimerОбращениеLForm,
    'i-i-s-primer-причина-обращения-l': IISPrimerПричинаОбращенияLForm,
    'i-i-s-primer-сотрудник-l': IISPrimerСотрудникLForm,
    'i-i-s-primer-справочник-l': IISPrimerСправочникLForm,
    'i-i-s-primer-тип-обращения-l': IISPrimerТипОбращенияLForm,
    'i-i-s-primer-вид-обращения-e': IISPrimerВидОбращенияEForm,
    'i-i-s-primer-обращение-e': IISPrimerОбращениеEForm,
    'i-i-s-primer-причина-обращения-e': IISPrimerПричинаОбращенияEForm,
    'i-i-s-primer-сотрудник-e': IISPrimerСотрудникEForm,
    'i-i-s-primer-справочник-e': IISPrimerСправочникEForm,
    'i-i-s-primer-тип-обращения-e': IISPrimerТипОбращенияEForm
  },

});

export default translations;
