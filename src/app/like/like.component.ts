import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {
  @Input('count') likeCount = 0;
  @Input() isLiked = false;
  @Output() onLikeChanged = new EventEmitter();

  handleClick() {
    this.onLikeChanged.emit();
  }
}
