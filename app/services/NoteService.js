import { AppState } from "../AppState.js";
import { Note } from "../models/NoteModel.js";
import { loadState, saveState } from "../utils/Store.js";





class NoteService {


  createNote(FormData) {
    console.log('Service has grabbed', FormData);
    const newNote = new Note(FormData)
    AppState.Notes.push(newNote)
    console.log('📝', AppState.Notes);
    AppState.activeNote = newNote
  }



  setActiveNote(NoteId) {
    const selectedNote = AppState.Notes.find((Note) => Note.id === NoteId)
    console.log("This is the selected Note info:", NoteId, selectedNote);
    selectedNote.updatedAt = new Date()
    AppState.activeNote = selectedNote
  }

  saveActiveNote(newBody) {
    AppState.activeNote.body = newBody
    this.saveActiveNote(`note`)
  }

  saveActiveNote() {
    saveState('notes', AppState.Notes)
  }

  loadNotes() {
    const noteList = loadState('notes', [Note])
    console.log('Loading Notes', noteList);
    AppState.Notes = noteList
  }
}

export const noteService = new NoteService()