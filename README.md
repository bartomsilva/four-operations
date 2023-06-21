## Four-Operations

base experimental, trabalho em grupo (nodejs com typescript), trata-se de uma API matemática.
<p>* vamos trabalhar as 4 operações básicas de matemática</p>

### endpoints POST:
``` bash

*** padrão para os nomes  ***

- addition  ( adição )
- subtraction ( subtração  )
- multiplication ( multiplicação )
- division ( division )
- circleAarea ( área do círculo )
- squareArea ( área do quadrado )
- triangleArea ( área do trinângulo )
- rectangleArea( área do retângulo )

  obs: todos endpoints devem ficar dentro da pasta endpoints

```
### padronizar as entradas:
```bash
- valueA
- valueB
- valueC ( caso do triângulo ou outro se necessário )
```

### exemplo de recebimento
```js
 
 const { valorA, valorB, valorC } = req.body

 // todos os valores devem ser testados quanto ao envio, assim como o type.
 // todas mensagens de advertência devem ser em inglês
 
```
### Exemplo de retorno:
```js

 res.status(200).json( valorA * valorB )
 
```

### Responsabilidades:

- [x] adição: Bruno
- [x] subtração: Flavia
- [x] divisão: Julia Borges
- [x] multiplicação: Regiane
- [x] Boas Vindas: Bart
- [ ] Área do Círculo: Jair

## Fluxo do git ( manutenção ) 

```bash

 git checkout main
 
 git pull
 // porque fazer um git pull antes de dar inicio a manutenção? isso garante que vai pegar a versão mais
 // recente do código naquele momento.
 
 git checkout -( nome da branch ) ou git ckeckout -b ( nome da branch )
 
 git add .
 
 git commit -b "<ação> descrição"
 
 git push origin <nome da branch>

 pull request / codereview / resolver os conflitos / merge.
 
```

## próximos passos 
### add mais colaboradores
### criar mais funções: 
  - Área de figuras geométricas:
  - [ ] área do círculo
  - [ ] área do quadrado
  - [ ] área do triangulo
  - [ ] área do retangulo

### Sugestões são bem vindas!
