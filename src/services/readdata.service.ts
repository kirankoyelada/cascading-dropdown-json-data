import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ReadDataService {
    constructor(private httpClient: HttpClient) { 
    }

    getData():Observable<any>{
        return this.httpClient.get('./assets/data.json');
    }
    
}