function DrawerPanel() {

  "use strict";

  var self = this;

  this.enable = function () {
    if (jQuery("[drawer-panel__screen-canvas]").length === 0) {
      jQuery("[drawer-panel]").append("<div drawer-panel__screen-canvas></div>");
    }

    if (jQuery("[page-top-nav]").length > 0) {
      jQuery("[drawer-panel__drawer]").addClass("header-panel-drawer__page-has-top-nav")
    }

    jQuery(document).on("click", "[drawer-panel__screen-canvas]", function () {
      self.closeAll();
    });
  };

  this.open = function (drawerIdentifier) {
    jQuery("[drawer-panel__drawer]" + drawerIdentifier).closest("[drawer-panel]").find("[drawer-panel__drawer]").removeClass('drawer-panel__drawer--open');

    jQuery("[drawer-panel__drawer]" + drawerIdentifier).addClass('drawer-panel__drawer--open');
    jQuery("[drawer-panel__screen-canvas]").addClass('drawer-panel__screen-canvas--open');
    jQuery("[drawer-panel]").parents().addClass("no-scroll");

    var canvas = jQuery("[drawer-panel__screen-canvas]");
    var pageHeight = jQuery('html').height();
    var panelHeight = canvas.closest("[drawer-panel]").height();
    var height = panelHeight > pageHeight ? panelHeight : pageHeight;
    canvas.height(height);
  };

  this.close = function (drawerIdentifier) {
    jQuery("[drawer-panel__drawer]" + drawerIdentifier).removeClass('drawer-panel__drawer--open');
    jQuery("[drawer-panel__screen-canvas]").removeClass('drawer-panel__screen-canvas--open');
    jQuery("[drawer-panel]").parents().removeClass("no-scroll");
  };

  this.closeAll = function () {
    self.close("");
  };

  this.toggle = function (drawerIdentifier) {
    if (jQuery("[drawer-panel__drawer]" + drawerIdentifier).hasClass('drawer-panel__drawer--open')) {
      self.close(drawerIdentifier);
    } else {
      self.open(drawerIdentifier);
    }
  };
}