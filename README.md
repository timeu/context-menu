Custom element providing a nested menu with a simple API. It is designed and polished for fast and simple user experience on both desktop and mobile.

![Context Menu Web Component](https://arodic.github.com/nested-menu/preview.gif "Context Menu")

##### Examples

    <context-menu options="{{menuOptions}}">
      <menu-option label="HTML Item">
        <menu-option label="HTML Subitem1" action="console.log" arguments="1"></menu-option>
        <menu-option label="HTML Subitem2" action="console.log" arguments="2"></menu-option>
        <menu-option label="HTML Subitem3">
          <menu-option label="HTML Subitem4"></menu-option>
        </menu-option>
      </menu-option>
    </context-menu>

##### [Live Demo](http://arodic.github.com/context-menu/)

##### Features

- Simple API
- Touch support
- Smart hover-handling (requires less user precision)
- Window edge detection (menu position adjusted when too close to the edge)

##### Motivation

Floating menus are very simple to make with just a bit of HTML, JavaScript and CSS. However, most implementations don't work quite right when it comes to touch support, and user experience can be quite bad if a user has limited screen space or clumsy hands. In this implementation, I attempted to correct some of those problems and and package it in a reusable component.

**element** context-menu

**blurb** Custom element providing a nested menu with a simple API

**status** alpha

**url** https://github.com/arodic/context-menu

The `options` attribute is a list of item objects.

`{ label: "option", action: function(){}, arguments: [], options: [] }`

The `collapse` method collapses all expanded menu items

The `action-fired` fires when an active item is clicked
 
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