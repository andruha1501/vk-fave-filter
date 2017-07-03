import { Injectable }              from '@angular/core';
import { Response, Jsonp }         from '@angular/http';
import { Observable }              from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ConnectService {
  private accessToken: string = "d80ad6ef9197cfcf52975d725638112bdfe75997dcc2d2dc58f782b4c5972eade4d28a5b166a8844a8e96";
  
  constructor (private http: Jsonp) {}

  getCountPosts():Observable<any> {
    let code = `return API.wall.get({owner_id:-41852250,count:1}).count;`;
    return this.http.get(`https://api.vk.com/method/execute?code=${code}&v=5.52&access_token=${this.accessToken}&callback=JSONP_CALLBACK`).map(this.extractData);
  }

  getData(offsetStart:number, offsetFinish:number):Observable<any> {
    let code = `var offset = ${offsetStart};var arr = []; while(offset < ${offsetFinish}) {arr = arr %2B API.wall.get({owner_id:-41852250,count:100,offset:offset}).items;offset = offset %2B 100;}return arr;`;
    let url = `https://api.vk.com/method/execute?code=${code}&v=5.52&access_token=${this.accessToken}&callback=JSONP_CALLBACK`;  // URL to web API
    return this.http.get(url).map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.response || {};
  }
}

