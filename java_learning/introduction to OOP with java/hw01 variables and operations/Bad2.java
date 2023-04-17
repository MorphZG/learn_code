public class Bad2 {
    public static void main(String[] args) {
        int a = 1331;
        int b = 0;
        System.out.println("Welcome to \nCS 1331!");
        int c = a + b;
        System.out.println("c is equal to: " + c);
    }
}


// ------------------ Original Bad2 file
// ArithmeticException: / by zero at line 6
/*
public class Bad2 {
    public static void main(String[] args) {
        int a = 1331;
        int b = 0;
        System.out.println("Welcome to \nCS 1331!");
        int c = a / b;
        System.out.println("c is equal to: " + c);
    }
}
*/