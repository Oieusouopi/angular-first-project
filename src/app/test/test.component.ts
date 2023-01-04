import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  public name = "test";
  public isDisabled = false;

  onClick = (value: String) => {
    console.log("Hello Rafael");
    console.log(value);
  }
}
