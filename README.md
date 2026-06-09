# agendaIF

Sistema de Agenda e Gerenciamento de Informações - Atendimento Psicossocial
Protótipo Funcional (HTML/CSS/JS)

**Versão:** 1.0 (Protótipo)

## VISÃO GERAL

Aplicação web que roda inteiramente no navegador para demonstrar o sistema de agendamento dos setores de Psicologia e Assistência Social do IFTO.

**Tecnologias:** HTML5, CSS3, JavaScript

## ESTRUTURA

- index.html - Página única com todas as telas
- style.css - Estilos e layout responsivo
- app.js - Lógica + dados mockados

## PERFIS DE USUÁRIO

| Perfil | Email | Senha |
|--------|-------|-------|
| Aluno | joao@ifto.edu.br | 123456 |
| Psicóloga | ana.santos@ifto.edu.br | 123456 |
| Assistente Social | carlos@ifto.edu.br | 123456 |
| Coordenador | maria.fernandes@ifto.edu.br | 123456 |
| Administrador | admin@ifto.edu.br | 123456 |

## REGRAS DE NEGÓCIO

- 1 agendamento por semana
- Cancelamento com 24h de antecedência
- Agendamento até 30 dias
- Horário comercial (08h às 18h)
- Apenas dias úteis
- Bloqueio de horários ocupados