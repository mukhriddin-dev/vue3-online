<template>
  <header class="bg-green-600 p-2">
    <div class="container">
      <h4 class="text-center text-white">TO DO APP</h4>
    </div>
  </header>
  <main>
    <section>
      <div class="container">
        <form @submit.prevent="addTask" action="#" class="w-[400px] mx-auto p-5 mt-12 bg-slate-300 rounded-xl">
          <label for="task-title" class="mb-4 block">
            <p>Enter task title</p>
            <input v-model="taskTitle" class="h-8 w-full mt-1 rounded-xl px-2" type="text"
              placeholder="Enter task title" id="task-title" />
          </label>

          <label for="task-deadlien" class="mb-4 block">
            <p>Enter task deadline</p>
            <input v-model="taskDeadlien" class="h-8 w-full mt-1 rounded-xl px-2" type="date"
              placeholder="Enter task deadline" id="task-deadlien" />
          </label>

          <button type="submit" class="bg-green-700 focus:bg-green-500 rounded-3xl px-3 py-2 text-white">
            Add Task
          </button>
        </form>

        <div v-if="!tasks.length" class="mx-auto w-[400px] p-2 rounded-xl my-4 bg-slate-300 text-center">
          <p>Not found tasks!</p>
        </div>

        <ul v-else class="mx-auto bg-slate-200 w-[400px] p-2 rounded-xl my-4">
          <li v-for="(el, ind) in tasks" class="relative bg-white mb-2 p-3 rounded-xl">
            <strong class="absolute top-0 text-xs">#{{ ind + 1 }}</strong>

            <p v-if="el.completed" class="mt-2 block text-xs mb-3 line-through">
              {{ el.title }}
            </p>
            <p v-else class="mt-2 block text-xs mb-3">{{ el.title }}</p>

            <button @click="deleteTask(el.id)" class="bg-red-500 rounded-xl me-1 text-white focus:bg-red-400 px-4">
              x
            </button>

            <button :disabled="el.completed" @click="taskCompleted(el.id)"
              class="bg-green-500 text-white rounded-xl disabled:bg-green-100 focus:bg-green-400 px-4">
              done
            </button>
          </li>
        </ul>
      </div>
    </section>
  </main>
  <footer class="bg-green-600 text-white text-center p-2">
    <p>{{ new Date().getFullYear() }}</p>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const tasks = ref([]);
const taskTitle = ref("");
const taskDeadlien = ref("");

const addTask = () => {
  if (taskDeadlien.value.length && taskTitle.value.trim().length) {
    const newTask = {
      id: uuidv4(),
      created_at: Date.now(),
      title: taskTitle.value,
      deadline: taskDeadlien.value,
      completed: false,
    };

    tasks.value.push(newTask);
    taskTitle.value = "";
    taskDeadlien.value = "";
    toast.success("Task added successfully!", {
      autoClose: 1000,
    });
  } else {
    alert("Please enter task title and deadline");
    toast.error("Task title and deadline are required!", {
      autoClose: 1000,
    });
  }
};

const deleteTask = (id) => {
  tasks.value = tasks.value.filter((item) => item.id != id);
  toast.success("Task deleted successfully!", {
    autoClose: 1000,
  });
};

const taskCompleted = (id) => {
  tasks.value.forEach((item) => {
    if (item.id === id) {
      item.completed = true;
    }
  });
  toast.success("Task completed successfully!", {
    autoClose: 1000,
  });
};
</script>
