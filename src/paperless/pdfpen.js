export function launch() {
  const didLaunchApp = $.NSWorkspace.sharedWorkspace.launchAppWithBundleIdentifierOptionsAdditionalEventParamDescriptorLaunchIdentifier(
    'com.smileonmymac.PDFpen',
    $.NSWorkspaceLaunchAsync | $.NSWorkspaceLaunchAndHide,
    $.NSAppleEventDescriptor.nullDescriptor,
    null
  );

  if (didLaunchApp) {
    return Application('System Events').processes.byName('PDFpen');
  };

  throw new Error('PDFpen application not found!');
}

export function openImage(proc, path) {
  console.log(proc.menuBars[0].menuBarItems.byName('File'))
  proc.menuBars[0].menuBarItems.byName('File').click();
}

export default {
  launch,
  openImage
}
