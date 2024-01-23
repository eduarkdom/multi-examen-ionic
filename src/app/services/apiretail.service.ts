import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiretailService {
  private apiUrl: string = 'https://suhbl5jdi4.execute-api.us-east-2.amazonaws.com/apiretail';

  constructor(private httpClient: HttpClient) { }

  public getClientes() {
    return this.httpClient.get(`${this.apiUrl}/clientes`);
  }

  public postCliente(nombreCliente: string, email: string) {
    const body = { nombreCliente, email };
    return this.httpClient.post(`${this.apiUrl}/clientes`, body);
  }

  public getMovimientos() {
    return this.httpClient.get(`${this.apiUrl}/movimientos`);
  }

  public postMovimiento(tipoMovimiento: string, valorMovimiento: number) {
    const body = { tipoMovimiento, valorMovimiento };
    return this.httpClient.post(`${this.apiUrl}/movimientos`, body);
  }
}


