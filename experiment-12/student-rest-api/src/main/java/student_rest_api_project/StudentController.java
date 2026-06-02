package student_rest_api_project;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {

    // Store student temporarily
    Student student;

    // Welcome API
    @GetMapping("/")
    public String welcomeMessage() {
        return "Welcome to Student Management REST API";
    }

    // GET API
    @GetMapping("/student")
    public Student getStudent() {
        return student;
    }

    // POST API
    @PostMapping("/student")
    public Student addStudent(@RequestBody Student student) {

        this.student = student;

        return student;
    }
}