import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-lesson18',
  imports: [MatIconModule],
  templateUrl: './lesson18.component.html',
  styleUrl: './lesson18.component.css'
})
export class Lesson18Component {
  @ViewChild('textDiv') textDiv!: ElementRef;
  
    private utterance: SpeechSynthesisUtterance | null = null;
  
    ngAfterViewInit(): void {
      if (!this.textDiv) {
        console.error('textDiv not found!');
      }
    }
  
    // Start or Resume Voice
    startOrResumeVoice(): void {
      const text = this.textDiv?.nativeElement?.innerText || '';
      if (!this.utterance) {
        // Create a new SpeechSynthesisUtterance instance
        this.utterance = new SpeechSynthesisUtterance(text);
        this.utterance.lang = 'en-US'; // Set language
        speechSynthesis.speak(this.utterance); // Start speaking
      } else if (speechSynthesis.paused) {
        // Resume if paused
        speechSynthesis.resume();
      }
    }
  
    // Pause Voice
    pauseVoice(): void {
      if (speechSynthesis.speaking && !speechSynthesis.paused) {
        speechSynthesis.pause();
      }
    }
  
    // Stop Voice
    stopVoice(): void {
      if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
        this.utterance = null; // Reset the utterance
      }
    }
}
