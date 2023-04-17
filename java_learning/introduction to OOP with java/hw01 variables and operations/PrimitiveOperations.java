public class PrimitiveOperations {
  public static void main(String[] args) {

    // ========== Section 1: Primitive Operations

    // declare and initialize two variables, int and float
    int first = 4;
    float second = 2.25F; // java will default the type to double, must add F to force float type
    System.out.println(first);
    System.out.println(second);

    // multiply them, ensure that no data is lost
    float result = first * second;
    System.out.println(result);

    // use casting to convert integer to float
    float first_cast = (float) first;
    System.out.println(first_cast);

    // use casting to convert float to integer
    int second_cast = (int) second;
    System.out.println(second_cast);

    // declare char variable
    char upper_character = 'A';
    System.out.println(upper_character);

    // use numerical operation to change from uppercase to lowercase, ASCII table
    // ASCII (A, 65) (a, 97)
    char lower_character;
    int ascii_a = (int) upper_character + 32;
    lower_character = (char) ascii_a;
    System.out.println(lower_character);

  }
}
