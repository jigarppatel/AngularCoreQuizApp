export class Question {
  text: string;
  correctAnswer: string;
  answer1: string;
  answer2: string;
  answer3: string;
  id: number;
}

export class Quiz {
  title: string;
  
  id: number;
}

export class errorData {
  reason: string;
  status: string;
}
