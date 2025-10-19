# Usa Debian en lugar de Alpine (más compatible)
FROM node:18-bullseye

# Define directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Exponer puerto
EXPOSE 3000

# Ejecutar la app
CMD ["npm", "run", "dev"]
