class Student{
    // stdName
    // stdId
    // stdCourse

    constructor(name , id , course){
        this.stdName = name
        this.stdId = id
        this.stdCourse = course
        

    }

    display(num){
        console.log(num);
        
    }
}

const std1 = new Student('Arun', 1 , 'Mearn')
std1.display(5)