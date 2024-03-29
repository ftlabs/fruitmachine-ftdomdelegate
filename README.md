# fruitmachine-ftdomdelegate [![Build Status](https://api.travis-ci.com/ftlabs/fruitmachine-ftdomdelegate.svg)](https://travis-ci.com/ftlabs/fruitmachine-ftdomdelegate)

A [ftdomdelegate](http://github.com/ftlabs/ftdomdelegate) [FruitMachine](http://github.com/ftlabs/fruitmachine) helper.

This helper:
- **Instantiates** the dom-delegate when a _fruitmachine module_ is instantiated;
- **Binds** that dom-delegate to the module's *[El](https://github.com/ftlabs/fruitmachine/blob/master/docs/module-el.md)* when the _fruitmachine module_ is setup;
- **Unbinds** the dom-delegate instance from the *El* when the _fruitmachine module_ fires its teardown event;
- And **destroys** the dom-delegate when the _fruitmachine module_ is destroyed.

## Usage examples

```javascript
var Apple = fruitmachine.define({
  name: 'apple',
  helpers: [require('fruitmachine-ftdomdelegate')],
  initialize: function() {
    this.onButtonClick = this.onButtonClick.bind(this);
  },
  setup: function() {
    this.delegate.on('click', 'button', this.onButtonClick);
  },
  onButtonClick: function() {
    this.fire('buttonclick');
  }
});
```

Note: as long as you properly destroy your fruitmachine modules after you're finished with them, you need not worry about detached DOM nodes because [dom-delegate](http://github.com/ftlabs/dom-delegate) will ensure any event listeners added are removed when `destroy` is called on it.

### Demonstration 'todo' app

There is [a rework of the TODO example](http://ftlabs.github.io/fruitmachine-ftdomdelegate/examples/todo/) from the main fruitmachine project.

The modules that make use of the fruitmachine-ftdomdelegate helper are located [here](https://github.com/matthew-andrews/fruitmachine-ftdomdelegate/blob/master/examples/lib/modules/list-item/index.js) and [here](https://github.com/matthew-andrews/fruitmachine-ftdomdelegate/blob/master/examples/lib/modules/strawberry/index.js).

## Installation

```
$ npm install fruitmachine-ftdomdelegate
```

## Tests

```
$ npm install
$ npm test
```

## Credits and collaboration

The lead developer of fruitmachine-ftdomdelegate is [@matthew-andrews](http://github.com/matthew-andrews) at FT Labs. All open source code released by FT Labs is licenced under the MIT licence. We welcome comments, feedback and suggestions. Please feel free to raise an issue or pull request.
