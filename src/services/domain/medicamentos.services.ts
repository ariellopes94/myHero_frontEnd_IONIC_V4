import { API_CONFIG } from '../../config/api.config';
import { Doenca } from '../../models/Doenca';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class MedicamentosService {
  constructor(public http: HttpClient) {}

  findAll(): Observable<Doenca[]> {
    return this.http.get<Doenca[]>(`${API_CONFIG.baseUrl}/medicamentos`);
  }
}

