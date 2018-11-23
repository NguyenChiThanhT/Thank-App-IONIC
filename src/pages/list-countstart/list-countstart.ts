import {Component,ViewChild} from '@angular/core';
import {NavController, NavParams, Navbar, LoadingController, AlertController} from 'ionic-angular';
import {File, IWriteOptions} from '@ionic-native/file';
import {AngularFireStorage} from 'angularfire2/storage';
import { IOSFilePicker } from '@ionic-native/file-picker';
import {NewsApiService} from "../../services/newsapi.service";
import {HomePage} from "../home/home";
@Component({
  selector: 'page-list-countstart',
  templateUrl: 'list-countstart.html',
})
export class ListCountstartPage {
  @ViewChild(Navbar) navBar: Navbar;

  listcount: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private file: File,
    private storage: AngularFireStorage,
    private filePicker: IOSFilePicker,
    private newsApiService: NewsApiService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    this.listcount = this.navParams.get("listcount");
    this.listcount.sort(function (a, b) {
      return b.countstart - a.countstart;
    });

  }
  setBackButtonAction(){
    this.navBar.backButtonClick = () => {
      //Write here wherever you wanna do
     // this.navCtrl.pop();
      this.navCtrl.push(HomePage)
    }
  }
  ionViewDidLoad(){
    // @ts-ignore
    this.setBackButtonAction();
  }
  //alert
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: 'Please check firebase !',
      buttons: ['OK']
    });
    alert.present();
  }
  //is loading
  presentLoadingDefault(text) {
    let loading = this.loadingCtrl.create({
      content: text
    });

    loading.present();

    setTimeout(() => {
      if(text ==='Please wait...'){
        loading.dismiss();
        this.presentAlert()
      } else {
        loading.dismiss();
      }
    }, 1000);
  }
//dowload file csv
  dowloadFile() {
    this.listcount = [];
    this.filePicker.pickFile()
      .then(uri => {
        this.presentLoadingDefault('Loading...');
        let correctPath = uri.substr(0, uri.lastIndexOf('/') + 1);
        let convertPath = "file://" + correctPath;
        let currentName = uri.substring(uri.lastIndexOf('/') + 1);
        this.file.readAsText(convertPath, currentName)
          .then(data =>{
                var lines = data.split('\r\n');
                var headers = lines[0].split(",");
                var result = [];
                for (var i = 1; i <lines.length; i++) {
                      var obj = {};
                      var row = lines[i].split(",");
                      for(var j= 0;j<row.length;j++){
                          obj[headers[j]] = row[j];
                      }
                   result.push(obj);
                }
                result.pop();
                result.map(e =>{
                     this.listcount.push(e);
                     this.newsApiService.updatePerson(e)
                       .then(data =>console.log(data))
                       .catch(err =>console.log(err))
                });


          })
          .catch(err =>console.log("err"))
      })
      .catch(err => console.log('Error', "rr"));
  }

  savefile() {
    this.presentLoadingDefault('Please wait...');
    let csvData = this.ConvertToCSV(this.listcount);
    const opt: IWriteOptions = {replace: true}
    this.file.writeFile(this.file.documentsDirectory, 'data.csv', csvData, opt)
      .then(data => {
        const sessinID = new Date().getTime();
        const nameref = this.storage.ref('file').child(`${sessinID}.csv`);
        this.file.readAsDataURL(this.file.documentsDirectory, 'data.csv')
          .then(res => {
            return nameref.putString(res, 'data_url')
              .then(ha => {
                console.log(ha);
              })
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }

  ConvertToCSV(objArray) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = "";
    for (let index in objArray[0]) {
      //Now convert each value to string and comma-separated
      row += index + ',';
    }
    row = row.slice(0, -1);
    //append Label row with line break
    str += row + '\r\n';

    for (let i = 0; i < array.length; i++) {
      let line = '';
      for (let index in array[i]) {
        if (line != '') line += ',';
        line += array[i][index];
      }
      str += line + '\r\n';
    }
    return str;
  }
}
