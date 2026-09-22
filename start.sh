#!/bin/bash

GRAY='\033[0;37m'
DARK='\033[1;30m'
WHITE='\033[1;37m'
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m'

BOT_FILE="Shizuku-Connect.js"
BAILEYS_VER="v7.0.0-rc13"
MAX_RESTARTS=50
RESTART_COUNT=0
START_TIME=$(date +%s)

loading() {
    echo -ne "${DARK}  Iniciando processo${NC}"
    for i in {1..3}; do
        echo -ne "${WHITE}.${NC}"
        sleep 0.3
    done
    echo ""
}

get_uptime() {
    local current=$(date +%s)
    local diff=$((current - START_TIME))
    local days=$((diff / 86400))
    local hours=$(((diff % 86400) / 3600))
    local mins=$(((diff % 3600) / 60))
    printf "%dd %02dh %02dm" $days $hours $mins
}

show_header() {
    clear
    echo -e "${DARK}═══════════════════════════════════════════════════════════${NC}"
    echo -e "${WHITE}  SHIZUKU BOT SYSTEM MONITOR${NC}"
    echo -e "${DARK}═══════════════════════════════════════════════════════════${NC}"
    echo ""
    echo -e "${GRAY}  Status           ${DARK}│${NC} ${GREEN}● Online${NC}"
    echo -e "${GRAY}  Auto-Reconnect   ${DARK}│${NC} ${GREEN}Habilitado${NC}"
    echo -e "${GRAY}  Baileys          ${DARK}│${NC} ${WHITE}${BAILEYS_VER}${NC}"
    echo -e "${GRAY}  Runtime          ${DARK}│${NC} ${WHITE}Node.js${NC}"
    echo -e "${GRAY}  Iniciado em      ${DARK}│${NC} ${WHITE}$(date '+%d/%m/%Y %H:%M:%S')${NC}"
    echo -e "${GRAY}  Uptime           ${DARK}│${NC} ${WHITE}$(get_uptime)${NC}"
    echo -e "${GRAY}  Reinicializações ${DARK}│${NC} ${YELLOW}${RESTART_COUNT}/${MAX_RESTARTS}${NC}"
    echo ""
    echo -e "${DARK}═══════════════════════════════════════════════════════════${NC}"
    echo -e "${GRAY}  Autor: ${WHITE}jpzinh${NC} ${DARK}│${NC} ${GRAY}Projeto: ${WHITE}Shizuku-Bot${NC}"
    echo -e "${DARK}═══════════════════════════════════════════════════════════${NC}"
    echo ""
}

cleanup() {
    echo ""
    echo -e "${YELLOW}  Encerrando monitor...${NC}"
    sleep 1
    exit 0
}

trap cleanup SIGINT SIGTERM

while true; do
    show_header
    
    if [ $RESTART_COUNT -ge $MAX_RESTARTS ]; then
        echo -e "${RED}  Limite de reinicializações atingido [${MAX_RESTARTS}]${NC}"
        echo -e "${YELLOW}  Verifique o código e reinicie manualmente${NC}"
        exit 1
    fi
    
    echo -e "${GRAY}  Monitorando processo...${NC}"
    echo -e "${DARK}  ─────────────────────────────────────────────────────────${NC}"
    echo ""
    
    loading
    
    if [ ! -f "$BOT_FILE" ]; then
        echo -e "${RED}  Erro: Arquivo ${BOT_FILE} não encontrado${NC}"
        exit 1
    fi
    
    node "$BOT_FILE"
    
    EXIT_CODE=$?
    RESTART_COUNT=$((RESTART_COUNT + 1))
    
    echo ""
    echo -e "${DARK}  ─────────────────────────────────────────────────────────${NC}"
    echo -e "${RED}  Processo finalizado com código: ${EXIT_CODE}${NC}"
    
    if [ $EXIT_CODE -eq 0 ]; then
        echo -e "${GREEN}  Desligamento normal detectado${NC}"
        break
    fi
    
    echo -e "${YELLOW}  Aguardando 3s para reiniciar...${NC}"
    for i in 3 2 1; do
        echo -ne "${DARK}  Reiniciando em ${WHITE}$i${DARK}...${NC}\r"
        sleep 1
    done
    echo ""
    echo -e "${GREEN}  Reiniciando agora! [Tentativa ${RESTART_COUNT}]${NC}"
    sleep 1
done

echo -e "${GRAY}  Sistema finalizado.${NC}"