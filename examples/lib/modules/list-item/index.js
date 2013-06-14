
var ListItem = fruitmachine.define({
  module: 'list-item',
  template: templateListItem,
  helpers: [fruitmachineFTDOMDelegate],

  setup: function() {
    var self = this;
    this.delegate.on('click', '.list-item_close-button', function() {
      self.fire('closebuttonclick', self);
    });
  }
});
