import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Data_Especial_CabModel } from '../models/data_especial_cab-model';
import { ParametroData_Especial_Cab01 } from '../parametros/parametro-data_especial_cab01';

@Injectable({
providedIn: 'root',
})
export class Data_Especial_CabService 
{
apiURL: string = environment.apiURL;
constructor(private http: HttpClient) {}
	getDatas_Especiais_Cab(): Observable<Data_Especial_CabModel[]> {
		return this.http.get<Data_Especial_CabModel[]>(`${this.apiURL}Datas_Especiais_Cab`);
	}
	getDatas_Especiais_CabParametro_01(params: ParametroData_Especial_Cab01): Observable<Data_Especial_CabModel[]> {
		return this.http.post<Data_Especial_CabModel[]>(`${this.apiURL}datas_especiais_cab`,params);
	}
	getData_Especial_Cab(id_empresa:number,id:number,dt_inicial:string): Observable<Data_Especial_CabModel> { 
 		return this.http.get<Data_Especial_CabModel >(`${ this.apiURL}data_especial_cab/${id_empresa}/${id}/${dt_inicial}`);
	}
	data_especial_cabInsert(data_especial_cab:Data_Especial_CabModel):Observable<Data_Especial_CabModel> { 
		return this.http.post<Data_Especial_CabModel>(`${this.apiURL}data_especial_cab`, data_especial_cab);
	}
	data_especial_cabUpdate(data_especial_cab:Data_Especial_CabModel):Observable<Data_Especial_CabModel> { 
		return this.http.put<Data_Especial_CabModel>(`${this.apiURL}data_especial_cab`,data_especial_cab);
	}
	data_especial_cabDelete(id_empresa:number,id:number,dt_inicial:string):Observable<any>  { 
 		return this.http.delete<any>(`${this.apiURL}data_especial_cab/${id_empresa}/${id}/${dt_inicial}`);
	}
}