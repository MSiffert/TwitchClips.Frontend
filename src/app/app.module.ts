import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

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

// Store
import { StoreModule } from '@ngrx/store';
import { mostViewedClipsTableStateReducer } from './store/reducers/mostViewedClipsTableState.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FetchCurrentEffect, FetchNextEffect, ChangeGameEffect, FetchPreviousEffect, ChangeSizeEffect } from './store/effects/mostViewedClipsTableState.effects';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ClipsProviderService } from './services/clips-provider.service';
import { GameProviderService } from './services/game-provider.service';
import { NavLeftComponent } from './components/nav-left/nav-left.component';
import { HeaderComponent } from './components/header/header.component';
import { ClipTableComponent } from './components/clip-table/clip-table.component';
import { ClipViewerComponent } from './components/clip-viewer/clip-viewer.component';
import { NavTopComponent } from './components/nav-top/nav-top.component';

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
    NavTopComponent,
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
    /*StoreDevtoolsModule.instrument({
      maxAge: 10
    })*/
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
