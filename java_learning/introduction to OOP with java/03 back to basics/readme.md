# Back to Basics

In the previous module, you learned some fundamentals of object-oriented programming. Before going in-depth about objects and classes, I’ll cover some simpler building blocks or constructs that Java offers for developing programs.  Understanding them is an important early step towards being comfortable writing your own classes, and more generally, programs that do useful or interesting things.  

So, in this lesson, we’ll revisit some important topics like variables, types, expressions, whitespace, and commenting. These were touched on over the previous module. However, here, we'll have a more formal and thorough discussion. Something that’s also important to understand at this early stage, even in the context of simple programs, is what Java errors look like and how to diagnose and solve them.  We’ll also start that process here.

## Notes

### default type

Read more about default types and compilation. When compiling the code, we sometimes must override default type values. int type is a default for numeric literal value while float is default for floating point. long type is used for large numeric values while double type is used for more precise decimal numbers, with more decimal places.
eg. When working with a large numbers the compiler will default to int type and lead to an error. We can override the defaults by appending the letter L (L for long) or F for float at the end of the value.

```Java
// will lead to error, compiler will default to int type
long bigNumber = 999999999999;
float fraction1 = 0.1331;

// override default type by apending the letter after the value
long bigNumber = 999999999999L;
float fraction1 = 0.1331F;


```

#tags: readme,
