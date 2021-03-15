import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'учет-заявок': {
          caption: 'учет-заявок',
          title: 'учет-заявок',
          справочники: {
            caption: 'справочники',
            title: 'справочники',
            'i-i-s-primer-сотрудник-l': {
              caption: 'i-i-s-primer-сотрудник-l',
              title: 'i-i-s-primer-сотрудник-l'
            },
            'i-i-s-primer-причина-обращения-l': {
              caption: 'i-i-s-primer-причина-обращения-l',
              title: 'i-i-s-primer-причина-обращения-l'
            },
            'i-i-s-primer-вид-обращения-l': {
              caption: 'i-i-s-primer-вид-обращения-l',
              title: 'i-i-s-primer-вид-обращения-l'
            },
            'i-i-s-primer-тип-обращения-l': {
              caption: 'i-i-s-primer-тип-обращения-l',
              title: 'i-i-s-primer-тип-обращения-l'
            }
          },
          обращения: {
            caption: 'обращения',
            title: 'обращения',
            'i-i-s-primer-обращение-l': {
              caption: 'i-i-s-primer-обращение-l',
              title: 'i-i-s-primer-обращение-l'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
