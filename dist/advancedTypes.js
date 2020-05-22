"use strict";
// -------------------------------------------------- //
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a title as " + item);
}
logDetails(123, 'sapado');
logDetails('123', 'sapado');
// -------------------------------------------------- //
function logInfo(uid, item) {
    console.log("An user with " + uid + " has a name as " + item);
}
logInfo(123, 'Carl');
logInfo('123', 'Self');
function renderStars(star) {
    return star;
}
console.log(renderStars("Sirius"));
