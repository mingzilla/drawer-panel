function DrawerPanel() {

  "use strict";

  var self = this;

  this.enable = function () {
    if (jQuery("[drawer-panel__screen-canvas]").length === 0) {
      jQuery("[drawer-panel]").append("<div drawer-panel__screen-canvas></div>");
    }

    if (jQuery("[page-top-nav]").length > 0) {
      jQuery("[drawer-panel__drawer], [drawer-panel__screen-canvas]").css("top", jQuery("[page-top-nav]").height());
    }

    jQuery(document).on("click", "[drawer-panel__screen-canvas]", function () {
      self.closeAll();
    });
  };

  this.open = function (drawerIdentifier) {
    var parent = jQuery("[drawer-panel__drawer]" + drawerIdentifier).closest("[drawer-panel]");
    //only allow one drawer open
    parent.find("[drawer-panel__drawer]").removeClass('drawer-panel__drawer--open');

    //open drawer
    jQuery("[drawer-panel__drawer]" + drawerIdentifier).addClass('drawer-panel__drawer--open');
    parent.find("[drawer-panel__screen-canvas]").addClass('drawer-panel__screen-canvas--open');

    //prevent page scrolling
    jQuery("[drawer-panel]").parents().addClass("no-scroll");
  };

  this.close = function (drawerIdentifier) {
    //close drawer
    jQuery("[drawer-panel__drawer]" + drawerIdentifier).removeClass('drawer-panel__drawer--open');
    jQuery("[drawer-panel__drawer]" + drawerIdentifier).closest("[drawer-panel]").find("[drawer-panel__screen-canvas]").removeClass('drawer-panel__screen-canvas--open');

    //allow page scrolling
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