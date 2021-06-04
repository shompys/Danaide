# Danaide - Frontend

Pequeño proyecto challenge para Danaide
Corriendo actualmente en : [https://danaide.jonathangomezit.com/](https://danaide.jonathangomezit.com/)


## Requisitos 
_Tener instalado Node y ver realizado el git clone_

---

## Instalación 🔧

_Una vez parados sobre la carpeta raíz a la altura del archivo package.json ejecutar:_

```
npm install
```
_Esto instalara todas las dependencias necesarias._

----

_Generar un archivo con el nombre '.env.local' a nivel del archivo package.json y cargar las siguientes variables de entorno._

```
REACT_APP_API_URL=
REACT_APP_API_VIDEO=
REACT_APP_API_IMAGE=
```
### REACT_APP_API_URL : 
_Aquí colocaras la url donde se aloja el software REST, donde obtendras todas las camaras existentes del sistema_

### REACT_APP_API_VIDEO :
_Aquí usaras el endpoint que genera la url que otorga video_

### REACT_APP_API_IMAGE :
_Aquí usaras el endpoint que genera la url que otorga la imagen_

---

_Una vez realizado esto ejecutar_
```
npm start
```
---
## Construido con 🛠️

* [React](https://reactjs.org/) - Librería de desarrollo principal
* [react-router-dom](https://reactrouter.com/web/guides/quick-start) - Enrutador de la app
* [Axios](https://github.com/axios/axios) - Manejo de servicio de peticiones
* [Redux/toolkit](https://redux-toolkit.js.org/) - Manejo de estados de la app
* [JSS](https://cssinjs.org/) - Manejos de estilos dentro del componente