import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app';

  post = {
    title: 'my post',
    isFavorite: true,
  };

  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: false,
    likesCount: 0,
  };

  onFavoriteChanged(value: FavoriteChangedEventArgs) {
    console.log('changed', value.newValue);
  }

  handleLikeChanged() {
    const { isLiked } = this.tweet;
    this.tweet.likesCount += isLiked ? -1 : 1;
    this.tweet.isLiked = !isLiked;
  }
}
