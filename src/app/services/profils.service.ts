import { Profil } from '../profil/profil.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn : 'root'
})

export class ProfilsService {
  apiUrl = 'http://localhost:8000/api';


  constructor(private http: HttpClient) {}

  getProfils(): Observable<Profil[]> {
    return this.http.get<Profil[]>(`${this.apiUrl}/users`);
  }








}


