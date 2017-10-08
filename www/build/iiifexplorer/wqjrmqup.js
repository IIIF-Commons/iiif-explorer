/*! Built with http://stenciljs.com */
iiifexplorer.loadComponents("wqjrmqup",function(e,t,i,r,n){var o=function(){function e(){this._parents=[],this.data=null}return e.prototype.componentWillLoad=function(){var e=this;Manifold.loadManifest({iiifResourceUri:this.manifest,collectionIndex:0,manifestIndex:0,sequenceIndex:0,canvasIndex:0}).then(function(t){var i=t.iiifResource;i.getProperty("within")&&e._followWithin(i).then(function(t){e._parents=t;for(var i=t.pop();i&&!i.isCollection();)i=t.pop();e._switchToFolder(i)}),i.isCollection()?e._switchToFolder(i):e._selected=i}).catch(function(e){console.error(e),console.error("failed to load manifest")})},e.prototype._gotoBreadcrumb=function(e){var t=this._parents.indexOf(e);this._current=this._parents[t],this._parents=this._parents.slice(0,t+1),this._updateState()},e.prototype._sortCollectionsFirst=function(e,t){var i=e.getIIIFResourceType().value,r=t.getIIIFResourceType().value;if(i===r){var n=Manifesto.TranslationCollection.getValue(e.getLabel()),o=Manifesto.TranslationCollection.getValue(t.getLabel());if(n&&o)return n<o?-1:1}return r.indexOf("collection")-i.indexOf("collection")},e.prototype._switchToFolder=function(e){e.isLoaded?(e.members.sort(this._sortCollectionsFirst),this._parents.push(e),this._current=e,this._updateState()):e.load().then(this._switchToFolder.bind(this))},e.prototype._followWithin=function(e){var t=this;return new Promise(function(i,r){var n=e.getProperty("within");Array.isArray(n)&&i([]),Manifesto.Utils.loadResource(n).then(function(r){var n=manifesto.create(r);n.getProperty("within")?t._followWithin(n).then(function(t){t.push(e),i(t)}):i([n,e])}).catch(r)})},e.prototype._updateState=function(){this.data={parents:this._parents,current:this._current,selected:this._selected}},e.prototype.render=function(){var e=this;return this.data?t("div",0,t("div",{c:{breadcrumbs:!0}},this.data.parents.map(function(e){return t("iiif-explorer-breadcrumb",{p:{member:e}})})),t("hr",0),t("div",{c:{items:!0}},this.data.current.members.map(function(i){return t("iiif-explorer-item",{p:{member:i,selected:e._selected===i}})}))):t("span",0,i("loading..."))},e.prototype.itemSelected=function(e){var t=e.detail;t.isCollection()?this._switchToFolder(t):(this._selected=t,this.onSelectManifest.emit(t))},e.prototype.breadcrumbSelected=function(e){var t=e.detail;this._gotoBreadcrumb(t)},e}(),s=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e){!function(){"use strict";function t(){for(var e=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(t.apply(null,n));else if("object"===o)for(var s in n)i.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}var i={}.hasOwnProperty;e.exports?e.exports=t:window.classNames=t}()}),a=function(){function e(){this.selected=!1}return e.prototype.render=function(){var e=this,i=s({selected:this.selected,"explorer-folder":!!this.member.isCollection(),"explorer-resource":!!this.member.isManifest()}),r=s({"explorer-folder-link":!!this.member.isCollection(),"explorer-item-link":!!this.member.isManifest(),"explorer-link":!0});return t("div",{c:i},t("a",{c:r,o:{click:function(){return e._itemSelectedHandler()}},p:{title:this.member.getDefaultLabel()}},this.member.getDefaultLabel()))},e.prototype._itemSelectedHandler=function(){this.onSelectItem.emit(this.member)},e}();e["IIIF-EXPLORER"]=o,e["IIIF-EXPLORER-ITEM"]=a},["IIIF-EXPLORER",[["data",5],["manifest",1]],{},[["onSelectManifest"]]],["IIIF-EXPLORER-ITEM",[["member",1],["selected",1,1]],{},[["onSelectItem"]]]);