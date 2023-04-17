
public class IndexOfTest {
    public static void main(String[] args) {
        String funnyStr = "Computer!Science,!long!walks!on!the!beach";
        int a = funnyStr.indexOf(33);
        int b = funnyStr.indexOf('!'); //chars are converted to Unicode int value
        int c = funnyStr.indexOf("!");
        int d = funnyStr.indexOf("!Science");
        int e = funnyStr.indexOf("!Science,!long");
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
        System.out.println(d);
        System.out.println(e);


      String funnyStr2 = "Computer!Science,!long!walks!on!the!beach";
      funnyStr2.replace("!", "");
      funnyStr2.replace("the beach", "");
      funnyStr2.replace(", long", "");
      funnyStr2.replace("wal", "roc");
      funnyStr2.toUpperCase();
// replace() method returned value, did not assing it to variable
// original string stays the same
// automatic garbage collection will free the memory
      System.out.println(funnyStr2);  
    }
}
