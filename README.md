# Blogify - React on Rails Blog Application

Una aplicación de blog desarrollada con **Ruby on Rails 8** y **React**, utilizando **Shakapacker** para la gestión de assets y **Axios** para peticiones HTTP.

## 🚀 Características

- ✅ **Listado de posts** con React
- ✅ **Creación de posts** con formulario React
- ✅ **Validaciones HTML5** nativas
- ✅ **Estilos CSS** modernos y responsivos
- ✅ **Integración Rails + React** con React on Rails
- ✅ **Peticiones HTTP** con Axios
- ✅ **Arquitectura moderna** con bundle único

## 📋 Requisitos (macOS)

- **Ruby** 3.4+ (recomendado usar rbenv)
- **Node.js** 18+ (recomendado usar nvm)
- **PostgreSQL** 14+
- **Git**

## 🛠️ Instalación en macOS

### 1. Instalar dependencias del sistema

```bash
# Instalar Homebrew (si no lo tienes)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Instalar PostgreSQL
brew install postgresql@15
brew services start postgresql@15

# Instalar rbenv para Ruby
brew install rbenv ruby-build
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
source ~/.zshrc

# Instalar nvm para Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.zshrc
```

### 2. Instalar Ruby y Node.js

```bash
# Instalar Ruby 3.4.4
rbenv install 3.4.4
rbenv global 3.4.4

# Instalar Node.js LTS
nvm install --lts
nvm use --lts
```

### 3. Clonar y configurar el proyecto

```bash
# Clonar repositorio
git clone <URL_DEL_REPOSITORIO>
cd Blogify

# Instalar gemas de Ruby
bundle install

# Instalar dependencias de Node.js
npm install
```

### 4. Configurar variables de entorno

```bash
# Copiar archivo de ejemplo
cp .env.example .env

# Editar .env con tus credenciales de PostgreSQL
# Ejemplo de contenido del archivo .env:
```

```env
# Database Configuration
DB_NAME=blogify_development
DB_NAME_TEST=blogify_test
DB_USERNAME=tu_usuario_postgres
DB_PASSWORD=tu_contraseña_postgres
DB_HOST=localhost
DB_PORT=5432

# Rails Environment
RAILS_ENV=development
RAILS_MAX_THREADS=5
```

**⚠️ Importante:** 
- El archivo `.env` NO se sube a GitHub (está en .gitignore)
- Nunca compartas tus credenciales de base de datos
- Cada desarrollador debe crear su propio archivo `.env`

### 5. Configurar base de datos

```bash
# Crear y migrar base de datos
rails db:create
rails db:migrate

```

## 🚀 Ejecutar la aplicación

```bash
# Iniciar servidor de desarrollo (Rails + Webpack)
./bin/dev
```

La aplicación estará disponible en: **http://localhost:3000**

## 📱 Uso de la aplicación

### Rutas principales:

- **`/posts`** - Lista de todos los posts
- **`/posts/new`** - Formulario para crear nuevo post

### Funcionalidades:

1. **Ver posts**: Ir a `/posts` para ver la lista
2. **Crear post**: Usar el botón verde "Crear Nuevo Post" o ir directamente a `/posts/new`
3. **Validaciones**: Los campos tienen validación HTML5 (mínimo 3 caracteres en título, 10 en contenido)
4. **Navegación**: Botones para navegar entre páginas

## 🏗️ Arquitectura Técnica

### Backend (Rails)
- **Ruby on Rails 8** con API JSON
- **PostgreSQL** como base de datos
- **Modelo Post** con validaciones
- **Controlador Posts** con acciones CRUD

### Frontend (React)
- **React 18** con componentes funcionales
- **React on Rails** para integración
- **Axios** para peticiones HTTP
- **CSS Modules** para estilos
- **Shakapacker** para bundling

### Estructura de componentes:
```
app/javascript/Components/
├── PostList.jsx          # Lista de posts
├── PostList.css         # Estilos de lista
├── PostForm.jsx         # Formulario de creación
└── PostForm.css         # Estilos de formulario
```



## 👨‍💻 Desarrollo

Proyecto desarrollado como ejercicio académico utilizando:
- Patrón MVC de Rails
- Arquitectura moderna de React
- Integración full-stack
- Mejores prácticas de desarrollo web

---

**¿Problemas?** Verificar que todos los servicios estén corriendo: PostgreSQL, Rails server, y Webpack dev server.
