import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})

export class CourseComponent implements OnInit {
  title = 'List of courses';
  courses: any;

  constructor(service: CourseService) {
    this.courses = service.getCourses();
  }

  ngOnInit(): void {}
}
