import {Component} from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';
import {NewsApiService} from "../../services/newsapi.service";

/**
 * Generated class for the ModalLikePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-modal-like',
  templateUrl: 'modal-like.html',
})
export class ModalLikePage {
  gaming: string = '';
  person: any;
  id:any;
  newSida: any;
  countstart:any;
  postData:any;
  arrcount:any;
  newcount:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private newsApiService: NewsApiService,
  ) {
    this.person = this.navParams.get("listperson");
    this.id = this.navParams.get("id");
    this.countstart = this.navParams.get("countstart");
    this.newSida = this.person.map((data,index) =>{
      return data;
    })
  }
  ionViewDidLoad() {
    const index = this.newSida.findIndex(e =>e.id ==this.id);
    this.newSida.splice(index,1);
    //console.log(this.newSida);
  }
  dismiss() {
    this.viewCtrl.dismiss();
    this.postData = {
      "countstart": parseInt(this.countstart) -1,
      "id": this.id
    }
    this.newsApiService.updateCountStart(this.postData)
      .then(data =>{
        this.person = data;
      })
      .catch(err =>console.log(err))
  }

  gamingCancel() {
    // this.postData = {
    //   "countstart": parseInt(this.countstart) -1,
    //   "id": this.id
    // }
    // this.newsApiService.updateCountStart(this.postData)
    //   .then(data =>console.log(data))
    //   .catch(err =>console.log(err))
    console.log('Gaming Select, Cancel');
  }

  gamingChange(selectedValue: any) {
     this.arrcount = selectedValue.split(',');
     this.id = this.arrcount[0];
     this.newcount = this.arrcount[1];

    // console.log('Gaming Select, Change value:', selectedValue);
  }
  gotoOK(){
    this.postData = {
      "count": parseInt(this.newcount) -1,
      "id": parseInt(this.id)
    }
    this.newsApiService.updateCount(this.postData)
      .then(data =>{
        this.newSida = data;
        //console.log(data)
      })
      .catch(err =>console.log(err))
    this.viewCtrl.dismiss();
  }
}
