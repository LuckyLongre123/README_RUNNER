# Prerequisites & Formulas Reference
## First-Order Ordinary Differential Equations

**Target Audience**: UG 2nd Year Students  
**Prerequisite Level**: Basic Calculus  
**Purpose**: Quick reference for formulas, techniques, and essential calculus review

---

## Table of Contents

1. [Essential Calculus Review](#essential-calculus-review)
2. [Complete ODE Formulas Repository](#complete-ode-formulas-repository)
3. [Quick Reference Cards](#quick-reference-cards)

---

## Essential Calculus Review

### 1.1 Basic Derivative Formulas

#### Power Rule
$$\frac{d}{dx}(x^n) = nx^{n-1}$$

#### Common Functions
- $\frac{d}{dx}(e^x) = e^x$
- $\frac{d}{dx}(\ln x) = \frac{1}{x}$
- $\frac{d}{dx}(\sin x) = \cos x$
- $\frac{d}{dx}(\cos x) = -\sin x$
- $\frac{d}{dx}(\tan x) = \sec^2 x$

#### Product Rule
$$\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$$

**Memory Trick**: "First times derivative of second, PLUS second times derivative of first"

#### Quotient Rule
$$\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$$

**Memory Trick**: "Low-d-high minus high-d-low, over low-low"

#### Chain Rule
$$\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$$

**Example**: $\frac{d}{dx}(e^{3x}) = e^{3x} \cdot 3 = 3e^{3x}$

---

### 1.2 Essential Integration Formulas

#### Basic Integrals
- $\int x^n \, dx = \frac{x^{n+1}}{n+1} + C$ (where $n \neq -1$)
- $\int \frac{1}{x} \, dx = \ln|x| + C$
- $\int e^x \, dx = e^x + C$
- $\int \sin x \, dx = -\cos x + C$
- $\int \cos x \, dx = \sin x + C$
- $\int \sec^2 x \, dx = \tan x + C$

#### Integration by Substitution
**Method**: If integral is of form $\int f(g(x))g'(x) \, dx$

**Steps**:
1. Let $u = g(x)$
2. Then $du = g'(x)dx$
3. Rewrite: $\int f(u) \, du$
4. Integrate and substitute back

**Example**: 
$$\int 2x e^{x^2} \, dx$$
Let $u = x^2$, then $du = 2x \, dx$
$$= \int e^u \, du = e^u + C = e^{x^2} + C$$

#### Integration by Parts
$$\int u \, dv = uv - \int v \, du$$

**Memory Trick (LIATE Rule)**: Choose $u$ based on priority:
- **L**ogarithmic functions
- **I**nverse trig functions  
- **A**lgebraic functions (polynomials)
- **T**rigonometric functions
- **E**xponential functions

---

### 1.3 Partial Derivatives Basics

For function $f(x, y)$:

**Partial derivative with respect to x**:
$$\frac{\partial f}{\partial x} = \text{treat } y \text{ as constant, differentiate w.r.t. } x$$

**Partial derivative with respect to y**:
$$\frac{\partial f}{\partial y} = \text{treat } x \text{ as constant, differentiate w.r.t. } y$$

**Example**:
$$f(x,y) = x^2y + 3xy^2$$
$$\frac{\partial f}{\partial x} = 2xy + 3y^2$$
$$\frac{\partial f}{\partial y} = x^2 + 6xy$$

**Why This Matters for ODEs**: You'll need partial derivatives to check if equations are exact!

---

### 1.4 Chain Rule Applications

#### Multivariable Chain Rule
If $z = f(x,y)$ where $x = x(t)$ and $y = y(t)$:

$$\frac{dz}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt}$$

**ODE Application**: Used extensively in solving differential equations by substitution.

---

### 1.5 Quick Readiness Assessment

**Test yourself**: Can you do these in under 30 seconds each?

1. $\frac{d}{dx}(x^3 e^x) = ?$
2. $\int x e^{x^2} \, dx = ?$
3. If $f(x,y) = x^2 + xy$, find $\frac{\partial f}{\partial y}$
4. $\frac{d}{dx}\left[\frac{x^2}{x+1}\right] = ?$

**Answers**:
1. $3x^2 e^x + x^3 e^x$ (product rule)
2. $\frac{1}{2}e^{x^2} + C$ (substitution)
3. $x$ (partial derivative)
4. $\frac{2x(x+1) - x^2}{(x+1)^2} = \frac{x^2 + 2x}{(x+1)^2}$ (quotient rule)

**If you struggled**: Review basic calculus before proceeding!

---

## Complete ODE Formulas Repository

### 2.1 Basic Level Formulas (Must Know!)

#### Definition of First-Order ODE
$$\frac{dy}{dx} = f(x, y) \quad \text{or} \quad F(x, y, y') = 0$$

#### General Solution vs Particular Solution
- **General Solution**: Contains arbitrary constant $C$
- **Particular Solution**: Specific value of $C$ determined by initial condition

#### Initial Value Problem (IVP)
$$\frac{dy}{dx} = f(x,y), \quad y(x_0) = y_0$$

---

### 2.2 Separable Equations

**Standard Form**:
$$\frac{dy}{dx} = g(x)h(y)$$

**Solution Method**:
$$\frac{dy}{h(y)} = g(x) \, dx$$
$$\int \frac{dy}{h(y)} = \int g(x) \, dx$$

**Memory Trick**: "Separate the variables, integrate both sides"

**When to Use**: When you can write the equation as product of function of $x$ only and function of $y$ only.

---

### 2.3 Exact Differential Equations

**Standard Form**:
$$M(x,y) \, dx + N(x,y) \, dy = 0$$

**Exactness Test**:
$$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$

**If Exact**, solution exists as:
$$F(x,y) = C$$
where:
$$\frac{\partial F}{\partial x} = M \quad \text{and} \quad \frac{\partial F}{\partial y} = N$$

**Finding F(x,y)**:
$$F(x,y) = \int M \, dx + g(y)$$
Then differentiate w.r.t. $y$ and compare with $N$ to find $g(y)$.

**Memory Trick**: "M-y equals N-x means exact match!"

---

### 2.4 Integrating Factors

**Purpose**: Convert non-exact equations to exact equations.

#### Case 1: Integrating Factor Depends Only on x

**Test**: 
$$\frac{1}{N}\left(\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}\right) = f(x) \text{ (function of } x \text{ only)}$$

**Integrating Factor**:
$$\mu(x) = e^{\int f(x) \, dx}$$

#### Case 2: Integrating Factor Depends Only on y

**Test**:
$$\frac{1}{M}\left(\frac{\partial N}{\partial x} - \frac{\partial M}{\partial y}\right) = g(y) \text{ (function of } y \text{ only)}$$

**Integrating Factor**:
$$\mu(y) = e^{\int g(y) \, dy}$$

**Memory Trick**: 
- **x-factor**: "N in denominator" → $\frac{1}{N}(M_y - N_x)$
- **y-factor**: "M in denominator" → $\frac{1}{M}(N_x - M_y)$

---

### 2.5 Linear First-Order ODEs

**Standard Form**:
$$\frac{dy}{dx} + P(x)y = Q(x)$$

**Integrating Factor**:
$$\mu(x) = e^{\int P(x) \, dx}$$

**Solution**:
$$y \cdot \mu(x) = \int Q(x) \cdot \mu(x) \, dx + C$$

Or equivalently:
$$y = \frac{1}{\mu(x)}\left[\int Q(x) \cdot \mu(x) \, dx + C\right]$$

**Memory Trick**: "P for integrating factor, Q for right side integration"

**Important**: Always write in standard form first (coefficient of $\frac{dy}{dx}$ must be 1)!

---

### 2.6 Bernoulli Equations

**Standard Form**:
$$\frac{dy}{dx} + P(x)y = Q(x)y^n \quad (n \neq 0, 1)$$

**Substitution**:
$$v = y^{1-n}$$

**Then**:
$$\frac{dv}{dx} = (1-n)y^{-n}\frac{dy}{dx}$$

**Result**: Equation becomes linear in $v$:
$$\frac{dv}{dx} + (1-n)P(x)v = (1-n)Q(x)$$

**Memory Trick**: "Bernoulli needs $v = y^{1-n}$ to linearize"

---

### 2.7 Important Level Formulas (High-Frequency in Exams)

#### Homogeneous Equations

**Form**: $\frac{dy}{dx} = f\left(\frac{y}{x}\right)$

**Substitution**: $v = \frac{y}{x}$, so $y = vx$

**Then**: $\frac{dy}{dx} = v + x\frac{dv}{dx}$

**Result**: 
$$v + x\frac{dv}{dx} = f(v)$$
$$x\frac{dv}{dx} = f(v) - v$$

This becomes **separable**!

---

#### Reducible to Homogeneous Form

**Form**:
$$\frac{dy}{dx} = \frac{ax + by + c}{dx + ey + f}$$

**Method 1** (if $c = f = 0$): Already homogeneous

**Method 2** (if $\frac{a}{d} = \frac{b}{e}$): Let $ax + by = v$

**Method 3** (general case): Shift origin by substitution
- Let $x = X + h$ and $y = Y + k$
- Choose $h, k$ such that lines intersect at origin

---

### 2.8 Special Integrating Factors (Exam Shortcuts)

| **If Equation Has Form** | **Integrating Factor** |
|--------------------------|------------------------|
| $xy \, dx + (x^2 + y^2) \, dy = 0$ | $\mu = \frac{1}{xy^2}$ |
| $y \, dx - x \, dy = 0$ | $\mu = \frac{1}{xy}$ or $\frac{1}{x^2}$ or $\frac{1}{y^2}$ |
| $(x^2 + y^2) \, dx + xy \, dy = 0$ | $\mu = \frac{1}{x^2y^2}$ |

**Exam Tip**: These are commonly tested! Memorize patterns.

---

### 2.9 Formula Derivation Hints

#### Why Integrating Factor for Linear ODE Works

Starting from: $\frac{dy}{dx} + P(x)y = Q(x)$

Multiply by $\mu(x) = e^{\int P(x) \, dx}$:
$$\mu(x)\frac{dy}{dx} + \mu(x)P(x)y = \mu(x)Q(x)$$

**Key Insight**: Note that $\frac{d\mu}{dx} = \mu(x)P(x)$

So left side becomes:
$$\frac{d}{dx}[\mu(x)y] = \mu(x)Q(x)$$

This is why it works!

---

#### Why Exactness Test Works

For $M \, dx + N \, dy = 0$ to be exact, we need $F(x,y) = C$ where:
$$dF = \frac{\partial F}{\partial x}dx + \frac{\partial F}{\partial y}dy = M \, dx + N \, dy$$

**Mixed Partials Must Be Equal**:
$$\frac{\partial^2 F}{\partial y \partial x} = \frac{\partial^2 F}{\partial x \partial y}$$

This gives us:
$$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$

---

## Quick Reference Cards

### 3.1 One-Page Summary: Separable Equations

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        SEPARABLE EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FORM: dy/dx = g(x)h(y)

IDENTIFICATION:
✓ Right side = (function of x) × (function of y)
✓ Can separate variables completely

SOLUTION STEPS:
1. Rewrite as: dy/h(y) = g(x)dx
2. Integrate both sides
3. Solve for y if possible
4. Apply initial condition for C

EXAM TIP: Always check if separable first!
          It's the easiest method.

COMMON MISTAKE: Forgetting absolute value in ln

EXAMPLE: dy/dx = xy
         dy/y = x dx
         ln|y| = x²/2 + C
         y = Ae^(x²/2)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 3.2 One-Page Summary: Exact Equations

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         EXACT EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FORM: M(x,y)dx + N(x,y)dy = 0

EXACTNESS TEST: ∂M/∂y = ∂N/∂x

IF EXACT:
1. Find F where ∂F/∂x = M and ∂F/∂y = N
2. Solution is F(x,y) = C

FINDING F:
Method 1: F = ∫M dx + g(y)
          Then: ∂F/∂y = N to find g(y)

Method 2: F = ∫N dy + h(x)
          Then: ∂F/∂x = M to find h(x)

EXAM TIP: Always test exactness FIRST!

IF NOT EXACT: Find integrating factor
              Then equation becomes exact

MEMORY: "Partial M over y equals partial N over x"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 3.3 One-Page Summary: Linear ODEs

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        LINEAR FIRST-ORDER ODE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STANDARD FORM: dy/dx + P(x)y = Q(x)

INTEGRATING FACTOR: μ(x) = e^(∫P(x)dx)

SOLUTION: y·μ = ∫Q·μ dx + C

        OR: y = (1/μ)[∫Q·μ dx + C]

STEPS:
1. Write in standard form (coefficient of dy/dx = 1)
2. Identify P(x) and Q(x)
3. Find μ = e^(∫P dx) [don't add C here!]
4. Multiply equation by μ
5. Left side becomes d/dx(y·μ)
6. Integrate right side
7. Solve for y

SPECIAL CASE: Q(x) = 0 → homogeneous
              Solution: y = Ce^(-∫P dx)

EXAM TIP: Linear equations are VERY common!
          Practice finding P(x) quickly.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 3.4 One-Page Summary: Bernoulli Equations

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        BERNOULLI EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FORM: dy/dx + P(x)y = Q(x)y^n  (n ≠ 0,1)

SUBSTITUTION: v = y^(1-n)

DERIVATIVE: dv/dx = (1-n)y^(-n) dy/dx

RESULT: dv/dx + (1-n)P(x)v = (1-n)Q(x)

This is LINEAR in v!

STEPS:
1. Identify n (power of y on right side)
2. Divide equation by y^n
3. Substitute v = y^(1-n)
4. Find dv/dx
5. Get linear equation in v
6. Solve using integrating factor
7. Convert back: y = v^(1/(1-n))

COMMON VALUES:
• n = 2: v = y^(-1) = 1/y
• n = 3: v = y^(-2) = 1/y²
• n = -1: v = y²

EXAM TIP: Bernoulli shows up with n=2 most often!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 3.5 Exam Day Cheat Sheet

```
╔════════════════════════════════════════════════════════════╗
║           FIRST-ORDER ODE DECISION TREE                    ║
╚════════════════════════════════════════════════════════════╝

START: dy/dx = f(x,y) or M dx + N dy = 0

├─ Can you separate variables? (dy/dx = g(x)h(y))
│  YES → SEPARABLE → Integrate both sides
│
├─ Is it M dx + N dy = 0?
│  ├─ Test: ∂M/∂y = ∂N/∂x?
│  │  YES → EXACT → Find F(x,y) = C
│  │  NO → Find Integrating Factor
│  │      ├─ Try μ(x): (1/N)(M_y - N_x) = f(x)?
│  │      └─ Try μ(y): (1/M)(N_x - M_y) = g(y)?
│
├─ Is it dy/dx + P(x)y = Q(x)?
│  YES → LINEAR → μ = e^(∫P dx), then solve
│
├─ Is it dy/dx + P(x)y = Q(x)y^n?
│  YES → BERNOULLI → Substitute v = y^(1-n)
│
└─ Is it dy/dx = f(y/x)?
   YES → HOMOGENEOUS → Substitute v = y/x

╔════════════════════════════════════════════════════════════╗
║              QUICK FORMULA CHECKLIST                       ║
╚════════════════════════════════════════════════════════════╝

□ Separable: ∫dy/h(y) = ∫g(x)dx

□ Exact Test: ∂M/∂y = ∂N/∂x

□ Linear IF: μ = e^(∫P dx)

□ Bernoulli: v = y^(1-n)

□ Homogeneous: v = y/x → dy/dx = v + x(dv/dx)

╔════════════════════════════════════════════════════════════╗
║                MCQ ELIMINATION TRICKS                      ║
╚════════════════════════════════════════════════════════════╝

✓ Check dimensions: y must have same units on both sides
✓ Substitute y back: Does it satisfy original equation?
✓ Check initial condition: Does solution pass through given point?
✓ Look for C: General solution must have arbitrary constant
✓ Verify at special points: Set x=0 or y=0 to eliminate wrong answers
```

---

### 3.6 Common Formula Variations

#### Variation 1: Different Notations

| **Notation** | **Meaning** |
|--------------|-------------|
| $y'$ | $\frac{dy}{dx}$ |
| $\dot{y}$ | $\frac{dy}{dt}$ |
| $D_x y$ | $\frac{dy}{dx}$ |
| $f_x$ | $\frac{\partial f}{\partial x}$ |

#### Variation 2: Linear ODE Forms

**All equivalent**:
1. $\frac{dy}{dx} + P(x)y = Q(x)$
2. $y' + P(x)y = Q(x)$
3. $\frac{dy}{dx} = Q(x) - P(x)y$
4. $dy + P(x)y \, dx = Q(x) \, dx$

**Standard form is #1** - always convert to this!

#### Variation 3: Exact Equation Forms

**Standard**: $M \, dx + N \, dy = 0$

**Alternative**: $M(x,y) + N(x,y)\frac{dy}{dx} = 0$

**Implicit**: $F(x,y) = C$ where $dF = M \, dx + N \, dy$

---

### 3.7 Memory Mnemonics

**LIPB**: Order of difficulty/complexity
- **L**inear (easiest with integrating factor)
- **I**ntegrating factors (for exact)
- **P**artial derivatives (exactness test)
- **B**ernoulli (needs substitution)

**"MEXACT"** for exactness:
- **M**ultiply by integrating factor
- **EX**actness test: $M_y = N_x$
- **A**nd check
- **C**ompute F(x,y)
- **T**he solution is F = C

**"SLIP"** for Solving Linear ODEs:
- **S**tandard form first
- **L**ocate P(x) and Q(x)
- **I**ntegrating factor: $e^{\int P dx}$
- **P**ut it together: $y \mu = \int Q\mu \, dx$

---

### 3.8 Special Cases Reference

#### When Integrating Factor = 1

If $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$ already, then $\mu = 1$ (already exact!)

#### When Q(x) = 0 in Linear ODE

$$\frac{dy}{dx} + P(x)y = 0$$

This is **separable**:
$$\frac{dy}{y} = -P(x) \, dx$$
$$y = Ce^{-\int P(x) \, dx}$$

#### When n = 0 or n = 1 in "Bernoulli"

- **n = 0**: Not Bernoulli, it's linear!
- **n = 1**: Not Bernoulli, it's separable!

---

## Final Exam Preparation Checklist

### Before the Exam

- [ ] Can identify equation type in < 10 seconds
- [ ] Know all formulas in Section 2.1-2.6 by heart
- [ ] Can compute integrating factor without calculator
- [ ] Practiced at least 10 problems of each type
- [ ] Know common exam patterns from past papers

### During the Exam

- [ ] Read entire question before starting
- [ ] Write given information clearly
- [ ] Identify equation type first
- [ ] Show all major steps (partial credit!)
- [ ] Check answer by substitution if time permits
- [ ] Circle your final answer

### Common Point Deductions

- Not writing equation in standard form
- Forgetting absolute value in logarithms
- Missing arbitrary constant C
- Not applying initial condition
- Arithmetic errors (check your work!)

---

## Additional Resources

For complete worked examples and practice problems, refer to:
**differential-equations-guide.md**

---

*Remember: Understanding WHY formulas work is more important than memorizing them. But for exams, quick recall saves time!*

**Good luck with your studies! 📚**
