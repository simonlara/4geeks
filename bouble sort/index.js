
let cantCard = document.getElementById('cantCard');
let draw = document.getElementById('draw');
let sort = document.getElementById('sort');
let showDraw = document.getElementById('showDraw');
let showSort = document.getElementById('showSort');
let carta = document.getElementById('carta');
let bubble = document.getElementById('bubble');

let array=[];




draw.addEventListener('click', (e) => {
    showDraw.innerHTML = '';
    let arreglo = [];

    for (let i = 0; i < cantCard.value; i++) {
        let numero = Math.floor(Math.random() * 13 + 1);
       
        arreglo.push(numero);

        numero==1?numero="A":numero==11?numero="J":numero==12?numero="Q":numero==13?numero="K":numero;

        let span = document.createElement('div');
        span.classList.add('otra');
        span.innerHTML = numero;

        showDraw.appendChild(span);


    };

    array = arreglo;

    return array;
});

const bubbleSort = (arr) => {
        showSort.innerHTML='';
    let wall = arr.length - 1; //we start the wall at the end of the array
    while (wall > 0) {
        let index = 0;
        while (index < wall) {
            //compare the adjacent positions, if the right one is bigger, we have to swap
            if (arr[index] > arr[index + 1]) {
                let aux = arr[index];
                arr[index] = arr[index + 1];
                arr[index + 1] = aux;
            }

            index++;

           
            let div=document.createElement('div');
            let log=document.createElement('div');
            log.style.display='flex';
           
            
            

            
            for (let i=0;i<arr.length;i++){
                let nuevo= arr[i];
                nuevo==1?nuevo="A": nuevo==11?nuevo="J": nuevo==12?nuevo="Q": nuevo==13?nuevo="K":nuevo;
                
               let numero=`<span class="otra"  >${nuevo}</span>`;

                
                log.innerHTML+= numero
            };
            
           
           
            
            div.appendChild(log);
            //let nuevoArr= arr;
 
         //  let nuevo= log.indexOf(1);
           //console.log(nuevo);
           // nuevoArr[nuevo]='A';
           // console.log(nuevoArr[nuevo])
            
            
            showSort.appendChild(div);
            



        }
        wall--; //decrease the wall for optimization
    }
          
    return arr;

};


sort.addEventListener('click', () => {
    bubbleSort(array)
    
});

let cambio=showDraw.innerHTML.replace(1,"A");
document.getElementById("showDraw").innerHTML = cambio;


