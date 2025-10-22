import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ticket_SaldoModel } from '../models/ticket_saldo-model';
import { ParametroTicket_Saldo01 } from '../parametros/parametro-ticket_saldo01';

@Injectable({
providedIn: 'root',
})
export class Ticket_SaldoService 
{
apiURL: string = environment.apiURL;
constructor(private http: HttpClient) {}
	getTickets_Saldo(): Observable<Ticket_SaldoModel[]> {
		return this.http.get<Ticket_SaldoModel[]>(`${this.apiURL}Tickets_Saldo`);
	}
	getTickets_SaldoParametro_01(params: ParametroTicket_Saldo01): Observable<Ticket_SaldoModel[]> {
		return this.http.post<Ticket_SaldoModel[]>(`${this.apiURL}tickets_saldo`,params);
	}
	getTicket_Saldo(id_cab:number,): Observable<Ticket_SaldoModel> { 
 		return this.http.get<Ticket_SaldoModel >(`${ this.apiURL}ticket_saldo/${id_cab}/${id_caract}/${id}`);
	}
	ticket_saldoInsert(ticket_saldo:Ticket_SaldoModel):Observable<Ticket_SaldoModel> { 
		return this.http.post<Ticket_SaldoModel>(`${this.apiURL}ticket_saldo`, ticket_saldo);
	}
	ticket_saldoUpdate(ticket_saldo:Ticket_SaldoModel):Observable<Ticket_SaldoModel> { 
		return this.http.put<Ticket_SaldoModel>(`${this.apiURL}ticket_saldo`,ticket_saldo);
	}
	ticket_saldoDelete(id_cab:number,):Observable<any>  { 
 		return this.http.delete<any>(`${this.apiURL}ticket_saldo/${id_cab}/${id_caract}/${id}`);
	}
}