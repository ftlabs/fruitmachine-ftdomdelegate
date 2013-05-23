# fruitmachine-domdelegate

A [dom-delegate](http://github.com/ftlabs/dom-delegate) [FruitMachine](http://github.com/ftlabs/fruitmachine) helper.

This helper:
- **Instantiates** the dom-delegate when a fruitmachine module is instantiated;
- **Binds** that dom-delegate to the module's *[El](https://github.com/ftlabs/fruitmachine/blob/master/docs/module-el.md)* when the fruitmachine module is setup;
- **Unbinds** the dom-delegate instance from the *El* when the fruitmachine module fires its teardown event;
- And **destroy** the dom-delegate when the fruitmachine object is destroyed.

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

Note: as long as you properly destroy your fruitmachine modules after you're finished with them, you need not worry about detached DOM nodes because [dom-delegate](http://github.com/ftlabs/dom-delegate) will ensure any event listeners added are removed when it is `destroy`ed.
