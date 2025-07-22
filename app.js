// Datos de tareas y subtareas
const tasks = [
  {
    id: 1,
    title: "Configurar repositorios de respaldo en disco",
    steps: [
      {
        id: "1.1",
        description: "Abre la consola de Veeam Backup & Replication.",
        additionalInfo:
          "Asegúrate de tener acceso administrativo a la consola de Veeam y que todos los componentes necesarios estén instalados.",
        completed: false,
      },
      {
        id: "1.2",
        description: "Navega a 'Backup Infrastructure' > 'Backup Repositories'.",
        additionalInfo:
          "Verifica que no existan repositorios previamente configurados que puedan ser reutilizados para evitar duplicidad.",
        completed: false,
      },
      {
        id: "1.3",
        description: "Haz clic en 'Add Repository' para crear un nuevo repositorio.",
        additionalInfo:
          "Selecciona el tipo de repositorio adecuado según tus necesidades (local, NAS o SAN).",
        completed: false,
      },
      {
        id: "1.4",
        description: "Selecciona el tipo de repositorio (ej., Disco Local o NAS).",
        additionalInfo:
          "Si seleccionas NAS, asegúrate de que el servidor esté correctamente montado y accesible desde el servidor de Veeam.",
        completed: false,
      },
      {
        id: "1.5",
        description: "Configura la ruta del repositorio y asigna un nombre descriptivo.",
        additionalInfo:
          "Usa nombres claros que indiquen el propósito del repositorio (ej., 'Repo_Disco_Principal').",
        completed: false,
      },
      {
        id: "1.6",
        description:
          "Habilita opciones avanzadas como compresión y deduplicación para optimizar el almacenamiento.",
        additionalInfo:
          "La compresión puede aumentar el uso de CPU, así que asegúrate de que el servidor tenga suficiente capacidad.",
        completed: false,
      },
      {
        id: "1.7",
        description: "Guarda la configuración y verifica que el repositorio esté listo para usarse.",
        additionalInfo:
          "Realiza una prueba de conexión al repositorio para asegurarte de que esté funcionando correctamente.",
        completed: false,
      },
    ],
  },
  {
    id: 2,
    title: "Crear Media Pool para rotación semanal (4 semanas)",
    steps: [
      {
        id: "2.1",
        description: "Ve a 'Backup Infrastructure' > 'Tape Infrastructure' > 'Media Pools'.",
        additionalInfo:
          "Asegúrate de que las bibliotecas de cintas estén correctamente configuradas antes de crear el Media Pool.",
        completed: false,
      },
      {
        id: "2.2",
        description: "Haz clic en 'Add Media Pool' y asigna un nombre (ej., 'Semanal_4Semanas').",
        additionalInfo:
          "Usa nombres que reflejen claramente la política de retención (ej., 'Semanal_4Semanas').",
        completed: false,
      },
      {
        id: "2.3",
        description: "Configura la política de retención a 4 semanas.",
        additionalInfo:
          "Considera ajustar la política de retención según los requisitos de cumplimiento de tu organización.",
        completed: false,
      },
      {
        id: "2.4",
        description: "Habilita la opción de etiquetado automático con un prefijo claro (ej., 'Semana_').",
        additionalInfo:
          "El etiquetado facilita la identificación visual de las cintas durante la rotación.",
        completed: false,
      },
      {
        id: "2.5",
        description: "Asegúrate de habilitar cifrado si es necesario para cumplir con políticas de seguridad.",
        additionalInfo:
          "El cifrado protege los datos en caso de que las cintas sean robadas o accedidas sin autorización.",
        completed: false,
      },
      {
        id: "2.6",
        description: "Guarda el Media Pool y verifica su creación.",
        additionalInfo:
          "Realiza una prueba de asociación del Media Pool con un job para asegurarte de que funcione correctamente.",
        completed: false,
      },
    ],
  },
  {
    id: 3,
    title: "Crear Media Pool para rotación anual (60 semanas)",
    steps: [
      {
        id: "3.1",
        description: "Ve a 'Backup Infrastructure' > 'Tape Infrastructure' > 'Media Pools'.",
        additionalInfo:
          "Verifica que las cintas disponibles sean suficientes para cubrir la retención de 60 semanas.",
        completed: false,
      },
      {
        id: "3.2",
        description: "Haz clic en 'Add Media Pool' y asigna un nombre (ej., 'Anual_60Semanas').",
        additionalInfo:
          "Usa un nombre que refleje claramente la duración de la retención (ej., 'Anual_60Semanas').",
        completed: false,
      },
      {
        id: "3.3",
        description: "Configura la política de retención a 60 semanas.",
        additionalInfo:
          "Asegúrate de que la política de retención cumpla con los requisitos regulatorios de tu industria.",
        completed: false,
      },
      {
        id: "3.4",
        description: "Habilita la opción de etiquetado automático con un prefijo claro (ej., 'Anual_').",
        additionalInfo:
          "El etiquetado ayuda a identificar rápidamente las cintas destinadas a respaldos anuales.",
        completed: false,
      },
      {
        id: "3.5",
        description: "Asegúrate de habilitar cifrado para cumplir con políticas de seguridad.",
        additionalInfo:
          "El cifrado es especialmente importante para respaldos de largo plazo que pueden almacenarse fuera del sitio.",
        completed: false,
      },
      {
        id: "3.6",
        description: "Habilita inmutabilidad para proteger los datos contra ransomware.",
        additionalInfo:
          "La inmutabilidad garantiza que los datos no puedan ser modificados o eliminados durante el período de retención.",
        completed: false,
      },
      {
        id: "3.7",
        description: "Guarda el Media Pool y verifica su creación.",
        additionalInfo:
          "Prueba la asociación del Media Pool con un job para validar que los datos se escriban correctamente en las cintas.",
        completed: false,
      },
    ],
  },
  {
    id: 4,
    title: "Crear un job de respaldo de máquinas virtuales (VM)",
    steps: [
      {
        id: "4.1",
        description: "Abre la consola de Veeam Backup & Replication.",
        additionalInfo:
          "Asegúrate de tener acceso administrativo a la consola y que las VMs estén correctamente registradas en Veeam.",
        completed: false,
      },
      {
        id: "4.2",
        description: "Ve a 'Home' > 'Backup Job' > 'Virtual Machine'.",
        additionalInfo:
          "Selecciona el tipo de job adecuado según tu entorno virtual (VMware, Hyper-V, etc.).",
        completed: false,
      },
      {
        id: "4.3",
        description: "Asigna un nombre descriptivo al job (ej., 'Backup_VM_Semanal').",
        additionalInfo:
          "Usa nombres claros que indiquen la frecuencia y propósito del job.",
        completed: false,
      },
      {
        id: "4.4",
        description: "Selecciona las máquinas virtuales que deseas respaldar.",
        additionalInfo:
          "Puedes usar filtros o grupos para seleccionar múltiples VMs de manera eficiente.",
        completed: false,
      },
      {
        id: "4.5",
        description: "Configura el repositorio de destino para los respaldos.",
        additionalInfo:
          "Elige un repositorio optimizado para almacenar grandes volúmenes de datos.",
        completed: false,
      },
      {
        id: "4.6",
        description: "Define la política de retención (ej., 4 semanas).",
        additionalInfo:
          "Ajusta la retención según los requisitos de cumplimiento de tu organización.",
        completed: false,
      },
      {
        id: "4.7",
        description: "Programa el job para ejecutarse automáticamente (ej., diariamente a las 10 PM).",
        additionalInfo:
          "Considera programar el job durante horas de baja actividad para minimizar el impacto en el rendimiento.",
        completed: false,
      },
      {
        id: "4.8",
        description: "Guarda y prueba el job para asegurarte de que funcione correctamente.",
        additionalInfo:
          "Realiza una restauración de prueba para validar que los datos se respaldan correctamente.",
        completed: false,
      },
    ],
  },
  {
    id: 5,
    title: "Crear un job de respaldo con agente",
    steps: [
      {
        id: "5.1",
        description: "Abre la consola de Veeam Backup & Replication.",
        additionalInfo:
          "Asegúrate de que los agentes estén instalados y registrados en Veeam.",
        completed: false,
      },
      {
        id: "5.2",
        description: "Ve a 'Home' > 'Backup Job' > 'File Level Backup'.",
        additionalInfo:
          "Selecciona esta opción si necesitas respaldar archivos específicos en servidores físicos o máquinas sin hipervisor.",
        completed: false,
      },
      {
        id: "5.3",
        description: "Asigna un nombre descriptivo al job (ej., 'Backup_Agente_Diario').",
        additionalInfo:
          "Usa nombres que reflejen claramente el propósito del job.",
        completed: false,
      },
      {
        id: "5.4",
        description: "Selecciona los agentes y las carpetas/archivos que deseas respaldar.",
        additionalInfo:
          "Puedes usar filtros para excluir archivos temporales o innecesarios.",
        completed: false,
      },
      {
        id: "5.5",
        description: "Configura el repositorio de destino para los respaldos.",
        additionalInfo:
          "Elige un repositorio con suficiente espacio para almacenar los datos.",
        completed: false,
      },
      {
        id: "5.6",
        description: "Define la política de retención (ej., 1 mes).",
        additionalInfo:
          "Ajusta la retención según los requisitos de tu organización.",
        completed: false,
      },
      {
        id: "5.7",
        description: "Programa el job para ejecutarse automáticamente (ej., semanalmente).",
        additionalInfo:
          "Considera programar el job durante horas de baja actividad para minimizar el impacto en el rendimiento.",
        completed: false,
      },
      {
        id: "5.8",
        description: "Guarda y prueba el job para asegurarte de que funcione correctamente.",
        additionalInfo:
          "Realiza una restauración de prueba para validar que los datos se respaldan correctamente.",
        completed: false,
      },
    ],
  },
  {
    id: 6,
    title: "Duplicar una cinta",
    steps: [
      {
        id: "6.1",
        description: "Abre la consola de Veeam Backup & Replication.",
        additionalInfo:
          "Asegúrate de tener acceso a las bibliotecas de cintas configuradas.",
        completed: false,
      },
      {
        id: "6.2",
        description: "Ve a 'Home' > 'Tape Job' > 'Tape to Tape'.",
        additionalInfo:
          "Este tipo de job permite copiar datos entre cintas para fines de replicación o almacenamiento adicional.",
        completed: false,
      },
      {
        id: "6.3",
        description: "Asigna un nombre descriptivo al job (ej., 'Duplicar_Cinta_Mensual').",
        additionalInfo:
          "Usa nombres que indiquen claramente el propósito del job.",
        completed: false,
      },
      {
        id: "6.4",
        description: "Selecciona la cinta fuente que deseas duplicar.",
        additionalInfo:
          "Verifica que la cinta fuente contenga los datos que necesitas copiar.",
        completed: false,
      },
      {
        id: "6.5",
        description: "Selecciona la cinta de destino para la duplicación.",
        additionalInfo:
          "Asegúrate de que la cinta de destino tenga suficiente espacio disponible.",
        completed: false,
      },
      {
        id: "6.6",
        description: "Configura opciones avanzadas como cifrado y compresión.",
        additionalInfo:
          "El cifrado es útil para proteger los datos en caso de pérdida de la cinta.",
        completed: false,
      },
      {
        id: "6.7",
        description: "Programa el job para ejecutarse automáticamente (ej., mensualmente).",
        additionalInfo:
          "Considera programar el job durante horas de baja actividad para evitar interrupciones.",
        completed: false,
      },
      {
        id: "6.8",
        description: "Guarda y prueba el job para asegurarte de que funcione correctamente.",
        additionalInfo:
          "Verifica que los datos se hayan copiado correctamente a la cinta de destino.",
        completed: false,
      },
    ],
  },
];

// Función para renderizar las tareas
function renderTasks() {
  const taskList = document.getElementById("task-list");

  // Limpiar el contenedor de tareas
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    // Crear el elemento de tarea
    const taskItem = document.createElement("li");
    taskItem.className = "list-group-item";

    // Encabezado de la tarea
    const taskHeader = document.createElement("div");
    taskHeader.className = "d-flex justify-content-between align-items-center mb-2";

    const taskTitle = document.createElement("h5");
    taskTitle.textContent = task.title;

    const taskStatus = document.createElement("span");
    taskStatus.className = `badge ${
      task.steps.every((step) => step.completed) ? "bg-success" : "bg-secondary"
    }`;
    taskStatus.textContent = task.steps.every((step) => step.completed)
      ? "Completada"
      : "Pendiente";

    taskHeader.appendChild(taskTitle);
    taskHeader.appendChild(taskStatus);

    // Lista de subtareas
    const subtaskList = document.createElement("ul");
    subtaskList.className = "list-unstyled";

    task.steps.forEach((step) => {
      const subtaskItem = document.createElement("li");
      subtaskItem.className = "subtask-item d-flex align-items-center";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = step.completed;
      checkbox.addEventListener("change", () => {
        step.completed = !step.completed;
        renderTasks(); // Actualizar la vista
      });

      const description = document.createElement("span");
      description.className = `ms-2 ${step.completed ? "subtask-completed" : ""}`;
      description.textContent = step.description;

      subtaskItem.appendChild(checkbox);
      subtaskItem.appendChild(description);

      // Información adicional
      const info = document.createElement("small");
      info.className = "d-block text-muted ms-4";
      info.textContent = step.additionalInfo;

      subtaskItem.appendChild(info);
      subtaskList.appendChild(subtaskItem);
    });

    // Agregar elementos al contenedor de tarea
    taskItem.appendChild(taskHeader);
    taskItem.appendChild(subtaskList);

    // Agregar tarea al DOM
    taskList.appendChild(taskItem);
  });
}

// Renderizar las tareas al cargar la página
document.addEventListener("DOMContentLoaded", renderTasks);