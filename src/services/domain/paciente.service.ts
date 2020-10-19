import { PacienteProfileDTO } from './../../models/DTO/paciente_profile.dto';
import { StorageService } from './../storage.service';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';

import { PacienteDTO } from '../../models/DTO/Paciente.dto';
import { API_CONFIG } from '../../config/api.config';


@Injectable()
export class PacienteService {
    constructor(public http: HttpClient, public storage: StorageService){
    }

    fichaDoPaciente() : Observable<PacienteDTO> {

        //APAGAR DPS
       // var numeroFichaPaciente : string = window.location.href;
       // numeroFichaPaciente = numeroFichaPaciente.replace("http://localhost:8100/#/paciente/", "");
        //alert(numeroFichaPaciente);

        var numeroFichaPaciente : string = 'AX700';
        //AX700

        //

        return this.http.get <PacienteDTO>(`${API_CONFIG.baseUrl}/pacientes/fichaDoPaciente/${numeroFichaPaciente}`)

    }

    findByCpf(cpf: string): Observable<PacienteProfileDTO> {

      /*
        let token = this.storage.getLocalUser().token
        let authHeader = new HttpHeaders({'Authorization': 'Bearer ' + token})
       */

        return this.http.get<PacienteProfileDTO>(
          `${API_CONFIG.baseUrl}/pacientes/cpf?value=${cpf}`);

          //,{'headers': authHeader}
    }
}
