import { generateId } from "../utils/GenerateId.js";




export class Note {
  constructor(data) {
    console.log('📝 is here!');
    this.id = generateId();
    this.title = data.title;
    this.color = data.color;
    this.body = data.body || 'Start jotting your thoughts here';
    this.createdAt = data.createdAt == undefined ? new Date() : new Date(data.createdAt)
    this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date()
  }

  get createdAtDateFormat() {
    return this.createdAt.toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric', hour: "numeric", minute: 'numeric' })
  }

  get updatedAtDateFormat() {
    return this.updatedAt.toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric', month: 'long', day: '2-digit', year: 'numeric', second: 'numeric' })
  }

  get ListTemplate() {
    return `
    <div role="button" onclick="app.NoteController.setActiveNote('${this.id}')" class="selectable-primary" title="Click to open Thought ${this.title}">
        <p class="fs-3 fw-bold">${this.title}</p>
        <p class="fs-5">${this.body}</p>
        <p class="fs-7">${this.createdAtDateFormat}</p>
        <p class="fs-7">${this.updatedAtDateFormat}</p>
    </div>
    `
  }

  get activeNoteTemplate() {
    return `
      <form id="active-form" class="row">
      <h1>${this.title}</h1>
      <div style="height: 64px; background-color: ${this.color}; border-radius: 4px 4px 0 0;"></div>
        <div>${this.createdAtDateFormat}</div>
        <div>${this.updatedAtDateFormat}</div>

        <textarea name="body" class="col-12 form-control" rows="24">${this.body}</textarea>

        <div class="d-flex justify-content-end my-2 gap-2">
          <button type="button" onclick="app.NoteController.confirmNoteDelete('${this.id}')" class="btn btn-danger">Delete</button>
          <button type="button" onclick="app.NoteController.saveActiveNote()" class="btn btn-teal">Save</button>
        </div>
      </form>
    `
  }
}