
# Instalação no Sistema Linux (Ubuntu)

## Instalação local:

```bash
npm install
npm install nodemon
npm install express
npm install morgan 
npm install mongoose
npm install body-parser
```

## Descrição dos módulos usados
> express: framework web
> nodemon: reinicia servidor web quando houver alteracao
> morgan: cuida dos logs na aplicação

## Instalação do MongoDB
Acessar o instalador no site do MongoDB ou usar um gerenciador de pacotes do SO desejado.
### Observações:

> Deve-se verificar se a pasta de banco foi criada, /data/db para o MongoDB. Caso precise colocar a pasta em um diretorio diferente do padrão, faça o MongoDB veja essa nova pasta através do comando mongod --dbpath /<sua_pasta_db>

## Execução da aplicação:

### Para uso em desenvolvimento:
```bash
npm run dev
```

### Para uso em produção:
```bash
npm run start
```