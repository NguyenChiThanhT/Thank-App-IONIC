// Core components
//key api : 277d0b7a9b5b45c5a11391878c2c0f0d
import {Injectable} from '@angular/core';
import {Http, RequestOptions} from '@angular/http';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsApiService {
  data: any;
  constructor(private http: Http) {
    this.data = null;
  }
  public getPerson(){
    const url = "http://nguyenchithanhfpt.atwebpages.com/api/getalldata-thanksapp.php";
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .then(resJSON =>resJSON.person)
      .catch(error => console.log('Une erreur est survenue ' + error))
  }
  //update countstart
  public updateCountStart(parmas){
    var headers = new Headers();
    headers.append("Access-Control-Allow-Credentials","true")
    headers.append("Access-Control-Allow-Origin","*")
    headers.append("Access-Control-Allow-Methods","PUT")
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    // @ts-ignore
    const requestOptions = new RequestOptions({ headers: headers });
    const url = "http://nguyenchithanhfpt.atwebpages.com/api/updatecountstart.php";
    return this.http.put(url,parmas,requestOptions)
      .toPromise()
      .then(res =>res.json())
      .then(resJSON =>resJSON)
      .catch(error => console.log(error))
  }
  // updatecount
  public updateCount(parmas){
    var headers = new Headers();
    headers.append("Access-Control-Allow-Credentials","true")
    headers.append("Access-Control-Allow-Origin","*")
    headers.append("Access-Control-Allow-Methods","PUT")
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    // @ts-ignore
    const requestOptions = new RequestOptions({ headers: headers });
    const url = "http://nguyenchithanhfpt.atwebpages.com/api/updatecount.php";
    return this.http.put(url,parmas,requestOptions)
      .toPromise()
      .then(res =>res.json())
      .then(resJSON =>resJSON)
      .catch(error => console.log(error))
  }
  //update list person
    public updatePerson(parmas){
      var headers = new Headers();
      headers.append("Access-Control-Allow-Credentials","true")
      headers.append("Access-Control-Allow-Origin","*")
      headers.append("Access-Control-Allow-Methods","PUT")
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      // @ts-ignore
      const requestOptions = new RequestOptions({ headers: headers });
      const url = "http://nguyenchithanhfpt.atwebpages.com/api/updatelistperson.php";
      return this.http.put(url,parmas,requestOptions)
        .toPromise()
        .then(res =>res.json())
        .then(resJSON =>resJSON)
        .catch(error => console.log(error))
    }
  //login
  public login(parmas){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    // @ts-ignore
    const requestOptions = new RequestOptions({ headers: headers });
    const url = "http://moblaze.net/service_login/login";
    return this.http.post(url,parmas,requestOptions)
      .toPromise()
      .then(res =>res.json())
      .then(resJSON =>resJSON)
      .catch(error => console.log(error))
  }

}
