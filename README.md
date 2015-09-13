# Updates
- Adicionei o controle de pacotes pelo [Bower](http://bower.io), portanto, o Bower é uma dependência. Basta instalá-lo como NPM.

> bower install && grunt

- Adicionei uma task no grunt para relacionar as dependências do bower nas configurações do requirejs (main.js).
  Para adicionar no requireJS, basta rodar a task abaixo:

> grunt bowerRequirejs

- As dependências do instaladas pelo bower não são adicionadas automaticamente no test-main.js, usado pelo karma.
  Por enquanto, deve ser feito manualmente.
  
- Adicionado suporte ao $templateCache na versão de distribuição.
  Para gerar uma versão de distribuição com suporte ao templateCache, 
  basta usar a flag --templateCache
  
> grunt dist --templateCache

---

Quando comecei a estudar o AngularJS e a procurar exemplos de uso e aplicações, sempre me deparava com aplicações simples, sem muitas implementações. O que é bom para pegar o conceito mas não ajuda muito quando é necessário estruturar uma aplicação que irá crescer significativamente.

Assim, compartilho a minha estrutura de projetos para aplicações de larga escala, tornando modular - como deve ser - e de fácil manutenção.

## 1\. Introdução

Essa é uma ideia de estrutura de aplicação que tem funcionado muito bem e esse é o principal motivo de eu compartilhar. Para exemplificar de uma forma mais clara, criei um projeto simples, com 2 módulos e 2 componentes, para que seja visível a utilização dessa estrutura de projeto. Podes conferir o projeto [aqui](https://github.com/dsalvagni/angular-scalable-project) e executar uma versão demo [aqui](http://www.dsalvagni.com.br/angular-scalable-project).

A principal aplicação desses conceitos é no modelo Single Page Application com um arquivo _bundle_ com todos os módulos. Pretendo aprimorar esses modelo para usar, mesmo na SPA, um modo de carregar os módulos dinamicamente conforme requisitado. Usando, dessa forma, o lazy load com o RequireJS. 

Com o conceito discutido nesse post, é possível configurar o compile do RequireJS no Gruntfile.js para compilar módulo a módulo, como se cada módulo fosse um _bundle_. Acredito que seja pouco vantajoso esse formato, porque o volume de requisições de arquivos continuara alto.

### 1.1 Requisitos e Dependências

1.  Javascript
2.  [AngularJS](http://angularjs.org)
3.  [RequireJS](http://requirejs.org)
4.  [AMD](http://requirejs.org/docs/whyamd.html)
5.  [Grunt](http://gruntjs.com)
6.  [Bower](http://bower.io)
7.  [KarmaJS](http://karma-runner.github.io/0.12/index.html)
8.  [Protractor](https://angular.github.io/protractor/)

## 2\. Conceito

A estrutura da aplicação é dividia em **módulos** e **componentes**. E, abaixo dessa, é feita a divisão por feature. Os **módulos** são uma visão macro de uma funcionalidade e podem conter uma coleção de _componentes_. Por exemplo, em uma aplicação de rede social, o módulo de _perfil_ irá conter componentes do tipo: meus amigos, minhas fotos. Dessa forma, os **componentes** representam uma visão micro de uma funcionalidade ou uma função específica redundante, que pode ser utilizada em diversos momentos.

## 3\. Estrutura

Estruturei a aplicação da seguinte maneira:

*   **/**

    Gruntfile, karma.conf, package.json e readme.md

*   **/app**

    Contém todos os código fontes da aplicação.

    *   **/app.js**

        Arquivo do módulo principal, o qual carrega as dependências e instancia os módulos.

    *   **/index.html**

        Inicialização da aplicação

    *   **/main.js**

        Arquivo de configuração do para utilização com o RequireJS, para carregar os módulos e gerar, posteriormente, o bundle file.

    *   **/assets**

        Arquivos css, webfonts, imagens e arquivos de préprocessadores (less, sass, etc).

    *   **/src**

        Contém todos os código fontes dos módulos e componentes, bem como configurações gerais da aplicação.

        *   **/components**

            Contém todos os código fontes dos componentes.

        *   **/config**

            Contém as configurações da aplicação. Neste exemplo, somente o nome da aplicação.

        *   **/modules**

            Contém todos os código fontes dos módulos.

    *   **/vendor**

        Contém todas as bibliotecas e dependências externas.

*   **/dist**

    Contém todos os arquivos gerados para a versão de distribuição.

*   **/e2e-tests**

    Todos os testes end2end com o protractor.

### 3.1 Namespace

Guardo o nome da aplicação em um arquivo e compartilho entre os módulos e componentes, assim todos ficam com o mesmo prefixo. Utilizo por organização.

### 3.2 Estrutura de Módulos

Conforme mencionado anteriormente, os módulos são as visões macros das funcionalidades da aplicação. Podem conter seus próprios controllers, services, filters, etc. Os módulos estão organizados da seguinte maneira:

#### /config

Guarda o arquivo de configuração do módulo, module.config.js, com as informações de rotas bem como outras configurações necessárias para o funcionamento do módulo.

#### /controller

Contém todos os controllers relacionados ao módulo. Todos os controllers seguem o padrão de nomeclatura: {nome}Ctrl - tanto de arquivo como do registro do controller.

#### /service

Contém todos os serviços relacionados ao módulo. Todos os serviços seguem o padrão de nomeclatura: {nome}Svc - tanto de arquivo como de registro de serviço.

#### /test

Contém todos os arquivos de testes unitários.

#### /view

Todas as views são organizadas em pastas relacionadas aos respectivos controllers. Caso exista um view parcial, comum a mais de um módulo, deve ser usada na pasta /view/partial. Caso seja uma view parcial, comum apenas a um controller, fica dentro da pasta da view do controller, com prefixo "_". Exemplo: "_sidebar.html"

#### /module.js

É o arquivo da instancia do módulo. Todas os arquivos do módulo e dependências são carregados usando o AMD e registrados no angular para posteriormente serem relacionados no arquivo do módulo principal.

### 3.3 Estrutura de Componentes

Conforme mencionado anteriormente, os componentes são as visões micros das funcionalidades da aplicação. Ainda, podem ser componentes independentes de qualquer módulo, com funcionalidades exclusivos. Podem conter seus próprios controllers, services, filters, etc. Os componentes estão organizados da seguinte maneira, dentro da pasta /src/components:

#### /{contexto}/{componente}

O contexto agrupa os componentes. Como no exemplo mencionado acima, da rede social, o contexto dos componentes seria: perfil. Nesse projeto, temos 2 contextos: todo e contactList.

#### /{contexto}/{componente}/directives

Contém todas as diretivas relacionadas ao componente.

#### /{contexto}/{componente}/controllers*

Contém todas as controllers relacionadas ao componente. * Só recomendo o uso de controllers externos caso o código seja bem extenso, que fique ruim manter no mesmo código da diretiva.

#### /{contexto}/{componente}/view

Contém todas as views do componente. Todas as views devem conter o prefixo "_", como no exemplo: "_undone.html". É mais fácil de identificar quando estiver depurando a aplicação.

#### /{contexto}/{componente}/component.js

Da mesma forma que os módulos, os componentes possuem o arquivo de instancia do componente que carrega os arquivos com o AMD e registra no angular.

### 3.4 app.js

Arquivo principal da aplicação, carrega todas as dependências utilizando o AMD e registra em um módulo principal, no angular.

### 3.5 main.js

Arquivo de configuração do RequireJS, onde carrego todas as bibliotecas de terceiros e inicio a aplicação.

## 4\. Testes

Uma das minhas preocupações quando comecei a criar este modelo foi permitir que ele fosse "testável", e é. É possível testar toda a aplicação com testes unitários utilizando o KarmaJS e testes end2end utilizando o Protractor. Por convenção, os testes end2end ficam na pasta raiz da aplicação e os testes unitários devem estar na pasta **/test** dentro do seu respectivo módulo.

## 5\. Versão de Distribuição

Para rodar a aplicação em modo de desenvolvimento é simples, basta executar o comando abaixo na pasta raiz do projeto. A aplicação estará disponível no endereço: http://localhost:8000/app/ `npm start`

A versão de distruibuição é gerada a partir de uma _task_ do Grunt, executada pelo comando abaixo. `grunt dist` Após executada a _task_, a aplicação estará disponível na pata **/dist** e pode ser usado em produção.

## 6\. Considerações

Esse modelo não é uma regra, é uma alternativa. Uma das maravilhas de trabalhar com projetos web é poder construí-los de diversas maneiras dependendo, principalmente, do objetivo final. Porém, quando se trabalha em empresas que mantém diversos projetos com suas respectivas equipes, é importante manter as equipes alinhadas quanto ao padrão de desenvolvimento de código. 

Quando estruturei esse modelo, meu objetivo foi criar um padrão para desenvolvimento de aplicações em equipes que não necessariamente iniciam o projeto junto. Mas sim, equipes que são montadas por desenvolvedores alocados de um projeto ou de outro, o que é uma prática comum. Dessa forma, todo desenvolvedor que entra no projeto, independente da fase que isso acontece, possui um modelo de aplicação para seguir e irá produzir, em toeria, um código legível por todas os desenvolvedores que participam do projeto. 

Esse modelo não resolve todos os problemas de padronização de código, mas tenho certeza de que se aplicado, será fundamental - seguido por práticas como code review, refatoring e outras.