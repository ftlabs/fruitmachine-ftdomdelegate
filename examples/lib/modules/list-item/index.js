
var ListItem = fruitmachine.define({
  module: 'list-item',
  template: templateListItem,
  helpers: [fruitmachineDOMDelegate],

  setup: function() {
    var self = this;
    this.delegate.on('click', '.list-item_close-button', function() {
      self.fire('closebuttonclick', self);
    });
  }
});
