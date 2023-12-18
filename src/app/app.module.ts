import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MenuComponent } from './vistas/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp({"projectId":"ludoteca-9561e","appId":"1:857823905548:web:fd5b5a2a8cb9d42b5aeb29","storageBucket":"ludoteca-9561e.appspot.com","apiKey":"AIzaSyBWV_cWTqpHrSJQcm07BH84n6q8j4K0gnc","authDomain":"ludoteca-9561e.firebaseapp.com","messagingSenderId":"857823905548"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
