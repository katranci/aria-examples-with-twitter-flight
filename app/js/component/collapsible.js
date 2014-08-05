define(function (require) {

  'use strict';

  var CollapsibleToggleButton = require('component/collapsible/toggle_button');
  var CollapsibleRegion       = require('component/collapsible/region');
  var CollapsibleCloseButton  = require('component/collapsible/close_button');

  return initialize;

  function initialize() {
    CollapsibleToggleButton.attachTo('.collapsible__toggle-button');
    CollapsibleRegion.attachTo('.collapsible__region');
    CollapsibleCloseButton.attachTo('.collapsible__close-button');
  }

});
