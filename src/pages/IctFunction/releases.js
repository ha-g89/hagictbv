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
//   notes    — lijst met releasenotes

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
