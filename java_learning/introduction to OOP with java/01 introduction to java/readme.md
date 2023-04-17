# Introduction to Java

## Java's Origin Story

Java 1.0 was officially released in 1996 by a company called Sun Microsystems. It originated out of a need for a language to help write programs that run on appliances and other kinds of electronic devices, which were increasingly getting smarter as computing power became cheaper, faster, and smaller.  Popular languages like C and C++ were already around for many years before Java, and C++ is even Object-Oriented. However, a group of scientists at Sun, who had been experimenting in this space, determined that existing languages needed to be safer in order to be deployed on devices, which sometimes controlled critical aspects of daily life.  

While C and C++ are very efficient and flexible languages, it is quite possible for even experienced programmers to miss significant memory errors and security bugs that could cause a device to behave inconsistently, or even worse, fail during operation.  Imagine an elevator regularly getting stuck because it could not fully execute the code that navigates it through floors due to a memory leak that its programmer did not notice. Or, if you don’t mind tight spaces, imagine a microwave burning your dinner from your favorite takeout spot (and maybe more) because a memory issue caused it to overheat.

Although Java does not guarantee flawless programs, its programmers inherently avoid much of the memory and security issues that are common in languages like C and C++. The reason is primarily due to very powerful mechanisms, like automatic memory management, that its creators built into the language.  Such features are therefore inherent to every Java program, regardless of the experience level of the programmer.

Fortunately, you don’t have to be a device programmer in order to reap such benefits.  During Java’s development, its creators explored several different directions with the language, which greatly increased its scope and popularity.  For example, they noticed the static nature of websites at the time (the 1990s) and developed tools for using Java to write programs that could actually be embedded on web-pages.  Such programs, called applets, helped Java’s adoption by allowing a large population of web programmers to create pages with dynamic content like games, stock tickers, animations, and much more.  

Over time, Java evolved into a general-purpose programming language allowing programmers to write software applications that run on conventional computers like desktops and laptops. As illustrated in the graphic below, new features have been added to the language since version 1.0, and more are expected due to the significant amount of use and investment that has been put into it.

Today, Java is a product of Oracle Corporation, which acquired Sun Microsystems in 2010. Oracle claims that a few billion devices currently run Java--spanning servers, cell phones, ATMs, cable boxes, TVs and much more. It’s likely that you’ve interacted with a Java-powered device, perhaps even without knowing.

In this course, we’ll only focus on writing standalone applications for conventional computers.  Applets, which were mentioned earlier, have been deprecated in the recent versions of the language.

## Java's Hybrid Approach

There are two main types of programming languages, interpreted and compiled. Both have it's own advantages but compiled languages are generally faster because after compiling the source code in to binary, the code will be executed by the CPU without the need to "translate" the code every time. Interpreted languages are slower because interpreter have to "translate" the code on every runtime. That is also their advantage, they are compatible with any system that have the interpreter installed.

Java, on the other hand, takes a hybrid approach to offer the benefits of compilation and interpretation. Its source code is not compiled directly to machine code like in C and C++.  Instead, a compiler generates what is known as bytecode and stores that in one or more files with a “.class” extension. Bytecode is not fixed to a specific type of processor’s instruction set.  However, it comes close to the low level of machine code without making significant assumptions about the kind of processor that will run it.

Once the bytecode for a Java program is generated, you can then actually run it using an interpreter that can translate the bytecode to the machine language of the particular processor of the target computer.  Recall that interpreted languages tend to be much slower than compiled languages because they typically translate from high-level code down to low-level. However, with Java, since bytecode is already at a low-level, the translation costs are not as significant.  

You’ll often find the Java interpreter being referred to as the Java Virtual Machine (or just JVM).  The “Virtual Machine” part of the name is derived from the fact that compiled Java code is not executed by a real processor. Rather a piece of software, the interpreter, performs the execution.

By incorporating both compilers and interpreters, Java can provide the platform independence of interpreted languages while minimizing their inefficiencies. On top of this, it incorporates certain creative optimizations that also improve the speed of interpreting bytecode.  If you’re interested in this area, start by learning about Just-In-Time compilation -- a topic which is beyond the scope of this course.

#tags: readme
