<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

## Sobre

Esse projeto foi elaborado seguindo o bootcamp disponível na documentação oficial do Laravel. Vou orientar você no processo de instalação, configuração e execução local deste projeto.

## Início

Antes de começar, assegure-se de ter o PHP, o Composer e o Laravel instalados em sua máquina. Se estiver utilizando macOS, você pode instalá-los facilmente com o [Laravel Herd](https://herd.laravel.com/). Além disso, é necessário ter o [Node.js e o NPM instalados](https://nodejs.org/).


## Instalação e configuração

1. Clone este repositório em sua máquina utilizando o seguinte comando:
    ```bash
    git clone https://github.com/MayandersonGomes/first-app-laravel.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd first-app-laravel
    ```

3. Instale as dependências do Laravel através do composer:
    ```bash
    composer install
    ```

4. Execute as migrações do banco de dados (```Não é necessário se preocupar em configurar o banco de dados, pois o projeto já está configurado para usar SQLite. O arquivo será gerado automaticamente quando as migrações forem executadas. No entanto, se você preferir usar outro banco de dados, como MySQL ou PostgreSQL, basta alterar as constantes que começam com DB_ no arquivo .env com as informações de acesso ao banco```):
    ```bash
    php artisan migrate
    ```

5. Instale as dependências do Frontend:
    ```bash
    npm install
    ```

6. Inicie o servidor de desenvolvimento do Laravel:
    ```bash
    php artisan serve
    ```

7. Abra um novo terminal no diretório do projeto e inicie o servidor de desenvolvimento do vite:
    ```bash
    npm run dev
    ```

## Conclusão
Após seguir corretamente todos os passos mencionados acima, você será capaz de acessar o projeto por meio da URL [http://localhost:8000](http://localhost:8000/)

