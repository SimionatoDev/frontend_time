import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ticket_RealModel } from '../models/ticket_real-model';
import { ParametroTicket_Real01 } from '../parametros/parametro-ticket_real01';

@Injectable({
providedIn: 'root',
})
export class Ticket_RealService 
{
apiURL: string = environment.apiURL;
constructor(private http: HttpClient) {}
	getTickets_Real(): Observable<Ticket_RealModel[]> {
		return this.http.get<Ticket_RealModel[]>(`${this.apiURL}Tickets_Real`);
	}
	getTickets_RealParametro_01(params: ParametroTicket_Real01): Observable<Ticket_RealModel[]> {
		return this.http.post<Ticket_RealModel[]>(`${this.apiURL}tickets_real`,params);
	}
	getTicket_Real(id_empresa:number,id_cab:number,id_usuario:number): Observable<Ticket_RealModel> { 
 		return this.http.get<Ticket_RealModel >(`${ this.apiURL}ticket_real/${id_empresa}/${id_cab}/${id_usuario}`);
	}
	ticket_realInsert(ticket_real:Ticket_RealModel):Observable<Ticket_RealModel> { 
		return this.http.post<Ticket_RealModel>(`${this.apiURL}ticket_real`, ticket_real);
	}
	ticket_realUpdate(ticket_real:Ticket_RealModel):Observable<Ticket_RealModel> { 
		return this.http.put<Ticket_RealModel>(`${this.apiURL}ticket_real`,ticket_real);
	}
	ticket_realDelete(id_empresa:number,id_cab:number,id_usuario:number):Observable<any>  { 
 		return this.http.delete<any>(`${this.apiURL}ticket_real/${id_empresa}/${id_cab}/${id_usuario}`);
	}
}