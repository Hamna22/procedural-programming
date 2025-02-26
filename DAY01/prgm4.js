class A{
    methoda(){
        console.log("inside a class A");
        
    }
}

class B extends A{
    methodb(){
        console.log("inside a class B");
        
    }
}
 const obj = new B
obj.methodb()
obj.methoda()