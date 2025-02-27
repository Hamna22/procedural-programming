class A{
    methoda(...arg){
        console.log(arg);
        let sum = arg.reduce((n1,n2)=>console.log(n1+n2));
        
    }
}

const obj = new A()
obj.methoda(1,2,3)