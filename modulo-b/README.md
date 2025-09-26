# 🎯 Módulo B – Desarrollo Backend

[🔙 Volver al inicio](../README.md)

[📄 Ver prueba](./PROYECTO%20PRUEBA_MODULO_B_HABILIDAD_17.pdf)

El segundo día de competencia estuvo dedicado al **Módulo B – Desarrollo Backend**, una prueba centrada en evaluar la capacidad de los participantes para construir aplicaciones web completas con enfoque full-stack. El reto principal consistió en desarrollar una plataforma web relacionada con la **Copa América Femenina**, en la cual se debía gestionar la información de los países, sus resultados, posiciones, así como permitir el registro tanto de países como de partidos. Esta aplicación debía estar **adaptada para dispositivos móviles** y cumplir con criterios de funcionalidad, rendimiento, usabilidad y presentación técnica.

Durante las **4 horas establecidas** para completar este módulo, logré convertirme en el **único competidor que completó la totalidad del desarrollo solicitado**. Este resultado no solo implicó la construcción de toda la lógica backend con Laravel y su respectiva API RESTful, sino también la integración de una interfaz desarrollada con React, completamente funcional, moderna y responsiva. Además del desarrollo técnico, la evaluación incluía un **pitch de presentación del proyecto**, en el cual también obtuve una calificación destacada.

Gracias a la implementación efectiva de cada componente, desde la autenticación de usuarios hasta la gestión de relaciones entre entidades y el diseño de la experiencia de usuario, obtuve una calificación final de **91 puntos sobre 100 posibles**, consolidando un resultado sobresaliente y reafirmando el dominio técnico en el entorno full-stack.

[Ver detalles solución entregada](./proyecto/README.md)

---

## 🎯 Componentes Evaluados

La evaluación del Módulo B se centró principalmente en la **fidelidad con los requerimientos del documento oficial**, exigiendo que la aplicación implementara de manera precisa todas las vistas y funcionalidades descritas en el PDF entregado. Para esto, se evaluó que cada interfaz solicitada estuviera correctamente desarrollada, que los datos se consumieran directamente desde una **API construida en PHP (Laravel)** y que la aplicación fuera completamente **responsiva**, adaptándose a dispositivos móviles sin comprometer la usabilidad.

Además, se valoró que cada acción descrita en el documento —como el registro, visualización, edición y gestión de los países y partidos— se ejecutara correctamente en la plataforma final, con flujos funcionales completos y una experiencia de usuario coherente. La integración efectiva entre el frontend y el backend, el cumplimiento visual y técnico de los lineamientos, y la estabilidad general del sistema fueron aspectos clave dentro de esta etapa de evaluación.

---

## 🚀 Tecnologías Utilizadas

### Backend

-   **Laravel 12.0**: Framework PHP moderno
-   **PHP 8.2**: Lenguaje de programación backend
-   **MySQL**: Base de datos relacional
-   **Eloquent ORM**: Mapeo objeto-relacional
-   **Artisan CLI**: Herramientas de desarrollo

### Frontend

-   **React 19**: Biblioteca de componentes
-   **Vite**: Build tool moderno
-   **JSX**: Sintaxis de componentes
-   **CSS3**: Estilos modernos
-   **Responsive Design**: Diseño adaptativo
-   **TailwindCSS v4**: Diseño adaptativo

### Herramientas de Desarrollo

-   **Composer**: Gestión de dependencias PHP
-   **npm**: Gestión de dependencias JavaScript
-   **Git**: Control de versiones
-   **Artisan**: CLI de Laravel

---

## 📁 Estructura del Proyecto

```
dia-02/
├── PROYECTO PRUEBA_MODULO_B_HABILIDAD_17.pdf   # Documento oficial con requerimientos
├── proyecto/                                   # Aplicación Laravel completa
│   ├── app/
│   │   ├── Http/Controllers/                   # Controladores de la API
│   │   └── Models/                             # Modelos Eloquent
│   ├── database/
│   │   ├── migrations/                         # Migraciones de base de datos
│   │   ├── seeders/                            # Datos de prueba
│   │   └── factories/                          # Factories para datos
│   ├── resources/
│   │   ├── js/                                 # Web React
│   │   └── views/                              # Punto de entrada para react
│   ├── routes/
│   │   ├── api.php                             # Rutas de la API
│   │   └── web.php                             # Rutas web
│   └── public/
│       └── recursos/                           # Recursos dados para el desarrollo de la prueba
│           ├── banderas/                       # Imágenes de banderas
│           ├── iconos/                         # Iconos SVG/PNG
│           └── estilos.json                    # Configuración de estilos
└── recursos/                                   # Recursos adicionales
    ├── banderas/                               # Imágenes de banderas
    ├── iconos/                                 # Iconos del sistema
    └── estilos.json                            # Configuración de colores
```
