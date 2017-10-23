/*! Built with http://stenciljs.com */
iiifexplorer.loadComponents("usw9h4vn",function(e,t,i,o,r){var n=function(){function e(){this._parents=[],this.upLevelEnabled=!0,this.data=null}return e.prototype.componentWillLoad=function(){var e=this;manifesto.loadManifest(this.manifest).then(function(t){var i=manifesto.create(t);i.getProperty("within")&&e._followWithin(i).then(function(t){e._parents=t;for(var i=t.pop();i&&!i.isCollection();)i=t.pop();e._switchToFolder(i)}),i.isCollection()?e._switchToFolder(i):e._selected=i}).catch(function(e){console.error(e),console.error("failed to load manifest")})},e.prototype._gotoBreadcrumb=function(e){var t=this._parents.indexOf(e);this._current=this._parents[t],this._parents=this._parents.slice(0,t+1),this._updateState()},e.prototype._sortCollectionsFirst=function(e,t){var i=e.getIIIFResourceType().value,o=t.getIIIFResourceType().value;if(i===o){var r=Manifesto.TranslationCollection.getValue(e.getLabel()),n=Manifesto.TranslationCollection.getValue(t.getLabel());if(r&&n)return r<n?-1:1}return o.indexOf("collection")-i.indexOf("collection")},e.prototype._switchToFolder=function(e){e.isLoaded?(e.members.sort(this._sortCollectionsFirst),this._parents.push(e),this._current=e,this._updateState()):e.load().then(this._switchToFolder.bind(this))},e.prototype._followWithin=function(e){var t=this;return new Promise(function(i,o){var r=e.getProperty("within");Array.isArray(r)&&i([]),Manifesto.Utils.loadResource(r).then(function(o){var r=manifesto.create(o);r.getProperty("within")?t._followWithin(r).then(function(t){t.push(e),i(t)}):i([r,e])}).catch(o)})},e.prototype._updateState=function(){this.data={parents:this._parents,current:this._current,selected:this._selected}},e.prototype.render=function(){var e=this;return this.data?t("div",0,t("div",{c:{breadcrumbs:!0}},this.data.parents.map(function(e){return t("iiif-explorer-breadcrumb",{p:{collection:e}})})),t("hr",0),t("div",{c:{items:!0}},this.data.current.members.map(function(i){return t("iiif-explorer-item",{p:{item:i,selected:e._selected===i}})}))):t("span",0,i("loading..."))},e.prototype.itemSelected=function(e){var t=e.detail;t.isCollection()?(this._switchToFolder(t),this.onSelectCollection.emit(t)):(this._selected=t,this.onSelectManifest.emit(t))},e.prototype.breadcrumbSelected=function(e){var t=e.detail;this._gotoBreadcrumb(t),this.onUpLevel.emit(t)},e}(),l=function(){function e(){}return e.prototype.render=function(){var e=this;return t("div",{c:{"explorer-breadcrumb":!0,"explorer-item":!0}},t("a",{c:{"explorer-breadcrumb-link":!0,"explorer-link":!0},o:{click:function(){return e._breadcrumbSelectedHandler()}},a:{href:"#"},p:{title:this.collection.getDefaultLabel()||"no label"}},this.collection.getDefaultLabel()||"no label"))},e.prototype._breadcrumbSelectedHandler=function(){this.onSelectBreadcrumb.emit(this.collection)},e}(),s=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e){!function(){"use strict";function t(){for(var e=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r))e.push(t.apply(null,r));else if("object"===n)for(var l in r)i.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}var i={}.hasOwnProperty;e.exports?e.exports=t:window.classNames=t}()}),c=function(){function e(){this.selected=!1}return e.prototype.render=function(){var e=this,i=s({selected:this.selected,"explorer-folder":this.item.isCollection(),"explorer-resource":this.item.isManifest()}),o=s({"explorer-folder-link":this.item.isCollection(),"explorer-item-link":this.item.isManifest(),"explorer-link":!0});return t("div",{c:i},t("a",{c:o,o:{click:function(){return e._itemSelectedHandler()}},p:{title:this.item.getDefaultLabel()||"no label"}},this.item.getDefaultLabel()||"no label"))},e.prototype._itemSelectedHandler=function(){this.onSelectItem.emit(this.item)},e}();e["IIIF-EXPLORER"]=n,e["IIIF-EXPLORER-BREADCRUMB"]=l,e["IIIF-EXPLORER-ITEM"]=c},["IIIF-EXPLORER",[["data",5],["manifest",1],["upLevelEnabled",1,1]],{},[["onSelectManifest"],["onSelectCollection"],["onUpLevel"]]],["IIIF-EXPLORER-BREADCRUMB",[["collection",1]],{},[["onSelectBreadcrumb"]]],["IIIF-EXPLORER-ITEM",[["item",1],["selected",1,1]],{},[["onSelectItem"]]]);