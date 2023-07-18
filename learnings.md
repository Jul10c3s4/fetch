Comandos de configuração:



Coisas que aprendi nas aulas referentes a esse projeto:

  - Criar um botão de adicionar mais elementos de maneira funcional, isso pode ser encontrado no arquivo index da pasta Home da pasta pages

  - Como criar um campo de pesquisa que renderiza os elementos encontrados de acordo com as letras digitadas de maneira que o código renderiza os elementos que possuem alguma relação com a pesquisa de modo alterar o array principal a cada letra digitada e ao final volta o array da maneira que estava antes

  - alguns comandos iniciais de tests, exemplos:

    - usar comando npm test -- --coverage para procurar por coverages no código, coverages são sugestões de onde pode-se adicionar testes dentro de um componente

    - usar o comando, npm test -- --watchAll="false" --coverage, para verificar onde tem coverages em todos os arquivos com tsx

    -  const {container} = render(<AddPostButton title="add more posts" disabled=   {false} click={fn}/>)
    //usado para gerar uma pasta com arquivo que contém um snapshot do componente
    expect(container.firstChild).toMatchSnapshot();

    - const {debug} = render(<PostCard {...props}/>)
      debug()
      //o debug é usado para exibir o componente no terminal

