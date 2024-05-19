import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Picture } from '../models/Picture';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  // HTTP 

  collectionName ='Pictures'

  constructor(
    private http: HttpClient,
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  loadImageMeta(metaUrl: string): Observable<Array<Picture>> {
    // return this.http.get(environment.hostUrl + '/assets/' + metaUrl) as Observable<Array<Picture>>;
    return this.afs.collection<Picture>(this.collectionName).valueChanges();
  }

  loadImage(imageUrl: string) {
    // return this.http.get(environment.hostUrl + '/assets/images/' + imageUrl, {responseType: 'blob'});
    return this.storage.ref(imageUrl).getDownloadURL();
  }

}
