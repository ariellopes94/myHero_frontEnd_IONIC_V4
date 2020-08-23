import { Medicamento } from './Medicamento';
import { ContatoDeEmergencia } from './ContatoDeEmergencia';
import { Alergia } from './Alergia';
import { Doenca } from './Doenca';
export interface Paciente{

    cpf: string;
    nome: string;
    email: string;
    senha: string;
    doadorDeOrgao: boolean;
    telefone: string;
    peso: number;
    altura: number;
    nascimento: String;
    tipoSanguinio: number;
    estadoMoradia: number;
    observacao: string;

    doencas: Doenca[];
    alergias: Alergia[];
    contatosDeEmergencias: ContatoDeEmergencia[];
    medicamento: Medicamento[];


}