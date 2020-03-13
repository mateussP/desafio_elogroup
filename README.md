# Nome
    Mateus Silva Perinazzo

# Desafio

    Utilizei nesse projeto o [Angular CLI](https://github.com/angular/angular-cli) versão 8.3.25.
    Versão do Nodejs 10.16.3

# Executar projeto
    Clonar repositório e acessar pasta do projeto.
    Rodar `npm install`, para instalar as dependências. 
    Em seguida `ng serve`, o navegador abrirá o endereço `http://localhost:4200/`.

# Estrutura das pastas
    Pasta do projeto
        Arquivos de configuração
        node_modules
            - Todas as dependências do projeto.
        src
            - app
                - form
                    - Componente ou página onde está o formulário
                        - form.component.ts possuí as rotinas, a lógica do formulário e
                            a função do service para realizar o POST.
                - service
                    - alert
                        - service que possuí os códigos que geram o alerta de sucesso.
                    - register.service.ts
                        - Tem a função que realiza o POST.
                - componente e módulos gerais do projeto
            - assets
                - pasta das mídias.
            - environments