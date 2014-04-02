
var Strawberry = fruitmachine.define({
  module: 'strawberry',
  template: templateStrawberry,
  helpers: [fruitmachineFtdomdelegate],

  initialize: function() {
    this.delegate.on('submit', 'form', function(event, el) {
      event.preventDefault();
      var field = el.getElementsByTagName('input')[0];
      this.fire('submit', field.value);
      field.value = '';
    }.bind(this));
  }
});
