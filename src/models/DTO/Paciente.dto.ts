import { Medicamento } from './../Medicamento';
import { Doenca } from './../Doenca';
import { Alergia } from './../Alergia';
import { ContatosDeEmergencia } from '../ContatosDeEmergencia';
export interface PacienteDTO {

    id: string;
    nome: string;
    doadorDeOrgao: boolean;
    telefone: string;
    peso: number;
    altura: number;
    nascimento: string;
    tipoSanguinio: number;
    estadoMoradia: number;
    observacao: string;

    alergias: Alergia[];
    contatosDeEmergencias: ContatosDeEmergencia[];
    doencas: Doenca[];
    medicamentos: Medicamento[];
}