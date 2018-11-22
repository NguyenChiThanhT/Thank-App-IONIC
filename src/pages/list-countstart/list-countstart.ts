import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {File, IWriteOptions} from '@ionic-native/file';
import {AngularFireStorage} from 'angularfire2/storage';
import { IOSFilePicker } from '@ionic-native/file-picker';
@Component({
  selector: 'page-list-countstart',
  templateUrl: 'list-countstart.html',
})
export class ListCountstartPage {
  listcount: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private file: File,
    private storage: AngularFireStorage,
    private filePicker: IOSFilePicker
  ) {
    this.listcount = this.navParams.get("listcount");
    this.listcount.sort(function (a, b) {
      return b.countstart - a.countstart;
    });

  }

  ionViewDidLoad() {

  }

//dowload file csv
  dowloadFile() {
    this.listcount = [];
    this.filePicker.pickFile()
      .then(uri => {
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
                })
                console.log(result);
          })
          .catch(err =>console.log("err"))
      })
      .catch(err => console.log('Error', "rr"));
  }

  savefile() {
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
