/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery',
    'ojs/ojknockout', 'ojs/ojtimeline', 'ojs/ojbutton', 'ojs/ojtreemap', 'ojs/ojpopup'
  ],
  function (oj, ko, $) {

    function DashboardViewModel() {
      var self = this;

      var node = document.querySelector("#tline");
      var busyContext = oj.Context.getContext(node).getBusyContext();
      busyContext.whenReady().then(function () {
        document.querySelector('#popup1').open("#tlineArea");
      });
      self.closePopup1 = function(){
        document.querySelector('#popup2').open("#navigationMenu");
      }
      self.closePopup2 = function(){
        document.querySelector('#popup3').open("#tline");
      }
      self.closePopup3 = function(){
        document.querySelector('#popup4').open("#treemap");
      }

      var items = ko.observableArray();
      self.timelineSeries = ko.computed(function () {
        return [{
          id: 's1',
          emptyText: 'Loading ...',
          label: '19th Century Historical Events',
          items: items()
        }];
      });

      $.getJSON("js/timelineEvents.json",
        function (data) {
          items(data);
        }
      );

      self.orientationValue = ko.observable('horizontal');

      self.orientationOptions = ko.observableArray([{
          id: 'horizontal',
          label: 'horizontal'
        },
        {
          id: 'vertical',
          label: 'vertical'
        }
      ]);

      //Treemap
      var colorHandler = new oj.ColorAttributeGroupHandler();

      var CHEMISTRY = createNode("Chemistry", "0", 1, getColor());
      var PHYSICS = createNode("Physics", "1", 1, getColor());
      var BIOLOGY = createNode("Biology", "2", 1, getColor());

      addChildNodes(CHEMISTRY, [
        createNode("The battery", "00", 1, getColor())
      ]);
      addChildNodes(PHYSICS, [
        createNode("Atomic theory", "10", 1, getColor())
      ]);
      addChildNodes(BIOLOGY, [
        createNode("Teleological Evolution", "20", 1, getColor()),
      ]);
      var nodes = [CHEMISTRY, PHYSICS, BIOLOGY];

      function createNode(label, id, value, color) {
        return {
          label: label,
          id: id,
          value: value,
          color: color
        };
      }

      function addChildNodes(parent, childNodes) {
        parent.nodes = [];
        for (var i = 0; i < childNodes.length; i++) {
          parent.nodes.push(childNodes[i]);
        }
      }

      function getValue() {
        return Math.round(50 + 50 * Math.random());
      }

      function getColor() {
        return colorHandler.getValue(Math.floor(Math.random() * 140));
      }

      self.nodeValues = ko.observableArray(nodes);

      self.colorButtonClick = function (event) {
        for (var i = 0; i < nodes.length; i++) {
          for (var j = 0; j < nodes[i].nodes.length; j++) {
            if (Math.random() < 0.4)
              nodes[i].nodes[j].color = getColor();
          }
        }
        self.nodeValues(nodes);
        return true;
      }

      function checkNodeExists(node, idToCheck) {
        exists = false;
        for (var i = 0; i < node.nodes.length; i++) {
          if (node.nodes[i].id == idToCheck) {
            exists = true
          }
        }
        return exists
      }

      self.listener = function (event) {
        //console.log(event.detail)
        self.timelineSeries()[0].items.forEach(element => {
          //console.log(element)
          if (event.detail.viewportStart < new Date(element.start).toISOString() &&
            new Date(element.start).toISOString() < event.detail.viewportEnd) {
            if (element.category == "Chemistry") {
              subCat = element.subcategory
              subCat_id = element.subcategory_id
              parent = nodes[0]

            } else if (element.category == "Physics") {
              subCat = element.subcategory
              subCat_id = element.subcategory_id
              parent = nodes[1]
            } else if (element.category == "Biology") {
              subCat = element.subcategory
              subCat_id = element.subcategory_id
              parent = nodes[2]
            }
            if (checkNodeExists(parent, subCat_id) == false) {
              var newNode = {
                label: subCat,
                id: subCat_id,
                value: 2,
                color: getColor()
              }
              parent.nodes.push(newNode);
              self.colorButtonClick();
            }
          }
        });
      }
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new DashboardViewModel();
  }
);