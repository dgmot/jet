define(["ojs/ojcore","knockout","jquery","ojs/ojknockout-keyset","ojs/ojarraytreedataprovider","ojs/ojknockout","ojs/ojsunburst","ojs/ojpopup"],function(e,l,a){return new function(){var a=this,i=document.querySelector("#sunburst");e.Context.getContext(i).getBusyContext().whenReady().then(function(){document.querySelector("#popup1").open("#currentText")});var o=l.observableArray([{label:"Ψ",value:400,id:"00",babies:[{label:"Natural sciences",value:200,id:"0",babies:[{label:"Physics",value:50,id:"0-1",babies:[{label:"Electromagnetism",value:25,id:"0-1-0"},{label:"Mechanics",value:25,id:"0-1-1"}]},{label:"Chemistry",value:50,id:"0-2",babies:[{label:"Physical chemistry",value:25,id:"0-2-0"},{label:"Organic chemistry",value:25,id:"0-2-1"}]},{label:"Geology",value:50,id:"0-3",babies:[{label:"Biogeology",value:25,id:"0-3-0"},{label:"Geomorphology",value:25,id:"0-3-1"}]},{label:"Biology",value:50,id:"0-4",babies:[{label:"Anatomy",value:25,id:"0-4-0"},{label:"Biogeography",value:25,id:"0-4-1"}]}]},{label:"Social sciences",value:200,id:"1",babies:[{label:"Anthropology",value:50,id:"1-1",babies:[{label:"Archaeology",value:25,id:"1-1-0"},{label:"Ethnobiology",value:25,id:"1-1-1"}]},{label:"Business studies",value:50,id:"1-2",babies:[{label:"Accountancy",value:25,id:"1-2-0"},{label:"Finance",value:25,id:"1-2-1"}]},{label:"Economics",value:50,id:"1-3",babies:[{label:"Macroeconomics",value:25,id:"1-3-0"},{label:"Microeconomics",value:25,id:"1-3-1"}]},{label:"Linguistics",value:50,id:"1-4",babies:[{label:"Dialectology",value:25,id:"1-4-0"},{label:"Etymology",value:25,id:"1-4-1"}]}]}]}]);a.sunburstData=new e.ArrayTreeDataProvider(o,{keyAttributes:"id",childrenAttribute:"babies"}),a.firstTime=!0,a.drillListener=function(e){document.getElementById("currentText").innerHTML=e.detail.data.label,a.firstTime&&(document.querySelector("#popup2").open("#currentText"),a.firstTime=!1)},a.connected=function(){},a.disconnected=function(){},a.transitionCompleted=function(){}}});