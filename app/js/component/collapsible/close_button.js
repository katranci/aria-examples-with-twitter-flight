define(

    [
      'flight/lib/component'
    ],

    function(defineComponent) {

      return defineComponent(CollapsibleCloseButton);

      function CollapsibleCloseButton() {

        this.close = function() {
          this.trigger('TOGGLE_COLLAPSIBLE_REGION');
        };

        this.after('initialize', function() {
          this.on('click', this.close);
        });

      }

    }
);