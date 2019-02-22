/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery","knockout","ojs/ojeventtarget","ojs/ojdataprovider"],function(t,e,i){var n=function(){function e(t,e){this.data=t,this.options=e,this._KEY="key",this._KEYS="keys",this._AFTERKEYS="afterKeys",this._ADDBEFOREKEYS="addBeforeKeys",this._DIRECTION="direction",this._ATTRIBUTE="attribute",this._ATTRIBUTES="attributes",this._SORT="sort",this._SORTCRITERIA="sortCriteria",this._DATA="data",this._METADATA="metadata",this._INDEXES="indexes",this._OFFSET="offset",this._SIZE="size",this._IDATTRIBUTE="idAttribute",this._IMPLICITSORT="implicitSort",this._KEYATTRIBUTES="keyAttributes",this._SORTCOMPARATORS="sortComparators",this._COMPARATORS="comparators",this._COMPARATOR="comparator",this._RESULTS="results",this._CONTAINS="contains",this._FETCHPARAMETERS="fetchParameters",this._CONTAINSPARAMETERS="containsParameters",this._VALUE="value",this._DONE="done",this._ADD="add",this._REMOVE="remove",this._UPDATE="update",this._DETAIL="detail",this._FETCHLISTRESULT="fetchListResult",this._ATDEFAULT="@default",this.Item=function(){return function(t,e,i){this._parent=t,this.metadata=e,this.data=i,this[t._METADATA]=e,this[t._DATA]=i}}(),this.ItemMetadata=function(){return function(t,e){this._parent=t,this.key=e,this[t._KEY]=e}}(),this.FetchByKeysResults=function(){return function(t,e,i){this._parent=t,this.fetchParameters=e,this.results=i,this[t._FETCHPARAMETERS]=e,this[t._RESULTS]=i}}(),this.ContainsKeysResults=function(){return function(t,e,i){this._parent=t,this.containsParameters=e,this.results=i,this[t._CONTAINSPARAMETERS]=e,this[t._RESULTS]=i}}(),this.FetchByOffsetResults=function(){return function(t,e,i,n){this._parent=t,this.fetchParameters=e,this.results=i,this.done=n,this[t._FETCHPARAMETERS]=e,this[t._RESULTS]=i,this[t._DONE]=n}}(),this.FetchListParameters=function(){return function(t,e,i,n){this._parent=t,this.size=e,this.sortCriteria=i,this.attributes=n,this[t._SIZE]=e,this[t._SORTCRITERIA]=i,this[t._ATTRIBUTES]=n}}(),this.FetchListResult=function(){return function(t,e,i,n){this._parent=t,this.fetchParameters=e,this.data=i,this.metadata=n,this[t._FETCHPARAMETERS]=e,this[t._DATA]=i,this[t._METADATA]=n}}(),this.AsyncIterable=function(){return function(t,e){this._parent=t,this._asyncIterator=e,this[Symbol.asyncIterator]=function(){return this._asyncIterator}}}(),this.AsyncIterator=function(){function t(t,e,i,n){this._parent=t,this._nextFunc=e,this._params=i,this._offset=n,this._cachedOffset=n}return t.prototype.next=function(){var t=this._nextFunc(this._params,this._cachedOffset);return this._cachedOffset=this._cachedOffset+t.value[this._parent._DATA].length,Promise.resolve(t)},t}(),this.AsyncIteratorResult=function(){return function(t,e,i){this._parent=t,this.value=e,this.done=i,this[t._VALUE]=e,this[t._DONE]=i}}(),this.DataProviderMutationEventDetail=function(){return function(t,e,i,n){this._parent=t,this.add=e,this.remove=i,this.update=n,this[t._ADD]=e,this[t._REMOVE]=i,this[t._UPDATE]=n}}(),this.DataProviderOperationEventDetail=function(){return function(t,e,i,n,s){this._parent=t,this.keys=e,this.metadata=i,this.data=n,this.indexes=s,this[t._KEYS]=e,this[t._METADATA]=i,this[t._DATA]=n,this[t._INDEXES]=s}}(),this.DataProviderAddOperationEventDetail=function(){return function(t,e,i,n,s,r,a){this._parent=t,this.keys=e,this.afterKeys=i,this.addBeforeKeys=n,this.metadata=s,this.data=r,this.indexes=a,this[t._KEYS]=e,this[t._AFTERKEYS]=i,this[t._ADDBEFOREKEYS]=n,this[t._METADATA]=s,this[t._DATA]=r,this[t._INDEXES]=a}}(),this._cachedIndexMap=[],this._sequenceNum=0,this._subscribeObservableArray(t),null!=e&&null!=e[this._KEYS]&&(this._keysSpecified=!0,this._keys=e[this._KEYS])}return e.prototype.containsKeys=function(t){var e=this;return this.fetchByKeys(t).then(function(i){var n=new Set;return t[e._KEYS].forEach(function(t){null!=i[e._RESULTS].get(t)&&n.add(t)}),Promise.resolve(new e.ContainsKeysResults(e,t,n))})},e.prototype.fetchByKeys=function(e){var i=this;this._generateKeysIfNeeded();var n,s=new Map,r=this._getKeys(),a=null!=e?e[this._ATTRIBUTES]:null,o=0;return e[i._KEYS].forEach(function(e){for(n=null,o=0;o<r.length;o++)if(t.Object.compareValues(r[o],e)){n=o;break}if(null!=n&&n>=0){var h=i._getRowData()[n];a&&a.length>0&&(h=i._filterRowAttributes(a,h)),s.set(e,new i.Item(i,new i.ItemMetadata(i,e),h))}}),Promise.resolve(new i.FetchByKeysResults(i,e,s))},e.prototype.fetchByOffset=function(t){var e=this,i=null!=t?t[this._SIZE]:-1,n=null!=t?t[this._SORTCRITERIA]:null,s=null!=t&&t[this._OFFSET]>0?t[this._OFFSET]:0,r=null!=t?t[this._ATTRIBUTES]:null;this._generateKeysIfNeeded();var a=new this.FetchListParameters(this,i,n,r),o=this._fetchFrom(a,s),h=o[this._VALUE],u=o[this._DONE],l=h[this._DATA],_=h[this._METADATA].map(function(t){return t[e._KEY]}),f=l.map(function(t,i){return new e.Item(e,new e.ItemMetadata(e,_[i]),t)});return Promise.resolve(new this.FetchByOffsetResults(this,t,f,u))},e.prototype.fetchFirst=function(t){return new this.AsyncIterable(this,new this.AsyncIterator(this,this._fetchFrom.bind(this),t,0))},e.prototype.getCapability=function(t){return e.getCapability(t)},e.getCapability=function(t){if("sort"==t)return{attributes:"multiple"};if("fetchByKeys"==t)return{implementation:"lookup"};if("fetchByOffset"==t)return{implementation:"randomAccess"};if("fetchCapability"==t){var e=new Set;return e.add("exclusion"),{attributeFilter:{expansion:{},ordering:{},defaultShape:{features:e}}}}return null},e.prototype.getTotalSize=function(){return Promise.resolve(this._getRowData().length)},e.prototype.isEmpty=function(){return this._getRowData().length>0?"no":"yes"},e.prototype._getRowData=function(){return this[this._DATA]instanceof Array?this[this._DATA]:this[this._DATA]()},e.prototype._getKeys=function(){return null==this._keys||this._keys instanceof Array?this._keys:this._keys()},e.prototype._indexOfKey=function(e){for(var i=this._getKeys(),n=-1,s=0;s<i.length;s++)if(t.Object.compareValues(i[s],e)){n=s;break}return n},e.prototype._subscribeObservableArray=function(e){if(!(e instanceof Array)){if(!this._isObservableArray(e))throw new Error("Invalid data type. ArrayDataProvider only supports Array or observableArray.");var i=this;e.subscribe(function(e){var n,s,r,a,o,h=[],u=[],l=[],_=[],f=[],c=[],p=null,d=null,A=null,E=[];for(n=0;n<e.length;n++){a=e[n].index,o=e[n].status;var y=i._getId(e[n].value);for(s=0;s<e.length;s++)s!=n&&a===e[s].index&&o!==e[s].status&&c.indexOf(n)<0&&E.indexOf(n)<0&&(null==y||t.Object.compareValues(y,i._getId(e[s].value)))&&("deleted"===o?(E.push(n),c.push(s)):(E.push(s),c.push(n)))}for(n=0;n<e.length;n++)if(c.indexOf(n)>=0){var T=i._getKeys()[e[n].index];u.push(T),h.push(e[n].value),l.push(e[n].index)}if(u.length>0){_=u.map(function(t){return new i.ItemMetadata(i,t)});var v=new Set;u.map(function(t){v.add(t)}),p=new i.DataProviderOperationEventDetail(i,v,_,h,l)}for(h=[],u=[],l=[],n=0;n<e.length;n++)"deleted"===e[n].status&&c.indexOf(n)<0&&E.indexOf(n)<0&&(u.push(i._getKeys()[e[n].index]),h.push(e[n].value),l.push(e[n].index));if(u.length>0&&u.map(function(t){var e=i._indexOfKey(t);i._keys.splice(e,1)}),u.length>0){_=u.map(function(t){return new i.ItemMetadata(i,t)});var R=new Set;u.map(function(t){R.add(t)}),A=new i.DataProviderOperationEventDetail(i,R,_,h,l)}h=[],u=[],l=[];var m=i._generateKeysIfNeeded();for(n=0;n<e.length;n++)if("added"===e[n].status&&c.indexOf(n)<0&&E.indexOf(n)<0){null==(r=i._getId(e[n].value))&&(m||i._keysSpecified)&&(r=i._getKeys()[e[n].index]),null==r&&(r=i._sequenceNum++,i._keys.splice(e[n].index,0,r)),-1==i._indexOfKey(r)&&i._keys.splice(e[n].index,0,r),u.push(r);var S=i._getKeys()[e[n].index+1];S=null==S?"":S,f.push(S),h.push(e[n].value),l.push(e[n].index)}if(u.length>0){_=u.map(function(t){return new i.ItemMetadata(i,t)});var g=new Set;u.map(function(t){g.add(t)});var I=new Set;f.map(function(t){I.add(t)}),d=new i.DataProviderAddOperationEventDetail(i,g,I,f,_,h,l)}var O=new i.DataProviderMutationEventDetail(i,d,A,p);i._mutationEvent=new t.DataProviderMutationEvent(O)},null,"arrayChange"),e.subscribe(function(e){i._mutationEvent?i.dispatchEvent(i._mutationEvent):i.dispatchEvent(new t.DataProviderRefreshEvent),i._mutationEvent=null},null,"change")}},e.prototype._isObservableArray=function(t){return i.isObservable(t)&&!(void 0===t.destroyAll)},e.prototype._generateKeysIfNeeded=function(){if(null==this._keys){var t=null!=this.options?this.options[this._KEYATTRIBUTES]||this.options[this._IDATTRIBUTE]:null;this._keys=[];var e=this._getRowData(),i=void 0,n=0;for(n=0;n<e.length;n++)null!=(i=this._getId(e[n]))&&"@index"!=t||(i=this._sequenceNum++),this._keys[n]=i;return!0}return!1},e.prototype._getId=function(t){var e,i=null!=this.options?this.options[this._KEYATTRIBUTES]||this.options[this._IDATTRIBUTE]:null;if(null!=i){var n;if(Array.isArray(i))for(e=[],n=0;n<i.length;n++)e[n]=this._getVal(t,i[n]);else e="@value"==i?this._getAllVals(t):this._getVal(t,i);return e}return null},e.prototype._getVal=function(t,e){return"function"==typeof t[e]?t[e]():t[e]},e.prototype._getAllVals=function(t){var e=this;return Object.keys(t).map(function(i){return e._getVal(t,i)})},e.prototype._fetchFrom=function(t,e){var i=this,n=null!=t?t[this._ATTRIBUTES]:null;this._generateKeysIfNeeded();var s=null!=t?t[this._SORTCRITERIA]:null,r=this._getCachedIndexMap(s),a=r.map(function(t){var e=i._getRowData()[t];return n&&n.length>0&&(e=i._filterRowAttributes(n,e)),e}),o=r.map(function(t){return i._getKeys()[t]}),h=null!=t?t[this._SIZE]>0?t[this._SIZE]:t[this._SIZE]<0?i._getKeys().length:25:25,u=a.slice(e,e+h),l=o.slice(e,e+h).map(function(t){return new i.ItemMetadata(i,t)}),_=e+h<a.length,f=this._mergeSortCriteria(s);null!=f&&((t=t||{})[this._SORTCRITERIA]=f);var c=new this.FetchListResult(this,t,u,l);return new this.AsyncIteratorResult(this,c,!_)},e.prototype._getCachedIndexMap=function(t){var e=this._getRowData().map(function(t,e){return e});return this._sortData(e,t)},e.prototype._sortData=function(t,e){var i=this,n=t.map(function(t){return{index:t,value:i._getRowData()[t]}});return null!=e&&n.sort(this._getSortComparator(e)),n.map(function(t){return t.index})},e.prototype._getSortComparator=function(t){var e=this;return function(i,n){var s,r,a,o,h,u,l=null!=e.options?e.options[e._SORTCOMPARATORS]:null;for(s=0;s<t.length;s++)if(r=t[s][e._DIRECTION],a=t[s][e._ATTRIBUTE],o=null,null!=l&&(o=l[e._COMPARATORS].get(a)),h=e._getVal(i.value,a),u=e._getVal(n.value,a),null!=o){var _="descending"==r?-1:1,f=o(h,u)*_;if(0!=f)return f}else{var c=0,p="string"==typeof h?h:new String(h).toString(),d="string"==typeof u?u:new String(u).toString();if(0!=(c="ascending"==r?p.localeCompare(d,void 0,{numeric:!0,sensitivity:"base"}):d.localeCompare(p,void 0,{numeric:!0,sensitivity:"base"})))return c}return 0}},e.prototype._mergeSortCriteria=function(t){var e=null!=this.options?this.options[this._IMPLICITSORT]:null;if(null!=e){if(null==t)return e;var i=t.slice(0),n=void 0,s=void 0,r=void 0;for(n=0;n<e.length;n++){for(r=!1,s=0;s<i.length;s++)i[s][this._ATTRIBUTE]==e[n][this._ATTRIBUTE]&&(r=!0);r||i.push(e[n])}return i}return t},e.prototype._filterRowAttributes=function(t,e){var i=this,n=null;if(Array.isArray(t)){n={};var s,r=!1;t.forEach(function(t){t!=i._ATDEFAULT&&t.name!=i._ATDEFAULT||(r=!0)}),Object.keys(e).forEach(function(a){if(r){var o=!1,h=a,u=void 0;for(s=0;s<t.length;s++)if((u=t[s]instanceof Object?t[s].name:t[s]).startsWith("!")){if((u=u.substr(1,u.length-1))==a){o=!0;break}}else if(u==a){h=t[s];break}o||(n[a]=i._filterRowAttributes(h,e))}else t.forEach(function(t){var s;(s=t instanceof Object?t.name:t).startsWith("!")||s!=a||(n[s]=i._filterRowAttributes(t,e))})})}else if(t instanceof Object){var a=t.name,o=t.attributes;a&&!a.startsWith("!")&&(e[a]instanceof Object&&!Array.isArray(e[a])?n=i._filterRowAttributes(o,e[a]):Array.isArray(e[a])?(n=[],e[a].forEach(function(t,e){n[e]=i._filterRowAttributes(o,t)})):n=e[a])}else n=e[t];return n},e}();return t.ArrayDataProvider=n,t.EventTargetMixin.applyMixin(n),n});