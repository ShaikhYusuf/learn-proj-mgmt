import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-fill-blank',
  standalone: true,
  imports: [CommonModule, MatCardModule, FormsModule], // Add FormsModule here
  templateUrl: './fill-blank.component.html',
  styleUrls: ['./fill-blank.component.css'], // Corrected property name
})
export class FillBlankComponent {
  questions: any = [];
  lessonId!: number;
  submitted = false;
  selectedAnswer: { [key: number]: string } = {};

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.lessonId = +params['lessonId'];
      this.loadQuestions(this.lessonId);
    });
  }

  loadQuestions(lessonId: number): void {
    const url = `./fillblank/lesson${lessonId}.json`;
    this.http.get<any[]>(url).subscribe({
      next: (data) => {
        this.questions = data;
      },
      error: (error) => {
        console.error('Error loading quiz data:', error);
      },
    });
  }

  onSubmit(): void {
    this.questions.forEach((question: any) => {
      const userAnswer = this.selectedAnswer[question.id] || '';
      const isCorrect = userAnswer.trim().toLowerCase() === question.answer.toLowerCase();
      question['isCorrect'] = isCorrect;
    });
  }

  getParts(question: string) {
    return question.split(/(_+|\\b)/).filter(p => p.trim() !== '');
  }
}
