const Student = require('./student.schema');

class StudentService {

    async findStudent (id){

        const student = await Student.findById(id);

        if(!student)
            throw new Error('No such student');

        return student;
        
    }

    async findAllStudents() {

        return await Student.find();
    }

    async deleteStudent (id) {

        const success = await Student.findByIdAndDelete(id);

        if(!success)
            throw new Error('Failed to delete');

        return success;
    }

    async addStudent (name, age, gpa, studyYear){

        const newStudent = await Student.insertMany({name, age, gpa, studyYear});

        if(!newStudent)
            throw new Error('Failed to add student');

        return newStudent;
    }

    async updateStudent(id, name, age, gpa, studyYear){

        let student = await Student.findById(id);

        if(!student)
            throw new Error('No such student');
         
        student = await Student.findByIdAndUpdate(id, {name, age, gpa, studyYear}, {new: true});
    
        await student.save();

        return student;
    }

}

module.exports = StudentService;