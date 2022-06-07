# Di2win Project - Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## INSTALANDO O ANGULAR
Para realizar a instalação do angula siga os seguintes passos:
- Realizar a instalação do Nodejs através do link a seguir (https://nodejs.org/en/);
- Segundo passo, executar este comando no seu terminal "npm install -g @angular/cli";
- Após isto, você pode abrir o terminal na pasta que foi importado o repositório e rodar "ng serve";
- Agora você já tem sua aplicação angular rodando, sem problemas.

## REQUISITOS
Angular Instalado;
GitBash Instalado;

## IMPORTANDO REPOSITÓRIO DO GIT
Para usar "pull" nos arquivos, abra seu bash no diretório desejado e execute os seguintes comandos:
- git init
- git remote add origin https://github.com/matheus-paiva/Squad2---Di2win.git
- git pull https://github.com/matheus-paiva/Squad2---Di2win.git master

## USANDO COMMITS
Depois de fazer o passo anterior, use os seguintes comandos no seu bash:
- npm install commitizen -g

Se ocorrer alguma vulnerabilidade, use "npm audit fix --force" sem as aspas para continuar, o bash também o guiará com essas vulnerabilidades;

- commitizen init cz-conventional-changelog --save-dev --save-exact
 
Se ocorrer algum erro, coloque "--force" sem as aspas no final do comando e continue;

- npm run commit
- Depois disso, você também pode iniciar um commit com "git-cz" ou "cz" sem as aspas que funcionará.

## OUTROS
Para a instalação do mask, use esse comando, pode acontecer alguma vulnerabilidade, mas não precisa usar audit fix ou --force como nos outros
- npm install --save ngx-mask

Para a instalação do aos, use esse comando, pode acontecer alguma vulnerabilidade, mas não precisa usar audit fix ou --force como nos outros
- npm install aos --save



