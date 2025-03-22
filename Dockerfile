# Etapa de construcción
FROM node:18-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Construir la aplicación
RUN npm run build

# Instalar un servidor web ligero
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]

# Comando para servir los archivos estáticos (opcional, para desarrollo)
# CMD ["npx", "serve", "-s", "dist"]
