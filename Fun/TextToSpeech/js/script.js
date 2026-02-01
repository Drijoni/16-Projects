(function () {
  'use strict';

  var REQUIRED_IDS = ['main', 'text', 'languages', 'btnSpeak', 'info', 'errorMessage'];

  function getEl(id) {
    return document.getElementById(id);
  }

  function showError(message) {
    var el = getEl('errorMessage');
    if (el) {
      el.textContent = message;
      el.hidden = false;
      el.setAttribute('aria-hidden', 'false');
      setTimeout(function () {
        el.hidden = true;
        el.setAttribute('aria-hidden', 'true');
      }, 6000);
    }
  }

  function hideError() {
    var el = getEl('errorMessage');
    if (el) {
      el.hidden = true;
      el.setAttribute('aria-hidden', 'true');
    }
  }

  function componentsReady() {
    var missing = REQUIRED_IDS.filter(function (id) {
      return !getEl(id);
    });
    if (missing.length) {
      console.warn('TextToSpeech: missing elements:', missing.join(', '));
      return false;
    }
    return true;
  }

  function init() {
    if (!componentsReady()) {
      showError('Some parts of the page did not load. Please refresh the page.');
      return;
    }

    if (!window.speechSynthesis) {
      showError('Text-to-speech is not supported in this browser. Try Chrome, Edge, or Safari.');
      return;
    }

    var btnSpeak = getEl('btnSpeak');
    var info = getEl('info');

    if (btnSpeak) {
      btnSpeak.addEventListener('click', textToSpeech);
    }
    if (info) {
      info.addEventListener('click', showHelpMessage);
    }
  }

  function textToSpeech() {
    var msg = document.getElementById('text').value;
    var audio = new SpeechSynthesisUtterance();
    var language = document.getElementById('languages').value;
    audio.lang = language;
    audio.text = msg;
    audio.volume = 1;
    audio.rate = 1;
    audio.pitch = 1;
    window.speechSynthesis.speak(audio);
  }

  function showHelpMessage() {
    var lines = [
      'Text-to-Speech Help',
      '• Type or paste text above, then click Speak.',
      '• Choose a language from the dropdown for pronunciation.',
      '• If nothing plays: check volume, use Chrome/Edge/Safari, and allow sound for this site.',
      '• Refresh the page if the controls don’t respond.'
    ];
    alert(lines.join('\n\n'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();