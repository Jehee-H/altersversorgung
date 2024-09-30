import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public teamList = [
    {
      bild: '',
      name: 'Pesron 1',
      alter: '23',
      stadt: 'GIEßEN',
      qualifizierung: 'ist nett'
    },
    {
      bild: '',
      name: 'Pesron 2',
      alter: '23',
      stadt: 'GIEßEN',
      qualifizierung: 'ist nett'
    },
    {
      bild: '',
      name: 'Pesron 3',
      alter: '23',
      stadt: 'GIEßEN',
      qualifizierung: 'ist nett'
    },
    {
      bild: '',
      name: 'Pesron 4',
      alter: '23',
      stadt: 'GIEßEN',
      qualifizierung: 'ist nett'
    }
  ]

  public dienstleistungList = [
    {
      topic: 'Begleitung und Gesellschaft',
      beschreibung: [
        'Gespräche führen und Zeit verbringen',
        'Begleitung bei Spaziergängen',
        'Spiele spielen oder gemeinsame Freizeitaktivitäten',
        'Vorlesen von Büchern oder Zeitungen'
      ]
    },
    {
      topic: 'Einkaufs- und Besorgungshilfen',
      beschreibung: [
        'Begleitung oder Übernahme des Einkaufs',
        'Besorgung von Medikamenten oder anderen wichtigen Dingen',
        'Begleitung bei Behördengängen oder Bankbesuchen'
      ]
    },
    {
      topic: 'Medizinische Fahrten',
      beschreibung: [
        'Fahrten zu Arztterminen, Dialyse oder Physiotherapie',
        'Abholung und Rücktransport nach medizinischen Terminen',
        'Unterstützung beim Organisieren von regelmäßigen Fahrten zu medizinischen Einrichtungen'
      ]
    },
    {
      topic: 'Haushaltshilfe',
      beschreibung: [
        'Unterstützung bei leichten Hausarbeiten (Staubsaugen, Wäsche waschen)',
        'Zubereitung von Mahlzeiten oder Hilfe beim Kochen',
        'Hilfe bei der Organisation des Haushalts (z.B. Rechnungen sortieren)'
      ]
    },
    {
      topic: 'Pflegeunterstützende Tätigkeiten',
      beschreibung: [
        'Erinnerung an die Einnahme von Medikamenten',
        'Unterstützung bei der Körperpflege (Waschen, Anziehen)',
        'Hilfe beim Aufstehen oder zu Bett gehen'
      ]
    },
    {
      topic: 'Freizeitgestaltung',
      beschreibung: [
        'Planung von Ausflügen oder kulturellen Aktivitäten',
        'Begleitung bei Besuchen von Freunden oder Verwandten',
        'Teilnahme an Veranstaltungen oder religiösen Feiern'
      ]
    },
    {
      topic: 'Organisation und Koordination',
      beschreibung: [
        'Unterstützung bei der Terminplanung',
        'Kontaktpflege zu Ärzten, Therapeuten oder Pflegepersonal',
        'Koordination von Pflege- und Betreuungsdiensten'
      ]
    },
    {
      topic: 'Emotionale Unterstützung',
      beschreibung: [
        'Zuhören und da sein, wenn Sorgen oder Ängste bestehen',
        'Unterstützung bei Trauer oder Einsamkeit',
        'Förderung von sozialen Kontakten und Integration'
      ]
    },
    {
      topic: 'Mobilitätsunterstützung',
      beschreibung: [
        'Begleitung bei Spaziergängen, auch mit Rollstuhl oder Rollator',
        'Unterstützung bei der Nutzung öffentlicher Verkehrsmittel'
      ]
    },
    {
      topic: 'Beratung und Hilfestellung',
      beschreibung: [
        'Beratung bei der Beantragung von Pflegeleistungen oder sonstigen Ansprüchen',
        'Unterstützung bei der Auswahl und Organisation weiterer Pflegedienste'
      ]
    }
  ];

}
