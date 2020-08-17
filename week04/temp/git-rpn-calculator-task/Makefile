
# There are no (intentional errors) in this file.
#
# Use "make" to build, and "make test" to run the tests.

dst = rpn

default: $(dst)
	@true

%: %.c
	gcc -o $@ $<

test: $(dst)
	# 15...
	./rpn 1 2 3 4 5 + + + +
	# 6...
	./rpn 2 3 '*'
	# 120...
	./rpn 1 2 3 4 5 '*' '*' '*' '*'
	# 85...
	./rpn 100 1 - 2 - 3 - 4 - 5 -
	# 10...
	./rpn 100 2 / 5 /
