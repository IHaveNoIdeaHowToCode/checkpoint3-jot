import { AppState } from "../AppState.js";
import { Note } from "../models/NoteModel.js";



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
}

export const noteService = new NoteService()