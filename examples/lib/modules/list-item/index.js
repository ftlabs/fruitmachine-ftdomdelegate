
var ListItem = fruitmachine.define({
  module: 'list-item',
  template: templateListItem,
  helpers: [fruitmachineFTDOMDelegate],

  initialize: function() {
    this.delegate.on('click', '.list-item_close-button', function(event, el) {
      this.fire('closebuttonclick', el);
    }.bind(this));
  }
});
