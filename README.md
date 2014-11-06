drawer-panel
============

This tries to implement something similar to [Android navigation-drawer](https://developer.android.com/design/patterns/navigation-drawer.html) to use it on a mobile web site/app.  
* z-index of the side bar is lower than the top navigation
* vertical scroll on the side bar shouldn't affect the rest of the page
* prevent page scrolling, when side bar is open
* when the side bar is open, there is some clickable dark canvas, which closes the side bar when being clicked
* allow left and right sidebar

The reason not choosing [Polymer core-drawer-panel](https://www.polymer-project.org/docs/elements/core-elements.html#core-drawer-panel) is because currently we notice 2 challenges with Polymer;
* lack of Shadow DOM support for most devices
* hard to provide functional tests.

----

### Dependencies:
* jQuery

----
