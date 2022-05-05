//Analysis & Design of Algorithms


//first i will create two empty array and a variable for there size
var firstarray =[];
var secondarray=[]; 
var arraysize = 20000;  // you can Select size according to your choices
var LumotoCounter =0;
var SedgewickCounter = 0;
// Now we have to fill these array within the range of 1-100
fillArrays(arraysize);
l = 0;
h = firstarray.length - 1;
//**********************************************************************************
//First we will do it by Sedgewick partition
l=0;
r=firstarray.length-1;
k=Math.floor((l+r)/2);
console.log("Size of a array is: ",arraysize);
console.time("Sedgewick runtime");
//Sedgewick(l,h);
console.log("Median by Sedgewick partition is " + QuickSelect1(l,r,k));
console.log("Sedgewick counter is = " + SedgewickCounter);
console.timeEnd("Sedgewick runtime");




//**********************************************************************************

//Sedgewick partition
function Sedgewick(l,h)
{
   var pivot = firstarray[l];

    var i = l-1, j = h+1;
    while(true)
    {
        do
        {
            i++;
			SedgewickCounter++;
        } while(firstarray[i] < pivot)
        do
        {
            j--;
			SedgewickCounter++;
        } while(firstarray[j] > pivot)

        if(i >= j)
            return j;
		tmp = firstarray[i]; 
        firstarray[i] = firstarray[j]; 
        firstarray[j] = tmp;
        
    }
    return -1;
   

   
}

function QuickSelect1(l,r,k){
   s=Sedgewick(l,r);
   
   if(s==k){
      return firstarray[s];
   }else if (s>k){
     return QuickSelect1(l,s-1,k);
   } else{
     return QuickSelect1(s+1,r,k);
   }
 
}
//median for Sedgewick partition
function median(data) {
   low = data.length - data.length;
   high = data.length - 1;
  
   var mid = Math.floor((low + high) / 2);
  // console.log("mid ind = " + mid);
   if ((data.length % 2) != 0)
       return data[mid];
   else
       mid2 = (Math.floor((mid + 1 + mid) / 2));
 //  console.log("mid2 is " + mid2);
   return (data[mid2]);
}
//**********************************************************************************

//Second time we will do it by Lumoto partition

l1=0;
r1=secondarray.length-1;
k1=Math.floor((l+r)/2); 
console.log("Size of a array is: ",arraysize);
console.time("Lumoto runtime");


console.log(' Median by Lumoto partition is',QuickSelect(l1,r1,k1));
console.log("Lumoto counter is = " + LumotoCounter);
console.timeEnd("Lumoto runtime");

//**********************************************************************************

//median for LomutoParition
function QuickSelect(l,r,k){
   s=Lomuto(l,r);
   
   if(s==k){
      return secondarray[s];
   }else if (s>k){
     return QuickSelect(l,s-1,k);
   } else{
     return QuickSelect(s+1,r,k);
   }
 
}



//LomutoParition 
function Lomuto(l,r){
  
   var p=secondarray[l];
    s=l;
    for(i=l+1;i<=r;i++){
      LumotoCounter++;
      if(secondarray[i]<p){
         s=s+1;
        temp=secondarray[s];
        secondarray[s]=secondarray[i];
        secondarray[i]=temp;
      }
    }
    temp=secondarray[l];
    secondarray[l]=secondarray[s];
    secondarray[s]=temp;
    return s;
 }

//**********************************************************************************

// function to fill Arrays
function fillArrays(size)
{
    for(var j = 0; j < size;j++)
{
    firstarray[j] = Math.random() *101;
	secondarray[j] = Math.random() *101;
}
}

