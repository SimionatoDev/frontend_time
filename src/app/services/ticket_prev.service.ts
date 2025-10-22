import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ticket_PrevModel } from '../models/ticket_prev-model';
import { ParametroTicket_Prev01 } from '../parametros/parametro-ticket_prev01';

@Injectable({
providedIn: 'root',
})
export class Ticket_PrevService 
{
apiURL: string = environment.apiURL;
constructor(private http: HttpClient) {}
	getTickets_Prev(): Observable<Ticket_PrevModel[]> {
		return this.http.get<Ticket_PrevModel[]>(`${this.apiURL}Tickets_Prev`);
	}
	getTickets_PrevParametro_01(params: ParametroTicket_Prev01): Observable<Ticket_PrevModel[]> {
		return this.http.post<Ticket_PrevModel[]>(`${this.apiURL}tickets_prev`,params);
	}
	getTicket_Prev(id_empresa:number,id_cab:number,id_usuario:number): Observable<Ticket_PrevModel> { 
 		return this.http.get<Ticket_PrevModel >(`${ this.apiURL}ticket_prev/${id_empresa}/${id_cab}/${id_usuario}`);
	}
	ticket_prevInsert(ticket_prev:Ticket_PrevModel):Observable<Ticket_PrevModel> { 
		return this.http.post<Ticket_PrevModel>(`${this.apiURL}ticket_prev`, ticket_prev);
	}
	ticket_prevUpdate(ticket_prev:Ticket_PrevModel):Observable<Ticket_PrevModel> { 
		return this.http.put<Ticket_PrevModel>(`${this.apiURL}ticket_prev`,ticket_prev);
	}
	ticket_prevDelete(id_empresa:number,id_cab:number,id_usuario:number):Observable<any>  { 
 		return this.http.delete<any>(`${this.apiURL}ticket_prev/${id_empresa}/${id_cab}/${id_usuario}`);
	}
}