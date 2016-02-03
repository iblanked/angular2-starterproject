/**
 * Created by Efe on 03.02.2016.
 */
import { Component, View } from 'angular2/core'

@Component({
    selector: 'myapp'
})

@View({
    templateUrl: 'src/components/app-component/myapp.html'
})

export class MyApp {

    name: string;

    constructor(){
        this.name = "Efe Özok";
    }

}