---
name: Website Livegang - Checklist
about: Checklist voor livegang van websites.
title: Checklist livegang
labels: ''
assignees: ''

---

### Website Livegang - Checklist
> Zorg ervoor dat je alles hebt afgevinkt voordat je live gaat

- [ ] Nagaan of de oude website een back-up heeft óf nodig heeft
- [ ] Redirects van oude URL’s toevoegen aan nieuwe website structuur
- [ ] Alle dependencies geüpdatet. Nieuwste versies.
- [ ] Alle browsers (laatste versies) goed doortesten, zowel functioneel als visueel.
    - [ ] Google Chrome - mobile - desktop (windows + mac)
    - [ ] Safari - mobile - desktop
    - [ ] Firefox - mobile - desktop (windows + mac)
    - [ ] Edge (mac)
    - [ ] Edge (windows)
- [ ] Nagaan of alles responsive er goed uitziet
- [ ] Test / dummy content verwijderen
- [ ] Alle statische content nakijken (denk ook aan alle linkjes)
- [ ] Meertalige website alle vertalingen nakijken en kloppend maken
- [ ] Google Analytics en Google Tagmanager toevoegen
- [ ] sitemap.xml altijd toevoegen
- [ ] SEO meta tags en Share images goed inrichten
- [ ] Favicon
- [ ] Alle afbeeldingen goed comprimeren, dmv de Contentful Image API of handmatig wanneer Contentful niet gebruikt wordt.
- [ ] Google Lighthouse checks uitvoeren (in incognito modus). Altijd zorgen dat alle checks 99+ zijn. Performance mag 90 zijn.
- [ ] CMS dynamisch en duidelijk inrichten
- [ ] De klant uitnodigen voor het CMS
- [ ] Netlify inrichten 2x een omgeving - develop - live / master - acceptance met Heroku preview.
- [ ] SSL certificaat aanschaffen bij TransIP. Dus géén let’s encrypt van Netlify.
- [ ] Custom domain toevoegen en DNS bij de domein-hosting van de klant regelen.
- [ ] Wanneer de website gereed is voor live. Altijd zorgen dat er een webhook is ingesteld tussen CMS en Netlify om builds uit te voeren.
- [ ] Wanneer er andere technieken (of keys en tokens) of software wordt gebruikt. Zorg er dan altijd voor dat het voor andere developers ook duidelijk is hoe zoiets werkt. Het updaten of toevoegen van een goede README.md kan hierbij helpen.
