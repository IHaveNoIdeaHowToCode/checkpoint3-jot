import { AppState } from "../AppState.js";
import { Note } from "../models/NoteModel.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";


export class NoteController {
  constructor() {
    console.log("Notes Controller is here!");
    console.table(AppState.Notes)
    // AppState.on('Notes', this.drawNotesList)
    this.drawNotesList()
  }

  drawNotesList() {
    const Notes = AppState.Notes
    let noteContent = ''
    Notes.forEach(Note => noteContent += Note.ListTemplate)
    setHTML('note-list', noteContent)
  }
}