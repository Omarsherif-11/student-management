const studentService = require('./student.service');

class StudentController {
    
    constructor (studentService){

        this.studentService = studentService;

    }

    async findStudent (req, res) {

        try {

            const id = req.params.id;

            const student = await this.studentService.findStudent(id);

            res.status(200).json(student);

        }catch(err){

            res.status(404).json(err.message);

        }
    }

    async findAllStudents(req, res){

        try {

            const allStudents = await this.studentService.findAllStudents();

            res.status(200).json(allStudents);

        }catch(err){
                
            res.status(404).json(err.message);
        }
    }

    async deleteStudent(req, res){

        try {

            const id = req.params.id;

            const success = await this.studentService.deleteStudent(id);

            return res.status(201).json(success);

        }catch(err){

            res.status(404).json(err.message);

        }
    }
    
    async updateStudent(req, res){

        try {
            
            const id = req.params.id;
            
            const {name, age, gpa, studyYear} = req.body;

            const result = await this.studentService.updateStudent(id, name, age, gpa, studyYear);

            res.status(201).json(result);

        }catch(err){

            res.status(404).json(err.message);

        }
    }
    
    async addStudent (req, res){

        try {

            const {name, age, gpa, studyYear} = req.body;

            const result = await this.studentService.addStudent(name, age, gpa, studyYear);

            res.status(201).json(result);

        }catch(err){

            res.status(404).json(err.message);

        }
    }
}
    
module.exports = StudentController;