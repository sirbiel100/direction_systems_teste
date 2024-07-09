import ProdutoCard from "./produtoCard"
import callmanager from '../../../public/callmanager.svg'
import clinic from "../../../public/clinic.svg"
import sacm from "../../../public/automation.svg"
import netbuffer from "../../../public/netbuffer.svg"

export default function Produtos() {
    return (
        <>
            <ProdutoCard
                id="callmanager"
                src={callmanager}
                tittle="CallManager"
                paragraph="O CallManager, desenvolvido pela Direction Systems, é um software projetado para gerenciar telecomunicações em redes fixas, móveis e de dados. Ele oferece controle, auditoria e redução de custos, além de identificar perfis de consumo e promover uma cultura de disciplina no uso telefônico. O sistema permite avaliar pacotes de telefonia vantajosos, conciliar custos e despesas, e implementar ramais pré-pagos. Com um módulo web intuitivo, facilita o acesso às informações através de uma interface amigável."
                reversed={true}
            />

            <ProdutoCard
                id="clinic"
                src={clinic}
                tittle="Clinic"
                paragraph="Desenvolvido com tecnologia inovadora, o Clinic pode controlar e automatizar toda a rotina faturamento de uma clínica médica. Sua praticidade e grande qualidade visual, permite uma fácil adaptação e manuseio por parte dos usuários. O Clinic está totalmente de acordo com as novas normas de padronização da ANS (TISS) garantindo assim, cobertura completa às exigências e necessidades básicas de toda clínica médica de maneira a assegurar uma adaptação às novas normas de modo simples e desmistificado."
                reversed={false}
            />

            <ProdutoCard
                id="sacm"
                src={sacm}
                tittle="SACM - Sistema de Automação de Cooperativas Médicas"
                paragraph="O Sistema de Automação e Centralização de Medicamentos (SACM) visa otimizar e centralizar com segurança o processo operacional de uma cooperativa, servindo como interface entre médicos e convênios. Ele gerencia guias de convênios, faturas, pagamentos e glosas, abrangendo desde o recebimento e preenchimento das guias, até a geração e envio de faturas para os convênios. O sistema também automatiza a análise de glosas, o cálculo de impostos e o pagamento aos médicos, oferecendo ainda uma integração em desenvolvimento com o sistema de Automação de Consultório para importação automática de dados."
                reversed={true}
            />

            <ProdutoCard
                id="netbuffer"
                src={netbuffer}
                tittle="NetBuffer V"
                paragraph="O NetBuffer V da Direction é um coletor que armazena dados de equipamentos legados via serial RS323 ou TCP/IP, incluindo PABX. Exclusivo no mercado, possui tecnologia 'Push' para envio de dados a um servidor FTP e programação remota via SMS, além de servir como servidor de SMS e gateway para controle remoto via TELNET. Totalmente gerenciável remotamente com tecnologia M2M, é 'Plug and Play' e possui maior capacidade de armazenamento. Funciona como gateway de comandos para o Módulo de Créditos para clientes SaaS, reenviando comandos do TollManager ou CallManager para o PABX via FTP. Com um Modem USB 3G, pode se conectar à internet e enviar dados aos servidores sem interferências de firewall, sendo gerenciável via SMS e atuando como servidor SMS. Possui duas portas USB, uma serial e funções de rede TCP/IP, permitindo expansão para diversos usos."
                reversed={false}
            />
        </>
    )
}