/**
 * Professional Calculator Application
 * Built with security best practices and modern JavaScript
 */

// Security: Input validation and sanitization
const Security = {
    sanitizeInput(input) {
        // Remove any non-numeric, non-operator characters except for . and -
        return input.toString().replace(/[^0-9+\-*/().\s]/g, '');
    },
    
    validateNumber(num) {
        // Check for valid number format
        if (typeof num !== 'number' || !isFinite(num)) {
            throw new Error('Invalid number');
        }
        return num;
    },
    
    preventOverflow(num) {
        // Prevent number overflow
        if (Math.abs(num) > 1e15) {
            throw new Error('Number too large');
        }
        return num;
    }
};

// Calculator State Management
class CalculatorState {
    constructor() {
        this.reset();
        this.memory = 0;
        this.history = [];
        this.maxHistoryLength = 10;
    }
    
    reset() {
        this.currentInput = '0';
        this.previousInput = '';
        this.operator = null;
        this.waitingForOperand = false;
        this.calculated = false;
    }
    
    addToHistory(expression, result) {
        this.history.unshift({ expression, result, timestamp: Date.now() });
        if (this.history.length > this.maxHistoryLength) {
            this.history.pop();
        }
    }
    
    clearHistory() {
        this.history = [];
    }
}

// Main Calculator Class
class ProfessionalCalculator {
    constructor() {
        this.state = new CalculatorState();
        this.display = document.getElementById('display');
        this.historyDisplay = document.getElementById('history');
        this.scientificMode = false;
        
        // Bind methods to maintain context
        this.init();
    }
    
    init() {
        // Initialize display
        this.updateDisplay();
        
        // Add keyboard support
        document.addEventListener('keydown', (event) => this.handleKeyboard(event));
        
        // Add touch feedback
        this.addTouchFeedback();
        
        // Load saved theme
        this.loadTheme();
        
        // Security: Prevent right-click context menu
        document.addEventListener('contextmenu', (e) => e.preventDefault());
        
        // Security: Prevent text selection
        document.addEventListener('selectstart', (e) => e.preventDefault());
    }
    
    // Display Management
    updateDisplay() {
        // Security: Sanitize display output
        const sanitizedInput = Security.sanitizeInput(this.state.currentInput);
        
        // Format large numbers
        let displayValue = sanitizedInput;
        if (parseFloat(sanitizedInput) !== 0 && Math.abs(parseFloat(sanitizedInput)) < 1e-6) {
            displayValue = parseFloat(sanitizedInput).toExponential(6);
        } else if (Math.abs(parseFloat(sanitizedInput)) >= 1e9) {
            displayValue = parseFloat(sanitizedInput).toExponential(6);
        }
        
        this.display.textContent = displayValue;
        
        // Update history display
        if (this.state.previousInput && this.state.operator) {
            this.historyDisplay.textContent = `${this.state.previousInput} ${this.state.operator}`;
        } else {
            this.historyDisplay.textContent = '0';
        }
        
        // Update memory indicator
        const calculatorElement = document.querySelector('.calculator');
        if (this.state.memory !== 0) {
            calculatorElement.classList.add('has-memory');
        } else {
            calculatorElement.classList.remove('has-memory');
        }
        
        // Update scientific mode indicator
        if (this.scientificMode) {
            calculatorElement.classList.add('scientific-mode');
        } else {
            calculatorElement.classList.remove('scientific-mode');
        }
    }
    
    // Input Handling
    inputNumber(num) {
        if (this.state.waitingForOperand) {
            this.state.currentInput = num;
            this.state.waitingForOperand = false;
        } else {
            this.state.currentInput = this.state.currentInput === '0' ? num : this.state.currentInput + num;
        }
        
        // Security: Limit input length to prevent overflow
        if (this.state.currentInput.length > 15) {
            this.showError('Input too long');
            return;
        }
        
        this.updateDisplay();
    }
    
    inputDecimal() {
        if (this.state.waitingForOperand) {
            this.state.currentInput = '0.';
            this.state.waitingForOperand = false;
        } else if (this.state.currentInput.indexOf('.') === -1) {
            this.state.currentInput += '.';
        }
        this.updateDisplay();
    }
    
    inputOperator(nextOperator) {
        const inputValue = parseFloat(this.state.currentInput);
        
        try {
            Security.validateNumber(inputValue);
            Security.preventOverflow(inputValue);
        } catch (error) {
            this.showError(error.message);
            return;
        }
        
        if (this.state.previousInput === '') {
            this.state.previousInput = this.state.currentInput;
        } else if (this.state.operator) {
            const currentValue = this.state.currentInput === '' ? 0 : parseFloat(this.state.currentInput);
            try {
                const result = this.performCalculation(this.state.previousInput, currentValue, this.state.operator);
                this.state.currentInput = String(result);
                this.state.previousInput = String(result);
                this.updateDisplay();
            } catch (error) {
                this.showError(error.message);
                return;
            }
        }
        
        this.state.waitingForOperand = true;
        this.state.operator = nextOperator;
        this.updateDisplay();
    }
    
    // Calculation Logic
    performCalculation(firstOperand, secondOperand, operator) {
        const a = parseFloat(firstOperand);
        const b = parseFloat(secondOperand);
        
        try {
            Security.validateNumber(a);
            Security.validateNumber(b);
            Security.preventOverflow(a);
            Security.preventOverflow(b);
        } catch (error) {
            throw error;
        }
        
        let result;
        
        switch (operator) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                if (b === 0) {
                    throw new Error('Cannot divide by zero');
                }
                result = a / b;
                break;
            default:
                throw new Error('Invalid operator');
        }
        
        try {
            Security.preventOverflow(result);
        } catch (error) {
            throw error;
        }
        
        // Round to prevent floating point errors
        return Math.round(result * 100000000) / 100000000;
    }
    
    calculateResult() {
        const inputValue = parseFloat(this.state.currentInput);
        
        try {
            Security.validateNumber(inputValue);
            Security.preventOverflow(inputValue);
        } catch (error) {
            this.showError(error.message);
            return;
        }
        
        if (this.state.previousInput !== '' && this.state.operator) {
            try {
                const result = this.performCalculation(this.state.previousInput, inputValue, this.state.operator);
                const expression = `${this.state.previousInput} ${this.state.operator} ${inputValue}`;
                
                this.state.addToHistory(expression, result);
                this.state.currentInput = String(result);
                this.state.previousInput = '';
                this.state.operator = null;
                this.state.waitingForOperand = true;
                
                this.updateDisplay();
            } catch (error) {
                this.showError(error.message);
            }
        }
    }
    
    // Scientific Functions
    calculate(functionName) {
        const inputValue = parseFloat(this.state.currentInput);
        
        try {
            Security.validateNumber(inputValue);
            Security.preventOverflow(inputValue);
        } catch (error) {
            this.showError(error.message);
            return;
        }
        
        let result;
        let expression = '';
        
        switch (functionName) {
            case 'sin':
                result = Math.sin(inputValue * (Math.PI / 180));
                expression = `sin(${inputValue})`;
                break;
            case 'cos':
                result = Math.cos(inputValue * (Math.PI / 180));
                expression = `cos(${inputValue})`;
                break;
            case 'tan':
                result = Math.tan(inputValue * (Math.PI / 180));
                expression = `tan(${inputValue})`;
                break;
            case 'sqrt':
                if (inputValue < 0) {
                    this.showError('Invalid input for square root');
                    return;
                }
                result = Math.sqrt(inputValue);
                expression = `√${inputValue}`;
                break;
            case 'pow':
                result = Math.pow(inputValue, 2);
                expression = `${inputValue}²`;
                break;
            case 'log':
                if (inputValue <= 0) {
                    this.showError('Invalid input for logarithm');
                    return;
                }
                result = Math.log10(inputValue);
                expression = `log(${inputValue})`;
                break;
            case 'ln':
                if (inputValue <= 0) {
                    this.showError('Invalid input for natural log');
                    return;
                }
                result = Math.log(inputValue);
                expression = `ln(${inputValue})`;
                break;
            case 'factorial':
                if (inputValue < 0 || !Number.isInteger(inputValue)) {
                    this.showError('Invalid input for factorial');
                    return;
                }
                result = this.factorial(inputValue);
                expression = `${inputValue}!`;
                break;
            case 'abs':
                result = Math.abs(inputValue);
                expression = `|${inputValue}|`;
                break;
            case 'pi':
                result = Math.PI;
                expression = 'π';
                break;
            case 'e':
                result = Math.E;
                expression = 'e';
                break;
            default:
                this.showError('Unknown function');
                return;
        }
        
        try {
            Security.preventOverflow(result);
        } catch (error) {
            this.showError(error.message);
            return;
        }
        
        this.state.addToHistory(expression, result);
        this.state.currentInput = String(result);
        this.state.waitingForOperand = true;
        
        this.updateDisplay();
    }
    
    factorial(n) {
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
            if (result > 1e15) {
                throw new Error('Factorial too large');
            }
        }
        return result;
    }
    
    // Memory Functions
    memoryStore() {
        this.state.memory = parseFloat(this.state.currentInput);
        this.updateDisplay();
    }
    
    memoryRecall() {
        this.state.currentInput = String(this.state.memory);
        this.state.waitingForOperand = true;
        this.updateDisplay();
    }
    
    memoryClear() {
        this.state.memory = 0;
        this.updateDisplay();
    }
    
    memoryPlus() {
        this.state.memory += parseFloat(this.state.currentInput);
        this.updateDisplay();
    }
    
    memoryMinus() {
        this.state.memory -= parseFloat(this.state.currentInput);
        this.updateDisplay();
    }
    
    // Utility Functions
    clear() {
        this.state.reset();
        this.updateDisplay();
    }
    
    delete() {
        if (this.state.currentInput.length > 1) {
            this.state.currentInput = this.state.currentInput.slice(0, -1);
        } else {
            this.state.currentInput = '0';
        }
        this.updateDisplay();
    }
    
    toggleScientific() {
        this.scientificMode = !this.scientificMode;
        const scientificRows = document.querySelectorAll('.scientific-row');
        
        scientificRows.forEach(row => {
            row.style.display = this.scientificMode ? 'flex' : 'none';
        });
        
        this.updateDisplay();
    }
    
    // Error Handling
    showError(message) {
        const originalText = this.display.textContent;
        this.display.textContent = message;
        this.display.classList.add('error');
        
        setTimeout(() => {
            this.display.textContent = originalText;
            this.display.classList.remove('error');
        }, 2000);
    }
    
    // Keyboard Support
    handleKeyboard(event) {
        const { key } = event;
        
        if (key >= '0' && key <= '9') {
            this.inputNumber(key);
        } else if (key === '.') {
            this.inputDecimal();
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
            this.inputOperator(key);
        } else if (key === 'Enter' || key === '=') {
            this.calculateResult();
            event.preventDefault();
        } else if (key === 'Escape' || key === 'c' || key === 'C') {
            this.clear();
        } else if (key === 'Backspace') {
            this.delete();
        } else if (key === 'm') {
            this.memoryRecall();
        } else if (key === 's') {
            this.toggleScientific();
        }
    }
    
    // Touch Feedback
    addTouchFeedback() {
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            key.addEventListener('touchstart', () => {
                key.style.transform = 'translateY(4px)';
                key.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0.2)';
            }, { passive: true });
            
            key.addEventListener('touchend', () => {
                key.style.transform = 'translateY(0)';
                key.style.boxShadow = '0 4px 0 rgba(0, 0, 0, 0.2)';
            }, { passive: true });
        });
    }
}

// Theme Management
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme') || 'dark';
    
    // Add transition class to prevent flickering
    body.classList.add('transitioning');
    
    let newTheme;
    switch (currentTheme) {
        case 'dark':
            newTheme = 'light';
            break;
        case 'light':
            newTheme = 'high-contrast';
            break;
        case 'high-contrast':
            newTheme = 'dark';
            break;
        default:
            newTheme = 'dark';
    }
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('calculator-theme', newTheme);
    
    // Remove transition class after transition completes
    setTimeout(() => {
        body.classList.remove('transitioning');
    }, 300);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('calculator-theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
}

// Initialize Calculator
let calculator;

document.addEventListener('DOMContentLoaded', () => {
    calculator = new ProfessionalCalculator();
    
    // Security: Add CSP meta tag dynamically if not present
    if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
        const csp = document.createElement('meta');
        csp.httpEquiv = 'Content-Security-Policy';
        csp.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'";
        document.head.appendChild(csp);
    }
    
    // Performance: Preload critical resources
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'style';
    preloadLink.href = 'styles.css';
    document.head.appendChild(preloadLink);
});

// Service Worker Registration for PWA functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(error => console.log('SW registration failed'));
    });
}

// Export for testing and external access
window.ProfessionalCalculator = ProfessionalCalculator;
window.calculator = calculator;