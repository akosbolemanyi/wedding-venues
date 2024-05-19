import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; 
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavComponent } from './shared/sidenav/sidenav.component';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTreeModule } from '@angular/material/tree';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat'
import { RatingsModule } from './pages/ratings/ratings.module';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    RatingsModule,

    // MATERIALS (10)
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatTreeModule,
    MatSlideToggleModule,
    MatSlideToggleModule,
    MatListModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp({"projectId":"wedding-venues-f6f2d","appId":"1:786201182189:web:7d95e4d438678c854cf1e4","storageBucket":"wedding-venues-f6f2d.appspot.com","apiKey":"AIzaSyBT1oi_9G9HDXie-AEp1O42JOMs8Szztmk","authDomain":"wedding-venues-f6f2d.firebaseapp.com","messagingSenderId":"786201182189"}),
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({"projectId":"wedding-venues-f6f2d","appId":"1:786201182189:web:7d95e4d438678c854cf1e4","storageBucket":"wedding-venues-f6f2d.appspot.com","apiKey":"AIzaSyBT1oi_9G9HDXie-AEp1O42JOMs8Szztmk","authDomain":"wedding-venues-f6f2d.firebaseapp.com","messagingSenderId":"786201182189"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
