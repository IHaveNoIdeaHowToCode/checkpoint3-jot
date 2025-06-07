import { AppState } from "../AppState.js";
import { Note } from "../models/NoteModel.js";



class NoteService {



  setActiveNote(NoteId) {
    const selectedNote = AppState.Notes.find((Note) => Note.id === NoteId)
    console.log("This is the selected Note info:", NoteId, selectedNote);
    selectedNote.updatedAt = new Date()
    AppState.activeNote = selectedNote
  }
}

export const noteService = new NoteService()