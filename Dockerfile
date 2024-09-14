# Use uma imagem oficial do Node.js
FROM node:14

# Cria o diretório de trabalho no contêiner
WORKDIR /app

# Copia o arquivo package.json e instala as dependências
COPY package.json ./
RUN npm install -y

# Copia o restante do código da aplicação
COPY . .

# Expor a porta 8080 para permitir acesso ao serviço
EXPOSE 3001

# Comando para iniciar o aplicativo
CMD ["npm","run" ,"start"]
