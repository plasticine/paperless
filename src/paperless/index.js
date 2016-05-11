import pdfpen from './pdfpen';

let exitCode = 0;

export default function paperless(app, args) {
  // app.displayNotification('The file has been converted',
  // { withTitle: 'Success', subtitle: 'Done' })

  try {
    const pdfPenApp = pdfpen.launch();
    pdfpen.openImage(pdfPenApp);
  } catch (error) {
    console.log(error)
    exitCode = 1;
  }

  return exitCode;
}
