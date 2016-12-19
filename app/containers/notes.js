"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Notes = (function () {
    function Notes() {
        this.notes = [{
                title: 'Chores',
                value: 'Don\'t forget to clean up',
                color: 'lightblue'
            }, {
                title: 'Chores',
                value: 'Don\'t forget to clean up',
                color: 'red'
            }, {
                title: 'Chores',
                value: 'Don\'t forget to clean up',
                color: 'yellow'
            }];
    }
    Notes.prototype.onNoteChecked = function (i) {
        this.notes.splice(i, 1);
    };
    Notes.prototype.onCreateNote = function (note) {
        this.notes.push(note);
    };
    Notes = __decorate([
        core_1.Component({
            selector: 'notes-container',
            styles: ["\n    .notes {\n      padding-top: 50px;\n    }\n    .creator {\n      margin-bottom: 40px;\n    }\n  "],
            template: "\n    <div class=\"row center-xs notes\">\n      <div class=\"col-xs-6 creator\">\n        <note-creator\n          (createNote)=\"onCreateNote($event)\">\n        </note-creator>\n      </div>\n      <div class=\"notes col-xs-8\">\n        <div class=\"row between-xs\">\n          <note-card\n            class=\"col-xs-4\"\n            [note]=\"note\"\n            *ngFor=\"let note of notes; let i=index\"\n            (checked)=\"onNoteChecked(i)\"\n          >\n          </note-card>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Notes);
    return Notes;
}());
exports.Notes = Notes;
//# sourceMappingURL=notes.js.map