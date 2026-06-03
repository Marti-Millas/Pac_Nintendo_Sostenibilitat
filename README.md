# Nintendo Sostenibilitat - PAC M04

Projecte web interactiu desenvolupat per al mòdul **M04 - Sostenibilitat Aplicada al Sistema Productiu** 

L'aplicació analitza de forma detallada l'impacte ambiental, els riscos climàtics globals i l'estratègia de transició ecològica corporativa de **Nintendo Co., Ltd.** basant-se en les dades auditades del seu darrer informe de sostenibilitat.

---

## Característiques Principals

- **Dashboard d'Indicadors Clau:** Resum de consum energètic global, ràtio d'energies renovables i emissions absolutes.
- **Anàlisi de Riscos Climàtics (TCFD):** Avaluació de riscos físics, de transició i l'impacte específic de les infraestructures digitals (CPDs) i la Intel·ligència Artificial en el sector tecnològic.
- **Auditoria de la Petjada de Carboni:** Desglossament interactiu basat en la teoria dels tres abasts (Scope 1, 2 i 3) del protocol GHG.
- **Indicadors ASG (ESG):** Tauler estructurat amb mètriques Ambientals (consum hídric), Socials i de Governança ètica.
- **Sistema Multilingüe Complet:** Traducció reactiva en temps real entre Català (`ca`) i Castellà (`es`) mitjançant `vue-i18n`.
- **Interfície Avançada:** Disseny completament fosc (Dark Mode) adaptat amb components modals, transicions d'estat dinàmiques i gràfics completament interactius.

---

## Stack Tecnològic Utilitzat

- **Framework Principal:** Vue.js 3 (Composition API amb `<script setup>`)
- **Eines de Construcció:** Vite
- **Llibreria d'Estils:** Tailwind CSS (Utilitzant variables de color corporatives)
- **Gràfics Dinàmics:** Chart.js + `vue-chartjs` (Gràfics de Barres, Doughnut i Radar)
- **Gestió de Rutes:** Vue Router
- **Internacionalització (i18n):** `vue-i18n` (Versió 9+)
- **Llibreria d'Icones:** `lucide-vue-next`
- **Notificacions:** `vue-toastification`

---

## Estructura del Projecte

L'arquitectura del codi s'ha estructurat seguint les bones pràctiques de Vue:

- `src/main.js`: Configuració centralitzada, rutes i diccionaris de traducció multilingüe (`ca`/`es`).
- `src/App.vue`: Contenidor global de l'app, barra de navegació dinàmica per rutes i peu de pàgina unificat.
- `src/views/`: Pàgines independents de l'aplicació:
  - `Home.vue`: Resum executiu, dashboard numèric i formulari funcional de subscripció (Newsletter).
  - `Climate.vue`: Panell de riscos climàtics i gràfic de materialitat.
  - `Carbon.vue`: Gestió d'emissions de carboni i gràfic circular de proporció d'abasts.
  - `ESG.vue`: Indicador hídric temporal amb càlculs d'increment actius i gràfic de radar.
- `src/style.css`: Estils globals i personalització de la barra de desplaçament del sistema.

---

## Fonts d'Informació Utilitzades

Totes les mètriques i gràfics exposats en aquest projecte han estat extrets i contrastats a partir de la documentació oficial:
- [Nintendo Sustainability Report (Official Corporate Website)](https://www.nintendo.co.jp/csr/en/index.html)
