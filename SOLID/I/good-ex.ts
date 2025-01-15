interface Printer {
  print(document: Document): void;
}

interface Scanner {
  scan(document: Document): void;
}

interface FaxMachine {
  fax(document: Document): void;
}

class SimplePrinter implements Printer {
  print(document: Document): void {
    // actual implementation
  }
}

class MultiFunctionMachine implements Printer, Scanner, FaxMachine {
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

// Possible to add a regular printer that prints and scans
class regularPrinter implements Printer, Scanner {
  print(document: Document): void {
    console.log("Printing...");
  }
  scan(document: Document): void {
    console.log("Scanning...");
  }
}
