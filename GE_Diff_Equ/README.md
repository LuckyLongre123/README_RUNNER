# Complete Learning Guide: First-Order Ordinary Differential Equations

**Course**: Differential Equations (UG 2nd Year)  
**Prerequisites**: Basic Calculus (differentiation and integration)  
**Companion Document**: formulas-reference.md

---

## Table of Contents

1. [Introduction to First-Order ODEs](#1-introduction-to-first-order-odes)
2. [Separable Differential Equations](#2-separable-differential-equations)
3. [Exact Differential Equations](#3-exact-differential-equations)
4. [Integrating Factors](#4-integrating-factors)
5. [Linear Differential Equations](#5-linear-differential-equations)
6. [Bernoulli Equations](#6-bernoulli-equations)
7. [Homogeneous Equations](#7-homogeneous-equations)
8. [Initial Value Problems](#8-initial-value-problems)
9. [Exam Preparation Strategies](#9-exam-preparation-strategies)

---

## 1. Introduction to First-Order ODEs

### 1.1 What is a Differential Equation?

A **differential equation** is an equation that relates a function to its derivatives.

**Example**: $\frac{dy}{dx} = 2x$

This says: "The rate of change of $y$ with respect to $x$ equals $2x$"

**First-order** means the highest derivative is the first derivative ($\frac{dy}{dx}$ or $y'$).

### 1.2 Basic Concepts

#### Order and Degree

**Order**: Highest derivative in the equation
- $\frac{dy}{dx} = x + y$ → **Order 1**
- $\frac{d^2y}{dx^2} + 3\frac{dy}{dx} = 0$ → **Order 2**

**Degree**: Power of the highest order derivative
- $\left(\frac{dy}{dx}\right)^2 = x$ → **Degree 2**
- $\frac{dy}{dx} = x^2$ → **Degree 1**

### 1.3 Solutions: General vs Particular

#### General Solution
Contains an arbitrary constant $C$ and represents a **family of curves**.

**Example**: 
$$\frac{dy}{dx} = 2x$$
$$y = x^2 + C$$

This represents infinitely many parabolas (one for each value of $C$).

#### Particular Solution
A specific solution obtained by determining the value of $C$ using an **initial condition**.

**Example**: 
Given $y(0) = 3$:
$$y = x^2 + C$$
$$3 = 0^2 + C \Rightarrow C = 3$$
$$y = x^2 + 3$$

### 1.4 Classification of First-Order ODEs

```mermaid
graph TD
    A[First-Order ODE] --> B{Can separate<br/>variables?}
    B -->|Yes| C[Separable]
    B -->|No| D{Form: M dx + N dy = 0?}
    D -->|Yes| E{∂M/∂y = ∂N/∂x?}
    E -->|Yes| F[Exact]
    E -->|No| G[Use Integrating Factor]
    D -->|No| H{Form: y' + Py = Q?}
    H -->|Yes| I[Linear]
    H -->|No| J{Form: y' + Py = Qy^n?}
    J -->|Yes| K[Bernoulli]
    J -->|No| L{Form: y' = f(y/x)?}
    L -->|Yes| M[Homogeneous]
    L -->|No| N[Special Methods]
```

### 1.5 Why Study ODEs?

**Real-World Applications**:
- **Physics**: Newton's laws of motion
- **Biology**: Population growth models
- **Economics**: Supply-demand dynamics
- **Engineering**: Circuit analysis, heat transfer
- **Chemistry**: Reaction rates

**Exam Relevance**: ODEs are fundamental to higher mathematics and engineering courses!

---

## 2. Separable Differential Equations

###
