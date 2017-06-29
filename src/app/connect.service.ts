import { Injectable }              from '@angular/core';
import { Http, Response, Jsonp }          from '@angular/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConnectService {

  private heroesUrl = 'https://api.vk.com/method/fave.getPosts?count=1000&extended=1&v=5.52&access_token=f26077595b856fab5bac130fc739c143990197b972773a9a7e06e7c8bad6906c971c2d91c36353189d53e&callback=JSONP_CALLBACK';  // URL to web API
  constructor (private http: Jsonp) {}
  getHeroes(): Promise<any> {
    return this.http.get(this.heroesUrl)
             .toPromise()
             .then(response => response.json().response as User);
  }

}

/*var arr = [];	
var a = API.wall.get({"owner_id":-41852250,"count":100,"offset":0});    
var b = API.wall.get({"owner_id":-41852250,"count":100,"offset":100}); 
arr.push(a.items);
arr.push(b.items); 
return {"length":arr[0].length};

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