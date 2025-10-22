import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Apontamento_RhModel } from '../models/apontamento_rh-model';
import { ParametroApontamento_Rh01 } from '../parametros/parametro-apontamento_rh01';
import { ParametroComparativoRh } from '../parametros/parametro-comparativo-rh';

@Injectable({
providedIn: 'root',
})
export class Apontamento_RhService
{
apiURL: string = environment.apiURL;
constructor(private http: HttpClient) {}
	getApontamentos_Rh(): Observable<Apontamento_RhModel[]> {
		return this.http.get<Apontamento_RhModel[]>(`${this.apiURL}Apontamentos_Rh`);
	}
	getApontamentos_RhParametro_01(params: ParametroApontamento_Rh01): Observable<Apontamento_RhModel[]> {
		return this.http.post<Apontamento_RhModel[]>(`${this.apiURL}apontamentos_rh`,params);
	}
	getApontamento_Rh(id_empresa:number,id_usuario:number,apontamento:string): Observable<Apontamento_RhModel> {
 		return this.http.get<Apontamento_RhModel >(`${ this.apiURL}apontamento_rh/${id_empresa}/${id_usuario}/${apontamento}`);
	}
	apontamento_rhInsert(apontamento_rh:Apontamento_RhModel):Observable<Apontamento_RhModel> {
		return this.http.post<Apontamento_RhModel>(`${this.apiURL}apontamento_rh`, apontamento_rh);
	}
	apontamento_rhUpdate(apontamento_rh:Apontamento_RhModel):Observable<Apontamento_RhModel> {
		return this.http.put<Apontamento_RhModel>(`${this.apiURL}apontamento_rh`,apontamento_rh);
	}
	apontamento_rhDelete(id_empresa:number,id_usuario:number,apontamento:string):Observable<any>  {
 		return this.http.delete<any>(`${this.apiURL}apontamento_rh/${id_empresa}/${id_usuario}/${apontamento}`);
	}
	apontamento_comparativorhxts(apontamento_rh:ParametroComparativoRh):Observable<any> {
		return this.http.post<any>(`${this.apiURL}comparativorhxts`, apontamento_rh);
	}

}
