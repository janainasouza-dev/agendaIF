# agendaIF



Sistema de Agenda e Gerenciamento de Informações - Atendimento Psicossocial

Protótipo Funcional (HTML/CSS/JS)

Versão
1.0 (Protótipo)


VISÃO GERAL
O que é este protótipo?
É uma aplicação web que roda inteiramente no navegador, desenvolvida para demonstrar visualmente o funcionamento do sistema de agendamento dos setores de Psicologia e Assistência Social do IFTO.
Tecnologias Utilizadas
Tecnologia
Finalidade
HTML5
Estrutura das páginas
CSS3
Estilização e layout responsivo
JavaScript (app.js)
Lógica do sistema, navegação, dados mockados

Estrutura de Arquivos

agendaIF/

├── index.html    # Página única com todas as telas
├── style.css     # Estilos e layout responsivo
└── app.js        # Toda a lógica + dados mockados



PERFIS DE USUÁRIO
O protótipo contempla 5 perfis de usuário:
Perfil
Email
Senha
Aluno
joao@ifto.edu.br
123456
Psicóloga
ana.santos@ifto.edu.br
123456
Assistente Social
carlos@ifto.edu.br
123456
Coordenador
maria.fernandes@ifto.edu.br
123456
Administrador
admin@ifto.edu.br
123456


FUNCIONALIDADES DEMONSTRADAS
Tela de Login
Elemento
Descrição
Formulário
Campos de email e senha
Botão Entrar
Valida credenciais e redireciona
Cards Contas Demo
Login rápido clicando no perfil
Esqueceu a senha?
Mensagem simulada

Funcionalidades por Perfil
Aluno
Funcionalidade
Descrição
Agendar atendimento
Escolher profissional, data e horário
Ver meus agendamentos
Lista de agendamentos futuros
Cancelar agendamento
Com validação de 24h de antecedência

Psicóloga /  Assistente Social
Funcionalidade
Descrição
Ver agenda do dia
Atendimentos agendados para hoje
Confirmar atendimento
Marcar como realizado
Registrar falta
Aluno não compareceu
Gerenciar disponibilidade
Definir horários de atendimento

Coordenador
Funcionalidade
Descrição
Dashboard
Cards com estatísticas (total, faltas, alunos)
Gráficos
Atendimentos por profissional e por curso
Gerar relatório PDF
Exportar relatório

Administrador
Funcionalidade
Descrição
Gerenciar usuários
Listar, criar, editar, desativar
Visualizar logs
Auditoria de atividades do sistema


REGRAS DE NEGÓCIO IMPLEMENTADAS
1 agendamento por semana
Sistema impede novo agendamento se já tiver um na semana
Cancelamento com 24h
Só permite cancelar se faltar mais de 24h
Agendamento até 30 dias
Calendário limita seleção a 30 dias à frente
Horário comercial
Atendimento apenas das 08h às 18h
Dias úteis
Finais de semana bloqueados
Bloqueio de horários ocupados
Horários já agendados não aparecem


