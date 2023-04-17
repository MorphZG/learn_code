# Input and Output

In this lesson, you will extend your knowledge of the Java API by learning how to develop interactive programs that can process terminal input and output.

Learning how to create and interact with objects, as we did in the previous lesson, was a big step towards writing interesting and useful Java programs.  Our next major step along those lines is the ability to write programs that also interact with their users. Right now, you’re able to display text on the terminal (or command line), which is one form of interaction. But what about getting input from a user?  Incorporating that behavior in our programs could allow for all sorts of dynamic interactions.

On the output side of things, you’ve already learned how to use print and `println` to display text on the terminal.  The above video shows just that. However, there’s much more.  Just take a look at how long the sequence of decimals can be in the Celsius conversions from FahrenheitToCelsius:

```java
Celsius: 25.555555555555557
```

This much precision for temperature values might not be needed or appealing in some (perhaps most) cases. My kids’ digital thermometer for instance only shows one decimal place, and that’s all I need to make an assessment about whether a child has a fever or not.  

In this lesson, you’ll learn how to specify precision requirements when printing numbers and a variety of other output formatting techniques.  We’ll start with reading input using the Scanner class.

## Scanner Basics

To read in terminal input, we’ll use a class in the API called [Scanner](https://docs.oracle.com/javase/10/docs/api/java/util/Scanner.html). The class was introduced to the API in version 1.5 of Java. It adds an easier to use method for basic terminal input processing than what the original Java API provided.  As you continue your own journey with the language beyond this course, don’t be surprised to see new classes added in future versions for different reasons. It’s very much a living language.

The first step to using `Scanner` is to create an object as shown in the main method below:

```java
public class FahrenheitToCelsius {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in); //read keyboard input
    }
}
```

This single Scanner object will ultimately handle all of the inputs for our program, which will incrementally grow in size throughout this lesson.  We're calling the object input to represent what we’re going to do with it (i.e., read input), but as you’ve learned, variable names are up to the programmer.

A Scanner object can read data from multiple kinds of sources, and the object passed into the constructor represents a particular source. With System.in as input, the constructor customizes the created object so that it can read the ordered stream of characters entered on the keyboard. This stream of data is internally managed with a combination of hardware and software so that it correctly flows from a producer to a consumer.  

There’s a keyboard, a stream of data from the keyboard, and a Scanner object.  The particular stream that connects computer programs to the data from the keyboard is called the standard input stream (or simply `standard in`) since every program is automatically assigned one as a built-in means to receiving data. You can direct other devices and sources to standard in, but that’s beyond the scope of this course.

Let’s say we typed a few things on the keyboard like the below:

```txt
78 long
walks
```

Assuming that I typed the Enter key after each of the two lines above, data would flow from the keyboard to the Scanner object in the order shown below:

`78 long\nwalks\n`

In the above, the Enter key is represented by the newline character's escape sequence.

With content in the stream, we can use the Scanner object's methods to read chunks of data for processing. These chunks are formally called `tokens`, and there are different methods that represent the different types of `tokens` we can read. For example, there’s a `nextInt` method for reading the immediately available int value from the stream.  In our case, that int value would be 78.

To actually break a sequence of characters into `tokens`, the Scanner needs a representation of boundaries between `tokens`.  Such boundaries are defined by a particular sequence of characters called a `delimiter`. By default, Scanner uses whitespace characters as delimiters, but you can change that if needed.

Recall that whitespace includes the space, tab, and newline characters. Given the data, the `tokens` are 78, long, and walks.

How these `tokens` are represented once they are read ultimately depends on which method you use.  The `nextInt` method described earlier would, for example, convert a `token` to an int value.  As you might guess, an error occurs if the next available `token` in a stream is not a sequence of characters that can be represented as an int.  You'll see more of this later, but for now, take a quick browse at the full list of [Scanner methods here](https://docs.oracle.com/javase/10/docs/api/java/util/Scanner.html#method.summary).

Each method for reading and returning data is prefixed with the word “next”, and there are several.  Here, we’ll focus on the ones that return `tokens` as numeric or String values, namely: `nextInt`, `nextDouble`, `next`, and `nextLine`. By learning these four, you will be able to immediately use several others like `nextBoolean` and `nextFloat`.

The `nextInt` and `nextDouble` methods read individual tokens and return them as ints and doubles respectively. The `next()` method reads a token and returns it as a String value.  Finally, `nextLine()` also returns a String, but it keeps pulling characters from the stream until it reaches a new line character. The characters that are read before the terminating newline are stored in the String, but the newline character is pulled and discarded.  You’ll see more of this with a coding example.

As shown at the end of the above video, the `nextInt` method skips any leading whitespace when scanning for tokens.  This rule, in fact, applies to all `Scanner` next methods except `nextLine`, which includes them in the returned String.

Visit the Scanner API page: [java.base/util/Scanner](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Scanner.html)
## More on Packages

Classes can be grouped together based on the functions they provide.  These groups are officially called packages and each has a name. For example, `System`, `String`, and a long list of many other classes are in a package called `java.lang`. They are all grouped together because they are considered fundamental to the language, and for that reason, you do not have to insert any special lines in your code before using them.  If you look here [package-summary](https://docs.oracle.com/javase/7/docs/api/java/lang/package-summary.html) , you’ll see several other members of that package.

Other classes that are not in the `java.lang` package, however, require an import statement to help the compiler match a class’s name with its actual definition.  For example, `Scanner`, `Timer`, and `Stack` are all members of the `java.util` package and must therefore be imported. The `java.util` package offers several utility classes that will come in handy as you explore Java further.

Here’s the template to use for import statements:

```java
import packageName.memberName;

// for Scanner, use:
import java.util.Scanner;
```

You might wonder why package names have multiple dot-separated terms in them like “java”, “util”, and “lang”.  The reason is that Java allows hierarchies in packages to help with organization, so each term represents a level in a package hierarchy.  The first term (e.g. “java”) is the top level package, which can house subpackages. As you read a package name from left to right, you’re going deeper into the hierarchy.  

The two packages “util” and “lang” branch off the same top level package of “java”. The “java” package is the most common in the Java API, so expect to frequently see it as we continue exploring more classes.

Together, the package and member name (e.g., `java.util.Scanner`) represent what’s known as the fully-qualified name of a package member. Instead of using that name in the import statement, you could just enter an asterisk in place of the member name as shown here:

```java
import java.util.*;
```

The asterisk represents a wildcard, which means that all members of the `java.util` package are imported.  It is helpful in cases when there are several members of a package that need importing. For example, if you need `Scanner`, `Stack`, `Timer`, and other `util` package members in a program, it would be easier to just write a single wildcard-based import statement instead of multiple (for each member).   

Be careful when using wildcards, however, since it is possible to have two different packages that share the name of a class but provide their own definitions. To illustrate, consider this list of two packages, each with its own version of a class called Beach:

```
long.walks.Beach
swim.surf.Beach
```

Suppose long.walks contained many other classes (e.g., Mountain, Desert, etc) and we needed to use a few of them in some program. Let's also say that we just imported the whole package using a wildcard:

```
import long.walks.*;
```

Now, imagine that we also needed to use swim.surf's version of Beach in that program, so the import section looks like this:

```java
import long.walks.*;  // imports everything from walks package
import swim.surf.Beach;  // imports Beach class from surf package
```

If we referred to  "Beach" in code, perhaps in a variable declaration, the compiler would generate an error due to conflicting Beach definitions. To address this conflict, we could keep the long.walks.* import statement and remove the swim.surf.Beach one. Then, anytime we needed swim.surf's version in code, we would use the fully-qualified name as illustrated here:

```java
import long.walks.*;  // imports everything from walks package

Beach walks = "foo";  // Beach class from imported walks package
// direct reference to Beach class without imports
swim.surf.Beach variable = "bar";  // Beach class from surf package
```

Since the above FahrenheitToCelsius program is only importing from one package (`java.util`), there won't be any conflict errors from using a wildcard.  However, stylistically, it makes sense to just be specific and not use it given that the program only requires one member of the `java.util` package (i.e., `Scanner`) . No lines are being consolidated by using the wildcard.

As a final note, it’s important to also mention that using the wildcard to import all members of a package versus using their fully-qualified names does not mean your programs are going to get bigger or anything of that nature. There may be some additional overhead during compile time from not being specific, but there’s none when it comes to runtime. The same bytecode is generated either way.

## Formatting with printf

So far, many of the double values we’ve printed have been long sequences of decimals like this:

```java
27.222222222222225
```

To shorten the long trail of decimal values and to perform many other kinds of formatting on terminal output, there are a few options. One of these is the `printf` (or print formatted) method. Like print and `println`, it’s is another printing method that you can invoke with the System class’s out object.  

Here’s the template:

```java
System.out.printf("<format_string>", <values>);
%[flag][width][.precision]type

```

The first parameter of `printf` is a `format string`, which is a String that represents the format of the output to print.  Use it to create the representation by combining the fixed parts of the output with special sequences called `format specifiers`.  These sequences serve as place holders for the non-fixed parts of the output and define any styling that needs to be applied before printing.  The remaining parameters of `printf` represent the values that will be inserted into placeholders that are marked by the format specifiers.

To better understand, consider this `println` statement from FahrenheitToCelsius.java:

```java
System.out.println(day + " Celsius: " + celsius);
```

The fixed part of the input to `println` is " Celsius: "  and the non-fixed parts are day and celsius variables.  Here’s a matching `printf` statement:

```java
System.out.printf("%s Celsius: %f\n", day, celsius);
```

Here, `%s` and `%f` are `format specifiers` holding the place for day and celsius, respectively. Here’s a template for constructing one format specifier:

```java
%[flag][width][.precision]type
```

It must start with a `%` to alert the compiler that the specifier is not part of the literal string.  If you ever want to print the actual `%` sign as part of the literal string in `printf`, you must use two `%` signs; i.e., “%%” .  The template fields in square brackets (flag, width, and precision) are optional but important as you’ll see in a bit. The type field (also called the conversion) is required however. It represents the type of data that will be inserted and possibly formatted.

Here’s a table of some supported types and their respective type codes.

| Type                           | Character   |
| :----------------------------- | :---------: |
| Decimal (all integers)          | d           |
| Floating point (float, double)  | f           |
| String                          | s           |

We can now revisit this `printf` statement:

```java
System.out.printf("%s Celsius: %f\n", day, celsius);
```

Based on the type field, we can say that day is a String and Celsius is either a float or double.

Notice the newline character at the end of the format string: `"%s Celsius: %f\n"`. It’s there because, like the print method, `printf` does not automatically insert a newline after printing. If you do not wish to move the cursor to the next line after printing, simply omit the newline at the end of the format string.

After the format string parameter, you must enter the actual `parameters` in the order that `printf` will use to fill the places held by the `format specifiers`. So, the type order of these parameters must be compatible with the type order of the format specifiers in the format string. Something like this would be illegal since a double (%f) cannot hold a String value (day):

```java
// compiler would generate a type incompatibility error
// if format specifiers on the left does not match parameters on the right
System.out.printf("%s Celsius: %f\n", celsius, day);
```

We’ve only touched the tip of the iceberg when it comes to `printf` flexibility. Let’s say there’s a really cold day with Celsius values in the negative thousands. Such output might be enhanced with thousands-separators as shown here: 

```txt
Enter a Fahrenheit value: -888999000
Enter a day of the week: Friday
Enter your preferred Celsius label: Celsius
Friday Fahrenheit: -888999000
Friday Celsius    -493,888,351.1
```

For this option, all that’s needed is a comma flag in the celsius variable’s format specifier as highlighted below:

```java
import java.util.Scanner;
public class FahrenheitToCelsiusPrintf {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a Fahrenheit value: ");
        int fahrenheit = input.nextInt();
        System.out.print("Enter a day of the week: ");
        String day = input.next();
        System.out.print("Enter your preferred Celsius label (Celsius, Centigrade or C): ");
        String cText = input.next();
        double celsius = (5.0/9) * (fahrenheit - 32);
        System.out.printf("%s Fahrenheit: %d\n", day, fahrenheit);
  // template for formatting: %[flag][width][.precision]type
  //%s(str type)// %-10s(width of -10 and string type)// %,.1f(comma flag, .1 precision, float type)
        System.out.printf("%s %-10s %,.1f \n", day, cText, celsius);
    }
}
```

## String.format

By learning `printf`, you've also learned how to use the String class's `format` method. It works just like `printf` except it doesn't actually print the final formatted String on the terminal. Instead, the method returns the formatted String value, which you could then store in a variable for example. Here's an example using the same parameters that you saw earlier for `printf`:

```java
  // template for formatting: %[flag][width][.precision]type
  //%s(str type)// %-11s(width of -11 and string type)// %,.1f(comma flag, .1 precision, float type)
String celsiusOutput = String.format("%s %-11s %,.1f \n", day, cText, celsius);
// celsius Output becomes a reference to this string
String celsiusOutput = "Friday Celsius    -493,888,351.1"
```

## NumberFormat

With some thinking, currency formatting could be done with `printf`, but the `NumberFormat` did it well with very little work. All that was needed was to create an object and call a method.

`NumberFormat` is also quite special with its support for internationalization. Meaning that its objects’ behaviors can change based on the geographic location of the computer in which they are created. Running the same program with similar inputs on a computer in France could yield this:

```txt
Enter the number of items: 3
Enter the cost per item: 12.3456

Unformatted Total: 37.0368
Formatted Total: 37,04 €
```

There, Euro (€) is a common currency and a comma, instead of a period, is the decimal separator. You don’t actually have to go to a certain country just to see the expected program output there. Java allows you to manually specify a location using a class in the `java.util` package called `Locale`. There, you’ll find several constants representing different countries and regions that you can pass into the `getCurrencyInstance` method. Here’s a version of the program using `Locale.FRANCE`:

```java
import java.util.Scanner;
import java.util.Locale;
import java.text.NumberFormat;

public class CurrencyDemo {
    public static void main(String[] args) {
        int items;
        double itemCost, total;
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the number of items: ");
        items = input.nextInt();
        System.out.print ("Enter the cost per item: ");
        itemCost = input.nextDouble();
        total = items * itemCost;
        System.out.println();
        System.out.println ("Unformatted Total: " + total);
        NumberFormat currencyFmt = NumberFormat.getCurrencyInstance(Locale.FRANCE);
        System.out.println ("Formatted Total: " + currencyFmt.format(total));
    }
}

```

## DecimalFormat

Another useful number formatting class in the `java.text` package is `DecimalFormat`. It's quite flexible by giving you the power to specify your own patterns or templates for how formatted numbers should look. Here's an example instantiation of a `DecimalFormat` object, and as shown, the instance can be initialized with a desired pattern:

```java
DecimalFormat formatter = new DecimalFormat("0.0");
```

Patterns look like numbers in the format of a String literal, which makes sense since they describe how actual numbers should appear after formatting. Here's how to interpret the above pattern or any other pattern with only zeros and a decimal point:

- A digit 0 in some pattern's position guarantees that there will be a digit (not necessarily 0) in that same position for any formatted result.
- If the number being formatted has an actual digit in the same position of some 0 digit in the pattern, then that number's digit will be shown in that position in the formatted result.
- If the number being formatted does not have a digit in the same position of some 0 digit in the pattern, the formatted result will fill that position with an actual 0 digit.
- If there are more decimal places in the number being formatted than found in the pattern, the formatted result will round that number to a value with the same number of decimal places as specified in the pattern.

To apply a patter on a number to get a formatted (String) result, simply call the format method on a `DecimalFormat` object, with the number as input:

```java
String formattedNum = formatter.format(.8675309);
```

Here’s a program that uses the above pattern and other zero-based ones to illustrate the above rules:

```java
import java.text.DecimalFormat;

public class DecimalFormatDemo {
    public static void main(String[] args) {
        DecimalFormat formatter1 = new DecimalFormat("0.0");
        DecimalFormat formatter2 = new DecimalFormat("00.00");
        DecimalFormat formatter3 = new DecimalFormat(".00");
        DecimalFormat formatter4 = new DecimalFormat("0.00%");
 
        System.out.println("0.0: " + formatter1.format(.8675309));  // >>> 0.9
        System.out.println("00.00: " + formatter2.format(.8675309));  // >>> 00.87
        System.out.println(".00: " + formatter3.format(.8675309));  // >>> .87
        System.out.println("0.00%: " + formatter4.format(.8675309));  // >>> 86.75%
        System.out.println(".00: " + formatter3.format(8675309));  // >>> 8675309.00
    }
}
```

The last two lines illustrate a couple of additional rules:

- If a percent sign is found at the end of a pattern, the format method will return a percentage value that represents the input
- The number of zeros to the left of a decimal point in a pattern do not constrain the number of digits that the format method will use from its input value.

There are other pattern symbols that you can use besides 0 and %. For example, the # (pound/hash) symbol allow you to write patterns with optional digits. Here’s an example:

```java
DecimalFormat formatter = new DecimalFormat("#.00");
String numStr = formatter.format(.8675309);
System.out.println(numStr);  // >>> .87
```
Since the format method’s input value is less than 1 and the pattern specifies the whole number digit is optional, there’s no zero to the right of the formatted result. However, things change when the input is greater than one, like this:

```java
DecimalFormat formatter = new DecimalFormat("#.00");
String numStr = formatter.format(555.8675309);
System.out.println(numStr);  // >>> 555.87
```
`DecimalFormat` has a few other pattern symbols that you might find handy. Take a look at its API specification page for the full set and feel free to play around with them: [DecimalFormat](https://docs.oracle.com/javase/7/docs/api/java/text/DecimalFormat.html)

#tags: readme,
