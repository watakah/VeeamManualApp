// Datos de tareas y subtareas
const tasks = [
  {
    id: 1,
    title: "Prerrequisitos",
    steps: [
      {
        id: "1.1",
        description: "Verificar la infraestructura necesaria.",
        additionalInfo:
          "Biblioteca de cintas compatible (LTO-6 o superior), servidor de cinta físico (Fibre Channel o SAS), sistema operativo moderno (Windows Server 2019/2022), base de datos (SQL Server o PostgreSQL) para grandes volúmenes, repositorio de disco con capacidad para 7 días de respaldos.",
        completed: false,
      },
      {
        id: "1.2",
        description: "Preparar las cintas necesarias.",
        additionalInfo:
          "Cintas con códigos de barras para automatización, suficientes cintas para los Media Pools y el Free Media Pool, espacio seguro para almacenamiento fuera del sitio (regla 3-2-1).",
        completed: false,
      },
      {
        id: "1.3",
        description: "Verificar licencias.",
        additionalInfo:
          "Licencia de Veeam con soporte para cintas (edición Enterprise o superior).",
        completed: false,
      },
      {
        id: "1.4",
        description: "Configurar la biblioteca de cintas inicialmente.",
        additionalInfo:
          "Asegúrate de que la biblioteca de cintas esté detectada en el Administrador de Dispositivos. Configura el servidor de cinta en Tape Infrastructure > Add Tape Server.",
        completed: false,
      },
    ],
  },
  // ... (resto de las tareas)
];

// Función para calcular el porcentaje de tareas completadas
function calculateCompletionPercentage() {
  let totalSubtasks = 0;
  let completedSubtasks = 0;

  tasks.forEach((task) => {
    task.steps.forEach((step) => {
      totalSubtasks++;
      if (step.completed) {
        completedSubtasks++;
      }
    });
  });

  return totalSubtasks === 0 ? 0 : ((completedSubtasks / totalSubtasks) * 100).toFixed(2);
}

// Función para renderizar el porcentaje de tareas completadas
function renderCompletionPercentage() {
  const percentage = calculateCompletionPercentage();
  const completionElement = document.getElementById("completion-percentage");

  if (completionElement) {
    completionElement.textContent = `Progreso: ${percentage}% completado`;
  }
}

// Función para renderizar las tareas
function renderTasks() {
  const taskList = document.getElementById("task-list");

  // Limpiar el contenedor de tareas
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    // Crear el bloque de tarea principal
    const taskBlock = document.createElement("div");
    taskBlock.className = "task-block"; // Clase para el bloque de tarea

    // Título de la tarea principal
    const taskTitle = document.createElement("h3");
    taskTitle.className = "task-title";
    taskTitle.textContent = task.title;

    // Lista de subtareas
    const subtaskList = document.createElement("ul");
    subtaskList.className = "subtask-list";

    task.steps.forEach((step) => {
      const subtaskItem = document.createElement("li");
      subtaskItem.className = "subtask-item d-flex flex-column";

      const checkboxContainer = document.createElement("div");
      checkboxContainer.className = "d-flex align-items-center";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = step.completed;
      checkbox.addEventListener("change", () => {
        step.completed = !step.completed;
        renderTasks(); // Actualizar la vista
        renderCompletionPercentage(); // Actualizar el porcentaje
      });

      const description = document.createElement("span");
      description.className = `ms-2 ${step.completed ? "subtask-completed" : ""}`;
      description.textContent = step.description;

      checkboxContainer.appendChild(checkbox);
      checkboxContainer.appendChild(description);

      // Información adicional (abajo de la descripción)
      const info = document.createElement("small");
      info.className = "text-muted ms-4 mt-1 d-block";
      info.textContent = step.additionalInfo;

      // Agregar elementos al contenedor de subtarea
      subtaskItem.appendChild(checkboxContainer);
      subtaskItem.appendChild(info);
      subtaskList.appendChild(subtaskItem);
    });

    // Agregar elementos al bloque de tarea
    taskBlock.appendChild(taskTitle);
    taskBlock.appendChild(subtaskList);

    // Agregar bloque de tarea al DOM
    taskList.appendChild(taskBlock);
  });

  // Renderizar el porcentaje de tareas completadas
  renderCompletionPercentage();
}

// Renderizar las tareas y el porcentaje al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
});