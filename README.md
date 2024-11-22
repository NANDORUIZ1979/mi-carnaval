# Mi Carnaval
## Instalación y Configuración

Este archivo README proporciona instrucciones sobre cómo instalar las dependencias, ejecutar un servidor Angular, y crear componentes, servicios, pipes y otros elementos esenciales en un proyecto Angular.

---

## **1. Prerrequisitos**

Antes de comenzar, asegúrate de tener instalados:

- **Node.js:** [Descargar e instalar Node.js](https://nodejs.org/)
- **Angular CLI:** Instala Angular CLI globalmente ejecutando el siguiente comando:

  ```bash
  npm install -g @angular/cli
  ```

---

## **2. Clonar Desplegar el proyecto**
Clonar el código del repositorio desde la rama stage:

```bash
git clone https://github.com/MaicolAnder/mi-carnaval/tree/stage
```

Cambiar el directorio al proyecto:

```bash
cd mi-carnaval
```

Instalas dependencias si no lo has hecho ya:

```bash
npm install
```

Para desplegar el proyecto, ejecuta el siguiente comando:

```bash
ng serve
```

Este comando iniciará un servidor web en el puerto 4200. Puedes acceder a la aplicación en la dirección `http://localhost:4200/`.

---

## **3. Crear componentes, servicios, pipes y otros elementos esenciales**

Para crear un componente, ejecuta el siguiente comando:

```bash
ng generate component ruta/nombre-del-componente
```

Para crear un servicio, ejecuta el siguiente comando:

```bash
ng generate service ruta/nombre-del-servicio
```

Para crear un pipe, ejecuta el siguiente comando:

```bash
ng generate pipe ruta/nombre-del-pipe
```

## **3. APIS AWS y Servicios**

### **3 Analisis carnaval**

- https://y1tomtyldh.execute-api.us-east-1.amazonaws.com/analisis/pasto

---

## For P4S Elimininatoria hackaton
