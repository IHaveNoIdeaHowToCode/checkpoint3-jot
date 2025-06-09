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
    this.saveActiveNote()
  }

  setActiveNote(NoteId) {
    const selectedNote = AppState.Notes.find((Note) => Note.id === NoteId)
    console.log("This is the selected Note info:", NoteId, selectedNote);
    selectedNote.updatedAt = new Date()
    AppState.activeNote = selectedNote
  }

  saveActiveNote(newBody) {
    AppState.activeNote.body = newBody
    this.saveNotes()
  }

  saveNotes() {
    saveState('notes', AppState.Notes)
  }

  loadNotes() {
    const noteListFromLocalStorage = loadState('notes', [Note])
    if (noteListFromLocalStorage.length == 0) {
      AppState.Notes = AppState.Notes
    }
    else {
      AppState.Notes = noteListFromLocalStorage
    }
  }


  deleteNote(noteId) {
    const notes = AppState.Notes
    const noteIndex = notes.findIndex(note => note.id == noteId)
    console.log('Index to remove at is ' + noteIndex);
    notes.splice(noteIndex, 1)
    this.saveNotes()
  }

}

export const noteService = new NoteService()