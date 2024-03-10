# Understanding Python: Manual CLI processing
# https://youtu.be/ADWAwzGXJjM
# continue video at 4:50

"""you can manually process command line input as a list via sys.arg"""

import sys

def print_help():
    """print help text and exit"""
    print(
    f"""Welcome to the pizza builder, let's build a pizza!
       
        Usage: pizza_builder.py [args] [options]

        Arguments:
            size            S, M, L, XL
            crust           normal, thin, deep

        Options:
            --toppings      One or more toppings for your pizza
            --extra-chease  Add extra cheese to your pizza
            --extra-sause   Add extra sauce to your pizza
            -h, --help      Print help text and exit
    """
    )







if __name__ == "__main__":
    if "--help" in sys.argv or "-h" in sys.argv:
        print_help()
    print(sys.argv)
