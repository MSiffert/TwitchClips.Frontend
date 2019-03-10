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

// Store
import { StoreModule } from '@ngrx/store';
import { mostViewedClipsTableStateReducer } from './store/reducers/mostViewedClipsTableState.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FetchCurrentEffect, FetchNextEffect, ChangeGameEffect, FetchPreviousEffect, ChangeSizeEffect } from './store/effects/mostViewedClipsTableState.effects';

// Components
import { ClipsProviderService } from './services/clips-provider.service';
import { GameProviderService } from './services/game-provider.service';
import { NavLeftComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';
import { ClipTableComponent } from './components/most-viewed-clips-table/most-viewed-clips-table.component';
import { ClipViewerComponent } from './components/clips-viewer/clips-viewer.component';
import { ArticleComponent } from './components/article/article.component';
import { RecentClipsTableComponent } from './components/recent-clips-table/recent-clips-table.component';

// Font-Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faDownload, faAngleUp } from '@fortawesome/free-solid-svg-icons';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavLeftComponent,
    ClipTableComponent,
    ClipViewerComponent,
    ArticleComponent,
    RecentClipsTableComponent,
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
    MatCardModule,
    MatTabsModule,
    RouterModule.forRoot(
    [
      { path: '', component: AppComponent},
    ]
    ),
    StoreModule.forRoot({}),
    StoreModule.forFeature('mostViewedClipsTableState', mostViewedClipsTableStateReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([
      FetchCurrentEffect, FetchNextEffect, FetchPreviousEffect, ChangeGameEffect, ChangeSizeEffect
    ])
  ],
  providers: [
    GameProviderService,
    ClipsProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(<IconDefinition>faDownload);
    library.add(<IconDefinition>faAngleUp);
  }
}
