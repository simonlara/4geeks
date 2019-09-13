
let cantCard = document.getElementById('cantCard');
let draw = document.getElementById('draw');
let sort = document.getElementById('sort');
let showDraw = document.getElementById('showDraw');
let showSort = document.getElementById('showSort');
let carta = document.getElementById('carta');

let array=[];




draw.addEventListener('click', (e) => {
    showDraw.innerHTML = '';
    let arreglo = [];

    for (let i = 0; i < cantCard.value; i++) {
        let numero = Math.floor(Math.random() * 13 + 1);
        arreglo.push(numero);

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
                
               let numero=`<span class="otra"  >${arr[i]}</span>`;


                log.innerHTML+= numero
            };
            
           
            
            
            
            div.appendChild(log);
            showSort.appendChild(div);
            



        }
        wall--; //decrease the wall for optimization
    }

    return arr;

};


sort.addEventListener('click', () => {
    bubbleSort(array)
});




