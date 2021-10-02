import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  id: string;
  content: string;
  completed: boolean;
}

export interface Tasks {
  tasks: Task[];
}

const initialState: Tasks = {
  tasks: [
    {
      id: '1',
      content: 'Todo1',
      completed: true,
    },
    {
      id: '2',
      content: 'Todo2',
      completed: true,
    },
    {
      id: '3',
      content: 'Todo3',
      completed: false,
    },
  ],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    newTask: (state, action: PayloadAction<string>) => {
      console.log(state);

      console.log(action);

      const newTodo = {
        id: nanoid(),
        content: action.payload,
        completed: false,
      };
      console.log(newTodo);

      state.tasks = [...state.tasks, newTodo];
      console.log(state);
    },
    toggleCompleted: (state, action: PayloadAction<Task>) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
  },
});

export const { newTask, toggleCompleted, deleteTask } = taskSlice.actions;

export const selectTasks = (state: any) => state.task.tasks;

export default taskSlice.reducer;
