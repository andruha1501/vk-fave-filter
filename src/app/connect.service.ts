import { Injectable }              from '@angular/core';
import { Http, Response, Jsonp }          from '@angular/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConnectService {
  private code = `var offset = 100;var arr = API.wall.get({owner_id:-41852250,count:100,offset:0}).items; while(offset < 2500) {arr = arr %2B API.wall.get({owner_id:-41852250,count:100,offset:offset}).items;offset = offset %2B 100;}return arr;`;
  private heroesUrl = `https://api.vk.com/method/execute?code=${this.code}&v=5.52&access_token=e805910c69817e2a58fce24e9fa00bf2207f03aea2496cac2f694cef122e54cf7033226a5ff0f483a19da&callback=JSONP_CALLBACK`;  // URL to web API
  constructor (private http: Jsonp) {}
  getHeroes(): Promise<any> {
    return this.http.get(this.heroesUrl)
             .toPromise()
             .then(response => response.json().response as any)
            
  }

}

/* var offset = 0;	
'var arr = API.wall.get({"owner_id":"-41852250","count":"2","offset":"offset"});'
while (offset < 1000) {
  arr = ',' arr + API.wall.get({owner_id:-41852250,count:2,offset:offset});
  offset = offset + 100;
}
return arr;

var i = 0;
var members = [];
var offset = 0;
while(i < 10){
var resp = API.fave.getPosts({"extended":1,"count":1000,"offset":offset});  
members.push(resp.items);
i = i + 1;
offset = offset + 1000;
}
return {"items":members[0].id,"length":members[0]id.length};

*/