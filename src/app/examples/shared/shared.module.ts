import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { MessengerComponent } from './messenger/messenger.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [LoaderComponent, MessengerComponent],
    exports: [LoaderComponent, MessengerComponent]
})
export class SharedModule {
}
