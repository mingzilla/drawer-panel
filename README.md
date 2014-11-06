drawer-panel
============

[Demo](http://htmlpreview.github.io/?https://github.com/mingzilla/drawer-panel/blob/master/drawer-panel.html)

**Purpose**: 
This tries to implement something similar to [Android navigation-drawer](https://developer.android.com/design/patterns/navigation-drawer.html) to use it on a mobile web site/app.  
* not pushing the whole content to the right when side bar is open
* when side bar is open, prevent page scrolling when scrolling side bar
* when side bar is open, clickable dark canvas is available to allow closing the side bar
* z-index of the side bar is lower than the top navigation
* allow left and right sidebar

**Alternatives**: 
The reason not choosing [Polymer core-drawer-panel](https://www.polymer-project.org/docs/elements/core-elements.html#core-drawer-panel) is because currently we notice 2 challenges with Polymer;
* lack of Shadow DOM support for most devices
* hard to provide functional tests.

----

### Dependencies:
* jQuery

### BEM (Block, Element, Modifier) Style
The style of the elements use the BEM approach. Please refer to [Getting your head around BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/).

----

## Usage

### Import
* drawer-panel.css
* drawer-panel.js

### HTML markup

    <div page-top-nav></div>
    <div drawer-panel>
      <div drawer-panel__drawer identifier-of-left-drawer></div>
      <div drawer-panel__drawer right identifier-of-right-drawer></div>
      <div drawer-panel__main></div>
    </div>

CSS

* [page-top-nav] - top navigation bar (optional)
* [drawer-panel] - the container
* [drawer-panel__drawer] - left menu - require providing an identifier e.g identifier-of-left-drawer 
* [drawer-panel__drawer][right] - right menu - require providing an identifier e.g identifier-of-right-drawer
* [drawer-panel__main] - the content area
* [drawer-panel__screen-canvas] - an automatically created canvas

### Javascript

    <script>
      var DRAWER_PANEL = new DrawerPanel();
    
      jQuery(document).ready(function () {
        DRAWER_PANEL.enable();
      });
    </script>
    
Available functions:

* DRAWER_PANEL.open( selector )
* DRAWER_PANEL.close( selector )
* DRAWER_PANEL.closeAll()
* DRAWER_PANEL.toggle( selector )

