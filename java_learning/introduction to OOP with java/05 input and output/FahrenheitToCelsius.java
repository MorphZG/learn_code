import java.util.Scanner;
import java.util.Locale;
import java.text.NumberFormat;

public class FahrenheitToCelsius {
  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in); // construct new Scanner instance named scanner

    // Scanner is a simple text scanner which can parse primitive types and strings
    // using regex.
    // Scanner breaks its input into tokens using a delimiter which by default
    // matches whitespace.
    // resulting tokens may then be converted into values of different types using
    // the various next methods

    System.out.print("Enter a fahrenheit value: "); // first prompt
    int fahrenheit = scanner.nextInt(); // scans the next token for int value and returns it
    System.out.print("Enter a day of the week: "); // second prompt
    String day = scanner.next(); // next() returns first complete token, no whitespace
    scanner.close(); // close i/o stream to prevent resource leak
    double celsius = (5.0 / 9) * (fahrenheit - 32); // calculation
    System.out.println(day + " fahrenheit: " + fahrenheit);
    System.out.println(day + " celsius: " + celsius);

    // enter both temperature and day of the week on the same line
    Scanner scanner2 = new Scanner(System.in);
    System.out.print("Enter a fahrenheit value and the day of the week: ");
    fahrenheit = scanner2.nextInt(); // scan the next token for integer value and return it
    day = scanner2.nextLine(); // returns the rest of the current line, searches for \n and stops
    scanner2.close();
    celsius = (5.0 / 9) * (fahrenheit - 32);
    System.out.println(day + " fahrenheit: " + fahrenheit);
    System.out.println(day + " celsius: " + celsius);

    // printf method, format specifier (place holder)
    Scanner scanner3 = new Scanner(System.in);
    System.out.print("Enter a Fahrenheit value: ");
    fahrenheit = scanner3.nextInt();
    System.out.print("Enter a day of the week: ");
    day = scanner3.next();
    System.out.print("Enter your preferred Celsius label: ");
    String cText = scanner3.next();
    scanner3.close();
    celsius = (5.0 / 9) * (fahrenheit - 32);
    System.out.printf("%s Fahrenheit: %d\n", day, fahrenheit);
    // template for formatting: %[flag][width][.precision]type
    // %s %-10s %,.1f
    System.out.printf("%s %-10s %,.1f \n", day, cText, celsius);

    // NumberFormat
    int items;
    double itemCost, total;
    Scanner scanner4 = new Scanner(System.in);
    System.out.print("Enter the number of items: ");
    items = scanner4.nextInt();
    System.out.print("Enter the cost per item: ");
    itemCost = scanner4.nextDouble();
    scanner4.close();
    total = items * itemCost;
    System.out.println();
    System.out.println("Unformatted Total: " + total);
    NumberFormat currencyFmt = NumberFormat.getCurrencyInstance(Locale.FRANCE);
    System.out.println("Formatted Total: " + currencyFmt.format(total));

  }
}

// tags: input, scanner, printf, numberformat, formatter
