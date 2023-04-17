import java.util.Scanner;

public class StringOperations {
    public static void main(String[] args) {

        // ========== Section 2: String Operations

        // create string and assign name
        String name = "Zoran";
        System.out.println(name);
        name = name.replace('Z', 'A');
        name = name.replace('n', 'Z');
        System.out.println(name);

        // URLs and substring
        String string01 = "www.stackoverflow.com";
        System.out.println(string01);

        Scanner scanner = new Scanner(string01).useDelimiter("\\."); // use dot as a delimiter
        scanner.next(); // skip the first token (www)
        String subString01 = scanner.next(); // this is the token i need
        scanner.close(); // stop the scanner
        System.out.println(subString01); // print the substring
        System.out.println(subString01 + "1331"); // concatonate "1331" at the end
    }
}