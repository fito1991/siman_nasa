## Instalación del proyecto

IMPORTANTE: Asegurate de tener instalado Node JS en tu computadora antes de realizar la instalación del proyecto en tu máquina

## Instalación del código

NOTA: También puede descargar el archivo ZIP del repositorio y descomprimirlo en su computadora 

Clone el repositorio

Abra el terminal de su computadora 

Cambie el directorio actual por el deseado, en el cual clonará el proyecto

Ejecute este comando de git para clonar el repo, YOUR-USERNAME corresponde al nombre del dueño del repositorio 
y YOUR-REPOSITORY el nombre del repositorio que clonara

    $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
    
Presiona Enter y el repositorio será clonado al directorio de destino

## Instalando dependencias de node

Verá dos carpetas en el proyecto CLIENT y SERVER

Muévete a la carpeta SERVER usando el comando

    $ cd server

Ejecuta el siguiente comando para instalar las dependecias y la carpeta de node_modules para la carpeta del servidor

    $ npm install
    
Muéve a la carpeta CLIENT usando el comando

    $ cd cliente
    
Ejecuta el siguiente comando para instalar las dependecias y la carpeta de node_modules para la carpeta del cliente

    $ npm install   
   
## Creando archivo .env para el server

Crea el archivo .env dentro de la carpeta SERVER, añade la siguiente variable de entorno

  EXPRESS_API_KEY_NASA="{TU_API_KEY}"
  
Sustituye {TU_API_KEY} por la API_KEY de la NASA que puedes obtener desde este enlace

  https://api.nasa.gov/index.html

Una vez haya terminando de realizar los pasos anteriores, abre una terminal para la carpeta SERVER y CLIENTE (puede ser desde VS CODE o desde la app de terminal
de tu preferencia). Ejecuta el siguiente comando tanto en la termina del SERVER como en CLIENT. 

    $ npm run dev

Abre la URL que muestra la terminal de CLIENTE en tu navegador para ver el proyecto funcionando.
