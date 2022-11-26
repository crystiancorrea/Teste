
// Aqui foi criado um array de objetos para guardar os objetos TVs
const Tvs = [
{
  quant: 0, 
  tv: "TV 32 polegadas",
  valorUnitario: 0,
  // Em cada objeto foi criado um método  valor_total para calcular o valor total da TV, de acordo com o valor e a quantidade informados
  valor_total : function() { 
    return this.quant * this.valorUnitario;
  }
},
{
  quant: 0, 
  tv: "TV 40 polegadas",
  valorUnitario: 0,
  valor_total : function() { 
    return this.quant * this.valorUnitario;
  }
},
{
  quant: 0, 
  tv: "TV 43 polegadas",
  valorUnitario: 0,
  valor_total : function() { 
    return this.quant * this.valorUnitario;
  }
},
{
  quant: 0, 
  tv: "TV 49 polegadas",
  valorUnitario: 0,
  valor_total : function() { 
    return this.quant * this.valorUnitario;
  }
},
{
  quant: 0, 
  tv: "TV 50 polegadas",
  valorUnitario: 0,
  valor_total : function() { 
    return this.quant * this.valorUnitario;
  }
},
{
  quant: 0, 
  tv: "TV 55 polegadas",
  valorUnitario: 0,
  valor_total : function() { 
    return this.quant * this.valorUnitario;
  }
},
{
  quant: 0, 
  tv: "TV 58 polegadas",
  valorUnitario: 0,
  valor_total : function() { 
    return this.quant * this.valorUnitario;
  }
},
{
  quant: 0, 
  tv: "TV 65 polegadas",
  valorUnitario: 0,
  valor_total : function() { 
    return this.quant * this.valorUnitario;
  }
},
{
  quant: 0, 
  tv: "TV 75 polegadas",
  valorUnitario: 0,
  valor_total : function() { 
    return this.quant * this.valorUnitario;
  }
},
{
  quant: 0, 
  tv: "Monitor LFD(tamanho definido por projeto)",
  valorUnitario: 0,
  valor_total : function() { 
    return this.quant * this.valorUnitario;
  }
},
{
  quant: 0, 
  tv: "Monitor Video Wall",
  valorUnitario: 0,
  valor_total : function() { 
    return this.quant * this.valorUnitario;
  }
},
]

// criei esta função para somar todos os valor totais de todos os metodos
function valorTotal(){
  // aqui criei um array listaTvs e com o laço .map pequei todos os valores totais da lista de Tvs e salvei em um novo array
  const listaTvs = Tvs.map(element => {
    return element.valor_total();
  });

  const initialValue = 0;

  // com o reduce somei todos os valores totais.
  const total = listaTvs.reduce(
    (acumulador, valorCorrente) => acumulador + valorCorrente,  initialValue
  );
  // aqui chamei o id #vlrTotalGeral do tfoot da tabela e gravei a soma de todos os valores totais
    document.querySelector(`#vlrTotalGeral`).innerText = total;
}

// Criei a função renderValues para dar uma certa "reatividade" ao HTML, quando eu adiciono um valor ao input ele carrega automaticamente no objeto e na tela
function renderValues(value,index,nome){  
  // eu retorno da tabela o valor "value" do campo input e também o nome que é o name do input, para pesquisar qual é o item da lista Tvs que vamos preencher  
    Tvs[index][nome] = value ;	
  // aqui estou buscando o valor do input através do id "vlrTotal" e adicionando o indice para diferenciar cada campo
    document.querySelector(`#vlrTotal${index}`).innerText = Tvs[index].valor_total();
}

// criei esta função para chamar no evento onload da tag body para antes de carregar o documento. a função dela é "printar" o corpo da tabela no documento HTML
function preencheTabelaTv(){
  // aqui eu busco lá do html a TAG tbody da tag table, e grava na constante tbody
	const tbody = document.querySelector('tbody');
  const tfoot = document.querySelector('tfoot');
  // aqui eu percorro o array com o laço map para que cada elemento do array (lista) de Tvs eu insira os seus valores na tabela do HTML
  // o element = o elemento da lista ( neste caso o objeto tv (que tem a quantidade, a tv, o valor unitario e o valor total))
  // o index é o indice de cada elemento precisamos do indice para quando chamar a função renderValues identificar qual é o item da lista que estamos trabalhando
  // para cada item da lista Tvs gravamos todo o HTML já com os valores corretos na variavel criada com let tvs.
	let tvs = Tvs.map((element,index) => {
    // usei o template string que nada mais é que o sinal  ` (crase) e ${ } para adicionar a variavel dentro de uma string sem precisar usar o + e colocar varias ( " ) ou ( ' ) 
    // com o event.target.value  e event.target.name estou pegando o valor e o nome do input respectivamente
    // em <td id="vlrTotal${index}"> </td> no vlrTotal${index} estou concatenando a string vlrTotal à variavel index que declaramos no .map ( junto com o element )
		return `
		<tr>
      <td><input type="number" name="quant" id="quant" value="${element.quant}" oninput="renderValues(event.target.value,${index},event.target.name)" onblur="valorTotal()"></td>
  	  <td> ${element.tv} </td>
	    <td><input type="text" name="valorUnitario" id="valorUnitario" value="${element.valorUnitario}" oninput="renderValues(event.target.value,${index},event.target.name)" onblur="valorTotal()"> </td>
      <td id="vlrTotal${index}"> </td>
	  </tr>				
		`
  });
 // aqui usei o innerHTML para gravar a variavel tvs (que é um outro array que foi criado com o laço map) como é um array (lista) usamos o metodo join("") para juntar tudo e tirar
 // a virgula
  tbody.innerHTML = tvs.join("");

// aqui usei o innerHTML para gravar o valor da soma total no tfoot da tabela.
  tfoot.innerHTML = ` 
    <tr>
      <td colspan="3"> (Estimativas de preços, monitores e aparelhos Video Wall são feitos sob medida)<td>
      <td id="vlrTotalGeral"> 0 </td>
    </tr>
  `;
}