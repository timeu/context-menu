floating-menu
=============

Floating menu custom element with a simple API.

Made for [polymer.js](http://www.polymer-project.org/)

![floating menu](https://raw.github.com/arodic/floating-menu/doc/floating-menu-screen-capture.gif)

use
===
```<floating-menu parent="{{parentElement}}" options="{{menuOptions}}"></floating-menu>```

**parentElement** (optional) dom element to attach the menu to. If undefined, will attach to body.

**options** menu options for the element defined by following syntax:

```
menuOptions = [
  { label: "option1", options: [
      { label: "subOption1", options: [
        { label: "subSubOption2", action: someFunction1 },
        { label: "subSubOption3", action: someFunction2 },
        {}, // separator
        { label: "subSubOption4", action: someFunction3 }
      ] },
      { label: "subOption2", action: function(){} },
  ] }
]
```