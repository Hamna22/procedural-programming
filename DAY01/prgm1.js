//[1000,'Neel','developer','Kochi',25000,3]

class Employee{
    //properties
    empid
    empName
    empDesg
    empLoc
    empSal
    empExp


    //constructors
    constructor(id,name,desig,loc,sal,exp){
        this.empid = id
        this.empName = name
        this.empDesg = desig
        this.empLoc  =  loc
        this.empSal = sal
        this.empExp = exp
        
    }


    //methods
     display(){
        console.log(`employee name is ${this.empName}`);
        
     }

}

const emp1 = new Employee('1','Max','hr','kochi',25000,3);
emp1.display()

const emp2 = new Employee('2','Maxwell','developer','kochi',25000,3);
emp2.display()


