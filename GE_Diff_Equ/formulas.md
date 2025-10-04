# Complete Formula Guide for First-Order ODEs
## Enhanced Edition with Full NCERT Class 12 Coverage

**Target Audience**: UG 2nd Year Students  
**Prerequisite Level**: NCERT Class 12 Mathematics  
**Purpose**: Comprehensive formula reference for Differential Equations

---

## Table of Contents

1. [Complete Calculus Foundation](#complete-calculus-foundation)
2. [ODE Solution Techniques & Formulas](#ode-solution-techniques--formulas)
3. [Quick Reference Cards](#quick-reference-cards)
4. [Exam Preparation Resources](#exam-preparation-resources)

---

# PART 1: Complete Calculus Foundation

## 1.1 Complete Derivative Formulas (NCERT Class 12 + DE Applications)

### Basic Differentiation Rules

#### Power Rule
$$\frac{d}{dx}(x^n) = nx^{n-1}$$
$$\frac{d}{dx}(c) = 0 \quad \text{(constant)}$$

#### Exponential & Logarithmic Functions
- $\frac{d}{dx}(e^x) = e^x$
- $\frac{d}{dx}(a^x) = a^x \ln a$
- $\frac{d}{dx}(\ln x) = \frac{1}{x}$
- $\frac{d}{dx}(\log_a x) = \frac{1}{x \ln a}$

#### Trigonometric Functions (Complete Set)
- $\frac{d}{dx}(\sin x) = \cos x$
- $\frac{d}{dx}(\cos x) = -\sin x$
- $\frac{d}{dx}(\tan x) = \sec^2 x$
- $\frac{d}{dx}(\cot x) = -\csc^2 x$
- $\frac{d}{dx}(\sec x) = \sec x \tan x$
- $\frac{d}{dx}(\csc x) = -\csc x \cot x$

#### Inverse Trigonometric Functions ⭐ (Critical for DE!)
- $\frac{d}{dx}(\sin^{-1} x) = \frac{1}{\sqrt{1-x^2}}$
- $\frac{d}{dx}(\cos^{-1} x) = \frac{-1}{\sqrt{1-x^2}}$
- $\frac{d}{dx}(\tan^{-1} x) = \frac{1}{1+x^2}$
- $\frac{d}{dx}(\cot^{-1} x) = \frac{-1}{1+x^2}$
- $\frac{d}{dx}(\sec^{-1} x) = \frac{1}{|x|\sqrt{x^2-1}}$
- $\frac{d}{dx}(\csc^{-1} x) = \frac{-1}{|x|\sqrt{x^2-1}}$

### Advanced Differentiation Rules

#### Product Rule
$$\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$$

**Memory Trick**: "First × d(Second) + Second × d(First)"

**DE Example**: $\frac{d}{dx}(x^2 e^x) = 2x \cdot e^x + x^2 \cdot e^x = xe^x(2+x)$

#### Quotient Rule
$$\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$$

**Memory Trick**: "Low·d(High) - High·d(Low), all over Low²"

**DE Example**: $\frac{d}{dx}\left[\frac{x}{x^2+1}\right] = \frac{(x^2+1)(1) - x(2x)}{(x^2+1)^2} = \frac{1-x^2}{(x^2+1)^2}$

#### Chain Rule
$$\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$$

**Common DE Applications**:
- $\frac{d}{dx}(e^{3x}) = e^{3x} \cdot 3 = 3e^{3x}$
- $\frac{d}{dx}(\sin(x^2)) = \cos(x^2) \cdot 2x = 2x\cos(x^2)$
- $\frac{d}{dx}(\ln(1+x^2)) = \frac{1}{1+x^2} \cdot 2x = \frac{2x}{1+x^2}$
- $\frac{d}{dx}((x^2+1)^5) = 5(x^2+1)^4 \cdot 2x = 10x(x^2+1)^4$

---

## 1.2 Complete Integration Formulas (NCERT Class 12 + DE Applications)

### Basic Integrals

#### Power Functions
- $\int x^n \, dx = \frac{x^{n+1}}{n+1} + C$ (where $n \neq -1$)
- $\int \frac{1}{x} \, dx = \ln|x| + C$
- $\int dx = x + C$
- $\int k \, dx = kx + C$ (constant $k$)

#### Exponential Functions
- $\int e^x \, dx = e^x + C$
- $\int a^x \, dx = \frac{a^x}{\ln a} + C$
- $\int e^{ax} \, dx = \frac{e^{ax}}{a} + C$ ⭐ **(Very common in DE!)**
- $\int e^{ax+b} \, dx = \frac{1}{a}e^{ax+b} + C$

### Trigonometric Integrals (Complete NCERT Set)

#### Basic Trig Functions
- $\int \sin x \, dx = -\cos x + C$
- $\int \cos x \, dx = \sin x + C$
- $\int \sec^2 x \, dx = \tan x + C$
- $\int \csc^2 x \, dx = -\cot x + C$
- $\int \sec x \tan x \, dx = \sec x + C$
- $\int \csc x \cot x \, dx = -\csc x + C$

#### Advanced Trig Integrals
- $\int \tan x \, dx = \ln|\sec x| + C = -\ln|\cos x| + C$
- $\int \cot x \, dx = \ln|\sin x| + C$
- $\int \sec x \, dx = \ln|\sec x + \tan x| + C$
- $\int \csc x \, dx = \ln|\csc x - \cot x| + C$

### Inverse Trigonometric Forms ⭐⭐ (CRITICAL for DE!)

#### Standard Forms
- $\int \frac{1}{\sqrt{1-x^2}} \, dx = \sin^{-1} x + C$
- $\int \frac{-1}{\sqrt{1-x^2}} \, dx = \cos^{-1} x + C$
- $\int \frac{1}{1+x^2} \, dx = \tan^{-1} x + C$
- $\int \frac{-1}{1+x^2} \, dx = \cot^{-1} x + C$
- $\int \frac{1}{x\sqrt{x^2-1}} \, dx = \sec^{-1} x + C$ (for $|x| > 1$)
- $\int \frac{-1}{x\sqrt{x^2-1}} \, dx = \csc^{-1} x + C$ (for $|x| > 1$)

### Standard Algebraic Forms ⭐⭐⭐ (ESSENTIAL for DE!)

#### Type 1: Quadratic Denominators
$$\int \frac{1}{x^2+a^2} \, dx = \frac{1}{a}\tan^{-1}\left(\frac{x}{a}\right) + C$$

$$\int \frac{1}{x^2-a^2} \, dx = \frac{1}{2a}\ln\left|\frac{x-a}{x+a}\right| + C$$

$$\int \frac{1}{a^2-x^2} \, dx = \frac{1}{2a}\ln\left|\frac{a+x}{a-x}\right| + C$$

**Memory Trick**: 
- $x^2 + a^2$ → tan⁻¹
- $x^2 - a^2$ → logarithm (negative sign pattern)
- $a^2 - x^2$ → logarithm (positive sign pattern)

#### Type 2: Square Root Forms
$$\int \frac{1}{\sqrt{x^2+a^2}} \, dx = \ln\left|x + \sqrt{x^2+a^2}\right| + C$$

$$\int \frac{1}{\sqrt{x^2-a^2}} \, dx = \ln\left|x + \sqrt{x^2-a^2}\right| + C$$

$$\int \frac{1}{\sqrt{a^2-x^2}} \, dx = \sin^{-1}\left(\frac{x}{a}\right) + C$$

#### Type 3: Square Root Integrals (Full Forms)
$$\int \sqrt{x^2+a^2} \, dx = \frac{x}{2}\sqrt{x^2+a^2} + \frac{a^2}{2}\ln\left|x+\sqrt{x^2+a^2}\right| + C$$

$$\int \sqrt{x^2-a^2} \, dx = \frac{x}{2}\sqrt{x^2-a^2} - \frac{a^2}{2}\ln\left|x+\sqrt{x^2-a^2}\right| + C$$

$$\int \sqrt{a^2-x^2} \, dx = \frac{x}{2}\sqrt{a^2-x^2} + \frac{a^2}{2}\sin^{-1}\left(\frac{x}{a}\right) + C$$

### Special DE Formulas ⭐⭐⭐ (Must Know!)

#### Linear Forms
$$\int \frac{1}{ax+b} \, dx = \frac{1}{a}\ln|ax+b| + C$$

$$\int (ax+b)^n \, dx = \frac{(ax+b)^{n+1}}{a(n+1)} + C \quad (n \neq -1)$$

#### The Golden Rule for DE
$$\int \frac{f'(x)}{f(x)} \, dx = \ln|f(x)| + C$$

**Why It's Golden**: Recognizing this pattern saves tons of time!

**Examples**:
- $\int \frac{2x}{x^2+1} \, dx = \ln(x^2+1) + C$
- $\int \frac{\cos x}{\sin x} \, dx = \ln|\sin x| + C$
- $\int \frac{1}{x \ln x} \, dx = \ln|\ln x| + C$

---

## 1.3 Advanced Integration Techniques

### Integration by Substitution

**Standard Method**: If integral has form $\int f(g(x))g'(x) \, dx$

**Steps**:
1. Let $u = g(x)$
2. Then $du = g'(x)dx$
3. Rewrite: $\int f(u) \, du$
4. Integrate and substitute back

**Classic DE Examples**:

**Example 1**: 
$$\int 2x e^{x^2} \, dx$$
Let $u = x^2$, then $du = 2x \, dx$
$$= \int e^u \, du = e^u + C = e^{x^2} + C$$

**Example 2**: 
$$\int \frac{2x}{1+x^2} \, dx$$
Let $u = 1+x^2$, then $du = 2x \, dx$
$$= \int \frac{du}{u} = \ln|u| + C = \ln(1+x^2) + C$$

**Example 3**: 
$$\int \frac{\sin x}{1+\cos^2 x} \, dx$$
Let $u = \cos x$, then $du = -\sin x \, dx$
$$= -\int \frac{du}{1+u^2} = -\tan^{-1}u + C = -\tan^{-1}(\cos x) + C$$

### Integration by Parts

$$\int u \, dv = uv - \int v \, du$$

**LIATE Priority Rule** (Choose $u$ based on this order):
1. **L**ogarithmic functions: $\ln x, \log x$
2. **I**nverse trigonometric: $\sin^{-1}x, \tan^{-1}x$
3. **A**lgebraic (polynomials): $x, x^2, x^3$
4. **T**rigonometric: $\sin x, \cos x, \tan x$
5. **E**xponential: $e^x, a^x$

**Common DE Examples**:

**Example 1**: $\int x e^x \, dx$
- Choose: $u = x$ (A), $dv = e^x dx$
- Then: $du = dx$, $v = e^x$
- Result: $xe^x - \int e^x dx = xe^x - e^x + C = e^x(x-1) + C$

**Example 2**: $\int x \sin x \, dx$
- Choose: $u = x$ (A), $dv = \sin x \, dx$
- Then: $du = dx$, $v = -\cos x$
- Result: $-x\cos x + \int \cos x \, dx = -x\cos x + \sin x + C$

**Example 3**: $\int \ln x \, dx$ (Special case!)
- Choose: $u = \ln x$ (L), $dv = dx$
- Then: $du = \frac{1}{x}dx$, $v = x$
- Result: $x\ln x - \int x \cdot \frac{1}{x} dx = x\ln x - x + C$

**Example 4**: $\int e^x \sin x \, dx$ (Apply twice!)
Let $I = \int e^x \sin x \, dx$
- First application: $I = e^x \sin x - \int e^x \cos x \, dx$
- Second application: $I = e^x \sin x - [e^x \cos x + \int e^x \sin x \, dx]$
- $I = e^x \sin x - e^x \cos x - I$
- $2I = e^x(\sin x - \cos x)$
- $I = \frac{e^x(\sin x - \cos x)}{2} + C$

### Partial Fractions ⭐ (Essential for Linear DE!)

#### Type 1: Distinct Linear Factors
$$\frac{px+q}{(x-a)(x-b)} = \frac{A}{x-a} + \frac{B}{x-b}$$

**Method**: Multiply both sides by $(x-a)(x-b)$ and solve for $A, B$

**DE Example**:
$$\int \frac{1}{x(x-1)} \, dx = \int \left(\frac{-1}{x} + \frac{1}{x-1}\right) dx = -\ln|x| + \ln|x-1| + C = \ln\left|\frac{x-1}{x}\right| + C$$

#### Type 2: Repeated Linear Factor
$$\frac{px+q}{(x-a)^2} = \frac{A}{x-a} + \frac{B}{(x-a)^2}$$

#### Type 3: Three Distinct Factors
$$\frac{px^2+qx+r}{(x-a)(x-b)(x-c)} = \frac{A}{x-a} + \frac{B}{x-b} + \frac{C}{x-c}$$

#### Type 4: Linear and Quadratic Factors
$$\frac{px^2+qx+r}{(x-a)(x^2+bx+c)} = \frac{A}{x-a} + \frac{Bx+C}{x^2+bx+c}$$

**Important DE Application**:
$$\int \frac{1}{y(1-y)} \, dy = \int \left(\frac{1}{y} + \frac{1}{1-y}\right) dy = \ln|y| - \ln|1-y| + C = \ln\left|\frac{y}{1-y}\right| + C$$

### Special Integration Techniques for DE

#### Technique 1: Completing the Square
$$\int \frac{1}{x^2+4x+13} \, dx$$
Complete the square: $x^2+4x+13 = (x+2)^2 + 9$
$$= \int \frac{1}{(x+2)^2+9} \, dx = \frac{1}{3}\tan^{-1}\left(\frac{x+2}{3}\right) + C$$

#### Technique 2: Splitting Numerator (Rational Functions)
$$\int \frac{2x+3}{x^2+1} \, dx = \int \frac{2x}{x^2+1} \, dx + \int \frac{3}{x^2+1} \, dx$$
$$= \ln(x^2+1) + 3\tan^{-1}x + C$$

**General Rule**: If degree of numerator ≥ degree of denominator, divide first!

#### Technique 3: Trigonometric Substitution
- For $\sqrt{a^2-x^2}$: use $x = a\sin\theta$, then $dx = a\cos\theta \, d\theta$
- For $\sqrt{a^2+x^2}$: use $x = a\tan\theta$, then $dx = a\sec^2\theta \, d\theta$
- For $\sqrt{x^2-a^2}$: use $x = a\sec\theta$, then $dx = a\sec\theta\tan\theta \, d\theta$

---

## 1.4 Essential Properties & Identities

### Trigonometric Identities (Useful in Separable Equations)

#### Pythagorean Identities
- $\sin^2 x + \cos^2 x = 1$
- $1 + \tan^2 x = \sec^2 x$
- $1 + \cot^2 x = \csc^2 x$

#### Double Angle Formulas
- $\sin 2x = 2\sin x \cos x$
- $\cos 2x = \cos^2 x - \sin^2 x = 2\cos^2 x - 1 = 1 - 2\sin^2 x$
- $\tan 2x = \frac{2\tan x}{1-\tan^2 x}$

#### Half Angle Formulas
- $\sin^2 x = \frac{1-\cos 2x}{2}$
- $\cos^2 x = \frac{1+\cos 2x}{2}$

### Logarithm Properties (Critical for Integration)
- $\ln(ab) = \ln a + \ln b$
- $\ln(a/b) = \ln a - \ln b$
- $\ln(a^n) = n\ln a$
- $e^{\ln x} = x$ and $\ln(e^x) = x$
- $\ln 1 = 0$ and $\ln e = 1$

### Exponential Properties
- $e^{a+b} = e^a \cdot e^b$
- $e^{a-b} = \frac{e^a}{e^b}$
- $(e^a)^n = e^{an}$
- $e^0 = 1$

---

## 1.5 Partial Derivatives for Exact Equations

### Definition
For function $f(x, y)$:

**Partial derivative w.r.t. x** (treat $y$ as constant):
$$\frac{\partial f}{\partial x}$$

**Partial derivative w.r.t. y** (treat $x$ as constant):
$$\frac{\partial f}{\partial y}$$

### Examples Critical for DE

**Example 1**: $f(x,y) = x^2y + 3xy^2$
- $\frac{\partial f}{\partial x} = 2xy + 3y^2$
- $\frac{\partial f}{\partial y} = x^2 + 6xy$

**Example 2**: $M(x,y) = 2xy + e^x$
- $\frac{\partial M}{\partial x} = 2y + e^x$
- $\frac{\partial M}{\partial y} = 2x$

**Example 3**: $N(x,y) = x^2 + \sin y$
- $\frac{\partial N}{\partial x} = 2x$
- $\frac{\partial N}{\partial y} = \cos y$

### Mixed Partials Test (Exactness!)
$$\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial^2 f}{\partial x \partial y}$$

**Why This Matters**: This is the foundation of the exactness test for differential equations!

---

## 1.6 Quick Readiness Assessment

**Test yourself**: Can you solve these in under 30 seconds each?

### Derivatives
1. $\frac{d}{dx}(x^3 e^x) = ?$
2. $\frac{d}{dx}\left[\frac{x^2}{x+1}\right] = ?$
3. $\frac{d}{dx}(\tan^{-1}(2x)) = ?$

### Integrals
4. $\int x e^{x^2} \, dx = ?$
5. $\int \frac{1}{x^2+4} \, dx = ?$
6. $\int \frac{2x}{x^2+1} \, dx = ?$

### Partial Derivatives
7. If $f(x,y) = x^2y + xy$, find $\frac{\partial f}{\partial y}$

**Answers**:
1. $3x^2 e^x + x^3 e^x = x^2e^x(3+x)$ (product rule)
2. $\frac{2x(x+1) - x^2}{(x+1)^2} = \frac{x^2+2x}{(x+1)^2}$ (quotient rule)
3. $\frac{2}{1+4x^2}$ (chain rule)
4. $\frac{1}{2}e^{x^2} + C$ (substitution: $u = x^2$)
5. $\frac{1}{2}\tan^{-1}\left(\frac{x}{2}\right) + C$ (standard form with $a=2$)
6. $\ln(x^2+1) + C$ (recognition: $f'/f$ pattern)
7. $x^2 + x$ (treat $x$ as constant)

**If you struggled**: Review that specific section before proceeding!

---

# PART 2: ODE Solution Techniques & Formulas

## 2.1 Fundamental Definitions

### What is a First-Order ODE?
$$\frac{dy}{dx} = f(x, y) \quad \text{or} \quad F(x, y, y') = 0$$

### Types of Solutions

**General Solution**: Contains arbitrary constant $C$
$$y = Ce^x \quad \text{(family of curves)}$$

**Particular Solution**: Specific value of $C$ from initial condition
$$y = 2e^x \quad \text{(one specific curve)}$$

### Initial Value Problem (IVP)
$$\frac{dy}{dx} = f(x,y), \quad y(x_0) = y_0$$

**Goal**: Find particular solution passing through point $(x_0, y_0)$

---

## 2.2 Separable Equations ⭐

### Standard Form
$$\frac{dy}{dx} = g(x)h(y)$$

Can be written as: (function of $x$ only) × (function of $y$ only)

### Solution Method
$$\frac{dy}{h(y)} = g(x) \, dx$$
$$\int \frac{dy}{h(y)} = \int g(x) \, dx + C$$

### Recognition Pattern
✓ Right side can be factored as $g(x) \times h(y)$  
✓ All $x$'s on one side, all $y$'s on other side after separation

### Complete Example

**Problem**: Solve $\frac{dy}{dx} = xy$, with $y(0) = 2$

**Solution**:
$$\frac{dy}{y} = x \, dx$$
$$\int \frac{dy}{y} = \int x \, dx$$
$$\ln|y| = \frac{x^2}{2} + C_1$$
$$|y| = e^{x^2/2 + C_1} = e^{C_1} \cdot e^{x^2/2}$$
$$y = Ae^{x^2/2} \quad \text{where } A = \pm e^{C_1}$$

Apply $y(0) = 2$:
$$2 = Ae^0 = A$$
$$\boxed{y = 2e^{x^2/2}}$$

### Common Separable Patterns

| **Pattern** | **After Separation** | **Result** |
|-------------|----------------------|------------|
| $\frac{dy}{dx} = ky$ | $\frac{dy}{y} = k \, dx$ | $y = Ce^{kx}$ |
| $\frac{dy}{dx} = \frac{x}{y}$ | $y \, dy = x \, dx$ | $y^2 = x^2 + C$ |
| $\frac{dy}{dx} = \frac{g(x)}{h(y)}$ | $h(y) \, dy = g(x) \, dx$ | Integrate both |

**Memory Trick**: "If you can separate the variables completely, you can solve it easily!"

---

## 2.3 Exact Differential Equations ⭐⭐

### Standard Form
$$M(x,y) \, dx + N(x,y) \, dy = 0$$

### Exactness Test (Must Check First!)
$$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$

**If test passes** → Equation is exact!  
**If test fails** → Need integrating factor

### Solution Method (When Exact)

There exists function $F(x,y) = C$ such that:
$$\frac{\partial F}{\partial x} = M \quad \text{and} \quad \frac{\partial F}{\partial y} = N$$

**Method 1**: Integrate $M$ w.r.t. $x$
$$F(x,y) = \int M \, dx + g(y)$$
Then find $g(y)$ by comparing $\frac{\partial F}{\partial y}$ with $N$

**Method 2**: Integrate $N$ w.r.t. $y$
$$F(x,y) = \int N \, dy + h(x)$$
Then find $h(x)$ by comparing $\frac{\partial F}{\partial x}$ with $M$

### Complete Example

**Problem**: Solve $(2xy + 3) \, dx + (x^2 - 1) \, dy = 0$

**Step 1**: Test exactness
- $M = 2xy + 3$, so $\frac{\partial M}{\partial y} = 2x$
- $N = x^2 - 1$, so $\frac{\partial N}{\partial x} = 2x$
- $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$ ✓ Exact!

**Step 2**: Find $F(x,y)$
$$F = \int M \, dx = \int (2xy + 3) \, dx = x^2y + 3x + g(y)$$

**Step 3**: Find $g(y)$
$$\frac{\partial F}{\partial y} = x^2 + g'(y) = N = x^2 - 1$$
$$g'(y) = -1 \implies g(y) = -y$$

**Step 4**: Solution
$$F(x,y) = x^2y + 3x - y = C$$
$$\boxed{x^2y + 3x - y = C}$$

### Why Exactness Test Works

For exact equation, $dF = 0$:
$$dF = \frac{\partial F}{\partial x}dx + \frac{\partial F}{\partial y}dy = M \, dx + N \, dy = 0$$

Mixed partials must be equal:
$$\frac{\partial^2 F}{\partial y \partial x} = \frac{\partial^2 F}{\partial x \partial y}$$

This gives us: $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$

**Memory Trick**: "M-y equals N-x means exact match!"

---

## 2.4 Integrating Factors ⭐⭐

### Purpose
Convert **non-exact** equation into **exact** equation by multiplying with $\mu$

### Case 1: Integrating Factor Depends Only on x

**Test**: 
$$\frac{1}{N}\left(\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}\right) = f(x)$$
(function of $x$ only)

**If test passes**:
$$\mu(x) = e^{\int f(x) \, dx}$$

**Then**: $\mu(x) \cdot [M \, dx + N \, dy] = 0$ is exact!

### Case 2: Integrating Factor Depends Only on y

**Test**:
$$\frac{1}{M}\left(\frac{\partial N}{\partial x} - \frac{\partial M}{\partial y}\right) = g(y)$$
(function of $y$ only)

**If test passes**:
$$\mu(y) = e^{\int g(y) \, dy}$$

### Memory Tricks

**For μ(x)**: "N in denominator, M first in numerator"
$\frac{M_y - N_x}{N} = f(x) \implies \mu(x) = e^{\int f(x) dx}$

**For μ(y)**: "M in denominator, N first in numerator"
$\frac{N_x - M_y}{M} = g(y) \implies \mu(y) = e^{\int g(y) dy}$

### Complete Example

**Problem**: Solve $(2y - 6x) \, dx + (3x - 4x^2y^{-1}) \, dy = 0$

**Step 1**: Test exactness
- $M = 2y - 6x$, so $M_y = 2$
- $N = 3x - 4x^2y^{-1}$, so $N_x = 3 - 8xy^{-1}$
- $M_y \neq N_x$ ✗ Not exact!

**Step 2**: Try integrating factor depending on x
$\frac{M_y - N_x}{N} = \frac{2 - (3 - 8xy^{-1})}{3x - 4x^2y^{-1}} = \frac{-1 + 8xy^{-1}}{3x - 4x^2y^{-1}}$
Not a function of $x$ only ✗

**Step 3**: Try integrating factor depending on y
$\frac{N_x - M_y}{M} = \frac{3 - 8xy^{-1} - 2}{2y - 6x} = \frac{1 - 8xy^{-1}}{2y - 6x}$
Not a function of $y$ only ✗

(In practice, try special forms or look for patterns)

### Special Integrating Factors (Memorize These!)

| **Equation Form** | **Integrating Factor** |
|-------------------|------------------------|
| $y \, dx - x \, dy = 0$ | $\mu = \frac{1}{xy}$ or $\frac{1}{x^2}$ or $\frac{1}{y^2}$ |
| $xy \, dx + (x^2 + y^2) \, dy = 0$ | $\mu = \frac{1}{xy^2}$ |
| $(x^2 + y^2) \, dx + xy \, dy = 0$ | $\mu = \frac{1}{x^2y^2}$ |
| $x \, dy - y \, dx = 0$ | $\mu = \frac{1}{x^2}$ gives $d\left(\frac{y}{x}\right)$ |
| $y \, dx + x \, dy = 0$ | $\mu = 1$ gives $d(xy) = 0$ |

**Exam Tip**: These patterns appear frequently! Recognize them instantly.

---

## 2.5 Linear First-Order ODEs ⭐⭐⭐

### Standard Form (CRITICAL: Must be in this form!)
$\frac{dy}{dx} + P(x)y = Q(x)$

**Note**: Coefficient of $\frac{dy}{dx}$ MUST be 1!

### Integrating Factor
$\mu(x) = e^{\int P(x) \, dx}$

**Important**: Don't add constant of integration when finding $\mu$!

### Solution Formula
$y \cdot \mu(x) = \int Q(x) \cdot \mu(x) \, dx + C$

Or equivalently:
$y = \frac{1}{\mu(x)}\left[\int Q(x) \cdot \mu(x) \, dx + C\right]$

### Why It Works (Understanding the Magic!)

Multiply equation by $\mu(x)$:
$\mu(x)\frac{dy}{dx} + \mu(x)P(x)y = \mu(x)Q(x)$

**Key Insight**: Since $\frac{d\mu}{dx} = \mu(x)P(x)$, the left side becomes:
$\frac{d}{dx}[\mu(x)y] = \mu(x)Q(x)$

Now integrate both sides!

### Step-by-Step Procedure

1. **Write in standard form**: $\frac{dy}{dx} + P(x)y = Q(x)$
2. **Identify** $P(x)$ and $Q(x)$
3. **Find integrating factor**: $\mu = e^{\int P(x) dx}$ (no $+C$ here!)
4. **Multiply** entire equation by $\mu$
5. **Recognize** left side as $\frac{d}{dx}(y\mu)$
6. **Integrate** both sides
7. **Solve** for $y$
8. **Apply** initial condition if given

### Complete Example 1 (Basic)

**Problem**: Solve $\frac{dy}{dx} + 2y = 4x$, with $y(0) = 3$

**Solution**:

**Step 1**: Already in standard form with $P(x) = 2$, $Q(x) = 4x$

**Step 2**: Find $\mu$
$\mu = e^{\int 2 \, dx} = e^{2x}$

**Step 3**: Multiply equation by $\mu$
$e^{2x}\frac{dy}{dx} + 2e^{2x}y = 4xe^{2x}$
$\frac{d}{dx}(ye^{2x}) = 4xe^{2x}$

**Step 4**: Integrate both sides
$ye^{2x} = \int 4xe^{2x} \, dx$

Use integration by parts: $u = 4x$, $dv = e^{2x}dx$
$= 4x \cdot \frac{e^{2x}}{2} - \int 4 \cdot \frac{e^{2x}}{2} \, dx$
$= 2xe^{2x} - e^{2x} + C$

**Step 5**: Solve for $y$
$y = 2x - 1 + Ce^{-2x}$

**Step 6**: Apply $y(0) = 3$
$3 = 0 - 1 + C \implies C = 4$

$\boxed{y = 2x - 1 + 4e^{-2x}}$

### Complete Example 2 (Variable P(x))

**Problem**: Solve $\frac{dy}{dx} + \frac{y}{x} = x^2$

**Solution**:

$P(x) = \frac{1}{x}$, $Q(x) = x^2$

$\mu = e^{\int \frac{1}{x} dx} = e^{\ln|x|} = |x| = x \quad (x > 0)$

Multiply by $\mu = x$:
$x\frac{dy}{dx} + y = x^3$
$\frac{d}{dx}(xy) = x^3$

Integrate:
$xy = \frac{x^4}{4} + C$

$\boxed{y = \frac{x^3}{4} + \frac{C}{x}}$

### Special Case: Homogeneous Linear ($Q(x) = 0$)

$\frac{dy}{dx} + P(x)y = 0$

This is **separable**:
$\frac{dy}{y} = -P(x) \, dx$
$\ln|y| = -\int P(x) \, dx + C_1$
$y = Ce^{-\int P(x) \, dx}$

**Alternative**: Use integrating factor $\mu = e^{\int P dx}$
$\frac{d}{dx}(y\mu) = 0 \implies y\mu = C \implies y = \frac{C}{\mu}$

### Common P(x) and Their Integrating Factors

| **P(x)** | **∫P(x)dx** | **μ(x) = e^∫P dx** |
|----------|-------------|-------------------|
| $k$ (constant) | $kx$ | $e^{kx}$ |
| $\frac{1}{x}$ | $\ln x$ | $x$ |
| $\frac{n}{x}$ | $n\ln x$ | $x^n$ |
| $\frac{1}{x+a}$ | $\ln(x+a)$ | $x+a$ |
| $\tan x$ | $-\ln(\cos x)$ | $\sec x$ |
| $\cot x$ | $\ln(\sin x)$ | $\sin x$ |

**Memory Trick**: "P for integrating factor, Q for right side integration"

---

## 2.6 Bernoulli Equations ⭐⭐

### Standard Form
$\frac{dy}{dx} + P(x)y = Q(x)y^n \quad (n \neq 0, 1)$

**Recognition**: Right side has $y^n$ with $n \neq 0, 1$

### The Magic Substitution
$v = y^{1-n}$

### Derivative Transform
$\frac{dv}{dx} = (1-n)y^{-n}\frac{dy}{dx}$

### Step-by-Step Method

1. **Divide** entire equation by $y^n$:
$y^{-n}\frac{dy}{dx} + P(x)y^{1-n} = Q(x)$

2. **Substitute** $v = y^{1-n}$, so $y^{1-n} = v$ and $y^{-n}\frac{dy}{dx} = \frac{1}{1-n}\frac{dv}{dx}$

3. **Get linear equation** in $v$:
$\frac{1}{1-n}\frac{dv}{dx} + P(x)v = Q(x)$
$\frac{dv}{dx} + (1-n)P(x)v = (1-n)Q(x)$

4. **Solve** as linear ODE in $v$

5. **Convert back**: $y = v^{1/(1-n)}$

### Complete Example

**Problem**: Solve $\frac{dy}{dx} + \frac{y}{x} = xy^2$

**Step 1**: Identify $n = 2$, so $1-n = -1$

**Step 2**: Divide by $y^2$:
$y^{-2}\frac{dy}{dx} + \frac{y^{-1}}{x} = x$

**Step 3**: Let $v = y^{-1}$, then $\frac{dv}{dx} = -y^{-2}\frac{dy}{dx}$

So: $y^{-2}\frac{dy}{dx} = -\frac{dv}{dx}$

**Step 4**: Substitute:
$-\frac{dv}{dx} + \frac{v}{x} = x$
$\frac{dv}{dx} - \frac{v}{x} = -x$

**Step 5**: This is linear! $P(x) = -\frac{1}{x}$, $Q(x) = -x$

$\mu = e^{\int -\frac{1}{x}dx} = e^{-\ln x} = \frac{1}{x}$

Multiply by $\mu = \frac{1}{x}$:
$\frac{1}{x}\frac{dv}{dx} - \frac{v}{x^2} = -1$
$\frac{d}{dx}\left(\frac{v}{x}\right) = -1$

Integrate:
$\frac{v}{x} = -x + C$
$v = -x^2 + Cx$

**Step 6**: Convert back ($v = y^{-1} = \frac{1}{y}$):
$\frac{1}{y} = -x^2 + Cx$
$\boxed{y = \frac{1}{Cx - x^2}}$

### Common Bernoulli Values

| **n** | **Substitution** | **Result** |
|-------|------------------|------------|
| $n = 2$ | $v = y^{-1} = \frac{1}{y}$ | Most common! |
| $n = 3$ | $v = y^{-2} = \frac{1}{y^2}$ | Common |
| $n = -1$ | $v = y^2$ | Less common |
| $n = \frac{1}{2}$ | $v = y^{1/2} = \sqrt{y}$ | Rare |

**Memory Trick**: "Bernoulli needs $v = y^{1-n}$ to linearize"

**Special Note**: 
- If $n = 0$: Already linear!
- If $n = 1$: It's separable! ($\frac{dy}{dx} + Py = Qy$ → $\frac{dy}{dx} = (Q-P)y$)

---

## 2.7 Homogeneous Equations ⭐

### Standard Form
$\frac{dy}{dx} = f\left(\frac{y}{x}\right)$

Or: Right side is a function of $\frac{y}{x}$ only

### Recognition Test
Can you write $\frac{dy}{dx}$ as function of $\frac{y}{x}$?

**Examples**:
- $\frac{dy}{dx} = \frac{y}{x}$ ✓
- $\frac{dy}{dx} = \frac{x+y}{x-y} = \frac{1+\frac{y}{x}}{1-\frac{y}{x}}$ ✓
- $\frac{dy}{dx} = x + y$ ✗ (not homogeneous)

### The Substitution
$v = \frac{y}{x} \implies y = vx$

### Derivative
$\frac{dy}{dx} = v + x\frac{dv}{dx}$

### Transformed Equation
$v + x\frac{dv}{dx} = f(v)$
$x\frac{dv}{dx} = f(v) - v$

This is **separable**!

### Complete Example

**Problem**: Solve $\frac{dy}{dx} = \frac{x+y}{x-y}$

**Step 1**: Verify homogeneous
$\frac{dy}{dx} = \frac{x+y}{x-y} = \frac{1+\frac{y}{x}}{1-\frac{y}{x}}$ ✓

**Step 2**: Let $v = \frac{y}{x}$, so $y = vx$ and $\frac{dy}{dx} = v + x\frac{dv}{dx}$

**Step 3**: Substitute
$v + x\frac{dv}{dx} = \frac{1+v}{1-v}$
$x\frac{dv}{dx} = \frac{1+v}{1-v} - v = \frac{1+v - v(1-v)}{1-v} = \frac{1+v - v + v^2}{1-v} = \frac{1+v^2}{1-v}$

**Step 4**: Separate variables
$\frac{1-v}{1+v^2} \, dv = \frac{dx}{x}$

**Step 5**: Integrate left side (split fraction)
$\int \frac{1-v}{1+v^2} \, dv = \int \frac{1}{1+v^2} \, dv - \int \frac{v}{1+v^2} \, dv$
$= \tan^{-1}v - \frac{1}{2}\ln(1+v^2)$

Right side:
$\int \frac{dx}{x} = \ln|x|$

**Step 6**: Combine
$\tan^{-1}v - \frac{1}{2}\ln(1+v^2) = \ln|x| + C$

**Step 7**: Back-substitute $v = \frac{y}{x}$
$\boxed{\tan^{-1}\left(\frac{y}{x}\right) - \frac{1}{2}\ln\left(1+\frac{y^2}{x^2}\right) = \ln|x| + C}$

Can simplify:
$\tan^{-1}\left(\frac{y}{x}\right) = \ln|x| + \frac{1}{2}\ln\left(1+\frac{y^2}{x^2}\right) + C$

### Alternative Forms

**Form 1**: $\frac{dy}{dx} = F\left(\frac{y}{x}\right)$

**Form 2**: $M(x,y) \, dx + N(x,y) \, dy = 0$ where $M$ and $N$ are homogeneous of same degree

**Test for Form 2**: $M(tx, ty) = t^n M(x,y)$ and $N(tx, ty) = t^n N(x,y)$

---

## 2.8 Equations Reducible to Homogeneous

### Type 1: Lines Through Origin
$\frac{dy}{dx} = \frac{ax + by}{cx + ey}$

If lines $ax + by = 0$ and $cx + ey = 0$ intersect at **origin**, already homogeneous!

### Type 2: Parallel Lines
$\frac{dy}{dx} = \frac{ax + by + c}{ax + by + f}$

Note: Same coefficients for $x$ and $y$ → parallel lines

**Method**: Let $v = ax + by$
$\frac{dv}{dx} = a + b\frac{dy}{dx}$

Substitute and solve!

### Type 3: General Case (Lines Not Through Origin)
$\frac{dy}{dx} = \frac{ax + by + c}{dx + ey + f}$

Where $\frac{a}{d} \neq \frac{b}{e}$ (lines intersect at some point $(h, k)$)

**Method**: Shift origin to intersection point
- Let $x = X + h$ and $y = Y + k$
- Choose $h, k$ so that:
  - $ah + bk + c = 0$
  - $dh + ek + f = 0$
- Equation becomes homogeneous in $X, Y$

### Complete Example (Type 3)

**Problem**: Solve $\frac{dy}{dx} = \frac{x + y - 1}{x - y + 3}$

**Step 1**: Find intersection of lines
$x + y - 1 = 0 \quad \text{and} \quad x - y + 3 = 0$

Add equations: $2x + 2 = 0 \implies x = -1$
Substitute: $-1 + y - 1 = 0 \implies y = 2$

Intersection: $(h, k) = (-1, 2)$

**Step 2**: Let $x = X - 1$ and $y = Y + 2$
$\frac{dy}{dx} = \frac{dY}{dX}$

**Step 3**: Substitute
$\frac{dY}{dX} = \frac{(X-1) + (Y+2) - 1}{(X-1) - (Y+2) + 3} = \frac{X + Y}{X - Y}$

**Step 4**: Now homogeneous! Let $V = \frac{Y}{X}$
$V + X\frac{dV}{dX} = \frac{1 + V}{1 - V}$
$X\frac{dV}{dX} = \frac{1 + V}{1 - V} - V = \frac{1 + V^2}{1 - V}$

**Step 5**: Separate and integrate (similar to previous example)

**Step 6**: Back-substitute $V = \frac{Y}{X}$, then $X = x+1$, $Y = y-2$

---

## 2.9 Special Techniques & Shortcuts

### Technique 1: Recognizing Exact Differentials

**Common Exact Differentials**:
- $x \, dy + y \, dx = d(xy)$
- $\frac{x \, dy - y \, dx}{x^2} = d\left(\frac{y}{x}\right)$
- $\frac{y \, dx - x \, dy}{y^2} = d\left(\frac{x}{y}\right)$
- $\frac{x \, dy - y \, dx}{xy} = d\left(\ln\frac{y}{x}\right)$
- $\frac{x \, dx + y \, dy}{\sqrt{x^2+y^2}} = d(\sqrt{x^2+y^2})$

**Usage**: If you recognize the pattern, integrate directly!

### Technique 2: Inspection Method for Integrating Factors

**Try these multipliers** and check if result is exact:
- $\frac{1}{xy}$, $\frac{1}{x^2}$, $\frac{1}{y^2}$
- $\frac{1}{x^2+y^2}$, $\frac{1}{x^2y^2}$
- $x$, $y$, $x^n$, $y^n$

### Technique 3: Standard Form Recognition

**Always check in this order**:
1. Separable? (Easiest!)
2. Linear? (Use integrating factor)
3. Exact? (Check $M_y = N_x$)
4. Bernoulli? (Look for $y^n$ on right)
5. Homogeneous? (Function of $y/x$)

---

# PART 3: Quick Reference Cards

## 3.1 Decision Tree for First-Order ODEs

```
START: dy/dx = f(x,y) or M dx + N dy = 0

├─ Can variables be separated? (dy/dx = g(x)h(y))
│  YES → SEPARABLE
│  ├─ Separate: dy/h(y) = g(x)dx
│  ├─ Integrate both sides
│  └─ Solve for y (if possible)
│
├─ Is it dy/dx + P(x)y = Q(x)?
│  YES → LINEAR
│  ├─ Find μ = e^∫P dx
│  ├─ Multiply equation by μ
│  ├─ Left side = d/dx(yμ)
│  └─ Integrate: yμ = ∫Qμ dx + C
│
├─ Is it dy/dx + P(x)y = Q(x)y^n? (n ≠ 0,1)
│  YES → BERNOULLI
│  ├─ Divide by y^n
│  ├─ Substitute v = y^(1-n)
│  ├─ Get linear equation in v
│  └─ Solve and convert back
│
├─ Is it M dx + N dy = 0?
│  ├─ Test: ∂M/∂y = ∂N/∂x?
│  │  YES → EXACT
│  │  ├─ Find F where F_x = M, F_y = N
│  │  └─ Solution: F(x,y) = C
│  │
│  └─ NO → Find INTEGRATING FACTOR
│      ├─ Try μ(x): (M_y - N_x)/N = f(x)?
│      │  YES → μ = e^∫f(x)dx
│      ├─ Try μ(y): (N_x - M_y)/M = g(y)?
│      │  YES → μ = e^∫g(y)dy
│      └─ Try special forms (1/xy, 1/x², etc.)
│
└─ Is it dy/dx = f(y/x)?
   YES → HOMOGENEOUS
   ├─ Substitute v = y/x
   ├─ Get x(dv/dx) = f(v) - v
   ├─ Separable in v!
   └─ Integrate and substitute back
```

## 3.2 Formula Summary Card

```
╔═══════════════════════════════════════════════════╗
║     FIRST-ORDER ODE FORMULA QUICK REFERENCE       ║
╚═══════════════════════════════════════════════════╝

1. SEPARABLE: dy/dx = g(x)h(y)
   → ∫dy/h(y) = ∫g(x)dx + C

2. LINEAR: dy/dx + P(x)y = Q(x)
   → μ = e^∫P dx
   → yμ = ∫Qμ dx + C

3. EXACT: M dx + N dy = 0
   → Test: ∂M/∂y = ∂N/∂x
   → Find F: F_x = M, F_y = N
   → Solution: F(x,y) = C

4. INTEGRATING FACTORS:
   → μ(x): (M_y - N_x)/N = f(x) → μ = e^∫f dx
   → μ(y): (N_x - M_y)/M = g(y) → μ = e^∫g dy

5. BERNOULLI: dy/dx + Py = Qy^n
   → v = y^(1-n)
   → dv/dx + (1-n)Pv = (1-n)Q

6. HOMOGENEOUS: dy/dx = f(y/x)
   → v = y/x → dy/dx = v + x(dv/dx)
   → Becomes separable in v

╔═══════════════════════════════════════════════════╗
║        CRITICAL INTEGRATION FORMULAS              ║
╚═══════════════════════════════════════════════════╝

∫1/(x²+a²) dx = (1/a)tan⁻¹(x/a) + C

∫1/(x²-a²) dx = (1/2a)ln|(x-a)/(x+a)| + C

∫1/√(a²-x²) dx = sin⁻¹(x/a) + C

∫f'(x)/f(x) dx = ln|f(x)| + C  ⭐ GOLDEN RULE

∫e^(ax) dx = (1/a)e^(ax) + C

∫1/(ax+b) dx = (1/a)ln|ax+b| + C
```

## 3.3 Common Mistakes to Avoid

```
╔═══════════════════════════════════════════════════╗
║            TOP 10 COMMON MISTAKES                 ║
╚═══════════════════════════════════════════════════╝

1. ✗ Forgetting absolute value in ln
   ✓ ∫dx/x = ln|x| + C (NOT ln x)

2. ✗ Adding C when finding integrating factor μ
   ✓ μ = e^∫P dx (NO +C here!)

3. ✗ Not writing linear ODE in standard form
   ✓ Coefficient of dy/dx must be 1!

4. ✗ Wrong substitution in Bernoulli
   ✓ v = y^(1-n), NOT y^n

5. ✗ Forgetting to test exactness first
   ✓ Always check ∂M/∂y = ∂N/∂x

6. ✗ Losing solution y = 0 in separable equations
   ✓ Check if y = 0 satisfies original equation

7. ✗ Wrong sign in integrating factor tests
   ✓ μ(x): (M_y - N_x)/N
   ✓ μ(y): (N_x - M_y)/M

8. ✗ Not applying initial condition
   ✓ Always find value of C if given!

9. ✗ Arithmetic errors in integration by parts
   ✓ Double-check sign and formula

10. ✗ Confusing exact differential with exact equation
    ✓ d(xy) = x dy + y dx is exact differential
    ✓ M dx + N dy = 0 is exact equation (test needed)
```

---

# PART 4: Exam Preparation Resources

## 4.4 Practice Problem Set (Self-Assessment)

### Level 1: Basic (Must Solve Perfectly)

**Problem 1**: Solve $\frac{dy}{dx} = \frac{y}{x}$

**Problem 2**: Solve $\frac{dy}{dx} + 3y = 6$

**Problem 3**: Test if $(2x + y) \, dx + (x + 2y) \, dy = 0$ is exact

**Problem 4**: Solve $\frac{dy}{dx} = e^{x-y}$

**Problem 5**: Solve $\frac{dy}{dx} = \frac{x^2}{y^2}$

### Level 2: Intermediate (Should Get Most Correct)

**Problem 6**: Solve $\frac{dy}{dx} + \frac{2y}{x} = x^2$, $y(1) = 1$

**Problem 7**: Solve $(y^2 + 1) \, dx + (2xy - 1) \, dy = 0$

**Problem 8**: Solve $\frac{dy}{dx} + y = xy^2$

**Problem 9**: Solve $(x + y) \, dx + (x - y) \, dy = 0$

**Problem 10**: Solve $\frac{dy}{dx} = \frac{2x + 3y}{3x + 2y}$

### Level 3: Advanced (Challenge Yourself)

**Problem 11**: Solve $\frac{dy}{dx} + y\tan x = \sin x$, $y(0) = 0$

**Problem 12**: Find integrating factor for $(3x^2y + 2xy) \, dx + (x^3 + x^2) \, dy = 0$ and solve

**Problem 13**: Solve $x\frac{dy}{dx} = y + x\cos^2\left(\frac{y}{x}\right)$

**Problem 14**: Solve $\frac{dy}{dx} + \frac{y}{x} = y^3 x^2$

**Problem 15**: Solve $(2x - 5y + 3) \, dx - (2x + 4y - 6) \, dy = 0$

### Answer Key (Solutions Brief)

**1**: $y = Cx$ (separable)
**2**: $y = 2 + Ce^{-3x}$ (linear)
**3**: Yes, exact! $M_y = 1 = N_x$
**4**: $y = \ln(e^x + C)$ (separable)
**5**: $y^3 = x^3 + C$ (separable)
**6**: $y = \frac{x^3}{5} + \frac{4}{5x^2}$ (linear with IC)
**7**: Exact, solution: $xy^2 + x - y = C$
**8**: $y = \frac{x}{1 - Cxe^x}$ (Bernoulli, n=2)
**9**: Homogeneous, use $v = y/x$
**10**: Homogeneous, use $v = y/x$
**11**: $y = \sin x - \cos x + \cos x$ (linear)
**12**: $\mu(y) = y$, then solve as exact
**13**: Homogeneous
**14**: Bernoulli with n=3
**15**: Reducible to homogeneous

## 4.5 Memory Aids & Mnemonics

### SLIM-BEH Method (Order of Checking)
- **S**eparable (easiest - check first!)
- **L**inear (common in exams)
- **I**ntegrating factor (if not exact)
- **M**ethod of exactness (test M_y = N_x)
- **B**ernoulli (look for y^n)
- **E**xact (if test passes)
- **H**omogeneous (function of y/x)

### LIATE for Integration by Parts
- **L**ogarithmic ($\ln x$)
- **I**nverse trig ($\sin^{-1}x, \tan^{-1}x$)
- **A**lgebraic ($x, x^2$)
- **T**rigonometric ($\sin x, \cos x$)
- **E**xponential ($e^x$)

### "MEXACT" for Exactness
- **M**ultiply by integrating factor (if needed)
- **EX**actness test: $M_y = N_x$
- **A**nd check if passes
- **C**ompute F(x,y) where F_x = M, F_y = N
- **T**he solution is F(x,y) = C

### Integration Shortcuts Memory
**"Plus Minus Tan Sin"**
- $x^2 + a^2$ → tan⁻¹
- $x^2 - a^2$ → ln (difference)
- √(a² - x²) → sin⁻¹

### Linear ODE Memory: "PQR"
- **P**(x) for integrating factor: $\mu = e^{\int P dx}$
- **Q**(x) for right side integration: $\int Q\mu dx$
- **R**emember: NO +C when finding μ!

## 4.6 Formula Sheet for Exam Hall

```
╔══════════════════════════════════════════════════════╗
║       FIRST-ORDER ODE FORMULAS - EXAM EDITION        ║
╚══════════════════════════════════════════════════════╝

【 BASIC METHODS 】

1. SEPARABLE: dy/dx = g(x)h(y)
   ∫dy/h(y) = ∫g(x)dx + C

2. LINEAR: dy/dx + P(x)y = Q(x)
   μ = e^∫P(x)dx [NO +C!]
   y = (1/μ)[∫Qμ dx + C]

3. EXACT: M dx + N dy = 0
   Test: ∂M/∂y = ∂N/∂x
   Find F: ∫M dx + g(y) or ∫N dy + h(x)
   Solution: F(x,y) = C

4. BERNOULLI: dy/dx + Py = Qy^n
   v = y^(1-n)
   dv/dx + (1-n)Pv = (1-n)Q

5. HOMOGENEOUS: dy/dx = f(y/x)
   v = y/x → dy/dx = v + x(dv/dx)

【 INTEGRATING FACTORS 】

For M dx + N dy = 0 (not exact):

μ(x): (M_y - N_x)/N = f(x) → μ = e^∫f(x)dx
μ(y): (N_x - M_y)/M = g(y) → μ = e^∫g(y)dy

Special: Try 1/xy, 1/x², 1/y², x^n, y^n

【 CRITICAL INTEGRALS 】

∫1/(x²+a²) dx = (1/a)tan⁻¹(x/a) + C
∫1/(x²-a²) dx = (1/2a)ln|(x-a)/(x+a)| + C
∫1/√(a²-x²) dx = sin⁻¹(x/a) + C
∫1/√(x²±a²) dx = ln|x+√(x²±a²)| + C
∫f'(x)/f(x) dx = ln|f(x)| + C ⭐

【 DERIVATIVE SHORTCUTS 】

d/dx(x^n) = nx^(n-1)
d/dx(e^x) = e^x
d/dx(ln x) = 1/x
d/dx(sin x) = cos x
d/dx(cos x) = -sin x
d/dx(tan x) = sec²x
d/dx(tan⁻¹x) = 1/(1+x²)
d/dx(sin⁻¹x) = 1/√(1-x²)

【 PRODUCT & QUOTIENT 】

(fg)' = f'g + fg'
(f/g)' = (f'g - fg')/g²

【 CHAIN RULE 】

d/dx[f(g(x))] = f'(g(x))·g'(x)

【 EXAM REMINDERS 】

✓ Test exactness BEFORE finding μ
✓ Coefficient of dy/dx = 1 for linear form
✓ Check if y = 0 is solution (separable)
✓ Apply initial condition to find C
✓ Verify answer if time permits
✓ Show all major steps for partial credit
```

## 4.7 Last-Minute Review (24 Hours Before Exam)

### Must-Know List (Absolute Priority)

**Formulas** (Write from memory):
1. Linear ODE integrating factor: μ = ?
2. Exactness test: ? = ?
3. Bernoulli substitution: v = ?
4. Homogeneous substitution: v = ?
5. ∫1/(x²+a²) dx = ?
6. ∫1/√(a²-x²) dx = ?

**Procedures** (Practice 3 times each):
1. Solve one linear ODE start to finish
2. Test exactness and find F(x,y)
3. Find integrating factor μ(x)
4. Solve one Bernoulli equation
5. Solve one separable with initial condition

**Common Errors** (Read 5 times):
- Absolute value in ln
- No +C in integrating factor
- Standard form for linear ODE
- Check both μ(x) and μ(y)
- Apply initial condition

### 30-Minute Quick Drill

**Set timer: 2 minutes per problem**

1. Identify type: $\frac{dy}{dx} = xy$
2. Identify type: $\frac{dy}{dx} + 2y = x$
3. Identify type: $(2x + y)dx + (x - y)dy = 0$
4. Identify type: $\frac{dy}{dx} + y = y^2$
5. Identify type: $\frac{dy}{dx} = \frac{x+y}{x-y}$
6. Find μ for: $\frac{dy}{dx} + \frac{y}{x} = x^2$
7. Test exactness: $(x + y)dx + (x + y)dy = 0$
8. Bernoulli: What is n? $\frac{dy}{dx} + xy = xy^3$
9. Integrate: $\int \frac{2x}{x^2+1} dx$
10. Integrate: $\int \frac{1}{x^2+9} dx$

**Answers**:
1. Separable
2. Linear
3. Check exactness (may be exact)
4. Bernoulli (n=2)
5. Homogeneous
6. μ = x
7. M_y = 1, N_x = 1 → Exact!
8. n = 3
9. ln(x²+1) + C
10. (1/3)tan⁻¹(x/3) + C

### Final Confidence Boosters

**You've got this if you can**:
✓ Separate variables correctly
✓ Find integrating factor for linear ODE
✓ Test exactness in 30 seconds
✓ Recognize Bernoulli pattern
✓ Do standard integrals quickly

**Remember**:
- Read question twice before starting
- Write clearly (grader must understand)
- Check units/dimensions if applicable
- Don't panic if stuck - move on and return
- Attempt every question (partial credit!)

## 4.8 Post-Exam Analysis

### Learning from Mistakes

After exam, reflect on:
1. Which types did you miss?
2. Calculation errors or concept errors?
3. Time management issues?
4. Which formulas did you forget?
5. What would you study differently?

### Building for Future

**Maintain this formula sheet** - it's useful for:
- Second-order ODEs (coming next!)
- Partial Differential Equations
- Engineering applications
- Physics problems
- Applied mathematics courses

---

# APPENDICES

## Appendix A: Integration Table (Extended)

### Trigonometric Integrals

```
∫sin x dx = -cos x + C
∫cos x dx = sin x + C
∫tan x dx = -ln|cos x| + C = ln|sec x| + C
∫cot x dx = ln|sin x| + C
∫sec x dx = ln|sec x + tan x| + C
∫csc x dx = ln|csc x - cot x| + C
∫sec²x dx = tan x + C
∫csc²x dx = -cot x + C
∫sec x tan x dx = sec x + C
∫csc x cot x dx = -csc x + C

∫sin²x dx = (x/2) - (sin 2x)/4 + C
∫cos²x dx = (x/2) + (sin 2x)/4 + C
∫tan²x dx = tan x - x + C
∫cot²x dx = -cot x - x + C
∫sec³x dx = (1/2)[sec x tan x + ln|sec x + tan x|] + C
```

### Products of Trig Functions

```
∫sin(ax)cos(bx) dx = -[cos(a+b)x]/(2(a+b)) - [cos(a-b)x]/(2(a-b)) + C
∫sin(ax)sin(bx) dx = [sin(a-b)x]/(2(a-b)) - [sin(a+b)x]/(2(a+b)) + C
∫cos(ax)cos(bx) dx = [sin(a+b)x]/(2(a+b)) + [sin(a-b)x]/(2(a-b)) + C
```

### Exponential with Trig

```
∫e^(ax)sin(bx) dx = [e^(ax)(a·sin(bx) - b·cos(bx))]/(a²+b²) + C
∫e^(ax)cos(bx) dx = [e^(ax)(a·cos(bx) + b·sin(bx))]/(a²+b²) + C
```

## Appendix B: Special Function Derivatives

### Hyperbolic Functions

```
d/dx(sinh x) = cosh x
d/dx(cosh x) = sinh x
d/dx(tanh x) = sech²x
d/dx(coth x) = -csch²x
d/dx(sech x) = -sech x tanh x
d/dx(csch x) = -csch x coth x

∫sinh x dx = cosh x + C
∫cosh x dx = sinh x + C
∫tanh x dx = ln(cosh x) + C
∫coth x dx = ln|sinh x| + C
∫sech x dx = tan⁻¹(sinh x) + C
∫csch x dx = ln|tanh(x/2)| + C
```

### Inverse Hyperbolic Functions

```
d/dx(sinh⁻¹x) = 1/√(x²+1)
d/dx(cosh⁻¹x) = 1/√(x²-1)
d/dx(tanh⁻¹x) = 1/(1-x²)

∫1/√(x²+a²) dx = sinh⁻¹(x/a) + C = ln|x + √(x²+a²)| + C
∫1/√(x²-a²) dx = cosh⁻¹(x/a) + C = ln|x + √(x²-a²)| + C
```

## Appendix C: Reduction Formulas

### Power Reduction

```
∫x^n e^x dx = x^n e^x - n∫x^(n-1) e^x dx

∫x^n sin x dx = -x^n cos x + n∫x^(n-1) cos x dx

∫x^n cos x dx = x^n sin x - n∫x^(n-1) sin x dx

∫(ln x)^n dx = x(ln x)^n - n∫(ln x)^(n-1) dx
```

## Appendix D: Useful Identities

### Algebraic Identities

```
(a + b)² = a² + 2ab + b²
(a - b)² = a² - 2ab + b²
a² - b² = (a + b)(a - b)
a³ + b³ = (a + b)(a² - ab + b²)
a³ - b³ = (a - b)(a² + ab + b²)
```

### Logarithm Laws

```
log(ab) = log a + log b
log(a/b) = log a - log b
log(a^n) = n log a
log_a(b) = (log_c b)/(log_c a) [change of base]
a^(log_a x) = x
log_a(a^x) = x
```

### Exponential Laws

```
a^m · a^n = a^(m+n)
a^m / a^n = a^(m-n)
(a^m)^n = a^(mn)
(ab)^n = a^n b^n
a^0 = 1
a^(-n) = 1/a^n
```

---

## Final Words

### Study Philosophy

**Understanding > Memorization**
- Know WHY methods work
- Understand the logic behind formulas
- Practice until it becomes intuitive

**Practice > Theory**
- Solve 100+ problems before exam
- Do problems without looking at solutions
- Time yourself on past papers

**Patterns > Individual Problems**
- Recognize equation types quickly
- Master the decision tree
- Learn to spot shortcuts

### Success Mantra

```
╔════════════════════════════════════════════╗
║                                            ║
║   "First identify, then simplify,          ║
║    Execute clearly, verify finally"        ║
║                                            ║
║   Success in ODEs = Recognition            ║
║                    + Technique              ║
║                    + Practice               ║
║                    + Patience               ║
║                                            ║
╚════════════════════════════════════════════╝
```

**Remember**: Every expert was once a beginner. Keep practicing, stay confident, and trust your preparation!

---

**Best of luck with your exams! 🌟**

*This comprehensive guide contains everything you need to excel in First-Order Ordinary Differential Equations. Review regularly, practice extensively, and success will follow!*

---

## Quick Navigation Index

- **Derivatives**: Section 1.1
- **Integrals**: Section 1.2
- **Integration Techniques**: Section 1.3
- **Separable Equations**: Section 2.2
- **Exact Equations**: Section 2.3
- **Integrating Factors**: Section 2.4
- **Linear ODEs**: Section 2.5
- **Bernoulli Equations**: Section 2.6
- **Homogeneous Equations**: Section 2.7
- **Decision Tree**: Section 3.1
- **Formula Cards**: Section 3.2
- **Common Mistakes**: Section 3.3
- **Exam Strategy**: Section 4.2
- **Practice Problems**: Section 4.4
- **Integration Table**: Appendix A

**End of Enhanced Formula Guide**.1 Pre-Exam Checklist

### Knowledge Check
- [ ] Can identify equation type in < 10 seconds
- [ ] Know all formulas in sections 2.2-2.6 by heart
- [ ] Can compute integrating factor without calculator
- [ ] Mastered 15+ integration techniques
- [ ] Can do partial derivatives quickly
- [ ] Know all standard integral forms
- [ ] Practiced 10+ problems of each type

### Skills Check
- [ ] Can separate variables correctly
- [ ] Can test exactness accurately
- [ ] Can find integrating factors (both types)
- [ ] Can solve linear ODEs start to finish
- [ ] Can handle Bernoulli substitution
- [ ] Can recognize homogeneous equations
- [ ] Can apply initial conditions correctly

### Strategy Check
- [ ] Know which method to try first
- [ ] Have time management plan
- [ ] Know partial credit strategies
- [ ] Can verify answers quickly
- [ ] Studied past exam patterns

## 4.2 Exam Day Strategy

### Time Allocation (for 3-hour exam)
- **First 10 minutes**: Read all questions, identify types
- **Next 2 hours**: Solve problems (easier ones first)
- **Last 40 minutes**: Check work, verify answers
- **Final 10 minutes**: Review that all parts answered

### Problem-Solving Approach
1. **Read carefully**: What is given? What to find?
2. **Identify type**: Use decision tree
3. **Write method**: Show your approach
4. **Execute steps**: Clear, organized work
5. **Check answer**: Substitute back if time permits
6. **Box final answer**: Make it visible!

### Partial Credit Tactics
- Always write the differential equation clearly
- Show identification of equation type
- Write the formula/method you're using
- Show major steps even if you can't finish
- If stuck, move to next problem (come back later)

## 4.3 Most Likely Exam Questions

### High Priority Topics
1. **Linear ODE** with variable P(x) - 30% probability
2. **Exact + Integrating Factor** - 25% probability
3. **Separable** (usually combined with IVP) - 20% probability
4. **Bernoulli** (especially n=2) - 15% probability
5. **Homogeneous** or reducible - 10% probability

### Typical Question Patterns
- "Solve the differential equation..."
- "Find the particular solution satisfying y(x₀) = y₀"
- "Test whether the equation is exact. If not, find integrating factor"
- "Reduce to standard form and solve"
- "Verify that the given function is a solution"

## 4
