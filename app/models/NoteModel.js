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

}