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
      bild: 'Person1.jpg',
      name: 'Stock',
      alter: '23',
      stadt: 'GIEßEN',
      qualifizierung: 'ist nett'
    },
    {
      bild: 'Person2.jpg',
      name: 'Lamar',
      alter: '5',
      stadt: 'Unter Drakes Bett',
      qualifizierung: 'beschutzt Sie vor Pedos'
    },
    {
      bild: 'Person3.jpg',
      name: 'Manuel',
      alter: '69',
      stadt: 'Deutschland',
      qualifizierung: 'Engels Stimme'
    },
    {
      bild: 'Person4.png',
      name: 'Zorro',
      alter: '23',
      stadt: 'Sunny',
      qualifizierung: 'traniert Sie im Schwertkampf'
    },
    {
      bild: 'Person5.jpg',
      name: 'Kimmy',
      alter: '40',
      stadt: 'Nord Korea',
      qualifizierung: 'hat Raketen'
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
      ],
      bild: 'Begleitung_und_Gesellschaft.png',
    },
    {
      topic: 'Einkaufs- und Besorgungshilfen',
      beschreibung: [
        'Begleitung oder Übernahme des Einkaufs',
        'Besorgung von Medikamenten oder anderen wichtigen Dingen',
        'Begleitung bei Behördengängen oder Bankbesuchen'
      ],
      bild: 'Einkaufs_und_Besorgungshilfen.jpg',
    },
    {
      topic: 'Medizinische Fahrten',
      beschreibung: [
        'Fahrten zu Arztterminen, Dialyse oder Physiotherapie',
        'Abholung und Rücktransport nach medizinischen Terminen',
        'Unterstützung beim Organisieren von regelmäßigen Fahrten zu medizinischen Einrichtungen'
      ],
      bild: 'Medizinische_Fahrten.png'
    },
    {
      topic: 'Haushaltshilfe',
      beschreibung: [
        'Unterstützung bei leichten Hausarbeiten (Staubsaugen, Wäsche waschen)',
        'Zubereitung von Mahlzeiten oder Hilfe beim Kochen',
        'Hilfe bei der Organisation des Haushalts (z.B. Rechnungen sortieren)'
      ],
      bild: 'haushaltshilfe.jpg',
    },
    {
      topic: 'Pflegeunterstützende Tätigkeiten',
      beschreibung: [
        'Erinnerung an die Einnahme von Medikamenten',
        'Unterstützung bei der Körperpflege (Waschen, Anziehen)',
        'Hilfe beim Aufstehen oder zu Bett gehen'
      ],
      bild: 'Pflegeunterstützende_Tatigkeiten.jpg',
    },
    {
      topic: 'Freizeitgestaltung',
      beschreibung: [
        'Planung von Ausflügen oder kulturellen Aktivitäten',
        'Begleitung bei Besuchen von Freunden oder Verwandten',
        'Teilnahme an Veranstaltungen oder religiösen Feiern'
      ],
      bild: 'Freizeitgestaltung.jpg',
    },
    {
      topic: 'Organisation und Koordination',
      beschreibung: [
        'Unterstützung bei der Terminplanung',
        'Kontaktpflege zu Ärzten, Therapeuten oder Pflegepersonal',
        'Koordination von Pflege- und Betreuungsdiensten'
      ],
      bild: 'haushaltshilfe.jpg',
    },
    {
      topic: 'Emotionale Unterstützung',
      beschreibung: [
        'Zuhören und da sein, wenn Sorgen oder Ängste bestehen',
        'Unterstützung bei Trauer oder Einsamkeit',
        'Förderung von sozialen Kontakten und Integration'
      ],
      bild: 'Emotionale_Unterstutzung.jpg',
    },
    {
      topic: 'Mobilitätsunterstützung',
      beschreibung: [
        'Begleitung bei Spaziergängen, auch mit Rollstuhl oder Rollator',
        'Unterstützung bei der Nutzung öffentlicher Verkehrsmittel'
      ],
      bild: 'Mobilitatsunterstutzung.jpg',
    },
    {
      topic: 'Beratung und Hilfestellung',
      beschreibung: [
        'Beratung bei der Beantragung von Pflegeleistungen oder sonstigen Ansprüchen',
        'Unterstützung bei der Auswahl und Organisation weiterer Pflegedienste'
      ],
      bild: 'Beratung_und_Hilfestellung.jpg',
    }
  ];

}
