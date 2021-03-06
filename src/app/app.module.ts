// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// Angular
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule  } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FetchCurrentEffect, FetchNextEffect, FetchPreviousEffect, ChangeSizeEffect } from './store/effects/most-viewed-clips-table.effects';
import { FetchGamesEffect } from './store/effects/clips-filter.effects';
import { reducers } from './app.state';

// Components
import { NavLeftComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';
import { ClipTableComponent } from './components/most-viewed-clips-table/most-viewed-clips-table.component';
import { ClipViewerComponent } from './components/clips-viewer/clips-viewer.component';
import { ArticleComponent } from './components/article/article.component';
import { RecentClipsTableComponent } from './components/recent-clips-table/recent-clips-table.component';
import { LoginComponent } from './components/login/login.component';
import { CompleteAuthenticationComponent } from './components/complete-authentication/complete-authentication.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

// Providers
import { ClipsProviderService } from './services/clips-provider.service';
import { GameProviderService } from './services/game-provider.service';
import { UsersProviderService } from './services/users-provider.service';

// Font-Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavLeftComponent,
    ClipTableComponent,
    ClipViewerComponent,
    ArticleComponent,
    RecentClipsTableComponent,
    LoginComponent,
    CompleteAuthenticationComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FontAwesomeModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatCardModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
    [
      { path: 'login', component: LoginComponent},
      { path: 'complete_authentication', component: CompleteAuthenticationComponent},
      { path: '', component: MainComponent},
    ]
    ),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([
      FetchCurrentEffect, FetchNextEffect, FetchPreviousEffect, ChangeSizeEffect, FetchGamesEffect
    ]),
    /*StoreDevtoolsModule.instrument({
      maxAge: 5
    })*/
  ],
  providers: [
    UsersProviderService,
    GameProviderService,
    ClipsProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(<IconDefinition>faDownload);
  }
}
