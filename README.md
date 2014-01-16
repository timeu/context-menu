floating-menu
=============
![floating menu](https://raw.github.com/arodic/floating-menu/doc/floating-menu-screen-capture.gif)
*[Live Demo](http://aleksandarrodic.com/floating-menu/)*

Floating menu custom element with a simple API. Designed and polished for simple user experience on both desktop and mobile.

Requires [polymer.js](http://www.polymer-project.org/)

Use
---
```<floating-menu parent="{{}}" options="{{menuOptions}}"></floating-menu>```

**parent** (optional) dom element to append the menu to. If `undefined`, the menu will be appended to `document.body`.

**options** options for the menu. Example:

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

Features
--------
- Simple API
- Touch support
- Smart hover-handling (requires less user precision)
- Window edge detection (menu position adjusted when too close to the edge)

Motivation
----------
Floating menus are very simple to make with just a bit of HTML, JavaScript and CSS. However, most implementations don't work quite right when it comes to touch support, and user experience can be quite bad if a user has limited screen space or clumsy hands. In this implementation, I attempted to correct some of those problems and and package it in a user-friendly and developer-friendly component.