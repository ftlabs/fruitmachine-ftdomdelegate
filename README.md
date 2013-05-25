# fruitmachine-domdelegate [![Build Status](https://travis-ci.org/matthew-andrews/fruitmachine-domdelegate.png?branch=master)](https://travis-ci.org/matthew-andrews/fruitmachine-domdelegate)

A [dom-delegate](http://github.com/ftlabs/dom-delegate) [FruitMachine](http://github.com/ftlabs/fruitmachine) helper.

This helper:
- **Instantiates** the dom-delegate when a fruitmachine module is instantiated;
- **Binds** that dom-delegate to the module's *[El](https://github.com/ftlabs/fruitmachine/blob/master/docs/module-el.md)* when the fruitmachine module is setup;
- **Unbinds** the dom-delegate instance from the *El* when the fruitmachine module fires its teardown event;
- And **destroy** the dom-delegate when the fruitmachine object is destroyed.

## Usage examples

```javascript
var Apple = fruitmachine.define({
  name: 'apple',
  helpers: [require('fruitmachine-domdelegate')],
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

## Tests

```
$ npm install
$ npm test
```

## Author

- **Matt Andrews** - [@matthew-andrews](http://github.com/matthew-andrews)

## License
Copyright (c) 2012 The Financial Times Limited
Licensed under the MIT license.

## Credits and collaboration

The lead developer of FruitMachine is [@matthew-andrews](http://github.com/matthew-andrews) at FT Labs. All open source code released by FT Labs is licenced under the MIT licence. We welcome comments, feedback and suggestions. Please feel free to raise an issue or pull request. Enjoy.
