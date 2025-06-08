import { generateId } from "../utils/GenerateId.js";




export class Note {
  constructor(data) {
    console.log('📝 is here!');

    this.id = generateId();
    this.title = data.title;
    this.color = data.color;
    this.body = data.body || 'Start jotting your thoughts here';
    this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date()
    this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date()
  }

  get createdAtShortFormat() {
    return this.createdAt.toLocaleDateString()
  }

  get ListTemplate() {
    return `
    <div role="button" onclick="app.NoteController.setActiveNote('${this.id}')" class="selectable-primary" title="Click to open Thought ${this.title}">
        <p class="fs-3 fw-bold">${this.title}</p>
        <p class="fs-5">${this.body}</p>
        <p class="fs-7">${this.createdAt}</p>
        <p class="fs-7">${this.updatedAt}</p>
    </div>
    `
  }

  get activeNoteTemplate() {
    return `
    <form id="active-form" class="row">
      <h1>${this.title}</h1>
      <div>${this.createdAt}</div>
      <div>${this.updatedAt}</div>

      <textarea name="body" class="col-12 form-control" rows="24">${this.body}</textarea>

      <div class="d-flex justify-content-end my-2 gap-2">
          <button type="button" class="btn btn-danger">Delete</button>
          <button type="button"  class="btn btn-teal">Save</button>
        </div>
    </form>
    `
  }
}