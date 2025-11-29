# Projekt Zaliczeniowy: Komunikacja Mikroserwisów

Projekt składa się z dwóch aplikacji napisanych w Node.js:
1. **Product Service (Port 4000)** - zwraca dane o produktach.
2. **Warehouse Service (Port 3000)** - pobiera dane z serwisu produktów.

## Instrukcja uruchomienia

### Wymagania
- Zainstalowane środowisko Node.js.

### Krok 1: Instalacja zależności
Należy wejść do obu folderów i zainstalować biblioteki:

```bash
cd product-service
npm install
cd ../warehouse-service
npm install
