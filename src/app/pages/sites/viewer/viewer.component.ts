import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Picture } from '../../../shared/models/Picture';
import { SitesService } from '../../../shared/services/sites.service';
import { CommentService } from '../../../shared/services/comment.service';
import { Comment } from '../../../shared/models/Comment';
import { User } from '../../../shared/models/User'
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, OnChanges {

  @Input() imageInput?: Picture;
  loadedImage?: string;
  comments: Array<Comment> = [];
  commentsForm: FormGroup;
  user?: User;


  constructor(
    private fb: FormBuilder,
    private sitesService: SitesService,
    private commentService: CommentService,
    private userService: UserService
  ) {
    this.commentsForm = this.createForm({
      id: '',
      username: '',
      comment: '',
      date: new Date().getTime(),
      imageId: this.imageInput?.id || ''
    });
  }

  ngOnChanges(): void {
    if (this.imageInput?.id) {
      this.commentsForm.get('imageId')?.setValue(this.imageInput.id);
      this.sitesService.loadImage(this.imageInput.image_url).subscribe(data => {
        this.loadedImage = data;
      });
      this.commentService.getCommentByImageId(this.imageInput.id).subscribe(comments => {
        this.comments = comments;
      })
    }
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data => {
      this.user = data;
      this.commentsForm.get('username')?.setValue(this.user?.username);
    }, error => {
      console.error(error);
    });
  }

  createForm(model: Comment): FormGroup {
    const formGroup = this.fb.group({
      id: [model.id],
      username: [model.username, Validators.required],
      comment: [model.comment, [Validators.required, Validators.minLength(6)]],
      date: [model.date],
      imageId: [model.imageId]
    });
    return formGroup;
  }

  addComment() {
    if (this.commentsForm.valid) {
      const comment: Comment = {
        id: '', // Generate a new ID
        username: this.commentsForm.get('username')?.value || '',
        comment: this.commentsForm.get('comment')?.value || '',
        date: new Date().getTime(),
        imageId: this.imageInput?.id || ''
      };

      this.commentService.create(comment).then(() => {
        console.log('Sikeres kommentelés!');
      }).catch(error => {
        console.error(error);
      });
    }
  }
}



/*
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Comment } from '../../../shared/models/Comment';
import { FormBuilder, Validators } from '@angular/forms';
import { Picture } from '../../../shared/models/Picture';
import { SitesService } from '../../../shared/services/sites.service';
import { CommentService } from '../../../shared/services/comment.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.scss'
})
export class ViewerComponent implements OnInit, OnChanges {

  @Input() imageInput?: Picture;
  loadedImage?: string;

  // commentObject: any = {};
  comments: Array<Comment> = [];

  commentsForm = this.createForm({
    id: '',
    username: '',
    comment: '',
    date: new Date(),
    imageId: this.imageInput?.id
  });

  constructor (
    private fb: FormBuilder,
    private sitesService: SitesService,
    private commentService: CommentService  
  ) {}

  ngOnChanges(): void {
    if (this.imageInput?.id) {
      this.commentsForm.get('iamegId')?.setValue(this.imageInput.id);
      this.sitesService.loadImage(this.imageInput.image_url).subscribe(data => {
        this.loadedImage = data
        /*let reader = new FileReader();
        reader.readAsDataURL(data);
        reader.onloadend = () => {
          this.loadedImage = reader.result as string;
        }
      });
    }
  }

  ngOnInit(): void {
    
  } 

  createForm(model: Comment) {
    let formGroup = this.fb.group(model);
    formGroup.get('username')?.addValidators(Validators.required);
    formGroup.get('comment')?.addValidators([Validators.required, Validators.minLength(6)]);
    return formGroup;
  }

  addComment() {
      if (this.commentsForm.valid) {
        if (this.commentsForm.get('username') && this.commentsForm.get('comment')) {
          this.commentsForm.get('date')?.setValue(new Date());
          // SPREAD OPERÁTOR
          // this.comments.push({...this.commentsForm.value});

          this.commentService.create(this.commentsForm.value).then(_ => {
            console.log('Sikeres kommentelés!');
          }).catch(error => {
            console.error(error);
          });

        }
      }
  }

}
*/
