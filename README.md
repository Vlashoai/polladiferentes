# 🏆 Polla del Mundial 2026 — Los Diferentes

Webapp para esta quiniela, construida con la misma arquitectura robusta y probada del proyecto anterior (Brothers), pero completamente independiente: su propio repositorio, su propio proyecto Firebase, sus propios participantes y pronósticos.

## Participantes ya cargados (con sus pronósticos del Excel)

Andru, Alonso, Rudy, Wipipi, Vlasho, Chocho, Caleño, Hugo, Veron, Cesar, Tigreza, chompi, Gonzalo, Beto, Matamba Diego, Gerson — más 4 espacios libres (Participante 17-20) para completar el grupo.

Los primeros **20 partidos** ya tienen resultado oficial cargado, igual que en el Excel original.

## Instrucciones de despliegue 

### 1. Crear un proyecto Firebase NUEVO (distinto al de Brothers)

1. Ve a **console.firebase.google.com** → "Crear un proyecto"
2. Nombre sugerido: `polla-diferentes-2026`
3. Desactiva Google Analytics → Crear proyecto
4. Click **Realtime Database** → "Crear base de datos" → región más cercana → "Empezar en modo de prueba" → Habilitar
5. Pestaña **Reglas** → reemplaza todo con:
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
6. ⚙️ Configuración del proyecto → "Tus apps" → ícono `</>` → nombre `polla-web` → Registrar app → copia el bloque `firebaseConfig`

### 2. Pega tus credenciales en app.js

Abre `app.js` con cualquier editor de texto, busca la sección `FIREBASE_CONFIG` cerca del inicio del archivo, y reemplaza los valores `"TU_..."` con los que copiaste de Firebase.

### 3. Sube TODO a un repositorio nuevo en GitHub

1. `github.com/new` → nombre: `polla-diferentes-2026` (o el que prefieras) → Público → Create repository
2. Arrastra exactamente:
   - El archivo `index.html`
   - El archivo `app.js`
   - La carpeta `css` completa
   - La carpeta `pages` completa
3. Commit changes
4. Verifica que la estructura en la raíz del repo se vea así:
```
app.js
index.html
css/
  └── style.css
pages/
  ├── admin.html
  ├── eliminatorias.html
  ├── grupos.html
  ├── ranking.html
  └── todos.html
```

### 4. Activa GitHub Pages

Settings → Pages → Source: Deploy from a branch → Branch: `main` / `/(root)` → Save

### 5. Carga los datos iniciales del Excel

1. Abre tu sitio → selecciona cualquier nombre → Entrar
2. Ve a 🔧 Admin → PIN `2026`
3. Pestaña "🌱 Datos Iniciales" → clic en "Cargar datos del Excel"
4. Ve a 🏆 Ranking — deberías ver algo similar a esto (puntos verificados antes de entregar):

| Participante | Puntos esperados |
|---|---|
| Rudy | 18 |
| Alonso | 16 |
| Vlasho | 16 |
| Andru | 14 |
| Wipipi | 14 |
| Cesar | 14 |
| Veron | 12 |
| Hugo | 8 |
| Gonzalo | 8 |
| Beto | 8 |
| Caleño | 6 |
| Tigreza | 6 |
| chompi | 6 |
| Chocho | 0 |
| Matamba Diego | 0 |
| Gerson | 0 |

### 6. Comparte el link

```
https://TU_USUARIO.github.io/polla-diferentes-2026/
```

## Funcionalidades incluidas (igual que el proyecto Brothers)

- Bloqueo automático de pronósticos al iniciar cada partido, calculado correctamente en hora de Ciudad de México sin importar la zona horaria del participante
- Vista "Mis Grupos" con filtro rápido por Hoy / Mañana / Todos los partidos
- Vista "Ver Todos" para comparar pronósticos de todos los participantes
- Ranking automático en tiempo real
- Panel Admin (PIN `2026`) para ingresar resultados oficiales y pronósticos de eliminatorias

## Notas importantes

- Este proyecto es **completamente independiente** del de Brothers — diferente Firebase, diferente repositorio, diferentes participantes. No comparten datos.
- Las keys de Firebase usan prefijo `p` (`p1`, `p2`...) para evitar el bug de conversión a array que tuvimos en el proyecto anterior.
- Si necesitas agregar, renombrar o quitar un participante más adelante, edita el array `PARTICIPANTS` en `app.js` y sube el archivo actualizado a GitHub.
