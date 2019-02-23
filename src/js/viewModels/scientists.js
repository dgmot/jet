
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojinputtext', 'ojs/ojlistview', 'ojs/ojjsontreedatasource', 'ojs/ojcollectiontabledatasource', 'ojs/ojbutton', 'ojs/ojlabel'],
 function(oj, ko, $) {
  
    function CustomerViewModel() {
      var self = this;

      function flattenJSON(data){
            var collection = new oj.Collection();

            for (var i=0;i<data.length;i++)
            {
                var children = data[i].children;
                if (children != null && children.length > 0)
                {
                    for (var j=0;j<children.length;j++)
                    {
                        collection.add(children[j].attr);
                    }
                }
            }
            return collection;
        }

        self.data = ko.observable();

        self.filter = ko.observable('');
        self.dataSource = ko.observable();
        self.nameFilter = function(model, attr, value)
        {
            var name = model.get("name");
            return (name.toLowerCase().indexOf(value.toLowerCase()) > -1);
        };
        self.handleRawValueChanged = function(event){
            var filter = event.detail.value;
            if (filter.length == 0)
            {
                if (self.dataSource() == self.filteredDataSource)
                    self.dataSource(self.contactDataSource);
            }
            else
            {
                if (self.filteredDataSource == undefined)
                {
                    self.collection = flattenJSON(self.data());
                    self.filteredCollection = self.collection.clone();
                    self.filteredDataSource = new oj.CollectionTableDataSource(self.filteredCollection);
                }

                var ret = self.collection.where({name:{value:filter,comparator:self.nameFilter}});
                self.filteredCollection.reset(ret);

                if (self.dataSource() == self.contactDataSource)
                    self.dataSource(self.filteredDataSource);
            }
        };

        self.itemOnly = function(context)
        {
            if (context['leaf']  == undefined)
            {
                return true;
            }
            return context['leaf'];
        };

        $.getJSON("js/contacts.json", 
            function(data) 
            {
                self.data(data);
                self.contactDataSource = new oj.JsonTreeDataSource(data);
                self.dataSource(self.contactDataSource);
            }
        );

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
    return new CustomerViewModel();
  }
);
