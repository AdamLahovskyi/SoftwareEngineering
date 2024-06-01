# Principles of Programming in JavaScript (Lab1)

## Introduction
This document outlines the adherence to various programming principles demonstrated in the JavaScript codebase for a warehouse management system.

## DRY (Don't Repeat Yourself)
The principle of DRY is observed throughout the codebase by encapsulating repetitive logic into reusable functions and classes. For instance, the `Money` class handles currency manipulation and display, ensuring that currency-related operations are not duplicated across the application ([Money.cjs](./task01/Money.cjs#L1)).

## KISS (Keep It Simple, Stupid)
The KISS principle is maintained by prioritizing simplicity and clarity in the code structure. Complex logic is avoided where simpler solutions suffice, enhancing readability and maintainability. For example, the `reducePrice` method in the `Product` class simplifies the price reduction process ([Product.cjs](./task01/Product.cjs#L9)).

## SOLID Principles

### Single Responsibility Principle (S)
Each class and method within the system adheres to the Single Responsibility Principle, focusing on performing a single task or responsibility. For instance, the `Warehouse` class is responsible for managing warehouse inventory data ([Warehouse.js](./task01/Warehouse.cjs#L1)).

### Open/Closed Principle (O)
The Open/Closed Principle is maintained by designing classes that are open for extension but closed for modification. The codebase allows for extending functionality without altering existing code. An example is the extensibility of the `Money` class to accommodate different currency types ([Euro.js](./task01/Euro.cjs#L1)).

### Liskov Substitution Principle (L)
The Liskov Substitution Principle is upheld by ensuring that derived classes can substitute their base classes without affecting the functionality of the program. Inheritance relationships are carefully managed to maintain behavioral compatibility. For example, the `Euro` class inherits from the `Money` class without altering its behavior ([Euro.cjs](./task01/Euro.cjs#L1)).

### Interface Segregation Principle (I)
The Interface Segregation Principle is applied by designing cohesive and focused interfaces. Clients are not forced to implement interfaces they don't use. Although JavaScript does not have native support for interfaces, the concept is emulated through the use of abstract classes and method contracts.

### Dependency Inversion Principle (D)
Dependency Inversion is achieved by decoupling high-level modules from low-level implementation details. Abstractions are used to define contracts, allowing for flexibility in implementing concrete dependencies. For instance, the `Product` class depends on the `Money` class through abstraction, enabling easier maintenance and testing ([Product.cjs](./task01/Product.cjs#L1)).

## YAGNI (You Aren't Gonna Need It)
The YAGNI principle is followed by avoiding speculative implementations of features or functionality that are not currently needed. The codebase prioritizes fulfilling present requirements rather than anticipating future needs, thus preventing unnecessary complexity and overhead.

## Composition Over Inheritance
Composition Over Inheritance is demonstrated by favoring object composition over class inheritance where possible. This approach promotes code reuse and flexibility while avoiding the limitations and complexities associated with deep class hierarchies.

## Program to Interfaces, Not Implementations
The codebase adheres to the principle of programming to interfaces by designing classes and functions that depend on interfaces rather than concrete implementations. This enhances flexibility and facilitates easier maintenance and testing.

## Fail Fast
The Fail Fast principle is applied throughout the codebase by incorporating error handling mechanisms that detect and report failures as soon as they occur. This approach ensures timely identification and resolution of issues, minimizing potential impact and improving system robustness.
