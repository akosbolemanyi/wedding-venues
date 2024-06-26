import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  collectionName = 'Comments';

  constructor(private afs: AngularFirestore) { }

  create(comment: Comment) {
    comment.id = this.afs.createId();
    return this.afs.collection<Comment>(this.collectionName).doc(comment.id).set(comment);
  }

  read() {
    return this.afs.collection<Comment>(this.collectionName).valueChanges();
  }

  update (comment: Comment) {
    return this.afs.collection<Comment>(this.collectionName).doc(comment.id).set(comment);
  }

  delete(id: string) {
    return this.afs.collection<Comment>(this.collectionName).doc(id).delete();
  }

  // Összetett lekérdezés - 01
  getCommentByImageId(imageId: string) {
    return this.afs.collection<Comment>(this.collectionName, ref => ref.where('imageId', '==', imageId).orderBy('date', 'asc')).valueChanges();
  }

  // Összetett lekérdezés - 02
  getCommentsSortedByUsername() { 
    return this.afs.collection<Comment>(this.collectionName, ref => ref.orderBy('username')).valueChanges();
  }
}
