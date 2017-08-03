import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { environment } from 'environments/environment';

@Injectable()
export class ScheduleGatewayService {

  constructor(
    private http: Http
  ) { }

  /**
   *  MLB Schedule Gateway - mlbScheduleGateway
   *  -----------------------------------------
   *  @query-param team
   *  @returns Observable<R>
   *  Make a GET call to the /mlb/fetch/schedule/gateway?date=mm-dd-yyyy
   *  date is optional. If left blank, returns current day
   *  API endpoint and return the extracted response data.
   */
  mlbScheduleGateway(date) {
    // TODO: Add a param for the service function for API query param
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    //const endpoint = `${environment.api_url}/mlb/fetch/schedule/gateway?date=${date}`;
    const endpoint = 'https://api.myjson.com/bins/1f6ojl';
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
