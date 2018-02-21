import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: './examples/http/http-client.module#HttpClientModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [

    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

