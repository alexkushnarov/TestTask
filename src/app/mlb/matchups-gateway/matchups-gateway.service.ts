import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { environment } from 'environments/environment';

@Injectable()
export class MatchupsGatewayService {

  constructor(
    private http: Http
  ) { }


  getTodayMatchups() {
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    const endpoint = `${environment.api_url}/mlb/fetch/matchups/today`;
    return this.http.get(endpoint, options)
      .map(this.extractData)
      .map((response: any) => {
        const responseData = response;
        return responseData;
      })
      .catch(this.handleError);
  }

  // Private Functions
  // -----------------
  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError (error: Response | any) {
    console.log(error);
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
