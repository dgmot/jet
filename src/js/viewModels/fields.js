
/*
 * Your fields ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery',
'ojs/ojknockout-keyset', 'ojs/ojarraytreedataprovider', 'ojs/ojknockout', 
  'ojs/ojsunburst', 'ojs/ojpopup'],
 function(oj, ko, $) {
  
    function FieldsViewModel() {
      var self = this;

      var node = document.querySelector("#sunburst");
      var busyContext = oj.Context.getContext(node).getBusyContext();
      busyContext.whenReady().then(function () {
        document.querySelector('#popup1').open("#currentText");
      });

      var data = ko.observableArray(
        [
          {
            label:"\u03A8",
            value:400,
            id:"00",
            babies:[
            {
              label: "Natural sciences",
              value: 200,
              id: "0",
              babies: [
                  {label: "Physics", value: 50, id: "0-1", babies: [
                    {label: "Electromagnetism", value: 25, id: "0-1-0"},
                    {label: "Mechanics", value: 25, id: "0-1-1"}
                  ]},
                  {label: "Chemistry", value: 50, id: "0-2", babies: [
                    {label: "Physical chemistry", value: 25, id: "0-2-0"},
                    {label: "Organic chemistry", value: 25, id: "0-2-1"},
                  ]},
                  {label: "Geology", value: 50, id: "0-3", babies: [
                    {label: "Biogeology", value: 25, id: "0-3-0"},
                    {label: "Geomorphology", value: 25, id: "0-3-1"}
                  ]},
                  {label: "Biology", value: 50, id: "0-4", babies: [
                    {label: "Anatomy", value: 25, id: "0-4-0"},
                    {label: "Biogeography", value: 25, id: "0-4-1"}
                  ]}
              ]
            },
            {
              label: "Social sciences",
              value: 200,
              id: "1",
              babies:
                [
                  {label: "Anthropology", value: 50, id: "1-1", babies: [
                    {label: "Archaeology", value: 25, id: "1-1-0"},
                    {label: "Ethnobiology", value: 25, id: "1-1-1"}
                  ]},
                  {label: "Business studies", value: 50, id: "1-2", babies: [
                    {label: "Accountancy", value: 25, id: "1-2-0"},
                    {label: "Finance", value: 25, id: "1-2-1"},
                  ]},
                  {label: "Economics", value: 50, id: "1-3", babies: [
                    {label: "Macroeconomics", value: 25, id: "1-3-0"},
                    {label: "Microeconomics", value: 25, id: "1-3-1"}
                  ]},
                  {label: "Linguistics", value: 50, id: "1-4", babies: [
                    {label: "Dialectology", value: 25, id: "1-4-0"},
                    {label: "Etymology", value: 25, id: "1-4-1"}
                  ]}
                ]
              }
            ]
          }
        ]
      );
        self.sunburstData= new oj.ArrayTreeDataProvider(data, {keyAttributes: 'id', childrenAttribute: "babies"});        
        self.firstTime = true;
        self.drillListener = function(event) {
          document.getElementById('currentText').innerHTML = event.detail.data['label'];
          if (self.firstTime){
            document.querySelector('#popup2').open("#currentText");
            self.firstTime = false;
          }
        }
      
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here. 
       * This method might be called multiple times - after the View is created 
       * and inserted into the DOM and after the View is reconnected 
       * after being disconnected.
       */
      self.connected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new FieldsViewModel();
  }
);
