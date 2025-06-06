import { generateId } from "../utils/GenerateId.js";




export class Note {
  constructor(data) {
    console.log('📝 is here!');

    this.id = generateId();
    this.title = data.title;
    this.color = data.color;
    this.body = data.body;
    this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date()
    this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date()
  }

  get createdAtShortFormat() {
    return this.createdAt.toLocaleDateString()
  }

  get ListTemplate() {
    return `
    <div role="button" onclick="app.NoteController.setActiveNote('${this.id})" class="fs-5 fw-bold selectable-primary" title="Click to open Thought ${this.title}">
      <p>${this.title}</p>
      <p>${this.body}</p>
      <p>${this.createdAt}</p>
      <p>${this.updatedAt}</p>
    </div>
    `
  }

}