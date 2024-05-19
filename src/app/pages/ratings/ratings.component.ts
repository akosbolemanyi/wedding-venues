import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../shared/services/comment.service';
import { Comment } from '../../shared/models/Comment';

@Component({
  selector: 'app-viewer',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {

  comments: Array<Comment> = [];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getCommentsSortedByUsername().subscribe(comments => {
      console.log('Comments loaded:', comments);
      this.comments = comments;
    }, error => {
      console.error('Error loading comments:', error);
    });
  }
}