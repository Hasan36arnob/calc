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

// Premium Features Manager
const PremiumFeatures = {
    // Advanced calculation history with search
    history: [],
    
    // Unit converter
    units: {
        length: { m: 1, km: 0.001, cm: 100, mm: 1000, ft: 3.28084, inch: 39.3701 },
        weight: { kg: 1, g: 1000, lb: 2.20462, oz: 35.274 },
        temperature: { c: 'celsius', f: 'fahrenheit', k: 'kelvin' }
    },
    
    // Constants database
    constants: {
        'π': Math.PI,
        'e': Math.E,
        'φ': 1.618033988749895, // Golden ratio
        'c': 299792458, // Speed of light
        'g': 9.80665, // Gravity
        'h': 6.62607015e-34, // Planck constant
        'k': 1.380649e-23, // Boltzmann constant
        'ε₀': 8.8541878128e-12, // Vacuum permittivity
        'μ₀': 1.25663706212e-6, // Vacuum permeability
        'R': 8.314462618, // Gas constant
        'NA': 6.02214076e23, // Avogadro's number
        'e_charge': 1.602176634e-19, // Elementary charge
        'me': 9.1093837015e-31, // Electron mass
        'mp': 1.67262192369e-27, // Proton mass
        'G': 6.67430e-11, // Gravitational constant
        'σ': 5.670374419e-8, // Stefan-Boltzmann constant
        'α': 7.2973525693e-3, // Fine structure constant
        're': 2.8179403227e-15, // Classical electron radius
        'λe': 2.42631023867e-12, // Electron Compton wavelength
        'a0': 5.29177210903e-11, // Bohr radius
        'R∞': 10973731.568160, // Rydberg constant
        'hbar': 1.054571817e-34, // Reduced Planck constant
        'kB': 1.380649e-23, // Boltzmann constant
        'Z0': 376.730313412, // Impedance of free space
        'KJ': 483597.8525e9, // Josephson constant
        'RK': 25812.80745, // von Klitzing constant
        'Φ0': 2.067833848e-15, // Magnetic flux quantum
        'μB': 9.2740100783e-24, // Bohr magneton
        'μN': 5.0507837461e-27, // Nuclear magneton
        'λc': 3.8615926764e-13, // Reduced Compton wavelength
        'λc_bar': 1.2131534349e-12, // Compton wavelength over 2π
        'aG': 1.75179699e-5, // Atomic unit of acceleration
        'eV': 1.602176634e-19, // Electronvolt
        'hc': 1.986445857e-25, // hc product
        'hc_eV': 1239.841984, // hc in eV*nm
        'k_e': 8.9875517873681764e9, // Coulomb's constant
        'keV': 8.9875517873681764e9, // Coulomb's constant
        'F': 96485.33212, // Faraday constant
        'Rydberg': 10973731.568160, // Rydberg constant
        'atm': 101325, // Standard atmosphere
        'bar': 100000, // Bar pressure unit
        'torr': 133.322368421, // Torr pressure unit
        'psi': 6894.757293168, // PSI pressure unit
        'mmHg': 133.322387415, // mmHg pressure unit
        'cal': 4.184, // Calorie in joules
        'kcal': 4184, // Kilocalorie in joules
        'BTU': 1055.05585262, // British Thermal Unit
        'hp': 745.69987158227022, // Horsepower in watts
        'mph': 0.44704, // Miles per hour to m/s
        'kph': 0.2777777777777778, // Kilometers per hour to m/s
        'knot': 0.5144444444444445, // Knot to m/s
        'ly': 9.4607304725808e15, // Light year in meters
        'au': 149597870700, // Astronomical unit in meters
        'pc': 3.0856775814913673e16, // Parsec in meters
        'planck_length': 1.616255e-35, // Planck length
        'planck_mass': 2.176434e-8, // Planck mass
        'planck_time': 5.391247e-44, // Planck time
        'planck_charge': 1.875545956e-18, // Planck charge
        'planck_temperature': 1.416784e32 // Planck temperature
    },
    
    // Financial calculations
    financial: {
        compoundInterest: (principal, rate, time, compounds = 1) => {
            return principal * Math.pow(1 + rate / compounds, compounds * time);
        },
        
        loanPayment: (principal, rate, periods) => {
            const monthlyRate = rate / 12;
            return principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -periods));
        },
        
        futureValue: (payment, rate, periods) => {
            return payment * ((Math.pow(1 + rate, periods) - 1) / rate);
        },
        
        presentValue: (futureValue, rate, periods) => {
            return futureValue / Math.pow(1 + rate, periods);
        }
    },
    
    // Statistics functions
    statistics: {
        mean: (arr) => arr.reduce((sum, val) => sum + val, 0) / arr.length,
        
        median: (arr) => {
            const sorted = [...arr].sort((a, b) => a - b);
            const mid = Math.floor(sorted.length / 2);
            return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
        },
        
        standardDeviation: (arr) => {
            const mean = PremiumFeatures.statistics.mean(arr);
            const variance = arr.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / arr.length;
            return Math.sqrt(variance);
        },
        
        factorial: (n) => {
            if (n <= 1) return 1;
            let result = 1;
            for (let i = 2; i <= n; i++) result *= i;
            return result;
        },
        
        combination: (n, r) => {
            return PremiumFeatures.statistics.factorial(n) / (PremiumFeatures.statistics.factorial(r) * PremiumFeatures.statistics.factorial(n - r));
        },
        
        permutation: (n, r) => {
            return PremiumFeatures.statistics.factorial(n) / PremiumFeatures.statistics.factorial(n - r);
        }
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
        this.display = null;
        this.historyDisplay = null;
        this.scientificMode = false;
        
        // Bind methods to maintain context
        this.init();
    }
    
    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }
    
    setup() {
        // Initialize DOM elements
        this.display = document.getElementById('display');
        this.historyDisplay = document.getElementById('history');
        
        console.log('Calculator setup called');
        console.log('Display element:', this.display);
        console.log('History element:', this.historyDisplay);
        
        if (!this.display || !this.historyDisplay) {
            console.error('Calculator DOM elements not found');
            return;
        }
        
        // Initialize display
        this.updateDisplay();
        
        // Add keyboard support
        document.addEventListener('keydown', (event) => this.handleKeyboard(event));
        
        // Add touch feedback
        this.addTouchFeedback();
        
        // Load saved theme
        this.loadThemeSettings();
        
        // Security: Prevent right-click context menu
        document.addEventListener('contextmenu', (e) => e.preventDefault());
        
        // Security: Prevent text selection
        document.addEventListener('selectstart', (e) => e.preventDefault());
    }
    
    loadThemeSettings() {
        const savedTheme = localStorage.getItem('calculator-theme') || 'dark';
        document.body.setAttribute('data-theme', savedTheme);
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

// Premium Features Functions
let premiumMode = false;

function togglePremiumMode() {
    premiumMode = !premiumMode;
    const premiumRow = document.getElementById('premium-row');
    const historyRow = document.getElementById('history-row');
    
    if (premiumMode) {
        premiumRow.style.display = 'flex';
        historyRow.style.display = 'flex';
        showNotification('💎 Premium Mode Activated!');
    } else {
        premiumRow.style.display = 'none';
        historyRow.style.display = 'none';
        showNotification('Premium Mode Deactivated');
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 10px 20px;
        border-radius: 20px;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        z-index: 1001;
        opacity: 0;
        animation: slideDown 0.3s ease forwards;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 2 seconds
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
    
    // Add animation styles if not present
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideDown {
                to { opacity: 1; transform: translate(-50%, 0); }
            }
            @keyframes slideUp {
                to { opacity: 0; transform: translate(-50%, -20px); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Modal Management
function createModal(title, content) {
    // Remove existing modals
    const existingModals = document.querySelectorAll('.modal-overlay');
    existingModals.forEach(modal => modal.remove());
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay active';
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    // Create header
    const header = document.createElement('div');
    header.className = 'modal-header';
    
    const titleEl = document.createElement('div');
    titleEl.className = 'modal-title';
    titleEl.textContent = title;
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-modal';
    closeBtn.innerHTML = '×';
    closeBtn.onclick = () => overlay.remove();
    
    header.appendChild(titleEl);
    header.appendChild(closeBtn);
    
    // Create content
    const contentEl = document.createElement('div');
    contentEl.innerHTML = content;
    
    modal.appendChild(header);
    modal.appendChild(contentEl);
    overlay.appendChild(modal);
    
    document.body.appendChild(overlay);
    
    // Close on overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
}

function openConstants() {
    let content = '<div class="modal-grid">';
    
    Object.entries(PremiumFeatures.constants).forEach(([name, value]) => {
        content += `
            <button class="constant-btn" onclick="insertConstant(${value}, '${name}')">
                <div><strong>${name}</strong></div>
                <div class="constant-value">${value.toExponential(6)}</div>
            </button>
        `;
    });
    
    content += '</div>';
    createModal('💎 Physical Constants', content);
}

function openUnitConverter() {
    const content = `
        <div class="unit-converter">
            <select id="unit-from" class="unit-select">
                <option value="m">Meters (m)</option>
                <option value="km">Kilometers (km)</option>
                <option value="cm">Centimeters (cm)</option>
                <option value="mm">Millimeters (mm)</option>
                <option value="ft">Feet (ft)</option>
                <option value="inch">Inches (in)</option>
            </select>
            <select id="unit-to" class="unit-select">
                <option value="m">Meters (m)</option>
                <option value="km">Kilometers (km)</option>
                <option value="cm">Centimeters (cm)</option>
                <option value="mm">Millimeters (mm)</option>
                <option value="ft">Feet (ft)</option>
                <option value="inch">Inches (in)</option>
            </select>
        </div>
        <input type="number" id="unit-input" class="unit-input" placeholder="Enter value to convert" oninput="convertUnits()">
        <div id="unit-result" class="unit-result">Result will appear here</div>
    `;
    createModal('📐 Unit Converter', content);
}

function openFinancial() {
    const content = `
        <div class="modal-grid">
            <button class="finance-btn" onclick="openFinancialCalc('compound')">
                <div><strong>Compound Interest</strong></div>
                <div class="constant-value">Future value calculation</div>
            </button>
            <button class="finance-btn" onclick="openFinancialCalc('loan')">
                <div><strong>Loan Payment</strong></div>
                <div class="constant-value">Monthly payment calculation</div>
            </button>
            <button class="finance-btn" onclick="openFinancialCalc('fv')">
                <div><strong>Future Value</strong></div>
                <div class="constant-value">Investment growth</div>
            </button>
            <button class="finance-btn" onclick="openFinancialCalc('pv')">
                <div><strong>Present Value</strong></div>
                <div class="constant-value">Discounted value</div>
            </button>
        </div>
    `;
    createModal('💰 Financial Calculator', content);
}

function openStatistics() {
    const content = `
        <div class="modal-grid">
            <button class="stat-btn" onclick="openStatsCalc('mean')">
                <div><strong>Mean</strong></div>
                <div class="constant-value">Average calculation</div>
            </button>
            <button class="stat-btn" onclick="openStatsCalc('median')">
                <div><strong>Median</strong></div>
                <div class="constant-value">Middle value</div>
            </button>
            <button class="stat-btn" onclick="openStatsCalc('std')">
                <div><strong>Standard Deviation</strong></div>
                <div class="constant-value">Data dispersion</div>
            </button>
            <button class="stat-btn" onclick="openStatsCalc('factorial')">
                <div><strong>Factorial</strong></div>
                <div class="constant-value">n! calculation</div>
            </button>
            <button class="stat-btn" onclick="openStatsCalc('combination')">
                <div><strong>Combination</strong></div>
                <div class="constant-value">nCr calculation</div>
            </button>
            <button class="stat-btn" onclick="openStatsCalc('permutation')">
                <div><strong>Permutation</strong></div>
                <div class="constant-value">nPr calculation</div>
            </button>
        </div>
    `;
    createModal('📊 Statistics Calculator', content);
}

function showHistory() {
    const history = calculator.state.history;
    if (history.length === 0) {
        showNotification('No history available');
        return;
    }
    
    let content = '<input type="text" class="search-input" placeholder="Search history..." oninput="filterHistory(this.value)">';
    content += '<div id="history-list">';
    
    history.forEach((item, index) => {
        content += `
            <div class="history-item" onclick="recallHistory('${item.expression}', ${item.result})">
                <div class="history-expression">${item.expression}</div>
                <div class="history-result">${item.result}</div>
            </div>
        `;
    });
    
    content += '</div>';
    createModal('📚 Calculation History', content);
}

function clearHistory() {
    calculator.state.clearHistory();
    showNotification('History cleared');
}

function copyResult() {
    const result = calculator.display.textContent;
    navigator.clipboard.writeText(result).then(() => {
        showNotification('Result copied to clipboard');
    });
}

function pasteResult() {
    navigator.clipboard.readText().then(text => {
        try {
            const num = parseFloat(text);
            if (!isNaN(num)) {
                calculator.state.currentInput = String(num);
                calculator.updateDisplay();
                showNotification('Pasted from clipboard');
            } else {
                showNotification('Invalid number in clipboard');
            }
        } catch (error) {
            showNotification('Error pasting from clipboard');
        }
    });
}

// Helper Functions for Premium Features
function insertConstant(value, name) {
    calculator.state.currentInput = String(value);
    calculator.state.waitingForOperand = true;
    calculator.updateDisplay();
    showNotification(`Inserted ${name}: ${value}`);
    document.querySelector('.modal-overlay').remove();
}

function convertUnits() {
    const fromUnit = document.getElementById('unit-from').value;
    const toUnit = document.getElementById('unit-to').value;
    const value = parseFloat(document.getElementById('unit-input').value);
    const resultEl = document.getElementById('unit-result');
    
    if (isNaN(value)) {
        resultEl.textContent = 'Please enter a valid number';
        return;
    }
    
    // Convert to meters first
    const meters = value * PremiumFeatures.units.length[fromUnit];
    // Then convert to target unit
    const result = meters / PremiumFeatures.units.length[toUnit];
    
    resultEl.textContent = `${value} ${fromUnit} = ${result.toFixed(6)} ${toUnit}`;
}

function openFinancialCalc(type) {
    let content = '';
    
    switch (type) {
        case 'compound':
            content = `
                <div class="modal-grid">
                    <input type="number" id="principal" class="unit-input" placeholder="Principal amount">
                    <input type="number" id="rate" class="unit-input" placeholder="Annual rate (e.g., 0.05 for 5%)">
                    <input type="number" id="time" class="unit-input" placeholder="Time in years">
                    <input type="number" id="compounds" class="unit-input" placeholder="Compounds per year (default: 1)">
                </div>
                <button class="finance-btn" style="width: 100%; margin-top: 15px;" onclick="calculateCompound()">Calculate</button>
                <div id="compound-result" class="unit-result">Result will appear here</div>
            `;
            break;
        case 'loan':
            content = `
                <div class="modal-grid">
                    <input type="number" id="loan-amount" class="unit-input" placeholder="Loan amount">
                    <input type="number" id="loan-rate" class="unit-input" placeholder="Annual interest rate">
                    <input type="number" id="loan-periods" class="unit-input" placeholder="Number of payments">
                </div>
                <button class="finance-btn" style="width: 100%; margin-top: 15px;" onclick="calculateLoan()">Calculate</button>
                <div id="loan-result" class="unit-result">Result will appear here</div>
            `;
            break;
    }
    
    createModal('💰 ' + (type === 'compound' ? 'Compound Interest' : 'Loan Payment'), content);
}

function calculateCompound() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
    const compounds = parseInt(document.getElementById('compounds').value) || 1;
    
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById('compound-result').textContent = 'Please enter valid values';
        return;
    }
    
    const result = PremiumFeatures.financial.compoundInterest(principal, rate, time, compounds);
    document.getElementById('compound-result').textContent = `Future Value: ${result.toFixed(2)}`;
}

function calculateLoan() {
    const amount = parseFloat(document.getElementById('loan-amount').value);
    const rate = parseFloat(document.getElementById('loan-rate').value);
    const periods = parseInt(document.getElementById('loan-periods').value);
    
    if (isNaN(amount) || isNaN(rate) || isNaN(periods)) {
        document.getElementById('loan-result').textContent = 'Please enter valid values';
        return;
    }
    
    const result = PremiumFeatures.financial.loanPayment(amount, rate, periods);
    document.getElementById('loan-result').textContent = `Monthly Payment: ${result.toFixed(2)}`;
}

function openStatsCalc(type) {
    let content = '';
    
    switch (type) {
        case 'factorial':
            content = `
                <div class="modal-grid">
                    <input type="number" id="factorial-input" class="unit-input" placeholder="Enter number">
                </div>
                <button class="stat-btn" style="width: 100%; margin-top: 15px;" onclick="calculateFactorial()">Calculate</button>
                <div id="factorial-result" class="unit-result">Result will appear here</div>
            `;
            break;
        case 'combination':
        case 'permutation':
            content = `
                <div class="modal-grid">
                    <input type="number" id="n-input" class="unit-input" placeholder="n (total items)">
                    <input type="number" id="r-input" class="unit-input" placeholder="r (selected items)">
                </div>
                <button class="stat-btn" style="width: 100%; margin-top: 15px;" onclick="calculateStats('${type}')">Calculate</button>
                <div id="stats-result" class="unit-result">Result will appear here</div>
            `;
            break;
        default:
            content = `
                <div class="modal-grid">
                    <input type="text" id="stats-input" class="unit-input" placeholder="Enter numbers separated by commas">
                </div>
                <button class="stat-btn" style="width: 100%; margin-top: 15px;" onclick="calculateStats('${type}')">Calculate</button>
                <div id="stats-result" class="unit-result">Result will appear here</div>
            `;
    }
    
    createModal('📊 ' + type.charAt(0).toUpperCase() + type.slice(1), content);
}

function calculateFactorial() {
    const n = parseInt(document.getElementById('factorial-input').value);
    
    if (isNaN(n) || n < 0) {
        document.getElementById('factorial-result').textContent = 'Please enter a valid non-negative number';
        return;
    }
    
    const result = PremiumFeatures.statistics.factorial(n);
    document.getElementById('factorial-result').textContent = `${n}! = ${result}`;
}

function calculateStats(type) {
    let result;
    
    if (type === 'factorial') {
        calculateFactorial();
        return;
    } else if (type === 'combination' || type === 'permutation') {
        const n = parseInt(document.getElementById('n-input').value);
        const r = parseInt(document.getElementById('r-input').value);
        
        if (isNaN(n) || isNaN(r) || n < r) {
            document.getElementById('stats-result').textContent = 'Please enter valid values (n >= r)';
            return;
        }
        
        if (type === 'combination') {
            result = PremiumFeatures.statistics.combination(n, r);
            document.getElementById('stats-result').textContent = `C(${n},${r}) = ${result}`;
        } else {
            result = PremiumFeatures.statistics.permutation(n, r);
            document.getElementById('stats-result').textContent = `P(${n},${r}) = ${result}`;
        }
    } else {
        const input = document.getElementById('stats-input').value;
        const numbers = input.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
        
        if (numbers.length === 0) {
            document.getElementById('stats-result').textContent = 'Please enter valid numbers separated by commas';
            return;
        }
        
        switch (type) {
            case 'mean':
                result = PremiumFeatures.statistics.mean(numbers);
                document.getElementById('stats-result').textContent = `Mean: ${result.toFixed(4)}`;
                break;
            case 'median':
                result = PremiumFeatures.statistics.median(numbers);
                document.getElementById('stats-result').textContent = `Median: ${result.toFixed(4)}`;
                break;
            case 'std':
                result = PremiumFeatures.statistics.standardDeviation(numbers);
                document.getElementById('stats-result').textContent = `Standard Deviation: ${result.toFixed(4)}`;
                break;
        }
    }
}

function filterHistory(searchTerm) {
    const items = document.querySelectorAll('.history-item');
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm.toLowerCase())) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function recallHistory(expression, result) {
    calculator.state.currentInput = String(result);
    calculator.state.waitingForOperand = true;
    calculator.updateDisplay();
    document.querySelector('.modal-overlay').remove();
    showNotification(`Recalled: ${expression} = ${result}`);
}

// Initialize Calculator
let calculator;

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing calculator');
    calculator = new ProfessionalCalculator();
    
    // Make calculator globally available for onclick handlers
    window.calculator = calculator;
    
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