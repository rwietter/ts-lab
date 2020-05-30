"use strict";
/* ---------------- Boolean ----------------- */
/* ------------------------------------------ */
var isOpen;
isOpen = false;
var message;
message = "foo " + isOpen;
/* --- Number ~ int, float, hex, binary ~ --- */
/* ------------------------------------------ */
var total;
total = 0xff0;
/* ------ Array ~ type and structure ~ ------ */
/* ------------------------------------------ */
var items;
items = [1, 2, 3, 4, 5];
var array; // generic
array = [1, 2, 3, 4];
/* ------------------ Tuple ----------------- */
/* ------------------------------------------ */
var title;
title = [1, 'foo'];
/* ------------------ Enum ------------------ */
/* ------------------------------------------ */
var Colors;
(function (Colors) {
    Colors["white"] = "#FFFF";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
/* --------- Any ~ qualquer coisa ~ --------- */
/* ------------------------------------------ */
var random;
random = [1, 'foo', true];
/* ----------------- Void ------------------- */
/* ------------------------------------------ */
function logger() {
    console.log('foo');
}
/* ----------------- Never ------------------ */
/* ------------------------------------------ */
function error() {
    throw new Error('error');
}
/* ----------------- Object ----------------- */
/* ------------------------------------------ */
var cart;
cart = {
    planet: {
        mars: 'red',
        earth: 'blue',
    },
};
