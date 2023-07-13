# Utilizamos la imagen oficial de Node como base
FROM node:16

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto de los archivos de la aplicación al directorio de trabajo
COPY . .

# Exponemos el puerto en el que se ejecutará la aplicación (ajústalo si es necesario)
EXPOSE 8000

# Comando para iniciar la aplicación cuando se ejecute el contenedor
CMD ["npm", "start"]
