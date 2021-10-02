class Todo {
  text: string;
  id: number;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = Math.floor(Math.random() * 100);
  }
}

export default Todo;