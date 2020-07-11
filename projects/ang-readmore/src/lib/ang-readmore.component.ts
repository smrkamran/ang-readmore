import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "ang-readmore",
  template: `
    <p *ngIf="show">
      {{ stringToShow }}
      <span *ngIf="showReadMore" (click)="toggle()" [style.color]="linkColor">{{
        isCollapsed ? "read more" : "read less"
      }}</span>
    </p>
  `,
  styles: ["span{cursor: pointer;} p{white-space: pre-line;}"],
})
export class AngReadmoreComponent implements OnInit {
  show = true;
  showReadMore = true;
  stringToShow;
  @Input() text = "NO-TEXT";
  @Input() length = 20;
  @Input() linkColor = "#26A69A";
  isCollapsed = true;

  ngOnInit(): void {
    this.stringToShow = this.text;
    if (this.text.length > this.length) {
      this.stringToShow = this.text.slice(0, this.length - 1) + "...";
    } else {
      this.showReadMore = false;
    }

    if (this.text.length === 0) {
      this.show = false;
    }
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed;

    if (this.isCollapsed) {
      this.stringToShow = this.text.slice(0, this.length - 1) + "...";
    } else {
      this.stringToShow = this.text;
    }
  }
}
