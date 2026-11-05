import express from "express";
import produtoRoutes from "./routes/produtoRoutes.js"
import conexao from "./config/conexao.js";

const app = express();
const PORT = process.env.PORT;



app.use(express.json());

app.use("/produto", produtoRoutes);

async function iniciarServidor() {
    try{
        const conexaoTest = await conexao.getConnection();

        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`)
        })
    }catch(erro){
        console.log("Erro ao conectar o banco de dados");
        console.log(erro.mensagem);
        process.exit(1);
    }
}

iniciarServidor();