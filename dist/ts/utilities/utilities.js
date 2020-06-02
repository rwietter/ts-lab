"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/* Utilities */
/** Readonly: não permite editar o objeto */
var todo = {
    title: 'Vikings',
    decription: 'History series',
    complet: false
};
// todo.complet = false | Cannot assign to 'complet' because it is a read-only property.ts(2540)
console.log(todo);
/* Gerar um novo Todo sem sideeffects */
/* Partial: torna as propriedades de Todo opcionais, mas apenas para o paramêtro */
function updateTodo(todo, fields) {
    return __assign(__assign({}, todo), fields);
}
var newTodo = updateTodo(todo, { complet: true });
console.log(newTodo);
var todoPick = {
    title: 'Star Trek',
    decription: 'scientific serie'
};
console.log(todoPick);
var todoOmit = {
    complet: false
};
console.log(todoOmit);
