define(

    [
      'flight/lib/component'
    ],

    function(defineComponent) {

      return defineComponent(CollapsibleToggleButton);

      function CollapsibleToggleButton() {

        this.region = null;

        this.toggle = function() {
          this.trigger(this.region, 'TOGGLE_COLLAPSIBLE_REGION');
        };

        this.after('initialize', function() {
          this.region = document.getElementById(this.node.getAttribute('aria-controls'));
          this.on('click', this.toggle);
        });

      }

    }
);