function DrawerPanel() {

  "use strict";

  var self = this;

  this.enable = function () {
    if (jQuery("[drawer__screen-canvas]").length === 0) {
      jQuery("[drawer-panel]").append("<div drawer__screen-canvas></div>");
    }

    if (jQuery("[page-top-nav]").length > 0) {
      jQuery("[header-panel-drawer]").addClass("header-panel-drawer__page-has-top-nav")
    }

    jQuery("[drawer__screen-canvas]").on("click", function () {
      self.closeAll();
    });
  };

  this.open = function (drawerIdentifier) {
    jQuery("[header-panel-drawer]" + drawerIdentifier).addClass('header-panel-drawer--open');
    jQuery("[drawer__screen-canvas]").addClass('drawer__screen-canvas--open');
    jQuery("[drawer-panel]").parents().addClass("no-scroll");

    var canvas = jQuery("[drawer__screen-canvas]");
    var pageHeight = jQuery('html').height();
    var panelHeight = canvas.closest("[drawer-panel]").height();
    var height = panelHeight > pageHeight ? panelHeight : pageHeight;
    canvas.height(height);
  };

  this.close = function (drawerIdentifier) {
    jQuery("[header-panel-drawer]" + drawerIdentifier).removeClass('header-panel-drawer--open');
    jQuery("[drawer__screen-canvas]").removeClass('drawer__screen-canvas--open');
    jQuery("[drawer-panel]").parents().removeClass("no-scroll");
  };

  this.closeAll = function () {
    self.close("");
  };

  this.toggle = function (drawerIdentifier) {
    if (jQuery("[header-panel-drawer]" + drawerIdentifier).hasClass('header-panel-drawer--open')) {
      self.close(drawerIdentifier);
    } else {
      self.open(drawerIdentifier);
    }
  };
}