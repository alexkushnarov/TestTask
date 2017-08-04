import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {environment} from 'environments/environment';

@Injectable()
export class BetMetricsService {

  constructor(private http: Http) {
  }

  /**
   *  MLB Bet Metrics - mlbBetMetrics
   *  -----------------------------------------
   *  @query-param team
   *  @returns Observable<R>
   *  Make a GET call to the /mlb/fetch/bet_metrics?bunchofstuff
   *  date is optional. If left blank, returns current day
   *  API endpoint and return the extracted response data.
   */
  mlbBetMetrics(bet_type, model, outcome, win_prob_max, win_prob_min, ev_max, ev_min, scale) {
    // TODO: Add a param for the service function for API query param
    const headers = new Headers();
    const options = new RequestOptions({headers: headers});
    const endpoint = `${environment.api_url}/mlb/bet_metrics?bet_id=${bet_type}&model=${model}&outcome=${outcome}&win_prob_max=${win_prob_max}&win_prob_min=${win_prob_min}&ev_max=${ev_max}&ev_min=${ev_min}&scale=${scale}`;
    // const endpoint = 'https://api.myjson.com/bins/ix79t';
    return this.http.get(endpoint, options)
      .map(this.extractData)
      .map((response: any) => {
        return response;
      })
      .catch(this.handleError);
  }

  // Private Functions
  // -----------------
  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
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
