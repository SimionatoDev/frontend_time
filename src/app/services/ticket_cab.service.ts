import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ticket_CabModel } from '../models/ticket_cab-model';
import { ParametroTicket_Cab01 } from '../parametros/parametro-ticket_cab01';

@Injectable({
providedIn: 'root',
})
export class Ticket_CabService 
{
apiURL: string = environment.apiURL;
constructor(private http: HttpClient) {}
	getTickets_Cab(): Observable<Ticket_CabModel[]> {
		return this.http.get<Ticket_CabModel[]>(`${this.apiURL}Tickets_Cab`);
	}
	getTickets_CabParametro_01(params: ParametroTicket_Cab01): Observable<Ticket_CabModel[]> {
		return this.http.post<Ticket_CabModel[]>(`${this.apiURL}tickets_cab`,params);
	}
	getTicket_Cab(id_empresa:number,id:number,periodo:string): Observable<Ticket_CabModel> { 
 		return this.http.get<Ticket_CabModel >(`${ this.apiURL}ticket_cab/${id_empresa}/${id}/${periodo}`);
	}
	ticket_cabInsert(ticket_cab:Ticket_CabModel):Observable<Ticket_CabModel> { 
		return this.http.post<Ticket_CabModel>(`${this.apiURL}ticket_cab`, ticket_cab);
	}
	ticket_cabUpdate(ticket_cab:Ticket_CabModel):Observable<Ticket_CabModel> { 
		return this.http.put<Ticket_CabModel>(`${this.apiURL}ticket_cab`,ticket_cab);
	}
	ticket_cabDelete(id_empresa:number,id:number,periodo:string):Observable<any>  { 
 		return this.http.delete<any>(`${this.apiURL}ticket_cab/${id_empresa}/${id}/${periodo}`);
	}
}