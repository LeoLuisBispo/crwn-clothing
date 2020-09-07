"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectCollectionsForPreview = exports.selectCollection = exports.selectCollections = void 0;

var _reselect = require("reselect");

var selectShop = function selectShop(state) {
  return state.shop;
};

var selectCollections = (0, _reselect.createSelector)([selectShop], function (shop) {
  return shop.collections;
});
exports.selectCollections = selectCollections;

var selectCollection = function selectCollection(collectionUrlParam) {
  return (0, _reselect.createSelector)([selectCollections], function (collections) {
    return collections[collectionUrlParam];
  });
};

exports.selectCollection = selectCollection;
var selectCollectionsForPreview = (0, _reselect.createSelector)([selectCollections], function (collections) {
  return Object.keys(collections).map(function (key) {
    return collections[key];
  });
});
exports.selectCollectionsForPreview = selectCollectionsForPreview;