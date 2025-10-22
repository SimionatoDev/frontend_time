import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Data_Especial_DetModel } from '../models/data_especial_det-model';
import { ParametroData_Especial_Det01 } from '../parametros/parametro-data_especial_det01';
import { ParametroListaUsuarioBy_Especial01 } from '../parametros/Parametro-Lista-Usuario-By_Especial01';
import { Data_Especial_UsuariosModel } from '../Models/Data_Especial_Usuarios-Model';

@Injectable({
providedIn: 'root',
})
export class Data_Especial_DetService
{
apiURL: string = environment.apiURL;
constructor(private http: HttpClient) {}
	getDatas_Especiais_Det(): Observable<Data_Especial_DetModel[]> {
		return this.http.get<Data_Especial_DetModel[]>(`${this.apiURL}Datas_Especiais_Det`);
	}
	getDatas_Especiais_DetParametro_01(params: ParametroData_Especial_Det01): Observable<Data_Especial_DetModel[]> {
		return this.http.post<Data_Especial_DetModel[]>(`${this.apiURL}datas_especiais_det`,params);
	}
	getData_Especial_Det(id_empresa:number,id_cab:number,id_usuario:number,data:string): Observable<Data_Especial_DetModel> {
 		return this.http.get<Data_Especial_DetModel >(`${ this.apiURL}data_especial_det/${id_empresa}/${id_cab}/${id_usuario}/${data}`);
	}
	data_especial_detInsert(data_especial_det:Data_Especial_DetModel):Observable<Data_Especial_DetModel> {
		return this.http.post<Data_Especial_DetModel>(`${this.apiURL}data_especial_det`, data_especial_det);
	}
	data_especial_detUpdate(data_especial_det:Data_Especial_DetModel):Observable<Data_Especial_DetModel> {
		return this.http.put<Data_Especial_DetModel>(`${this.apiURL}data_especial_det`,data_especial_det);
	}
	data_especial_detDelete(id_empresa:number,id_cab:number,id_usuario:number,data:string):Observable<any>  {
 		return this.http.delete<any>(`${this.apiURL}data_especial_det/${id_empresa}/${id_cab}/${id_usuario}/${data}`);
	}
  lista_usuario_by_especial(params : ParametroListaUsuarioBy_Especial01):Observable<Data_Especial_UsuariosModel[]>  {
    return this.http.post<Data_Especial_UsuariosModel[]>(`${this.apiURL}listausuariobyespecial`,params);
 }

}
