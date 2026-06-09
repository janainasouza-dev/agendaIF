agendaIF

Sistema de Agenda e Gerenciamento de Informações
Atendimento Psicossocial – Protótipo Funcional
Versão

1.0 – Protótipo Funcional
Visão Geral

O agendaIF é uma aplicação web desenvolvida inteiramente para ambiente de navegador, com o objetivo de demonstrar visualmente o funcionamento do sistema de agendamento dos setores de Psicologia e Assistência Social do IFTO.
Tecnologias Utilizadas
Tecnologia Finalidade
HTML5 Estrutura das páginas
CSS3 Estilização e layout responsivo
JavaScript (app.js) Lógica do sistema, navegação e dados mockados
Estrutura de Arquivos
text

agendaIF/
├── index.html # Página única com todas as telas
├── style.css # Estilos e layout responsivo
└── app.js # Lógica do sistema e dados mockados

Perfis de Usuário

O protótipo contempla 5 perfis de acesso, com credenciais de demonstração:
Perfil E-mail Senha
Aluno joao@ifto.edu.br 123456
Psicóloga ana.santos@ifto.edu.br 123456
Assistente Social carlos@ifto.edu.br 123456
Coordenador maria.fernandes@ifto.edu.br 123456
Administrador admin@ifto.edu.br 123456
Funcionalidades Demonstradas
Tela de Login
Elemento Descrição
Formulário de acesso Campos de e-mail e senha
Botão "Entrar" Valida credenciais e redireciona
Cards de contas demo Login rápido via clique no perfil
"Esqueceu a senha?" Simulação de recuperação de acesso
Funcionalidades por Perfil
Aluno
Funcionalidade Descrição
Agendar atendimento Escolha de profissional, data e horário
Ver meus agendamentos Lista de compromissos futuros
Cancelar agendamento Com validação de 24h de antecedência
Psicóloga / Assistente Social
Funcionalidade Descrição
Ver agenda do dia Atendimentos agendados para o dia atual
Confirmar atendimento Marcação como realizado
Registrar falta Indica não comparecimento do aluno
Gerenciar disponibilidade Definição de horários de atendimento
Coordenador
Funcionalidade Descrição
Dashboard Cards com estatísticas (total, faltas, alunos)
Gráficos Atendimentos por profissional e por curso
Gerar relatório PDF Exportação de relatório
Administrador
Funcionalidade Descrição
Gerenciar usuários Listagem, criação, edição e desativação
Visualizar logs Auditoria de atividades do sistema
Regras de Negócio Implementadas
Regra Descrição
1 agendamento por semana Impede novo agendamento caso já exista um na mesma semana
Cancelamento com 24h de antecedência Permite cancelamento apenas se faltar mais de 24h para o horário
Agendamento até 30 dias Calendário limita seleção a 30 dias à frente
Horário comercial Atendimento apenas das 08h às 18h
Dias úteis Finais de semana bloqueados
Bloqueio de horários ocupados Horários já agendados não são exibidos para nova reserva