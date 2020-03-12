# Nome
    Mateus Silva Perinazzo

# Desafio

    Utilizei nesse projeto o [Angular CLI](https://github.com/angular/angular-cli) versão 8.3.25.
    Versão do Nodejs 10.16.3

# Executar projeto
    Clonar repositorio e acessar pasta do projeto.
    Rodar `npm install`, para instalar as dependências. 
    Em seguida `ng serve`, o navegador abrirá o endereço `http://localhost:4200/`.

# Estrutura das pastas
    Pasta do projeto
        Arquivos de configuração
        node_modules
            - Todas as dependencias do projeto.
        src
            - app
                - form
                    - Componente ou página que está o formulário
                        - form.component.ts possuí as rotinas e a logica do formulário e
                            utiliza a função do service para realizar o POST.
                - service
                    - alert
                        - service que possuí os codigos que geram o alerta de sucesso.
                    - register.service.ts
                        - Tem a função que realiza o POST.
                - componente e modulos gerais do projeto
            - assets
                - pasta das mídias.
            - environments