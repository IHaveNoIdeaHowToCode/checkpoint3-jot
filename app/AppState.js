import { Note } from './models/NoteModel.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'


class ObservableAppState extends EventEmitter {

  // /**@type {import('./models/Example.js').Example[]} */
  // examples = []

  activeNote = null

  Notes = [
    new Note({ title: 'Grocery List', body: 'Eggs, Milk, Bread', color: '#FFD700' }),
    new Note({ title: 'Homework', body: 'Finish math assignment', color: '#90EE90' }),
    new Note({ title: 'Ideas', body: 'Start a blog about coding', color: '#ADD8E6' })
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())