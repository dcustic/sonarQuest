import { ViewParticipatedQuestComponent } from './pages/quest-page/components/participated-quests/components/view-participated-quest/view-participated-quest.component';
import { GamemasterQuestEditComponent } from './pages/gamemaster-page/components/gamemaster-quest/components/gamemaster-quest-edit/gamemaster-quest-edit.component';
import { QuestPageComponent } from './pages/quest-page/quest-page.component';
import { MarketplacePageComponent } from './pages/marketplace-page/marketplace-page.component';

import { StartPageComponent } from './pages/start-page/start-page.component';
import {
  CovalentDataTableModule, CovalentPagingModule, CovalentSearchModule, TdMediaService,
  TdMediaToggleDirective
} from '@covalent/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CovalentLayoutModule } from '@covalent/core';
import { AppComponent } from './app.component';
import {
  MatListModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatCardModule, MatProgressBarModule,
  MatGridListModule, MatTooltipModule, MatButtonModule, MatProgressSpinnerModule, MatSelectModule, MatTabsModule,
  MatTableModule, MatDialogModule, MatInputModule, MatCheckboxModule
} from '@angular/material';
import { MyAvatarPageComponent } from './pages/my-avatar-page/my-avatar-page.component';
import { AdventurePageComponent } from "./pages/adventure-page/adventure-page.component";
import { DeveloperService } from "./services/developer.service";
import { Http, HttpModule } from "@angular/http";
import { WorldService } from "./services/world.service";
import { FormsModule } from "@angular/forms";
import { GamemasterPageComponent } from './pages/gamemaster-page/gamemaster-page.component';
import { GamemasterWorldComponent } from './pages/gamemaster-page/components/gamemaster-world/gamemaster-world.component';
import { GamemasterAdventureComponent } from './pages/gamemaster-page/components/gamemaster-adventure/gamemaster-adventure.component';
import { GamemasterQuestComponent } from './pages/gamemaster-page/components/gamemaster-quest/gamemaster-quest.component';
import { GamemasterTaskComponent } from './pages/gamemaster-page/components/gamemaster-task/gamemaster-task.component';
import { EditWorldComponent } from './pages/gamemaster-page/components/gamemaster-world/components/edit-world/edit-world.component';
import { AdventureService } from "./services/adventure.service";
import { QuestService } from "./services/quest.service";
import { TaskService } from "./services/task.service";
import { GamemasterStandardTaskComponent } from './pages/gamemaster-page/components/gamemaster-task/components/gamemaster-standard-task/gamemaster-standard-task.component';
import { GamemasterSpecialTaskComponent } from './pages/gamemaster-page/components/gamemaster-task/components/gamemaster-special-task/gamemaster-special-task.component';
import { StandardTaskService } from "./services/standard-task.service";
import { SpecialTaskService } from "./services/special-task.service";
import { GamemasterQuestCreateComponent } from './pages/gamemaster-page/components/gamemaster-quest/components/gamemaster-quest-create/gamemaster-quest-create.component';
import { GamemasterAddFreeTaskComponent } from './pages/gamemaster-page/components/gamemaster-quest/components/gamemaster-quest-create/components/gamemaster-add-free-task/gamemaster-add-free-task.component';
import { GamemasterSuggestTasksComponent } from './pages/gamemaster-page/components/gamemaster-quest/components/gamemaster-quest-create/components/gamemaster-suggest-tasks/gamemaster-suggest-tasks.component';
import { GamemasterSpecialTaskCreateComponent } from './pages/gamemaster-page/components/gamemaster-task/components/gamemaster-special-task/components/gamemaster-special-task-create/gamemaster-special-task-create.component';
import { GamemasterSpecialTaskEditComponent } from './pages/gamemaster-page/components/gamemaster-task/components/gamemaster-special-task/components/gamemaster-special-task-edit/gamemaster-special-task-edit.component';
import { GamemasterStandardTaskEditComponent } from './pages/gamemaster-page/components/gamemaster-task/components/gamemaster-standard-task/components/gamemaster-standard-task-edit/gamemaster-standard-task-edit.component';
import { GamemasterAdventureCreateComponent } from './pages/gamemaster-page/components/gamemaster-adventure/components/gamemaster-adventure-create/gamemaster-adventure-create.component';
import { GamemasterAdventureEditComponent } from './pages/gamemaster-page/components/gamemaster-adventure/components/gamemaster-adventure-edit/gamemaster-adventure-edit.component';
import { GamemasterAddFreeQuestComponent } from './pages/gamemaster-page/components/gamemaster-adventure/components/gamemaster-adventure-create/components/gamemaster-add-free-quest/gamemaster-add-free-quest.component';
import { ParticipatedQuestsComponent } from './pages/quest-page/components/participated-quests/participated-quests.component';
import { AvailableQuestsComponent } from './pages/quest-page/components/available-quests/available-quests.component';
import { ViewAvailableQuestComponent } from './pages/quest-page/components/available-quests/components/view-available-quest/view-available-quest.component';
import { ParticipationService } from './services/participation.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule,HttpClient } from '@angular/common/http';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}



@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    AdventurePageComponent,
    QuestPageComponent,
    MarketplacePageComponent,
    MyAvatarPageComponent,
    GamemasterPageComponent,
    GamemasterWorldComponent,
    GamemasterAdventureComponent,
    GamemasterQuestComponent,
    GamemasterTaskComponent,
    EditWorldComponent,
    GamemasterStandardTaskComponent,
    GamemasterSpecialTaskComponent,
    GamemasterQuestCreateComponent,
    GamemasterAddFreeTaskComponent,
    GamemasterSuggestTasksComponent,
    GamemasterSpecialTaskCreateComponent,
    GamemasterSpecialTaskEditComponent,
    GamemasterStandardTaskEditComponent,
    GamemasterAdventureCreateComponent,
    GamemasterAdventureEditComponent,
    GamemasterAddFreeQuestComponent,
    GamemasterQuestEditComponent,
    ParticipatedQuestsComponent,
    AvailableQuestsComponent,
    ViewAvailableQuestComponent,
    ViewParticipatedQuestComponent
  ],
  entryComponents: [
    EditWorldComponent,
    GamemasterQuestCreateComponent,
    GamemasterAddFreeTaskComponent,
    GamemasterSuggestTasksComponent,
    GamemasterSpecialTaskCreateComponent,
    GamemasterSpecialTaskEditComponent,
    GamemasterStandardTaskEditComponent,
    GamemasterAdventureCreateComponent,
    GamemasterAdventureEditComponent,
    GamemasterAddFreeQuestComponent,
    GamemasterQuestEditComponent,
    ViewAvailableQuestComponent,
    ViewParticipatedQuestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CovalentLayoutModule,
    MatListModule,
    MatIconModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatProgressBarModule,
    MatGridListModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpModule,
    MatSelectModule,
    FormsModule,
    MatTabsModule,
    CovalentDataTableModule,
    CovalentSearchModule,
    CovalentPagingModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [TdMediaService, DeveloperService, WorldService, AdventureService, QuestService, TaskService, StandardTaskService, SpecialTaskService, ParticipationService],
  bootstrap: [AppComponent]
})
export class AppModule { }