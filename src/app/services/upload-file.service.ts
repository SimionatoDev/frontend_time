import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoadFileRhModel } from '../Models/load-file-rh-model';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

apiURL: string = environment.apiURL;

constructor(private http: HttpClient)
{}

UploadApontamentoRh(params:any):Observable<LoadFileRhModel[]> {
  return this.http.post<LoadFileRhModel[]>(`${this.apiURL}loadfilerh`, params);
}

}
