define(

    [
      'flight/lib/component'
    ],

    function(defineComponent) {

      return defineComponent(CollapsibleRegion);

      function CollapsibleRegion() {

        this.isCollapsed = null;

        this.toggle = function() {
          if (this.isCollapsed === true) {
            this.show();
            this.isCollapsed = false;
          } else {
            this.hide();
            this.isCollapsed = true;
          }
        };

        this.show = function() {
          this.$node
              .show()
              .attr('aria-expanded', true)
              .focus();
        };

        this.hide = function() {
          this.$node
              .hide()
              .attr('aria-expanded', false);
        };

        this.setInitialState = function() {
          if (window.getComputedStyle(this.node).display === 'none') {
            this.isCollapsed = true;
          } else {
            this.isCollapsed = false;
          }
        };

        this.after('initialize', function() {
          this.node.setAttribute('tabindex', '-1');
          this.node.setAttribute('role', 'region');
          this.setInitialState();
          this.on('TOGGLE_COLLAPSIBLE_REGION', this.toggle);
        });

      }

    }
);