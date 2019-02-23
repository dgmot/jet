/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojtime-base","ojs/internal-deps/dvt/DvtTimeline","ojs/ojattributegrouphandler","ojs/ojvalidation-base"],function(e,t,o,r,n,i,a){var l={properties:{animationOnDataChange:{type:"string",enumValues:["auto","none"],value:"none"},animationOnDisplay:{type:"string",enumValues:["auto","none"],value:"none"},end:{type:"string",value:""},majorAxis:{type:"object",properties:{converter:{type:"object",value:"{\"default\": null, \"seconds\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'hour': 'numeric', 'minute': '2-digit', 'second': '2-digit'}), \"minutes\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'hour': 'numeric', 'minute': '2-digit'}), \"hours\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'hour': 'numeric'}), \"days\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'month': 'numeric', 'day': '2-digit'}), \"weeks\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'month': 'numeric', 'day': '2-digit'}), \"months\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'month': 'long'}), \"quarters\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'month': 'long'}), \"years\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'year': 'numeric'})}",properties:{default:{type:"oj.Converter<string>"},seconds:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour: numeric, minute: 2-digit, second: 2-digit})"},minutes:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour: numeric, minute: 2-digit})"},hours:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour: numeric})"},days:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month: numeric, day: 2-digit})"},weeks:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month: numeric, day: 2-digit})"},months:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month: long})"},quarters:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month: long})"},years:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({year: numeric})"}}},scale:{type:"string",enumValues:["days","hours","minutes","months","quarters","seconds","weeks","years"]},svgStyle:{type:"object",value:{}}}},minorAxis:{type:"object",properties:{converter:{type:"object",value:"{\"default\": null, \"seconds\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'hour': 'numeric', 'minute': '2-digit', 'second': '2-digit'}), \"minutes\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'hour': 'numeric', 'minute': '2-digit'}), \"hours\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'hour': 'numeric'}), \"days\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'month': 'numeric', 'day': '2-digit'}), \"weeks\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'month': 'numeric', 'day': '2-digit'}), \"months\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'month': 'long'}), \"quarters\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'month': 'long'}), \"years\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'year': 'numeric'})}",properties:{default:{type:"oj.Converter<string>"},seconds:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour: numeric, minute: 2-digit, second: 2-digit})"},minutes:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour: numeric, minute: 2-digit})"},hours:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour: numeric})"},days:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month: numeric, day: 2-digit})"},weeks:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month: numeric, day: 2-digit})"},months:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month: long})"},quarters:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month: long})"},years:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({year: numeric})"}}},scale:{type:"string",enumValues:["days","hours","minutes","months","quarters","seconds","weeks","years"]},svgStyle:{type:"object",value:{}},zoomOrder:{type:"Array<string>"}}},orientation:{type:"string",enumValues:["horizontal","vertical"],value:"horizontal"},overview:{type:"object",properties:{rendered:{type:"string",enumValues:["off","on"],value:"off"},svgStyle:{type:"object",value:{}}}},referenceObjects:{type:"Array<Object>",value:[]},selection:{type:"Array<string>",writeback:!0,value:[]},selectionMode:{type:"string",enumValues:["multiple","none","single"],value:"none"},series:{type:"Array<Object>|Promise"},start:{type:"string",value:""},styleDefaults:{type:"object",properties:{animationDuration:{type:"number"},borderColor:{type:"string"},item:{type:"object",value:{},properties:{backgroundColor:{type:"string"},borderColor:{type:"string"},descriptionStyle:{type:"object"},hoverBackgroundColor:{type:"string"},hoverBorderColor:{type:"string"},selectedBackgroundColor:{type:"string"},selectedBorderColor:{type:"string"},titleStyle:{type:"object"}}},majorAxis:{type:"object",value:{},properties:{labelStyle:{type:"object"},separatorColor:{type:"string"}}},minorAxis:{type:"object",value:{},properties:{backgroundColor:{type:"string"},borderColor:{type:"string"},labelStyle:{type:"object"},separatorColor:{type:"string"}}},overview:{type:"object",properties:{backgroundColor:{type:"string"},labelStyle:{type:"object"},window:{type:"object",value:{},properties:{backgroundColor:{type:"string"},borderColor:{type:"string"}}}}},referenceObject:{type:"object",value:{},properties:{color:{type:"string"}}},series:{type:"object",value:{},properties:{backgroundColor:{type:"string"},colors:{type:"Array<string>"},emptyTextStyle:{type:"object"},labelStyle:{type:"object"}}}}},tooltip:{type:"object",value:{renderer:null},properties:{renderer:{type:"function",properties:{parentElement:{type:"Element"},data:{type:"oj.ojTimeline.SeriesItem"},seriesData:{type:"oj.ojTimeline.Series"},componentElement:{type:"Element"},color:{type:"string"}}}}},trackResize:{type:"string",enumValues:["off","on"],value:"on"},translations:{type:"object",value:{},properties:{accessibleItemDesc:{type:"string"},accessibleItemEnd:{type:"string"},accessibleItemStart:{type:"string"},accessibleItemTitle:{type:"string"},componentName:{type:"string"},labelAndValue:{type:"string"},labelClearSelection:{type:"string"},labelCountWithTotal:{type:"string"},labelDataVisualization:{type:"string"},labelDate:{type:"string"},labelDescription:{type:"string"},labelEnd:{type:"string"},labelInvalidData:{type:"string"},labelNoData:{type:"string"},labelSeries:{type:"string"},labelStart:{type:"string"},labelTitle:{type:"string"},stateCollapsed:{type:"string"},stateDrillable:{type:"string"},stateExpanded:{type:"string"},stateHidden:{type:"string"},stateIsolated:{type:"string"},stateMaximized:{type:"string"},stateMinimized:{type:"string"},stateSelected:{type:"string"},stateUnselected:{type:"string"},stateVisible:{type:"string"},tooltipZoomIn:{type:"string"},tooltipZoomOut:{type:"string"}}},valueFormats:{type:"object",properties:{date:{type:"object",properties:{converter:{type:"object"},tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}},description:{type:"object",properties:{tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"off"},tooltipLabel:{type:"string"}}},end:{type:"object",properties:{converter:{type:"object"},tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}},series:{type:"object",properties:{tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"off"},tooltipLabel:{type:"string"}}},start:{type:"object",properties:{converter:{type:"object"},tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}},title:{type:"object",properties:{tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"off"},tooltipLabel:{type:"string"}}}}},viewportEnd:{type:"string",value:""},viewportStart:{type:"string",value:""}},methods:{getContextByNode:{},refresh:{},setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojViewportChange:{}},extension:{}};e.__registerWidget("oj.ojTimeline",t.oj.dvtTimeComponent,{widgetEventPrefix:"oj",options:{animationOnDataChange:"none",animationOnDisplay:"none",end:"",minorAxis:{converter:{default:null,seconds:a.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour:"numeric",minute:"2-digit",second:"2-digit"}),minutes:a.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour:"numeric",minute:"2-digit"}),hours:a.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour:"numeric"}),days:a.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month:"numeric",day:"2-digit"}),weeks:a.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month:"numeric",day:"2-digit"}),months:a.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month:"long"}),quarters:a.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month:"long"}),years:a.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({year:"numeric"})},scale:null,svgStyle:{},zoomOrder:null},majorAxis:{converter:{default:null,seconds:a.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour:"numeric",minute:"2-digit",second:"2-digit"}),minutes:a.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour:"numeric",minute:"2-digit"}),hours:a.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour:"numeric"}),days:a.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month:"numeric",day:"2-digit"}),weeks:a.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month:"numeric",day:"2-digit"}),months:a.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month:"long"}),quarters:a.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month:"long"}),years:a.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({year:"numeric"})},scale:null,svgStyle:{}},orientation:"horizontal",overview:{rendered:"off",svgStyle:{}},referenceObjects:[],selection:[],selectionMode:"none",series:null,start:"",styleDefaults:{animationDuration:void 0,borderColor:void 0,item:{backgroundColor:void 0,borderColor:void 0,descriptionStyle:void 0,hoverBackgroundColor:void 0,hoverBorderColor:void 0,selectedBackgroundColor:void 0,selectedBorderColor:void 0,titleStyle:void 0},minorAxis:{backgroundColor:void 0,borderColor:void 0,labelStyle:void 0,separatorColor:void 0},majorAxis:{labelStyle:void 0,separatorColor:void 0},overview:{backgroundColor:void 0,labelStyle:void 0,window:{backgroundColor:void 0,borderColor:void 0}},referenceObject:{color:void 0},series:{backgroundColor:void 0,colors:["#237bb1","#68c182","#fad55c","#ed6647","#8561c8","#6ddbdb","#ffb54d","#e371b2","#47bdef","#a2bf39","#a75dba","#f7f37b"],emptyTextStyle:void 0,labelStyle:void 0}},tooltip:{renderer:null},valueFormats:{series:{tooltipLabel:void 0,tooltipDisplay:"off"},start:{converter:null,tooltipLabel:void 0,tooltipDisplay:"auto"},end:{converter:null,tooltipLabel:void 0,tooltipDisplay:"auto"},date:{converter:null,tooltipLabel:void 0,tooltipDisplay:"auto"},title:{tooltipLabel:void 0,tooltipDisplay:"off"},description:{tooltipLabel:void 0,tooltipDisplay:"off"}},viewportEnd:"",viewportStart:"",viewportChange:null},_CreateDvtComponent:function(e,t,o){return n.Timeline.newInstance(e,t,o)},_ConvertLocatorToSubId:function(e){var t=e.subId;return"oj-timeline-item"===t?t="timelineItem["+e.seriesIndex+"]["+e.itemIndex+"]":"oj-timeline-tooltip"===t&&(t="tooltip"),t},_ConvertSubIdToLocator:function(e){var t={};if(0===e.indexOf("timelineItem")){var o=this._GetIndexPath(e);t.subId="oj-timeline-item",t.seriesIndex=o[0],t.itemIndex=o[1]}else"tooltip"===e&&(t.subId="oj-timeline-tooltip");return t},_ProcessStyles:function(){if(this.options.styleDefaults||(this.options.styleDefaults={}),this.options.styleDefaults.series||(this.options.styleDefaults.series={}),!this.options.styleDefaults.series.colors){var e=new i.ColorAttributeGroupHandler;this.options.styleDefaults.series.colors=e.getValueRamp()}this._super()},_GetComponentStyleClasses:function(){var e=this._super();return e.push("oj-timeline"),e},_GetChildStyleClasses:function(){var e=this._super();return e["oj-dvtbase oj-timeline"]={path:"styleDefaults/animationDuration",property:"ANIM_DUR"},e["oj-timeline"]={path:"styleDefaults/borderColor",property:"border-color"},e["oj-timeline-item"]=[{path:"styleDefaults/item/borderColor",property:"border-color"},{path:"styleDefaults/item/backgroundColor",property:"background-color"}],e["oj-timeline-item oj-hover"]=[{path:"styleDefaults/item/hoverBorderColor",property:"border-color"},{path:"styleDefaults/item/hoverBackgroundColor",property:"background-color"}],e["oj-timeline-item oj-selected"]=[{path:"styleDefaults/item/selectedBorderColor",property:"border-color"},{path:"styleDefaults/item/selectedBackgroundColor",property:"background-color"}],e["oj-timeline-item-description"]={path:"styleDefaults/item/descriptionStyle",property:"TEXT"},e["oj-timeline-item-title"]={path:"styleDefaults/item/titleStyle",property:"TEXT"},e["oj-timeline-major-axis-label"]={path:"styleDefaults/majorAxis/labelStyle",property:"TEXT"},e["oj-timeline-major-axis-separator"]={path:"styleDefaults/majorAxis/separatorColor",property:"color"},e["oj-timeline-minor-axis"]=[{path:"styleDefaults/minorAxis/backgroundColor",property:"background-color"},{path:"styleDefaults/minorAxis/borderColor",property:"border-color"}],e["oj-timeline-minor-axis-label"]={path:"styleDefaults/minorAxis/labelStyle",property:"TEXT"},e["oj-timeline-minor-axis-separator"]={path:"styleDefaults/minorAxis/separatorColor",property:"color"},e["oj-timeline-overview"]={path:"styleDefaults/overview/backgroundColor",property:"background-color"},e["oj-timeline-overview-label"]={path:"styleDefaults/overview/labelStyle",property:"TEXT"},e["oj-timeline-overview-window"]=[{path:"styleDefaults/overview/window/backgroundColor",property:"background-color"},{path:"styleDefaults/overview/window/borderColor",property:"border-color"}],e["oj-timeline-reference-object"]={path:"styleDefaults/referenceObject/color",property:"color"},e["oj-timeline-series"]={path:"styleDefaults/series/backgroundColor",property:"background-color"},e["oj-timeline-series-empty-text"]={path:"styleDefaults/series/emptyTextStyle",property:"TEXT"},e["oj-timeline-series-label"]={path:"styleDefaults/series/labelStyle",property:"TEXT"},e["oj-timeline-tooltip-label"]={path:"styleDefaults/tooltipLabelStyle",property:"TEXT"},e["oj-timeline-zoomin-icon"]=[{path:"_resources/zoomIn_bgc",property:"background-color"},{path:"_resources/zoomIn_bc",property:"border-color"}],e["oj-timeline-zoomin-icon oj-hover"]=[{path:"_resources/zoomIn_h_bgc",property:"background-color"},{path:"_resources/zoomIn_h_bc",property:"border-color"}],e["oj-timeline-zoomin-icon oj-active"]=[{path:"_resources/zoomIn_a_bgc",property:"background-color"},{path:"_resources/zoomIn_a_bc",property:"border-color"}],e["oj-timeline-zoomin-icon oj-disabled"]=[{path:"_resources/zoomIn_d_bgc",property:"background-color"},{path:"_resources/zoomIn_d_bc",property:"border-color"}],e["oj-timeline-zoomout-icon"]=[{path:"_resources/zoomOut_bgc",property:"background-color"},{path:"_resources/zoomOut_bc",property:"border-color"}],e["oj-timeline-zoomout-icon oj-hover"]=[{path:"_resources/zoomOut_h_bgc",property:"background-color"},{path:"_resources/zoomOut_h_bc",property:"border-color"}],e["oj-timeline-zoomout-icon oj-active"]=[{path:"_resources/zoomOut_a_bgc",property:"background-color"},{path:"_resources/zoomOut_a_bc",property:"border-color"}],e["oj-timeline-zoomout-icon oj-disabled"]=[{path:"_resources/zoomOut_d_bgc",property:"background-color"},{path:"_resources/zoomOut_d_bc",property:"border-color"}],e},_GetTranslationMap:function(){var e=this.options.translations,t=this._super();return t["DvtUtilBundle.TIMELINE"]=e.componentName,t["DvtUtilBundle.TIMELINE_SERIES"]=e.labelSeries,t["DvtUtilBundle.ZOOM_IN"]=e.tooltipZoomIn,t["DvtUtilBundle.ZOOM_OUT"]=e.tooltipZoomOut,t},_LoadResources:function(){this._super();var e=this.options._resources,t=e.converter,o=e.converterFactory,r=o.createConverter({month:"short"}),n=o.createConverter({year:"2-digit"}),i={seconds:t.seconds,minutes:t.minutes,hours:t.hours,days:t.days,weeks:t.weeks,months:r,quarters:r,years:n};e.converterVert=i,e.zoomIn="oj-timeline-zoomin-icon",e.zoomIn_h="oj-timeline-zoomin-icon oj-hover",e.zoomIn_a="oj-timeline-zoomin-icon oj-active",e.zoomIn_d="oj-timeline-zoomin-icon oj-disabled",e.zoomOut="oj-timeline-zoomout-icon",e.zoomOut_h="oj-timeline-zoomout-icon oj-hover",e.zoomOut_a="oj-timeline-zoomout-icon oj-active",e.zoomOut_d="oj-timeline-zoomout-icon oj-disabled",e.overviewHandleHor="oj-timeline-overview-window-handle-horizontal",e.overviewHandleVert="oj-timeline-overview-window-handle-vertical"},_GetComponentDeferredDataPaths:function(){return{root:["series"]}},getContextByNode:function(e){var t=this.getSubIdByNode(e);return t&&"oj-timeline-tooltip"!==t.subId?t:null}}),l.extension._WIDGET_NAME="ojTimeline",e.CustomElementBridge.register("oj-timeline",{metadata:l})});