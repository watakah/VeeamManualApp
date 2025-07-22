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
  {
    id: 2,
    title: "Configurar el Job de Respaldo a Disco",
    steps: [
      {
        id: "2.1",
        description: "Abrir la consola de Veeam Backup & Replication.",
        additionalInfo:
          "Accede a la interfaz principal de Veeam para configurar el job de respaldo.",
        completed: false,
      },
      {
        id: "2.2",
        description: "Crear un nuevo job de respaldo.",
        additionalInfo:
          "Selecciona Backup Job > Virtual Machine (o tipo adecuado) y nómbralo Daily_Backup_Disk.",
        completed: false,
      },
      {
        id: "2.3",
        description: "Seleccionar los objetos a respaldar.",
        additionalInfo:
          "Añade máquinas virtuales, servidores físicos o archivos según sea necesario.",
        completed: false,
      },
      {
        id: "2.4",
        description: "Configurar el repositorio de destino.",
        additionalInfo:
          "Elige un repositorio en disco con capacidad suficiente para 7 días de respaldos.",
        completed: false,
      },
      {
        id: "2.5",
        description: "Definir el modo de respaldo y retención.",
        additionalInfo:
          "Usa el modo incremental con synthetic fulls los sábados. Configura la retención a 7 restore points (7 días).",
        completed: false,
      },
      {
        id: "2.6",
        description: "Programar el job.",
        additionalInfo:
          "Ejecuta diariamente a las 10:00 PM. Activa Create synthetic full backups periodically para sábados.",
        completed: false,
      },
      {
        id: "2.7",
        description: "Configurar opciones avanzadas.",
        additionalInfo:
          "Habilita deduplicación, compresión (Medium/High) y cifrado si es necesario. Mantén integridad con health check y excluye swap files y deleted blocks.",
        completed: false,
      },
      {
        id: "2.8",
        description: "Finalizar y probar el job.",
        additionalInfo:
          "Revisa la configuración y haz clic en Finish. Prueba el job manualmente para asegurar su correcto funcionamiento.",
        completed: false,
      },
    ],
  },
  {
    id: 3,
    title: "Configurar la Infraestructura de Cintas con Asignación Automática",
    steps: [
      {
        id: "3.1",
        description: "Añadir la biblioteca de cintas.",
        additionalInfo:
          "Ve a Tape Infrastructure > Libraries. Selecciona Add Tape Device y elige la biblioteca detectada. Ejecuta un Inventory para reconocer cintas con códigos de barras.",
        completed: false,
      },
      {
        id: "3.2",
        description: "Configurar el Free Media Pool.",
        additionalInfo:
          "El Free Media Pool contiene cintas no asignadas o reutilizables. Habilita Automatically detect and assign new media en Libraries > Properties > Options.",
        completed: false,
      },
      {
        id: "3.3",
        description: "Crear Media Pools con asignación automática.",
        additionalInfo:
          "Crea tres Media Pools (semanal, mensual, anual) con retención específica y asignación automática desde el Free Media Pool.",
        completed: false,
      },
      {
        id: "3.4",
        description: "Configurar el servidor de cinta.",
        additionalInfo:
          "Verifica el servidor de cinta en Tape Infrastructure > Tape Servers. Usa controladores OEM para mejor compatibilidad.",
        completed: false,
      },
      {
        id: "3.5",
        description: "Habilitar escaneo automático.",
        additionalInfo:
          "En Libraries > Properties > Options, activa Automatically detect new media. Configura un intervalo de escaneo (por ejemplo, cada 1 hora).",
        completed: false,
      },
    ],
  },
  {
    id: 4,
    title: "Crear Jobs de Duplicación a Cinta",
    steps: [
      {
        id: "4.1",
        description: "Crear un job semanal a cinta.",
        additionalInfo:
          "Ve a Backup & Replication > Tape Jobs > Backup to Tape. Nombra el job Weekly_Tape_Job. Selecciona Daily_Backup_Disk, filtra Full Backups, y usa el Media Pool Weekly_Tape_Pool. Programa para ejecutar cada domingo a las 2:00 AM. Activa Process full backups only. Opcional: Habilita Eject media upon job completion.",
        completed: false,
      },
      {
        id: "4.2",
        description: "Crear un job mensual a cinta.",
        additionalInfo:
          "Nombra el job Monthly_Tape_Job. Usa el Media Pool Monthly_Tape_Pool. Programa para el primer domingo de cada mes a las 3:00 AM. Activa Process full backups only. Opcional: Habilita Eject media.",
        completed: false,
      },
      {
        id: "4.3",
        description: "Crear un job anual a cinta.",
        additionalInfo:
          "Nombra el job Yearly_Tape_Job. Usa el Media Pool Yearly_Tape_Pool. Programa para el primer domingo de enero a las 4:00 AM. Activa Process full backups only. Opcional: Habilita Eject media.",
        completed: false,
      },
    ],
  },
  {
    id: 5,
    title: "Gestión Automática de Cintas",
    steps: [
      {
        id: "5.1",
        description: "Configurar asignación automática.",
        additionalInfo:
          "Los Media Pools toman cintas del Free Media Pool cuando sea necesario.",
        completed: false,
      },
      {
        id: "5.2",
        description: "Configurar reutilización de cintas.",
        additionalInfo:
          "Las cintas regresan al Free Media Pool tras expirar (4 semanas, 12 meses, 5 años).",
        completed: false,
      },
      {
        id: "5.3",
        description: "Insertar cintas en la biblioteca.",
        additionalInfo:
          "Inserta cintas con códigos de barras en la biblioteca; Veeam las detecta automáticamente.",
        completed: false,
      },
      {
        id: "5.4",
        description: "Monitorear el estado de las cintas.",
        additionalInfo:
          "Revisa Tape Infrastructure > Media y History > Tape para verificar el estado.",
        completed: false,
      },
    ],
  },
  {
    id: 6,
    title: "Mejores Prácticas y Optimización",
    steps: [
      {
        id: "6.1",
        description: "Automatización.",
        additionalInfo:
          "Usa cintas con códigos de barras y activa escaneo automático.",
        completed: false,
      },
      {
        id: "6.2",
        description: "Optimizar rendimiento.",
        additionalInfo:
          "Usa un servidor físico, habilita parallel processing, y asegura baja latencia.",
        completed: false,
      },
      {
        id: "6.3",
        description: "Seguridad.",
        additionalInfo:
          "Habilita cifrado y almacena cintas fuera del sitio.",
        completed: false,
      },
      {
        id: "6.4",
        description: "Pruebas.",
        additionalInfo:
          "Realiza restauraciones de prueba y simulaciones de recuperación.",
        completed: false,
      },
      {
        id: "6.5",
        description: "Notificaciones.",
        additionalInfo:
          "Configura alertas en General Options > Notifications.",
        completed: false,
      },
    ],
  },
  {
    id: 7,
    title: "Solución de Problemas",
    steps: [
      {
        id: "7.1",
        description: "Resolver problemas de 'No media available'.",
        additionalInfo:
          "Verifica el Free Media Pool y añade cintas con códigos de barras.",
        completed: false,
      },
      {
        id: "7.2",
        description: "Resolver problemas de cintas no detectadas.",
        additionalInfo:
          "Usa controladores OEM o ejecuta un Inventory manual.",
        completed: false,
      },
      {
        id: "7.3",
        description: "Resolver problemas de rendimiento lento.",
        additionalInfo:
          "Verifica la conexión y habilita parallel processing.",
        completed: false,
      },
      {
        id: "7.4",
        description: "Resolver errores de asignación.",
        additionalInfo:
          "Confirma que Add media automatically esté activado.",
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
      subtaskItem.className = "subtask-item d-flex flex-column"; // Usamos flex-column para apilar elementos

      const checkboxContainer = document.createElement("div");
      checkboxContainer.className = "d-flex align-items-center";

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

      checkboxContainer.appendChild(checkbox);
      checkboxContainer.appendChild(description);

      // Información adicional (abajo de la descripción)
      const info = document.createElement("small");
      info.className = "text-muted ms-4 mt-1 d-block"; // Agregamos margen superior y bloque para separar
      info.textContent = step.additionalInfo;

      // Agregar elementos al contenedor de subtarea
      subtaskItem.appendChild(checkboxContainer);
      subtaskItem.appendChild(info); // Agregamos el texto adicional debajo
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