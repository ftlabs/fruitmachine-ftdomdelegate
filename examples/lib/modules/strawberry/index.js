
var Strawberry = fruitmachine.define({
  module: 'strawberry',
  template: templateStrawberry,
  helpers: [fruitmachineDOMDelegate],

  setup: function() {
    var self = this;
    this.delegate.on('submit', 'form', function(event) {
      event.preventDefault();
      var field = this.getElementsByTagName('input')[0];
      self.fire('submit', field.value);
      field.value = '';
    });
  }
});
