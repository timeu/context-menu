floating-menu
=============

Polymer.js custom element

A floating menu with a simple API.

Works with polymer.js

use
===
```<floating-menu parent="{{parentElement}}" options="{{menuOptions}}"></floating-menu>```

**parentElement** (optional) dom element attatch the menu to
**options** menu options for the element defined by following syntax:

```
menuOptions = [
  { label: "option1", options: [
      { label: "subOption1", options: [
        { label: "subSubOption2", action: someFunction1 },
        { label: "subSubOption3", action: someFunction2 },
        { label: "subSubOption4", action: someFunction3 }
      ] },
      { label: "subOption2", action: function(){} },
  ] }
]
```