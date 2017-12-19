import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IntroPage } from '../intro/intro';
import { MovieProvider } from '../../providers/movie/movie';
import { ControlContainer } from '@angular/forms/src/directives/control_container';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MovieProvider
  ]

})
export class FeedPage {
  public objeto_feed = {
    titulo: "Charles Franca",
    data: "November 5, 1955",
    descricao:"criando app em ionic3",
    qntd_likes: 12,
    qntd_coments: 4,
    time_coments: "11h ago"
  }

  public Nome_usuario:string = "Charles Franca do Código";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider) {
  }

  public somaDoisNumeros(num1:number,num2:number):void{
    //alert(num1+num2);
  }

  ionViewDidLoad() {// usa a função quando a página é carregada!
    this.movieProvider.getLatestMovies().subscribe(
    data =>{
      const response = (data as any);
      const objeto_retorno = JSON.parse(response._body);
      console.log(objeto_retorno + "    1");
      //console.log((data as any)._body + "   1");
     },error => {
       console.log(error + "   2");
     });
  }

  goToIntroPage(){
    //this.navCtrl.setRoot(IntroPage);
    //this.navCtrl.popToRoot();
  }
}
/*git remote add origin https://github.com/Norion09/Udemy---Ionic-3-para-Iniciantes
git push -u origin master*/
