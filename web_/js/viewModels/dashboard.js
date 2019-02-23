define(["ojs/ojcore","knockout","jquery","ojs/ojknockout","ojs/ojtimeline","ojs/ojbutton","ojs/ojtreemap"],function(t,e,o){return new function(){var n=this,r=e.observableArray();n.timelineSeries=e.computed(function(){return[{id:"s1",emptyText:"Loading ...",label:"19th Century Historical Events",items:r()}]}),o.getJSON("js/timelineEvents.json",function(t){r(t)}),n.orientationValue=e.observable("horizontal"),n.orientationOptions=e.observableArray([{id:"horizontal",label:"horizontal"},{id:"vertical",label:"vertical"}]);var i=new t.ColorAttributeGroupHandler,a=c("Chemistry","0",1,b()),s=c("Physics","1",1,b()),l=c("Biology","2",1,b());d(a,[c("The battery","00",1,b())]),d(s,[c("Atomic theory","10",1,b())]),d(l,[c("Teleological Evolution","20",1,b())]);var u=[a,s,l];function c(t,e,o,n){return{label:t,id:e,value:o,color:n}}function d(t,e){t.nodes=[];for(var o=0;o<e.length;o++)t.nodes.push(e[o])}function b(){return i.getValue(Math.floor(140*Math.random()))}n.nodeValues=e.observableArray(u),n.colorButtonClick=function(t){for(var e=0;e<u.length;e++)for(var o=0;o<u[e].nodes.length;o++)Math.random()<.4&&(u[e].nodes[o].color=b());return n.nodeValues(u),!0},n.listener=function(t){n.timelineSeries()[0].items.forEach(e=>{if(t.detail.viewportStart<new Date(e.start).toISOString()&&new Date(e.start).toISOString()<t.detail.viewportEnd&&("Chemistry"==e.category?(subCat=e.subcategory,subCat_id=e.subcategory_id,parent=u[0]):"Physics"==e.category?(subCat=e.subcategory,subCat_id=e.subcategory_id,parent=u[1]):"Biology"==e.category&&(subCat=e.subcategory,subCat_id=e.subcategory_id,parent=u[2]),0==function(t,e){exists=!1;for(var o=0;o<t.nodes.length;o++)t.nodes[o].id==e&&(exists=!0);return exists}(parent,subCat_id))){var o={label:subCat,id:subCat_id,value:2,color:b()};parent.nodes.push(o),n.colorButtonClick()}})},n.connected=function(){},n.disconnected=function(){},n.transitionCompleted=function(){}}});