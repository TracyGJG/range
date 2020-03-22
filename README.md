# range utility (polyfil)

Definition of a range function, developed as a ES3-compatible polyfill.

### Purpose

The range method generates an array of N enties (integers by default) according an algorithm defined by a supplied optional map function.

### Motivation

Occasionally when developing code using a functional style or when preparing test data for unit testing, it is useful to have a convenient, performant and standardised approach for generating an array containing a sequence of numbers. This method/polyfill provides an extension of the Array object that allows the developer to specify the upper and lower bounds, along with an option step, to produce a new array of values.

### Bug and Suggestion reports

Please report bugs and improvement suggestions via the [GitHub repo](https://github.com/TracyGJG/range/issues).

## range parameters

The range function takes between 1 and 2 parameters.

1. The first parameter is the number of entries to be generated. It has to be an integer value greater than zero.
1. The optional second parameter is a function that expects an integer from the initial sequence and maps it through an algorithm in much the same way as the second parameter of the Array.from method.

### Process

When called the following steps are followed:

1. Validate parameters provided.
   1. Confirm all the mandatory parameters have been provided.
   1. Confirm the first parameter (N) is an integer greater than zero.
   1. When supplied, confirm the first two parameters are different.
   1. When supplied, confirm the second parameter is a function that expects a single argument.
1. Generate the new array.
   1. Create a new array object.
   1. Generate the requested number of values in sequence from 0 to N - 1.
   1. Using the mapping function (x => x by default) map generated value to an output value and add it to the array.
   1. Return the generated array.

### Testing

A suite of test cases have been prepared, using the node assert package, to exercise all permutations of parameters. Please report any omissions via the GitHub link above.

## License

This polyfill is available under the MIT license.
