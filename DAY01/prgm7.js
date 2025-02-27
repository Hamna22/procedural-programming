class A{
    methoda(){
        console.log("inside a methoda");
        
    }
    methoda(num){
        console.log("inside second method",num);
        
    }
}

const obj = new A()
obj.methoda(5) //method overloading not support js

console.log("------------------");


