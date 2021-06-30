import "reflect-metadata";
import { servidor } from './servidor';
import dotenv from 'dotenv';
import './shared/container/dependencias';
import './database/conexao';

dotenv.config({
    path: 'src/environment/.env',
});

servidor.listen(process.env.SERVER_PORT, ()=> {
    console.log(`Api rodando na porta ${process.env.SERVER_PORT}`);
})