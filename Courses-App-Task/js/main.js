class Course {
  constructor(title, price, instructor, description) {
    this.title = title;
    this.price = price;
    this.instructor = instructor;
    this.description = description;
  }
}

class CourseUi {
  static displayDummyCourses() {
    const courses = [
      {
        title: "Javascript Course",
        price: 1200,
        instructor: "Ahmed Mazhar",
        description: "Hellow World !",
      },
      {
        title: "React Course",
        price: 1500,
        instructor: "Ahmed Hamada",
        description: "Hellow React !",
      },
    ];
    for (let course of courses) {
      CourseUi.displayDummyCourses(course);
    }
    // courses.forEach(course => console.log(course));
  }
  static displayCoursesIntoTable(course) {
    const tbody = document.querySelector("tbody"),
      row = document.querySelector("tr");
    row.innerHTML = `
    <td>${course.title}</td>
    <td>${course.price}</td>
    <td>${course.instructor}</td>
    <td>${course.description}</td>
    <td>
    <a href="#" class="btn btn-danger delete-course">delete</a>
    </td>
    `;
    tbody.appendChild(row);
  }
  static deleteCourse(element) {
    if (element.classList.contains("delete-course")) {
      element.parentElement.parentElement.remove();
    }
  }
  static showMessages(textMessage, alertClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${alertClass} my-2`;
    div.appendChild(document.createTextNode(textMessage));
    const form = document.createElement("#add-course");
    const section = document.querySelector(".courses");
    section.insertBefore(div, form);
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 4000);
  }

  static clearInputs() {
    document.querySelector("#title").value = "";
    document.querySelector("#price").value = "";
    document.querySelector("#instructor").value = "";
    document.querySelector("#description").value = "";
  }
}

document.addEventListener("DOMContentLoaded", CourseUi.displayDummyCourses);

// Add News Course
document.querySelector("#add-course").addEventListener("submit", (e) => {
  e.preventDefault();
  //   Receive from data
  const title = document.querySelector("#title").value,
    price = document.querySelector("#price").value,
    instructor = document.querySelector("#description").value,
    description = document.querySelector("#description").value;
  if (title == "" || price == "" || instructor == "" || description == "") {
    CourseUi.showMessages("All Inputs Are Required.. ", "danger");
  } else if (price < 500) {
    CourseUi.showMessages("Price must be at least 500", "warning");
  } else {
    // Take an object from course
    const course = new Course(title, price, instructor, description);
    // Call AddCourseIntoTable
    CourseUi.displayCoursesIntoTable(course);
    // Clear Inputs
    CourseUi.clearInputs();
    // Show messages
    CourseUi.showMessages("Course Added Successfully :", "success");
  }
});

// delete course
document.querySelector("tbody").addEventListener("click", (e) => {
  CourseUi.deleteCourse(e.target);
});
