# fruitmachine-domdelegate

A [dom-delegate](http://github.com/ftlabs/dom-delegate) [FruitMachine](http://github.com/ftlabs/fruitmachine) helper.

This helper will **instantiate** the dom-delegate when a fruitmachine module is instantiated; **binds** the dom-delegate to the module's [el](https://github.com/ftlabs/fruitmachine/blob/master/docs/module-el.md) when the fruitmachine module is setup; **unbinds** all those event listeners when the fruitmachine module fires its teardown event and **destroy** the dom-delegate when the fruitmachine object is destroyed.

## Usage example

```javascript
var Apple = fruitmachine.define({
  name: 'apple',
  helpers: [require('fruitmachine-domdelegate')],
  initialize: function() {
    this.onButtonClick = this.onButtonClick.bind(this);
  },
  setup: function() {
    this.delegate.on('button', this.onButtonClick);
  },
  onButtonClick: function() {
    alert("Please do not press this button again.");
  }
});
```

Note: you need not worry about detached DOM nodes because [dom-delegate](http://github.com/ftlabs/dom-delegate) will ensure any event listeners added are removed.
