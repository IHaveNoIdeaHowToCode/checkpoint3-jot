import { ExampleController } from './controllers/ExampleController.js'; import { NoteController } from './controllers/NoteController.js';




class App {

  // ExampleController = new ExampleController() // ☑️ you can remove this - example only


  NoteController = new NoteController()
}

window['app'] = new App()


