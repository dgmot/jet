/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery","ojs/ojnavigationlist","ojs/ojlistviewdnd"],function(t,e){t.NavigationListDndContext=function(e){t.NavigationListDndContext.superclass.constructor.call(this,e)},t.Object.createSubclass(t.NavigationListDndContext,t.ListViewDndContext,"oj.NavigationListDndContext"),t.NavigationListDndContext.prototype.GetDragAffordanceClass=function(){return"oj-tabbar-drag-handle"},t.NavigationListDndContext.prototype.GetDragImageClass=function(){return"oj-tabbar-drag-image"},t.NavigationListDndContext.prototype.GetDragItemClass=function(){return"oj-tabbar-drag-item"},t.NavigationListDndContext.prototype.GetCutStyleClass=function(){return"oj-tabbar-cut"},t.NavigationListDndContext.prototype.GetCommandPrefix=function(){return"oj-tabbar-"},t.NavigationListDndContext.prototype.shouldDragCurrentItem=function(){return!0},t.NavigationListDndContext.prototype.GetDragImageWidth=function(e){var o=this.listview.GetOption("edge");return"top"===o||"bottom"===o?e.offsetWidth:t.NavigationListDndContext.superclass.GetDragImageWidth.call(this,e)},t.NavigationListDndContext.prototype.GetDragSourceType=function(){return"text/ojnavigationlist-dragsource-id"},t.NavigationListDndContext.prototype.CreateReorderPayload=function(t,e,o){return{item:t[0],position:e,reference:o}},t.NavigationListDndContext.prototype.IsItemReOrdering=function(){return"enabled"===this.listview.GetOption("reorderable")},t.NavigationListDndContext.prototype.GetDefaultDataType=function(){return"text/ojnavigationlist-items-data"},t.NavigationListDndContext.prototype.SetDragItemImage=function(t,o){var n=Math.max(0,t.offsetX),a=Math.max(0,t.offsetY),i=e(o[0].cloneNode(!0));i.removeClass("oj-selected oj-focus oj-focus-highlight  oj-hover").addClass("oj-drag");var r=e(document.createElement("div"));r.get(0).className=this.listview.ojContext.element.get(0).className,r.addClass(this.GetDragImageClass()).css({width:this.GetDragImageWidth(o[0]),height:o[0].offsetHeight}).append(i),e("body").append(r),this.m_dragImage=r,t.dataTransfer.setDragImage(r.get(0),n,a)},t.NavigationListDndContext.prototype.GetCutItems=function(t){var e=[];return e.push(this.m_contextMenuItem&&this.m_contextMenuItem.length>0?this.m_contextMenuItem[0]:this._getActiveItem()),e}});