//method overriding

class A{
    method(){
        console.log("inside first method");
        
    }

    method(){
        console.log("inside second method");
        
    }
    
}

const obj = new A()
obj.method()

