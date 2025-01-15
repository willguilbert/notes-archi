interface Machine {
  print(document: Document): void;

  scan(document: Document): void;

  fax(document: Document): void;
}

class MultiFunctionPrinter implements Machine {
  print(document: Document): void {
    // actual implementation
  }

  scan(document: Document): void {
    // actual implementation
  }

  fax(document: Document): void {
    // actual implementation
  }
}

// Its not possible to add a Machine that simply prints, for example.

class SimpPrinter implements Machine {
  print(document: Document): void {
    console.log("Printing...");
  }
  // Either you are missing implementations (Compilation error)

  // Or you are implementing methods that do nothing... BAD!!
  fax(document: Document): void {}
  scan(document: Document): void {}
}
