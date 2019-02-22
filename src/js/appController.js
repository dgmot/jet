
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojmodule-element-utils', 'ojs/ojmodule-element', 'ojs/ojrouter', 'ojs/ojknockout', 'ojs/ojarraytabledatasource',
  'ojs/ojoffcanvas'],
  function(oj, ko, moduleUtils) {
     function ControllerViewModel() {
       var self = this;

      // Media queries for repsonsive layouts
      var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
      var mdQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP);
      self.mdScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);

       // Router setup
       self.router = oj.Router.rootInstance;
       self.router.configure({
         'dashboard': {label: 'Dashboard', isDefault: true},
         'fields': {label: 'Fields'},
         'scientists': {label: 'Scientists'}
       });
      oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();

      self.moduleConfig = ko.observable({'view':[], 'viewModel':null});

      self.loadModule = function() {
        ko.computed(function() {
          var name = self.router.moduleConfig.name();
          var viewPath = 'views/' + name + '.html';
          var modelPath = 'viewModels/' + name;
          var masterPromise = Promise.all([
            moduleUtils.createView({'viewPath':viewPath}),
            moduleUtils.createViewModel({'viewModelPath':modelPath})
          ]);
          masterPromise.then(
            function(values){
              self.moduleConfig({'view':values[0],'viewModel':values[1]});
            }
          );
        });
      };

      // Navigation setup
      var navData = [
      {name: 'Dashboard', id: 'dashboard',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-chart-icon-24'}
      ];
      self.navDataSource = new oj.ArrayTableDataSource(navData, {idAttribute: 'id'});

      // Drawer
      // Close offcanvas on medium and larger screens
      self.mdScreen.subscribe(function() {oj.OffcanvasUtils.close(self.drawerParams);});
      self.drawerParams = {
        displayMode: 'push',
        selector: '#navDrawer',
        content: '#pageContent'
      };
      // Called by navigation drawer toggle button and after selection of nav drawer item
      self.toggleDrawer = function() {
        return oj.OffcanvasUtils.toggle(self.drawerParams);
      }
      // Add a close listener so we can move focus back to the toggle button when the drawer closes
      $("#navDrawer").on("ojclose", function() { $('#drawerToggleButton').focus(); });

      // Header
      // Application Name used
      self.appName = ko.observable("Scientific App");

     }

     return new ControllerViewModel();
  }
);
