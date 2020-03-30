##Conceito de desestruturação ({ variavel })

##Conceito de Exportação nos arquivos =
1-> Sempre exportar o React nos arquivos, é como o express do nodeBackend
2-> sintaxe: import $VariavelNome$ from "./diretorio";
2.1-> o nome da váriavel precisa sempre começar com maiusculo, assim como o nome arquivo também precisa começar com maiúsculo.
3-> Podemos usar desestruturação também para exportar o useState (conceito de estado)

##Conceito de Estado no React
1 -> Para alterar um numero em tempo real, como o incrementador por exemplo, precisa usar o useState, EXEMPLO{

/_ O USE STATE RETORNA UM ARRAY COM 2 POSIÇÕES, [VALOR DA VARIAVEL, funçãoDeAtualizaçãoDoPrimeiroValor] _/
/_ desestruturamos o array emm 2 variáveis _/

const [contador, setContador] = useState(0); <- Posição 0 do array

/_ Aqui usaremos a função usada com o useState bem empregado _/
setContador(variavel + 1);

- Sempre usar um estado para atualizar uma informação na variável, criando uma variável comum fica impossivel de atualizar \*

}
