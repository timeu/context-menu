Custom element providing a floating menu with a simple API. It is designed and polished for fast and simple user experience on both desktop and mobile.

##### Examples

    <floating-menu options="{{menuOptions}}"></floating-menu>

    <floating-menu>
      <floating-menu-item label="HTML Item">
        <floating-menu-item label="HTML Subitem1" action="console.log" arguments="1"></floating-menu-item>
        <floating-menu-item label="HTML Subitem2" action="console.log" arguments="2"></floating-menu-item>
        <floating-menu-item label="HTML Subitem3">
          <floating-menu-item label="HTML Subitem4"></floating-menu-item>
        </floating-menu-item>
      </floating-menu-item>
    </floating-menu>

##### [Live Demo](http://aleksandarrodic.com/floating-menu/)

##### Features

- Simple API
- Touch support
- Smart hover-handling (requires less user precision)
- Window edge detection (submenu expands to the left when too lose to the edge of the window)

##### Motivation

Floating menus are very simple to make with just a bit of HTML, JavaScript and CSS. However, most implementations don't work quite right when it comes to touch support, and user experience can be quite bad if a user has limited screen space or clumsy hands. In this implementation, I attempted to correct some of those problems and and package it in a reusable component that work well on desktop and mobile.

The `floating-menu-expanded` event fires when the menu is expanded.
 
The `floating-menu-collapsed` event fires when the menu is collapsed.
 
The `options` attribute is a list of item objects.
`{ label: "option", action: function(){}, arguments: [], options: [] }`
 
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