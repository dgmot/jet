/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery","ojs/ojconfig","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtThematicMap","ojs/ojlogger"],function(e,t,a,r,o,n,s){var i={properties:{animationDuration:{type:"number"},animationOnDisplay:{type:"string",enumValues:["auto","none"],value:"none"},areaData:{type:"oj.DataProvider"},areas:{type:"Array<Object>|Promise"},as:{type:"string",value:""},focusRenderer:{type:"function",properties:{color:{type:"string"},componentElement:{type:"Element"},data:{type:"object"},id:{type:"any"},itemData:{type:"object"},label:{type:"string"},location:{type:"string"},parentElement:{type:"Element"},previousState:{type:"object",properties:{hovered:{type:"boolean"},selected:{type:"boolean"},focused:{type:"boolean"}}},renderDefaultFocus:{type:"function"},renderDefaultHover:{type:"function"},renderDefaultSelection:{type:"function"},root:{type:"Element"},state:{type:"object",properties:{hovered:{type:"boolean"},selected:{type:"boolean"},focused:{type:"boolean"}}},x:{type:"number"},y:{type:"number"}}},hiddenCategories:{type:"Array<string>",writeback:!0,value:[]},highlightMatch:{type:"string",enumValues:["all","any"],value:"all"},highlightedCategories:{type:"Array<string>",writeback:!0,value:[]},hoverBehavior:{type:"string",enumValues:["dim","none"],value:"none"},hoverRenderer:{type:"function",properties:{color:{type:"string"},componentElement:{type:"Element"},data:{type:"object"},id:{type:"any"},itemData:{type:"object"},label:{type:"string"},location:{type:"string"},parentElement:{type:"Element"},previousState:{type:"object",properties:{hovered:{type:"boolean"},selected:{type:"boolean"},focused:{type:"boolean"}}},renderDefaultFocus:{type:"function"},renderDefaultHover:{type:"function"},renderDefaultSelection:{type:"function"},root:{type:"Element"},state:{type:"object",properties:{hovered:{type:"boolean"},selected:{type:"boolean"},focused:{type:"boolean"}}},x:{type:"number"},y:{type:"number"}}},initialZooming:{type:"string",enumValues:["auto","none"],value:"none"},isolatedItem:{type:"any"},labelDisplay:{type:"string",enumValues:["auto","off","on"],value:"off"},labelType:{type:"string",enumValues:["long","short"],value:"short"},linkData:{type:"oj.DataProvider"},links:{type:"Array<Object>|Promise"},mapProvider:{type:"object",properties:{geo:{type:"object",value:{}},propertiesKeys:{type:"object",properties:{id:{type:"string",value:""},longLabel:{type:"string",value:""},shortLabel:{type:"string",value:""}}}}},markerData:{type:"oj.DataProvider"},markerZoomBehavior:{type:"string",enumValues:["fixed","zoom"],value:"fixed"},markers:{type:"Array<Object>|Promise"},maxZoom:{type:"number",value:6},panning:{type:"string",enumValues:["auto","none"],value:"none"},renderer:{type:"function",properties:{color:{type:"string"},componentElement:{type:"Element"},data:{type:"object"},id:{type:"any"},itemData:{type:"object"},label:{type:"string"},location:{type:"string"},parentElement:{type:"Element"},previousState:{type:"object",properties:{hovered:{type:"boolean"},selected:{type:"boolean"},focused:{type:"boolean"}}},renderDefaultFocus:{type:"function"},renderDefaultHover:{type:"function"},renderDefaultSelection:{type:"function"},root:{type:"Element"},state:{type:"object",properties:{hovered:{type:"boolean"},selected:{type:"boolean"},focused:{type:"boolean"}}},x:{type:"number"},y:{type:"number"}}},selection:{type:"Array<any>",writeback:!0,value:[]},selectionMode:{type:"string",enumValues:["multiple","none","single"],value:"none"},selectionRenderer:{type:"function",properties:{color:{type:"string"},componentElement:{type:"Element"},data:{type:"object"},id:{type:"any"},itemData:{type:"object"},label:{type:"string"},location:{type:"string"},parentElement:{type:"Element"},previousState:{type:"object",properties:{hovered:{type:"boolean"},selected:{type:"boolean"},focused:{type:"boolean"}}},renderDefaultFocus:{type:"function"},renderDefaultHover:{type:"function"},renderDefaultSelection:{type:"function"},root:{type:"Element"},state:{type:"object",properties:{hovered:{type:"boolean"},selected:{type:"boolean"},focused:{type:"boolean"}}},x:{type:"number"},y:{type:"number"}}},styleDefaults:{type:"object",properties:{areaSvgStyle:{type:"object",value:{}},dataAreaDefaults:{type:"object",value:{},properties:{borderColor:{type:"string"},hoverColor:{type:"string"},selectedInnerColor:{type:"string"},selectedOuterColor:{type:"string"}}},dataMarkerDefaults:{type:"object",properties:{borderColor:{type:"string"},borderStyle:{type:"string",enumValues:["none","solid"],value:"solid"},borderWidth:{type:"number",value:.5},color:{type:"string"},height:{type:"number",value:8},labelStyle:{type:"object",value:{}},opacity:{type:"number",value:1},shape:{type:"string",value:"circle"},width:{type:"number",value:8}}},hoverBehaviorDelay:{type:"number",value:200},labelStyle:{type:"object",value:{}},linkDefaults:{type:"object",properties:{color:{type:"string"},width:{type:"number",value:2}}}}},tooltip:{type:"object",properties:{renderer:{type:"function",properties:{color:{type:"string"},componentElement:{type:"Element"},data:{type:"object"},id:{type:"any"},itemData:{type:"object"},label:{type:"string"},location:{type:"string"},locationName:{type:"string"},parentElement:{type:"Element"},tooltip:{type:"string"},x:{type:"number"},y:{type:"number"}}}}},tooltipDisplay:{type:"string",enumValues:["auto","labelAndShortDesc","none","shortDesc"],value:"auto"},touchResponse:{type:"string",enumValues:["auto","touchStart"],value:"auto"},trackResize:{type:"string",enumValues:["off","on"],value:"on"},translations:{type:"object",value:{},properties:{componentName:{type:"string"},labelAndValue:{type:"string"},labelClearSelection:{type:"string"},labelCountWithTotal:{type:"string"},labelDataVisualization:{type:"string"},labelInvalidData:{type:"string"},labelNoData:{type:"string"},stateCollapsed:{type:"string"},stateDrillable:{type:"string"},stateExpanded:{type:"string"},stateHidden:{type:"string"},stateIsolated:{type:"string"},stateMaximized:{type:"string"},stateMinimized:{type:"string"},stateSelected:{type:"string"},stateUnselected:{type:"string"},stateVisible:{type:"string"}}},zooming:{type:"string",enumValues:["auto","none"],value:"none"}},methods:{getArea:{},getMarker:{},getLink:{},getContextByNode:{},refresh:{},setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},extension:{}},l={properties:{categories:{type:"Array<string>",value:[]},color:{type:"string"},label:{type:"string",value:""},labelStyle:{type:"object"},location:{type:"string",value:""},opacity:{type:"number",value:1},selectable:{type:"string",enumValues:["auto","off"],value:"auto"},shortDesc:{type:"string",value:""},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}}},extension:{}},p={properties:{categories:{type:"Array<string>",value:[]},color:{type:"string",value:""},endLocation:{type:"object",value:{},properties:{id:{type:"any"},location:{type:"string"},x:{type:"number"},y:{type:"number"}}},selectable:{type:"string",enumValues:["auto","off"],value:"auto"},shortDesc:{type:"string",value:""},startLocation:{type:"object",value:{},properties:{id:{type:"any"},location:{type:"string"},x:{type:"number"},y:{type:"number"}}},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}},width:{type:"number",value:2}},extension:{}},u={properties:{borderColor:{type:"string",value:""},borderStyle:{type:"string",enumValues:["none","solid"],value:"solid"},borderWidth:{type:"number",value:.5},categories:{type:"Array<string>",value:[]},color:{type:"string"},height:{type:"number",value:8},label:{type:"string",value:""},labelPosition:{type:"string",enumValues:["bottom","center","top"],value:"center"},labelStyle:{type:"object"},location:{type:"string",value:""},opacity:{type:"number",value:1},rotation:{type:"number",value:0},selectable:{type:"string",enumValues:["auto","off"],value:"auto"},shape:{type:"string",value:"circle"},shortDesc:{type:"string",value:""},source:{type:"string",value:""},sourceHover:{type:"string",value:""},sourceHoverSelected:{type:"string",value:""},sourceSelected:{type:"string",value:""},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}},value:{type:"number"},width:{type:"number",value:8},x:{type:"number"},y:{type:"number"}},extension:{}};e.__registerWidget("oj.ojThematicMap",t.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{animationDuration:void 0,animationOnDisplay:"none",areaData:null,areas:null,as:"",focusRenderer:null,hiddenCategories:[],highlightedCategories:[],highlightMatch:"all",hoverBehavior:"none",hoverRenderer:null,initialZooming:"none",isolatedItem:null,labelDisplay:"off",labelType:"short",linkData:null,links:null,mapProvider:{geo:{},propertiesKeys:{id:"",shortLabel:"",longLabel:""}},markerData:null,markers:null,markerZoomBehavior:"fixed",maxZoom:6,panning:"none",renderer:null,selection:[],selectionMode:"none",selectionRenderer:null,styleDefaults:{dataAreaDefaults:{borderColor:void 0,hoverColor:void 0,selectedInnerColor:void 0,selectedOuterColor:void 0},dataMarkerDefaults:{borderColor:void 0,borderWidth:.5,borderStyle:"solid",color:void 0,height:8,labelStyle:{},opacity:1,shape:"circle",width:8},hoverBehaviorDelay:200,labelStyle:{},linkDefaults:{color:void 0,width:2}},tooltip:{renderer:null},tooltipDisplay:"auto",touchResponse:"auto",zooming:"none"},_currentLocale:"",_loadedBasemaps:[],_basemapPath:"resources/internal-deps/dvt/thematicMap/basemaps/",_supportedLocales:{ar:"ar",cs:"cs",da:"da",de:"de",el:"el",es:"es",fi:"fi",fr:"fr","fr-ca":"fr_CA",he:"iw",hu:"hu",it:"it",ja:"ja",ko:"ko",nl:"nl",no:"no",pl:"pl",pt:"pt_BR","pt-pt":"pt",ro:"ro",ru:"ru",sk:"sk",sv:"sv",th:"th",tr:"tr","zh-hans":"zh_CN","zh-hant":"zh_TW"},_ComponentCreate:function(){this._super(),this._checkBasemaps=[],this._initiallyRendered=!1,this._dataLayersToUpdate=[]},_CreateDvtComponent:function(e,t,a){return n.ThematicMap.newInstance(e,t,a)},_ConvertLocatorToSubId:function(e){var t=e.subId;return"oj-thematicmap-area"===t?t=this._getDataLayerId(e.dataLayer,e.index,"area")+":area["+e.index+"]":"oj-thematicmap-marker"===t?t=this._getDataLayerId(e.dataLayer,e.index,"marker")+":marker["+e.index+"]":"oj-thematicmap-link"===t?t=this._getDataLayerId(e.dataLayer,e.index,"link")+":link["+e.index+"]":"oj-thematicmap-tooltip"===t&&(t="tooltip"),t},_ConvertSubIdToLocator:function(e){var t={};return e.indexOf(":area")>0?(t.subId="oj-thematicmap-area",this._IsCustomElement()||(t.dataLayer=e.substring(0,e.indexOf(":"))),t.index=this._GetFirstIndex(e)):e.indexOf(":marker")>0?(t.subId="oj-thematicmap-marker",this._IsCustomElement()||(t.dataLayer=e.substring(0,e.indexOf(":"))),t.index=this._GetFirstIndex(e)):e.indexOf(":link")>0?(t.subId="oj-thematicmap-link",this._IsCustomElement()||(t.dataLayer=e.substring(0,e.indexOf(":"))),t.index=this._GetFirstIndex(e)):"tooltip"===e&&(t.subId="oj-thematicmap-tooltip"),t},_GetComponentStyleClasses:function(){var e=this._super();return e.push("oj-thematicmap"),e},_GetChildStyleClasses:function(){var e=this._super();return e["oj-dvtbase oj-thematicmap"]={path:"animationDuration",property:"ANIM_DUR"},e["oj-thematicmap-arealayer"]=[{path:"styleDefaults/areaSvgStyle",property:"BACKGROUND"},{path:"styleDefaults/labelStyle",property:"TEXT"}],e["oj-thematicmap-area"]={path:"styleDefaults/dataAreaDefaults/borderColor",property:"border-top-color"},e["oj-thematicmap-area oj-hover"]={path:"styleDefaults/dataAreaDefaults/hoverColor",property:"border-top-color"},e["oj-thematicmap-area oj-selected"]=[{path:"styleDefaults/dataAreaDefaults/selectedInnerColor",property:"border-top-color"},{path:"styleDefaults/dataAreaDefaults/selectedOuterColor",property:"border-bottom-color"}],e["oj-thematicmap-marker"]=[{path:"styleDefaults/dataMarkerDefaults/labelStyle",property:"TEXT"},{path:"styleDefaults/dataMarkerDefaults/color",property:"background-color"},{path:"styleDefaults/dataMarkerDefaults/opacity",property:"opacity"},{path:"styleDefaults/dataMarkerDefaults/borderColor",property:"border-top-color"}],e["oj-thematicmap-link"]={path:"styleDefaults/linkDefaults/color",property:"color"},e["oj-thematicmap-link oj-hover"]={path:"styleDefaults/linkDefaults/_hoverColor",property:"color"},e["oj-thematicmap-link oj-selected"]={path:"styleDefaults/linkDefaults/_selectedColor",property:"border-color"},e},_GetEventTypes:function(){return["optionChange"]},_InitOptions:function(e,t){this._super(e,t);var a=this.options.styleDefaults;this.options.styleDefaults=a},_setOptions:function(t,a){var r,o=Object.keys(t).length,n=t.areaLayers,s=this.options.areaLayers,i=t.pointDataLayers;if(1===o&&n&&s&&s.length>0)for(r=0;r<n.length;r++){for(var l=n[r],p=s[r],u=!0,y=Object.keys(l),c=0;c<y.length;c++){var d=y[c];"areaDataLayer"!==d&&l[d]!==p[d]&&(u=!1)}u&&!e.Object.compareValues(p.areaDataLayer,l.areaDataLayer)&&this._dataLayersToUpdate.push({options:l.areaDataLayer,parentLayer:l.layer,isADL:!0})}else if(1===o&&i&&this.options.pointDataLayers&&this.options.pointDataLayers.length>0)for(r=0;r<i.length;r++)e.Object.compareValues(this.options.pointDataLayers[r],i[r])||this._dataLayersToUpdate.push({options:i[r],parentLayer:i[r].id,isADL:!1});this._super(t,a)},_GetComponentRendererOptions:function(){return["tooltip/renderer","_tooltip/renderer","renderer","focusRenderer","hoverRenderer","selectionRenderer"]},_LoadResources:function(){null==this.options._resources&&(this.options._resources={});var e=this.options._resources;e.panCursorDown=a.getResourceUrl("resources/internal-deps/dvt/chart/hand-closed.cur"),e.panCursorUp=a.getResourceUrl("resources/internal-deps/dvt/chart/hand-open.cur")},_ProcessOptions:function(){this._super();var e=this.options.tooltip,t=e?e.renderer:null;if(t){var a=this;this.options._tooltip={renderer:function(e){var r=a._IsCustomElement()?{insert:e.tooltip}:e.tooltip;try{return t(e)||r}catch(e){return s.warn("Showing default tooltip. "+e),r}}}}var r,o,n=this.options.areaLayers;if(n)for(r=0;r<n.length;r++){var i=n[r].areaDataLayer;i&&(o=i._templateRenderer)&&(i.renderer=this._GetTemplateDataRenderer(o,"area"))}var l=this.options.pointDataLayers;if(l)for(r=0;r<l.length;r++){var p=l[r];p&&(o=p._templateRenderer)&&(p.renderer=this._GetTemplateDataRenderer(o,"point"))}this.options._contextHandler=this._getContextHandler()},_Render:function(){this._NotReady();var e,t=this.options.areaLayers;if(this._IsCustomElement()){if(!this.options.mapProvider.geo.type)return void this._MakeReady()}else{var a=this.options.basemap;if(!a||!t||t.length<1)return void this._MakeReady();for(this._loadBasemap(a,t),e=0;e<this._checkBasemaps.length;e++)if(!this._loadedBasemaps[this._checkBasemaps[e]])return;this._checkBasemaps=[]}if(this._initiallyRendered&&this._dataLayersToUpdate.length>0){if(this._context.isReadyToRender()){for(e=0;e<this._dataLayersToUpdate.length;e++){var r=this._dataLayersToUpdate[e],o=r.isADL;o?this._CleanTemplate("area"):this._CleanTemplate("point"),this._component.updateLayer(r.options,r.parentLayer,o)}this._dataLayersToUpdate=[]}this._MakeReady()}else this._super(),this._initiallyRendered=!0},_RenderComponent:function(e,t){this._IsCustomElement()&&this._mapCustomElementOptions(e),this._updateDataLayerSelection(e),this._super(e,t)},_getContextHandler:function(){var e=this;return function(t,a,o,n,s,i){var l={component:r.__GetWidgetConstructor(e.element),parentElement:t,rootElement:a,data:o,itemData:n,state:s,previousState:i,id:o.id,label:o.label,color:o.color,location:o.location,x:o.x,y:o.y};return e._IsCustomElement()&&(l.renderDefaultHover=e.renderDefaultHover.bind(e,l),l.renderDefaultSelection=e.renderDefaultSelection.bind(e,l),l.renderDefaultFocus=e.renderDefaultFocus.bind(e,l)),e._FixRendererContext(l)}},renderDefaultHover:function(e){e.previousState&&e.state.hovered===e.previousState.hovered||this._component.processDefaultHoverEffect(e.id,e.state.hovered)},renderDefaultSelection:function(e){e.previousState&&e.state.selected===e.previousState.selected||this._component.processDefaultSelectionEffect(e.id,e.state.selected)},renderDefaultFocus:function(e){e.previousState&&e.state.focused===e.previousState.focused||this._component.processDefaultFocusEffect(e.id,e.state.focused)},_loadBasemap:function(e,t){var r=a.getLocale();r!==this._currentLocale&&(this._currentLocale=r,this._loadedBasemaps=[]);for(var o=0;o<t.length;o++){var n=t[o].layer;n&&this._loadBasemapHelper(e,n,r)}var s=this.options.pointDataLayers;!this.options.mapProvider.geo.type&&s&&s.length>0&&this._loadBasemapHelper(e,"cities",r)},_loadResourceByUrl:function(e,r){if(!this._loadedBasemaps[e]){var o=this,n=function(){o._loadedBasemaps[e]=!0,o._Render()},s=t.getScript(a.getResourceUrl(e),function(){n()});r&&s.fail(function(){n()})}},_loadBasemapHelper:function(e,t,a){var r=!0;try{r=Object.keys(n.DvtBaseMapManager.getLayerIds(e,t)).length>0}catch(e){r=!1}if(!r&&!this.options.mapProvider.geo.type){var o=this._basemapPath+"ojthematicmap-"+e+"-"+t+".js";-1===this._checkBasemaps.indexOf(o)&&(this._checkBasemaps.push(o),this._loadResourceByUrl(o,!1))}if(-1===a.indexOf("en")){var s=a.toLowerCase().split("-"),i=[s[0]];s.length>1&&i.unshift(s[0]+"-"+s[1]),s.length>2&&i.unshift(s[0]+"-"+s[2],s[0]+"-"+s[1]+"-"+s[2]),e=e.charAt(0).toUpperCase()+e.slice(1),t=t.charAt(0).toUpperCase()+t.slice(1);for(var l=this._basemapPath+"resourceBundles/"+e+t+"Bundle_",p=0;p<i.length;p++)if(this._supportedLocales[i[p]]){var u=l+this._supportedLocales[i[p]]+".js";-1===this._checkBasemaps.indexOf(u)&&(this._checkBasemaps.push(u),this._loadResourceByUrl(u,!0));break}}},_HandleEvent:function(e){if("selection"===e.type){var t,a=e.clientId,r=this.options.selection,o=e.selection;if(this._IsCustomElement())this._selectionDataLayerMap[a]=o,t=this._selectionDataLayerMap.adl1.concat(this._selectionDataLayerMap.pdl1);else if((t={})[a]=o,r)for(var n=Object.keys(r),s=0;s<n.length;s++){var i=n[s];a!==i&&(t[i]=r[i])}this._UserOptionChange("selection",t)}else this._super(e)},_GetTranslationMap:function(){var e=this.options.translations,t=this._super();return t["DvtUtilBundle.THEMATIC_MAP"]=e.componentName,t},_updateDataLayerSelection:function(e){var t=e.selection,a=(this._IsCustomElement()?t.length:Object.keys(t).length)>0;if(t&&a){var r=e.pointDataLayers;if(r)if(this._IsCustomElement()&&r[0])r[0].selection=t;else for(var o=0;o<r.length;o++)t[r[o].id]&&(r[o].selection=t[r[o].id]);var n=e.areaLayers;if(n&&n[0]){var s=n[0].areaDataLayer;this._IsCustomElement()&&s?s.selection=t:s&&t[s.id]&&(s.selection=t[s.id])}}},getArea:function(e){return this._IsCustomElement()?this._component.getAutomation().getData(this._getDataLayerId(null,e,"area"),"area",e):this._component.getAutomation().getData(arguments[0],"area",arguments[1])},getMarker:function(e){return this._IsCustomElement()?this._component.getAutomation().getData(this._getDataLayerId(null,e,"marker"),"marker",e):this._component.getAutomation().getData(arguments[0],"marker",arguments[1])},getLink:function(e){return this._IsCustomElement()?this._component.getAutomation().getData(this._getDataLayerId(null,e,"link"),"link",e):this._component.getAutomation().getData(arguments[0],"link",arguments[1])},getContextByNode:function(e){var t=this.getSubIdByNode(e);return t&&(this._IsCustomElement()&&delete t.dataLayer,"oj-thematicmap-tooltip"!==t.subId)?t:null},_GetComponentDeferredDataPaths:function(){return this._IsCustomElement()?{root:["areas","markers","links","areaData","markerData","linkData"]}:{areaLayers:["areaDataLayer/areas","areaDataLayer/markers","areaDataLayer/links"],pointDataLayers:["markers","links"]}},_GetComponentNoClonePaths:function(){return this._IsCustomElement()?{areas:!0,markers:!0,links:!0,mapProvider:!0}:{mapProvider:!0,areaLayers:{areaDataLayer:{areas:!0,markers:!0,links:!0}},pointDataLayers:{markers:!0,links:!0}}},_GetDataContext:function(e){if(this._IsCustomElement())return this._super();var t=this.options.basemap,a=e.layer?e.layer:"cities";return{basemap:t,layer:a,ids:n.DvtBaseMapManager.getLayerIds(t,a)}},_mapCustomElementOptions:function(e){e.animationOnMapChange=e.animationOnDisplay;var t=[{}];e.areaLayers=t;var a=t[0],r={id:"adl1"};a.areaDataLayer=r;var o=[{id:"pdl1"}];e.pointDataLayers=o;var n=o[0],s=["labelDisplay","labelType"];this._mapOptionHelper(e,s,[a]),s=["animationOnDataChange","focusRenderer","hoverRenderer","renderer","selectionMode","selectionRenderer"],this._mapOptionHelper(e,s,[r,n]),s=["areas","isolatedItem"],this._mapOptionHelper(e,s,[r]),this._selectionDataLayerMap||(this._selectionDataLayerMap={adl1:[],pdl1:[]});var i,l=e.selection,p={};for(i=0;i<l.length;i++)p[l[i]]=!0;this._idToDataLayerMap={};var u=e.areas;if(u)for(i=0;i<u.length;i++){var y=u[i];this._idToDataLayerMap[y.id]="adl1";var c=y.id;p[c]&&this._selectionDataLayerMap.adl1.push(c)}var d,m=e.markers;if(m){this._markerToDataLayerMap=[];var h=[],g=[];for(i=0;i<m.length;i++){var v=m[i];v.location?(h.push(v),d="adl1"):v.x&&v.y&&(g.push(v),d="pdl1"),d&&(this._markerToDataLayerMap[i]=d,this._idToDataLayerMap[v.id]=d,p[v.id]&&this._selectionDataLayerMap[d].push(v.id))}h.length>0&&(r.markers=h),g.length>0&&(n.markers=g)}var f=e.links;if(f){this._linkToDataLayerMap=[];var b=[],D=[];for(i=0;i<f.length;i++){var _=f[i],k=_.startLocation;k&&(k.location?(this._linkToDataLayerMap[i]="adl1",b.push(_)):k.x&&k.y?(D.push(_),this._linkToDataLayerMap[i]="pdl1"):k.id&&(d=this._idToDataLayerMap[k.id],this._linkToDataLayerMap[i]=d,"adl1"===d?b.push(_):D.push(_))),(d=this._idToDataLayerMap[_.id])&&p[_.id]&&this._selectionDataLayerMap[d].push(_.id)}b.length>0&&(r.links=b),D.length>0&&(n.links=D)}},_mapOptionHelper:function(e,t,a){for(var r=0;r<t.length;r++){var o=t[r],n=e[o];if(n)for(var s=0;s<a.length;s++)a[s][o]=n}},_getDataLayerId:function(e,t,a){if(!this._IsCustomElement())return e;switch(a){case"area":return"adl1";case"marker":return this._markerToDataLayerMap[t];case"link":return this._linkToDataLayerMap[t];default:return""}},_GetSimpleDataProviderConfigs:function(){return{areaData:{templateName:"areaTemplate",templateElementName:"oj-thematic-map-area",resultPath:"areas"},linkData:{templateName:"linkTemplate",templateElementName:"oj-thematic-map-link",resultPath:"links"},markerData:{templateName:"markerTemplate",templateElementName:"oj-thematic-map-marker",resultPath:"markers"}}}}),r.setDefaultOptions({ojThematicMap:{styleDefaults:r.createDynamicPropertyGetter(function(e){return e.isCustomElement?{areaSvgStyle:{}}:{}})}}),i.extension._WIDGET_NAME="ojThematicMap",e.CustomElementBridge.register("oj-thematic-map",{metadata:i,parseFunction:o.shapeParseFunction({"style-defaults.data-marker-defaults.shape":!0})}),l.extension._CONSTRUCTOR=function(){},e.CustomElementBridge.register("oj-thematic-map-area",{metadata:l}),p.extension._CONSTRUCTOR=function(){},e.CustomElementBridge.register("oj-thematic-map-link",{metadata:p}),function(){u.extension._CONSTRUCTOR=function(){};e.CustomElementBridge.register("oj-thematic-map-marker",{metadata:u,parseFunction:o.shapeParseFunction({shape:!0},{circle:!0,diamond:!0,ellipse:!0,human:!0,plus:!0,rectangle:!0,square:!0,star:!0,triangleDown:!0,triangleUp:!0})})}()});