import {Component} from '@angular/core';
import {AlertController, ModalController, NavController} from 'ionic-angular';
import {NewsApiService} from "../../services/newsapi.service";
import {ModalLikePage} from "../modal-like/modal-like";
import {ListCountstartPage} from "../list-countstart/list-countstart";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listPerson: any;
  newCountStart: number;
  postData: any;
  message: string

  constructor(
    public navCtrl: NavController,
    private newsApiService: NewsApiService,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    this.newCountStart = 0;
    this.newsApiService.getPerson()
      .then(data => {
        this.listPerson = data;
      })
      .catch(err => console.log(err))
  }

  showDailogLike(countstart, id: number) {
    this.newCountStart = parseInt(countstart) + 1;
   // console.log(this.newCountStart);
    this.postData = {
      "countstart": this.newCountStart,
      "id": id
    }
    this.newsApiService.updateCountStart(this.postData)
      .then(data => {
        this.listPerson = data;
        const modal = this.modalCtrl.create(
          ModalLikePage,
          {
            "listperson": this.listPerson,
            "id": id,
            "countstart": this.newCountStart
          });
        modal.present();
      })
      .catch(err => console.log(err))
  }

  //show modal
  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.postData = {
              "email": "admin@admin.com",
              "password": "adminadmin"
             // "password": data.title
            }
            this.newsApiService.login(this.postData)
              .then(res => {
               // console.log(res);
                this.message = res[1].response.message;
                if (this.message === "Login Success") {
                       this.goToListcount();
                } else {
                  alert("that bai")
                }
              })
              .catch(err => console.log(err))
            console.log('Saved clicked', data);
          }
        }
      ]
    });
    prompt.present();
  }
  //goto list count
  goToListcount() {
    this.navCtrl.push(ListCountstartPage, {"listcount": this.listPerson});//goto listcount
  }
}
