var assert = buster.referee.assert;
var refute = buster.referee.refute;

buster.testCase('fruitmachine-ftdomdelegate', {
  setUp: function() {
    window.spys = {
      instantiate: this.spy(),
      root: this.spy(),
      destroy: this.spy()
    };

    window.fruitmachine.define({
      name: 'apple',
      template: function() {},
      initialize: function() {},
      setup: function() {},
      mount: function() {},
      teardown: function() {},
      destroy: function() {}
    });
  },

  "on `initialize` a dom-delegate should be instantiated (once) with no arguments and nothing more": function() {
    var view = window.fruitmachine({
      module: 'apple',
      helpers: [window.fruitMachineFTDOMDelegate]
    });

    assert(window.spys.instantiate.calledOnce);
    assert(window.spys.instantiate.calledWith(undefined));
    refute(window.spys.root.called);
    refute(window.spys.destroy.called);
  },

  "on `mount` a dom-delegate should have its root method called once with the module's el and nothing more": function() {
    var view = window.fruitmachine({
      module: 'apple',
      helpers: [window.fruitMachineFTDOMDelegate]
    });

    // Reset the spys so
    // that we're only testing
    // the setup method.
    window.spys.instantiate.reset();
    window.spys.root.reset();
    window.spys.destroy.reset();

    view
      .render()
      .inject(document.body)
      .setup();

    refute(window.spys.instantiate.called);
    assert(window.spys.root.calledOnce);
    assert(window.spys.root.calledWith(view.el));
    refute(window.spys.destroy.called);
  },

  "on `unmount` a dom-delegate should have its root method called once with no arguments and nothing more": function() {
    var view = window.fruitmachine({
      module: 'apple',
      helpers: [window.fruitMachineFTDOMDelegate]
    });

    view
      .render()
      .inject(document.body)
      .setup();

    // Reset the spys so
    // that we're only testing
    // the teardown method.
    window.spys.instantiate.reset();
    window.spys.root.reset();
    window.spys.destroy.reset();

    view
      ._unmount();

    refute(window.spys.instantiate.called);
    assert(window.spys.root.calledOnce);
    assert(window.spys.root.calledWith(undefined));
    refute(window.spys.destroy.called);
  },

  "on `destroy` a dom-delegate should have its destroy method called once with no arguments and nothing more": function() {
    var view = window.fruitmachine({
      module: 'apple',
      helpers: [window.fruitMachineFTDOMDelegate]
    });

    view
      .render()
      .inject(document.body)
      .setup()
      .teardown();

    // Reset the spys so
    // that we're only testing
    // the destroy method.
    window.spys.instantiate.reset();
    window.spys.root.reset();
    window.spys.destroy.reset();

    view
      .destroy();

    refute(window.spys.instantiate.called);
    assert(window.spys.destroy.calledOnce);
    assert(window.spys.destroy.calledWith());
  },

  tearDown: function() {
    window.spys.instantiate.reset();
    window.spys.root.reset();
    window.spys.destroy.reset();
    window.Delegate = this._noConflictDelegate;
    delete window.fruitmachine.modules['apple'];
  }
});
