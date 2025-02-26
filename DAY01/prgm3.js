class Bank{
    //property
    accountdetails={                 //object so of method cant used
        1000:{acno:1000, username:"userone",password:"userone",balance:5000},
        1001:{acno:1001, username:"usertwo",password:"usertwo",balance:10000},
        1002:{acno:1002, username:"userthree",password:"userthree",balance:1000},
        1003:{acno:1003, username:"userfour",password:"userfour",balance:2000},

    }


//1.w.a.p to validate a given account number.
validate(acno){

   return acno in this.accountdetails?true:false

}


//2.w.a.p to authenticate a given account.
auth(acno,pswd){
    if (this.validate(acno)) {
        if (this.accountdetails[acno].password==pswd) {
            
            console.log("valid account details");
            
            
        } else {
            console.log("invalid account or password");

            
        }

        
    } else {
        console.log("invalid account or password");
        
        
    }

}

//3.w.a.p to check the balance of a given aaccount number.
balance(acno,pswd){
    if (this.validate(acno)) {
        if (this.accountdetails[acno].password==pswd) {
            
            console.log(this.accountdetails[acno].balance);
            
            
        } 
        else {
            console.log("invalid account or password");

            
        }

        
    } else {
        console.log("invalid account or password");
        
        
    }



    
     

    
 }

//4.w.a.p to transfer money between two accounts.
transfer(fromacno,frompswd,toacno,amount){
    if (this.validate(toacno) && this.validate(fromacno)) {    //account validation
        if (this.accountdetails[fromacno].password==frompswd) {  //password
            if (this.accountdetails[fromacno].balance>=amount){
                console.log(`current balance of ${fromacno} is ${this.accountdetails[fromacno].balance} and ${toacno} is ${this.accountdetails[toacno].balance}`);

                this.accountdetails[fromacno].balance=amount
                this.accountdetails[toacno].balance+=amount

                console.log(`balance of ${fromacno} is ${this.accountdetails[fromacno].balance} and ${toacno} is ${this.accountdetails[toacno].balance} `);

           
                
                

                
            } else {
                console.log("insufficient storage");
                
                
            }
            
        } else {
            console.log("invalid  password");

            
        }
        
    } else {

        console.log("invalid account numbers");

        
    }

}


}

const obj = new Bank()  //object creation
console.log(obj.validate(100)?'Account exist':'no such account'); //1


obj.auth(1001,'usertwo')  //2


obj.balance(1000,'userone')//3

obj.transfer(1000,'userone',1001,500)