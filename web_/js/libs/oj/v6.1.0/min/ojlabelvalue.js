/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","ojs/ojcomponentcore","ojs/ojlabel"],function(e){var t={properties:{labelEdge:{type:"string",enumValues:["inherit","start","top"],value:"inherit"},labelWidth:{type:"string",value:"inherit"}},methods:{setProperty:{},getProperty:{},setProperties:{},refresh:{},getNodeBySubId:{},getSubIdByNode:{}},extension:{}};function l(e){var t,l,a=e.element;this.createDOM=function(){a.classList.add("oj-label-value","oj-form");var e=document.createElement("div");for(e.classList.add("oj-flex"),e.setAttribute("data-oj-context",""),e.setAttribute("data-oj-internal",""),(t=document.createElement("div")).classList.add("oj-flex-item"),t.setAttribute("data-oj-context",""),t.setAttribute("data-oj-internal",""),(l=document.createElement("div")).classList.add("oj-flex-item"),l.setAttribute("data-oj-context",""),l.setAttribute("data-oj-internal","");a.firstElementChild;){var i=a.firstElementChild;switch(i.getAttribute("slot")){case"label":t.appendChild(i);break;case"value":l.appendChild(i);break;default:a.removeChild(i)}}e.appendChild(t),e.appendChild(l),a.appendChild(e)},this.updateDOM=function(){var e=function(){for(var e=a.parentElement;e;e=e.parentElement)if(-1!==e.tagName.indexOf("-"))return e;return null}(),i=function(e){var t="top";"inherit"===a.labelEdge?e&&"labelEdge"in e&&(t=e.labelEdge):t=a.labelEdge;return t}(e),n="start"===i?function(e){var t="33%";"inherit"===a.labelWidth?e&&"labelWidth"in e&&(t=e.labelWidth):t=a.labelWidth;return t}(e):"100%";"start"===i?a.classList.add("oj-formlayout-labels-inline"):a.classList.remove("oj-formlayout-labels-inline"),t.style.webkitFlex="0 1 "+n,t.style.flex="0 1 "+n,t.style.maxWidth=n,t.style.width=n,l.style.webkitFlex="1 1 0",l.style.flex="1 1 0"}}t.extension._CONSTRUCTOR=l,e.CustomElementBridge.register("oj-label-value",{metadata:t})});