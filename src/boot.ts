/**
 * Created by Efe on 03.02.2016.
 */
import { bootstrap } from 'angular2/platform/browser'
import { MyApp as app } from './components/app-component/MyApp'

bootstrap( app )
    .catch( err => console.log( err ) );