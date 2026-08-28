// Versiebeheer voor de 3ICT Azure Function.
// Nieuwe release: BOVENAAN de juiste lijst toevoegen (nieuwste eerst).
//
// Per entry:
//   version  — versienummer (zonder 'v')
//   date     — ISO-datum
//   file     — bestandsnaam zoals getoond aan de klant
//   url      — (optioneel) absolute downloadlink, bv. Azure Blob SAS-URL.
//              Zonder url wordt DOWNLOAD_BASE + file gebruikt
//              (bestand in public/downloads/3ictfunction/).
//   size     — (optioneel) bestandsgrootte als tekst
//   notes    — korte samenvatting (altijd zichtbaar)
//   releaseNotes — (optioneel) uitklapbare releasenotes,
//              lijst van { heading, items: [] }

export const DOWNLOAD_BASE = '/downloads/3ictfunction/'

export const software = [
  {
    version: '1.0',
    date: '2026-08-28',
    file: 'FunctionV1.0.zip',
    url: 'https://drieictstorage.blob.core.windows.net/downloads/FunctionV1.0.zip?sp=r&st=2026-08-28T12:04:23Z&se=2028-02-01T21:19:23Z&spr=https&sv=2026-02-06&sr=b&sig=jRbTm0w%2F7kUfLWPfb1BkJUX0hm2Fc1wNZKLDhzpoSTs%3D',
    size: '',
    notes: [
      'Eerste release van de Azure Function.',
    ],
    releaseNotes: [
      {
        heading: 'Comarch (KPN)',
        items: [
          'Factuurregels worden per product verdicht: gelijke omschrijving + stuksprijs worden samengevoegd tot één regel met aantal = som volumes en prijs = echte stuksprijs (AFAS rekent het totaal zelf uit).',
          'Afwijkende regels (pro-rata bij tussentijds instappen/stoppen, kortingscorrecties) worden bewust níét verdicht maar los doorgezet als 1 × nettobedrag, met eigen periodevermelding. Factuurtotaal blijft daardoor altijd exact gelijk aan het leveranciers-netto.',
          'Artikelcode wordt nu bepaald op Modulenaam: Internet → ABB_Internet, Vast Bellen → TELEFONIE, Mobiel → ABB_MOBIEL_Abonnementen. Onbekende modulenaam → factuur naar foutbestand (geen ongeldige code meer naar AFAS).',
          'Gesprekskosten (USAGE) ongewijzigd 1 × totaalnetto per BTW-groep; decimaalnotatie richting AFAS gecorrigeerd (punt i.p.v. komma).',
        ],
      },
      {
        heading: 'Kubus',
        items: [
          'Weergave gelijkgetrokken met Comarch (mail 26-08): omschrijving (vet) = Beschrijving, regel eronder = "Periode: …".',
          'Productmapping conform Vellow-Artikelen.xlsx: o.a. Telefooncentrale/Porteren/Hardware → TELEFONIE, Gesprekskosten mobiel → ABB_MOBIEL_Belkosten, Gesprekskosten binnenland → ABB_VOIP_Belkosten.',
        ],
      },
      {
        heading: 'Algemeen',
        items: [
          'Nieuwe artikelcode TELEFONIE toegevoegd.',
          'Verouderde RuleBasedKeywordMapper verwijderd (vervangen door mapping op Modulenaam/Vellow-tabel).',
        ],
      },
    ],
  },
]

export const documentation = [
  {
    version: '1.0',
    date: '2026-08-28',
    file: 'Documentatie 3ICT Function.docx',
    url: 'https://drieictstorage.blob.core.windows.net/downloads/Documentatie%203ICT%20Function.docx?sp=r&st=2026-08-28T12:05:46Z&se=2028-08-28T20:20:46Z&spr=https&sv=2026-02-06&sr=b&sig=Cuysr93CIYAedsbBiST1WuvLeL%2FxRqs37dCmOUUadMQ%3D',
    size: '',
    notes: [
      'Documentatie bij Function v1.0.',
    ],
  },
]
