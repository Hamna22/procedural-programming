class A {
    methoda(){
        console.log("inside a class A");
        

    }
}

class B extends A {
    methodb(){
        console.log("inside a class B");
        

    }
}

class C extends B {
    methodc(){
        console.log("inside a class C");
        

    }
}

const obj = new  C
obj.methodc()
obj.methodb()
obj.methoda()