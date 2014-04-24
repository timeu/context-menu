#floating-menu
![floating menu](https://raw.github.com/arodic/floating-menu/gh-pages/floating-menu-screen-capture.gif)

###Summary

Custom element providing a floating menu with a simple API. It is designed and polished for fast and simple user experience on both desktop and mobile.

Requires [polymer.js](http://www.polymer-project.org/)

[Live Demo](http://aleksandarrodic.com/floating-menu/)

###Features

- Simple API
- Touch support
- Smart hover-handling (requires less user precision)
- Window edge detection (menu position adjusted when too close to the edge)

###Motivation

Floating menus are very simple to make with just a bit of HTML, JavaScript and CSS. However, most implementations don't work quite right when it comes to touch support, and user experience can be quite bad if a user has limited screen space or clumsy hands. In this implementation, I attempted to correct some of those problems and and package it in a reusable component.

--------------------------------------------------------

###Use

First, make sure you included polymer.js and platform.js as well as HTML template for this element.

```
<script src="platform.js"></script>
<script src="polymer.js"></script>
<link rel="import" href="floating-menu.html">
```

Then, you are ready to use the element.

```<floating-menu parent="{{}}" options="{{menuOptions}}"></floating-menu>```

**parent** (optional) DOM element to add pointer listener to.

**options** Options for the menu defined as a javascropt object. Example:

```javascript
menuOptions = [
  { label: "Options", options: [
    { label: "Option1", options: [
      { label: "Suboption1", action: function(){ alert('Suboption1'); } },
      { label: "Suboption2", action: function(msg){ alert(msg); }, arguments: ['Suboption2'] },
      { label: "Suboption3", action: function(msg1, msg2){ alert(msg1+msg2); }, arguments: ['Suboption','3'] }
    ] },
    { label: "Option2", options: [
      { label: "Suboption4", action: 'alert', arguments: ['Suboption4'] },
      { label: "Suboption5", action: 'console.log', arguments: ['Suboption', '5'] },
      { label: "Suboption6", action: 'console.log', arguments: 'Suboption 6' }
    ] }
  }
]
```

**label** Label of the menu item

**action** Function to be called when the menu item is clicked.

**arguments** List of arguments for the action.

Alternatively, you can add menu items declaratively with HTML using `floating-menu-item` subelement.

```
<floating-menu>
  <floating-menu-item label="HTML Item">
    <floating-menu-item label="HTML Subitem1" action="console.log" arguments="1"></floating-menu-item>
    <floating-menu-item label="HTML Subitem2" action="console.log" arguments="2"></floating-menu-item>
    <floating-menu-item label="HTML Subitem3">
      <floating-menu-item label="HTML Subitem4"></floating-menu-item>
    </floating-menu-item>
  </floating-menu-item>
</floating-menu>
```