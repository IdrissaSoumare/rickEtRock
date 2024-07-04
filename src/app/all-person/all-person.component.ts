import { Component } from '@angular/core';
import { RickService } from 'src/rick.service';

@Component({
  selector: 'app-all-person',
  templateUrl: './all-person.component.html',
  styleUrls: ['./all-person.component.css']
})
export class AllPersonComponent {

  character: any | undefined = [];
  canDraw = false;

  constructor(private rickService: RickService) { }

  ngOnInit(): void {
    // this.checkCooldown();
    this.getRandomCharacters();
  }

  getRandomCharacters(): void {
    this.rickService.getRandomCharacter().subscribe(data => {
      this.character = data;
      console.log(data);

    });
  }

  setCooldown(): void {
    this.canDraw = false;
    localStorage.setItem('lastDrawTime', Date.now().toString());
    setTimeout(() => this.canDraw = true, 2 * 60 * 60 * 1000); // 2 hours cooldown
  }

  checkCooldown(): void {
    const lastDrawTimeStr = localStorage.getItem('lastDrawTime');
    const lastDrawTime = lastDrawTimeStr ? parseInt(lastDrawTimeStr, 10) : null;
    if (lastDrawTime) {
      const now = Date.now();
      const cooldown = 2 * 60 * 60 * 1000;
      if (now - lastDrawTime < cooldown) {
        this.canDraw = false;
        setTimeout(() => this.canDraw = true, cooldown - (now - lastDrawTime));
      }
    }
  }

}
