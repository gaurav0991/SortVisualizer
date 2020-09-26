const val=document.querySelector(".input__field");
const btn=document.querySelector(".input__submit");
const main=document.querySelector(".main__algo");
const colors=["red","yellow","green","purple"];
const valus=document.querySelector(".lets");
let animations=[];
valus.addEventListener("click",sortalgo);
if(document.getElementsByClassName("selected").length==0){
    btn.style.display="none"
    }
function sortalgo(e){
    console.log(e.target.innerText);
    const deselect=document.getElementsByClassName("selected");
    console.log(deselect)
    if(deselect.length!==0){
    deselect[0].classList.remove("selected");
    }
    const selected=document.getElementsByClassName(`${e.target.innerText}`);
    selected[0].className =`selected ${e.target.innerText}`
       console.log(selected[0].classList);
       if(document.getElementsByClassName("selected").length==0){
        btn.style.display="none"
        }
        else{
            btn.style.display="block"
        
        }

}

btn.addEventListener("click",valsubmit);
async function valsubmit (e){
    e.preventDefault();
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    const vals=val.value.split(" ");
    console.log(vals.length);
    let k=0;
    const deselect=document.getElementsByClassName("selected");

    
    for(let i=0;i<vals.length;i++){
        vals[i]=parseInt(vals[i]);
        const line=document.createElement("div");
        line.appendChild(document.createTextNode(vals[i]));
        const he=parseInt(vals[i])*5;
        line.style.width=`${he}px`;
        line.className="single-line";
        line.style.backgroundColor="#FFF9C4";
        main.appendChild(line);
        if(k==3){
            k=0;
        }
        else{
        k++;
        }
    }
    if(deselect[0].classList.contains("Insertion")){
        insertionSort(vals);
    }
    else if(deselect[0].classList.contains("Merge")){
        let main=vals;
        let ans=mSort(vals);
        console.log(animations);
        drawGraph(animations)


    }
    else if(deselect[0].classList.contains("Heap")){
        heapSort(vals);

    }
    else{

    var len = vals.length,
    
        i, j, stop;
        console.log(vals);
        k=0;
        console.log("Length is : "+ len);
    for (i=0; i < len; i++){
        console.log(vals);
        
        for (j=0; j < len-i; j++){
            console.log(j);

            if (vals[j] > vals[j+1]){
                const promises=new Promise((res,rej)=>{
                    setTimeout(()=>res("hello"),10)
                });
                await promises;
                const color=["lightpink","lightcoral"];
                let temp=0;
                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                }
                for(let index=0;index<len;index++){
        
                    const line=document.createElement("div");
                    line.appendChild(document.createTextNode(vals[index]));
                    const he=parseInt(vals[index])*5;
                    line.style.width=`${he}px`;
                    line.className="single-line";

                    if(vals[index]==vals[j]){
                    line.style.backgroundColor=color[0];
                    }
                    else if(vals[index]==vals[j+1]){
                        line.style.backgroundColor=color[1];

                    }
                    else {
                        line.style.backgroundColor="#FFF9C4";

                    }
                    main.appendChild(line);
                    
                }

                swap(vals, j, j+1);
                const promise=new Promise((res,rej)=>{
                    setTimeout(()=>res("hello"),300)
                });
                await promise;
                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                }
                for(let index=0;index<len;index++){
        
                    const line=document.createElement("div");
                    line.appendChild(document.createTextNode(vals[index]));
                    const he=parseInt(vals[index])*5;
                    line.style.width=`${he}px`;
                    line.className="single-line";
                    line.style.backgroundColor="#FFF9C4";
                    main.appendChild(line);
                    
                }
            }
        }
    }
    console.log(vals)
}

}
const delay = ms => new Promise(resolve => setTimeout(resolve("hello"), ms));
function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}
async function insertionSort(inputArr) {
    console.log("insertion sorts    ")
    var len = inputArr.length;

    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            let current = inputArr[i];
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                const promises=new Promise((res,rej)=>{
                    setTimeout(()=>res("hello"),100)
                });
                await promises;
                const color=["lightpink","lightcoral"];
                let temp=0;
                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                }
                for(let index=0;index<len;index++){
        
                    const line=document.createElement("div");
                    line.appendChild(document.createTextNode(inputArr[index]));
                    const he=parseInt(inputArr[index])*5;
                    line.style.width=`${he}px`;
                    line.className="single-line";

                    if(inputArr[index]==inputArr[j]){
                    line.style.backgroundColor=color[0];
                    }
                    else if(inputArr[index]==current){
                        line.style.backgroundColor=color[1];

                    }
                    else {
                        line.style.backgroundColor="#FFF9C4";

                    }
                    main.appendChild(line);
                    
                }
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
            const promise=new Promise((res,rej)=>{
                setTimeout(()=>res("hello"),300)
            });
            await promise;
            while (main.firstChild) {
                main.removeChild(main.firstChild);
            }
            for(let index=0;index<len;index++){
    
                const line=document.createElement("div");
                line.appendChild(document.createTextNode(inputArr[index]));
                const he=parseInt(inputArr[index])*5;
                line.style.width=`${he}px`;
                line.className="single-line";
                line.style.backgroundColor="#FFF9C4";
                main.appendChild(line);
                
            }
        }
}
    
function mSort (array) {
    if (array.length === 1) {
    return array                            
 }
 const middle = Math.floor(array.length / 2) 
 const left = array.slice(0, middle)         
 const right = array.slice(middle)           
 return merge(
    mSort(left),
    mSort(right)
 )
 }
 function merge (left, right) {
    let result = []
    let leftIndex = 0
    let rightIndex = 0
    while (leftIndex < left.length && rightIndex < right.length) {
       if (left[leftIndex] < right[rightIndex]) {
       result.push(left[leftIndex]);
       animations.push({
           "value":[left[leftIndex],right[rightIndex]],
           "pos":[leftIndex,rightIndex]
       });
       leftIndex++
             
       } else {
       result.push(right[rightIndex]);
       animations.push({
        "value":[left[rightIndex],right[leftIndex]],
        "pos":[rightIndex,leftIndex]
    });
       rightIndex++      
    }
 }
 return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
 }
 
 async  function drawGraph(mainArr){
            const promise=new Promise((res,rej)=>{
                setTimeout(()=>res("hello"),1000)
            });
            await promise;
            while (main.firstChild) {
                main.removeChild(main.firstChild);
            }
            const len=mainArr.length;
            for(let index=0;index<len;index++){
    
                const line=document.createElement("div");
                line.appendChild(document.createTextNode(mainArr[index]));
                const he=parseInt(mainArr[index])*5;
                line.style.width=`${he}px`;
                line.className="single-line";
                line.style.backgroundColor="#FFF9C4";
                main.appendChild(line);
                
            }

          }
        async  function maxHeap(input, i) {
            const left = 2 * i + 1
            const right = 2 * i + 2
            let max = i
        
            if (left < arrLength && input[left] > input[max]) {
                max = left
            }
        
            if (right < arrLength && input[right] > input[max])     {
                max = right
            }
        
            if (max != i) {
                swap(input, i, max);
               
                maxHeap(input, max);
                const promises=new Promise((res,rej)=>{
                    setTimeout(()=>res("hello"),100)
                });
                await promises;
                const color=["lightpink","lightcoral"];
                let temp=0;
                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                }
                for(let index=0;index<input.length;index++){
        
                    const line=document.createElement("div");
                    line.appendChild(document.createTextNode(input[index]));
                    const he=parseInt(input[index])*5;
                    line.style.width=`${he}px`;
                    line.className="single-line";

                    if(input[index]==input[i]){
                    line.style.backgroundColor=color[0];
                    }
                    else if(input[index]==max){
                        line.style.backgroundColor=color[1];

                    }
                    else {
                        line.style.backgroundColor="#FFF9C4";

                    }
                    main.appendChild(line);
                    
                }
                
                 
                
               
            }
        }
        
    
        
      async  function heapSort(input) {   
            arrLength = input.length
        
            for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1)      {
                maxHeap(input, i)
              }
        
            for (i = input.length - 1; i > 0; i--) {
                swap(input, 0, i);
                const promises=new Promise((res,rej)=>{
                    setTimeout(()=>res("hello"),100)
                });
                await promises;
                const color=["lightpink","lightcoral"];
                let temp=0;
                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                }
                for(let index=0;index<input.length;index++){
        
                    const line=document.createElement("div");
                    line.appendChild(document.createTextNode(input[index]));
                    const he=parseInt(input[index])*5;
                    line.style.width=`${he}px`;
                    line.className="single-line";

                    if(input[index]==input[i]){
                    line.style.backgroundColor=color[0];
                    }
                    else if(input[index]==0){
                        line.style.backgroundColor=color[1];

                    }
                    else {
                        line.style.backgroundColor="#FFF9C4";

                    }
                    main.appendChild(line);
                    
                }
                const promise=new Promise((res,rej)=>{
                    setTimeout(()=>res("hello"),200)
                });
                await promise;
                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                }
                for(let index=0;index<input.length;index++){
        
                    const line=document.createElement("div");
                    line.appendChild(document.createTextNode(input[index]));
                    const he=parseInt(input[index])*5;
                    line.style.width=`${he}px`;
                    line.className="single-line";
                    line.style.backgroundColor="#FFF9C4";
                    main.appendChild(line);
                    
                }
                arrLength--
        
                maxHeap(input, 0)
            }
            console.log(input)
            return
        }
        