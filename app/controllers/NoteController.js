import { AppState } from "../AppState.js";
import { Note } from "../models/NoteModel.js";
import { noteService } from "../services/NoteService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";




export class NoteController {
  constructor() {
    console.log("Notes Controller is here!");
    console.table(AppState.Notes)
    AppState.on('Notes', this.drawNotesList)
    AppState.on('activeNote', this.drawActiveNote)
    this.drawNotesList()
    // noteService.loadNotes()
  }

  drawNotesList() {
    const Notes = AppState.Notes
    let noteContent = ''
    Notes.forEach(Note => noteContent += Note.ListTemplate)
    setHTML('note-list', noteContent)
    let count = Notes.length;
    document.getElementById('note-count').innerText = `Total Thoughts: ${count}`;
  }

  drawActiveNote() {
    console.log("Drawing Active Note!");
    const activeNote = AppState.activeNote
    setHTML('active-note', activeNote.activeNoteTemplate)
  }

  setActiveNote(NoteId) {
    console.log("Setting active Note", NoteId);
    noteService.setActiveNote(NoteId)
    this.drawActiveNote()
  }

  createNewNote() {
    event.preventDefault()
    const form = event.target
    console.log('🎯', form);
    const FormData = getFormData(form)
    console.log('creating Note', FormData);
    noteService.createNote(FormData)
    // this.drawNotesList()
  }

  saveActiveNote() {
    console.log('This is a saved ActiveNote!');
    const form = document.getElementById('active-note')
    const formData = getFormData(form)
    console.log('Saved', formData);
    noteService.saveActiveNote(formData.body)
  }

  // drawActiveNote() {

  // }


}