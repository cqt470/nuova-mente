# Nuova-Mente

**Nuova-Mente** è un prototipo web di *escape room* didattiche pensate per far smontare agli studenti gli output difettosi prodotti da una IA. Il fine non è rispondere a domande, ma individuare i punti deboli di un ragionamento artificiale — dalla iper-semplificazione all'allucinazione fattuale — usando solo le schede interne del dossier (nessuna ricerca web).

Progetto demo per la classe **5A IT**. I punti guadagnati si trasformano in ore di PBL (project-based learning).

## Stanza dimostrativa: Dossier 1939

Un'IA ha chiuso il caso in 4 secondi. Ha sbagliato quasi tutto. Lo scopo è smontare cinque output difettosi uno alla volta, usando solo le 12 schede del dossier sulla Seconda Guerra Mondiale.

Le 5 missioni (ognuna vale fino a 20 punti):

| Missione | Obiettivo |
| --- | --- |
| **M1 — Rilevazione dell'iper-semplificazione** | L'AI riduce tutto a una causa sola: riconoscere almeno 3 cause distinte valide, di cui almeno 1 strutturale. |
| **M2 — Fact-checking dell'allucinazione** | Una data è sbagliata: trovala e documentala con item corretto, segmento evidenziato e fonte citata. |
| **M3 — Cause remote contro cause immediate** | L'AI mette tutto sullo stesso piano: classificare almeno 6 card su 8. |
| **M4 — Confutazione dialettica** | Una tesi parziale ma apparentemente ragionevole: riconoscerla, portare 2 evidenze dal dossier e costruire il nesso logico. |
| **M5 — Verdetto finale ed Escape** | Redigere il rapporto che chiude il dossier: 4 sezioni compilate e almeno 3 fonti citate. |

**Regole di gioco**
- 3 tentativi per missione; al terzo errore la missione si sblocca ma vale 10/100.
- L'indizio al secondo tentativo costa 5 punti; al primo errore nessuna penalità.
- Bonus +10 pt: fact-checking con citazione esatta (M2) o confutazione con doppia evidenza (M4).
- Timer di 50 minuti visibile ma non bloccante.
- Dossier chiuso: niente ricerca web, solo le schede interne.
- Il punteggio automatico non è definitivo: il docente può sovrascriverlo con motivazione.

## Pagine

- **Percorso giocatore:** `index.html` (hub delle stanze) → `room.html` (briefing e missioni) → `missione.html` (svolgimento con HUD, chat con l'assistente AI e modale di punteggio) → `leaderboard.html` (classifica di classe).
- **Chat AI**: l'assistente di bordo risponde con suggerimenti hardcoded su Versailles 1919, la crisi del '29 (S03/S04) e la "volontà di potenza" (S10). Le risposte sono incluse, nessuna elaborazione reale.
- **Valutazione**: modale "Punteggio di pensiero critico" con anello animato /100 e barre per cause distinte, fonti collegate e prompt riformulato (valutazione simulata).

## Pagine in preparazione

- Giurisprudenza
- Un futuro più eco
- Arch Linux — Un mondo nuovo
- OOP — Java

## Stack tecnico

- HTML5 + CSS3 + JavaScript vanilla (ES modules): nessun framework né bundler.
- Tema chiaro/scuro (`[data-theme="dark"]`) con scelta persistita in `localStorage` e fallback a `prefers-color-scheme`.
- Font Google: **Sora** per i titoli, **Rubik** per body e label.
- Palette: crema `#FDF3D0` / `#1D1913` (dark), oro `#D4A72C`, inchiostro `#2B2620` / `#EFE4C3` (dark); texture "carta" a puntini via radial-gradient.

> **Nota**: le pagine sono in demo e il loro fine è la mera presentazione del prodotto. Sotto `preview1/` e `preview2/` vivono due copie quasi identiche del prototipo; `src/` raccoglie la bozza originale più grezza.

## Struttura

```
nuova-mente/
├── preview1/          # prototipo dimostrativo (index, room, missione, leaderboard)
├── src/               # bozza originale (HTML/CSS/JS vanilla)
└── README.md
```

## Crediti immagini

- [room-law.png](src/media/room-law.png) → [Le teorie e le caratteristiche delle varie riserve di legge](https://www.adicu.it/2019/01/24/le-teorie-e-le-caratteristiche-delle-varie-riserve-di-legge-profili-critici/)
- [room-ww2.png](src/media/room-ww2.png) → [Bundesarchiv Bild 101I-646-5188-17 (Wikimedia Commons)](https://upload.wikimedia.org/wikipedia/commons/1/10/Bundesarchiv_Bild_101I-646-5188-17%2C_Flugzeuge_Junkers_Ju_87.jpg)
- [room-java.png](src/media/room-java.png) → [Java logo](https://maritvandijk.com/wp-content/uploads/2022/08/java_logo_icon_168609.png)
- [room-eco.png](src/media/room-eco.png) → [immagine](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFsoFXfcB14XZih2BXbrny5z4FdumPlOtDuZ6i4KAWOw&s=10)
- [room-arch.png](src/media/room-arch.png) → [Arch Linux](https://archlinux.it/images/arch-linux.jpg)
