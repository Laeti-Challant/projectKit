/**
 * Point d'entrée de l'application
 * Initialise tous les modules et gère la logique principale
 */

import { sections, appConfig, messages } from './config.js';

// ========================================
// ÉTAT DE L'APPLICATION
// ========================================

const state = {
    currentSectionIndex: 0,
    formData: {},
    autoSaveTimer: null
};

// ========================================
// GESTION DU DOM
// ========================================

const DOM = {
    sectionsNav: document.getElementById('sections-nav'),
    formContent: document.getElementById('form-content'),
    sectionTitle: document.getElementById('section-title'),
    btnPrev: document.getElementById('btn-prev'),
    btnNext: document.getElementById('btn-next'),
    btnSave: document.getElementById('btn-save'),
    btnLoad: document.getElementById('btn-load'),
    btnExport: document.getElementById('btn-export'),
    btnAbout: document.getElementById('btn-about'),
    modalAbout: document.getElementById('modal-about'),
    closeModal: document.getElementById('close-modal'),
    progressFill: document.getElementById('progress-fill'),
    progressPercent: document.getElementById('progress-percent'),
    currentSectionSpan: document.getElementById('current-section'),
    totalSectionsSpan: document.getElementById('total-sections'),
    toastContainer: document.getElementById('toast-container'),
    mainForm: document.getElementById('main-form')
};

// ========================================
// INITIALISATION
// ========================================

function init() {
    console.log('🚀 Initialisation de l\'application...');
    
    // Charger les données sauvegardées
    loadFromStorage();
    
    // Créer la navigation des sections
    renderSectionsNav();
    
    // Afficher la première section
    renderSection(state.currentSectionIndex);
    
    // Mettre à jour l'affichage
    updateUI();
    
    // Attacher les event listeners
    attachEventListeners();
    
    console.log('✅ Application initialisée');
}

// ========================================
// NAVIGATION DES SECTIONS
// ========================================

function renderSectionsNav() {
    DOM.sectionsNav.innerHTML = '';
    DOM.totalSectionsSpan.textContent = sections.length;
    
    sections.forEach((section, index) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'section-btn';
        btn.textContent = section.title;
        btn.dataset.index = index;
        
        if (index === state.currentSectionIndex) {
            btn.classList.add('active');
        }
        
        btn.addEventListener('click', () => {
            goToSection(index);
        });
        
        DOM.sectionsNav.appendChild(btn);
    });
}

function goToSection(index) {
    if (index < 0 || index >= sections.length) return;
    
    // Sauvegarder les données de la section actuelle
    saveCurrentSection();
    
    // Changer de section
    state.currentSectionIndex = index;
    
    // Afficher la nouvelle section
    renderSection(index);
    
    // Mettre à jour l'UI
    updateUI();
    
    // Scroll vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToNextSection() {
    if (state.currentSectionIndex < sections.length - 1) {
        goToSection(state.currentSectionIndex + 1);
    }
}

function goToPrevSection() {
    if (state.currentSectionIndex > 0) {
        goToSection(state.currentSectionIndex - 1);
    }
}

// ========================================
// RENDU DU FORMULAIRE
// ========================================

function renderSection(index) {
    const section = sections[index];
    
    // Mettre à jour le titre
    DOM.sectionTitle.textContent = section.title;
    
    // Vider le contenu
    DOM.formContent.innerHTML = '';
    
    // Créer les champs
    section.fields.forEach(field => {
        const fieldElement = createField(field);
        DOM.formContent.appendChild(fieldElement);
    });
}

function createField(field) {
    const fieldGroup = document.createElement('div');
    fieldGroup.className = 'form-group';
    
    // Label
    const label = document.createElement('label');
    label.className = 'form-label';
    label.htmlFor = field.id;
    label.textContent = field.label;
    if (field.required) {
        label.innerHTML += ' <span style="color: var(--color-danger);">*</span>';
    }
    fieldGroup.appendChild(label);
    
    // Champ selon le type
    let input;
    
    switch (field.type) {
        case 'textarea':
            input = createTextarea(field);
            break;
        case 'select':
            input = createSelect(field);
            break;
        case 'checkbox':
            input = createCheckboxGroup(field);
            break;
        case 'radio':
            input = createRadioGroup(field);
            break;
        case 'number':
            input = createNumber(field);
            break;
        case 'date':
            input = createDate(field);
            break;
        default:
            input = createText(field);
    }
    
    fieldGroup.appendChild(input);
    
    // Hint
    if (field.hint) {
        const hint = document.createElement('p');
        hint.className = 'form-hint';
        hint.textContent = field.hint;
        fieldGroup.appendChild(hint);
    }
    
    return fieldGroup;
}

function createText(field) {
    const input = document.createElement('input');
    input.type = 'text';
    input.id = field.id;
    input.name = field.id;
    input.className = 'form-input';
    input.placeholder = field.placeholder || '';
    input.value = state.formData[field.id] || '';
    
    input.addEventListener('input', () => {
        scheduleAutoSave();
    });
    
    return input;
}

function createTextarea(field) {
    const textarea = document.createElement('textarea');
    textarea.id = field.id;
    textarea.name = field.id;
    textarea.className = 'form-textarea';
    textarea.placeholder = field.placeholder || '';
    textarea.value = state.formData[field.id] || '';
    
    textarea.addEventListener('input', () => {
        scheduleAutoSave();
    });
    
    return textarea;
}

function createNumber(field) {
    const input = document.createElement('input');
    input.type = 'number';
    input.id = field.id;
    input.name = field.id;
    input.className = 'form-input';
    input.placeholder = field.placeholder || '';
    input.value = state.formData[field.id] || '';
    
    input.addEventListener('input', () => {
        scheduleAutoSave();
    });
    
    return input;
}

function createDate(field) {
    const input = document.createElement('input');
    input.type = 'date';
    input.id = field.id;
    input.name = field.id;
    input.className = 'form-input';
    input.value = state.formData[field.id] || '';
    
    input.addEventListener('change', () => {
        scheduleAutoSave();
    });
    
    return input;
}

function createSelect(field) {
    const select = document.createElement('select');
    select.id = field.id;
    select.name = field.id;
    select.className = 'form-select';
    
    // Option vide
    const emptyOption = document.createElement('option');
    emptyOption.value = '';
    emptyOption.textContent = '-- Sélectionnez --';
    select.appendChild(emptyOption);
    
    // Options
    field.options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        if (state.formData[field.id] === option) {
            opt.selected = true;
        }
        select.appendChild(opt);
    });
    
    select.addEventListener('change', () => {
        scheduleAutoSave();
    });
    
    return select;
}

function createCheckboxGroup(field) {
    const container = document.createElement('div');
    container.className = 'checkbox-group';
    
    const savedValues = state.formData[field.id] || [];
    
    field.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.className = 'checkbox-label';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = field.id;
        checkbox.value = option;
        checkbox.id = `${field.id}_${index}`;
        
        if (savedValues.includes(option)) {
            checkbox.checked = true;
        }
        
        checkbox.addEventListener('change', () => {
            scheduleAutoSave();
        });
        
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(option));
        container.appendChild(label);
    });
    
    return container;
}

function createRadioGroup(field) {
    const container = document.createElement('div');
    container.className = 'checkbox-group';
    
    field.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.className = 'checkbox-label';
        
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = field.id;
        radio.value = option;
        radio.id = `${field.id}_${index}`;
        
        if (state.formData[field.id] === option) {
            radio.checked = true;
        }
        
        radio.addEventListener('change', () => {
            scheduleAutoSave();
        });
        
        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));
        container.appendChild(label);
    });
    
    return container;
}

// ========================================
// SAUVEGARDE DES DONNÉES
// ========================================

function saveCurrentSection() {
    const section = sections[state.currentSectionIndex];
    
    section.fields.forEach(field => {
        if (field.type === 'checkbox') {
            const checkboxes = document.querySelectorAll(`input[name="${field.id}"]:checked`);
            state.formData[field.id] = Array.from(checkboxes).map(cb => cb.value);
        } else if (field.type === 'radio') {
            const radio = document.querySelector(`input[name="${field.id}"]:checked`);
            state.formData[field.id] = radio ? radio.value : '';
        } else {
            const input = document.getElementById(field.id);
            if (input) {
                state.formData[field.id] = input.value;
            }
        }
    });
}

function scheduleAutoSave() {
    // Annuler le timer précédent
    if (state.autoSaveTimer) {
        clearTimeout(state.autoSaveTimer);
    }
    
    // Programmer une nouvelle sauvegarde
    state.autoSaveTimer = setTimeout(() => {
        saveCurrentSection();
        saveToStorage();
    }, appConfig.autoSaveDelay);
}

function saveToStorage() {
    try {
        const dataToSave = JSON.stringify(state.formData);
        localStorage.setItem(appConfig.storageKey, dataToSave);
        console.log('💾 Données sauvegardées automatiquement');
    } catch (error) {
        console.error('❌ Erreur sauvegarde:', error);
        showToast(messages.saveError, 'error');
    }
}

function loadFromStorage() {
    try {
        const savedData = localStorage.getItem(appConfig.storageKey);
        if (savedData) {
            state.formData = JSON.parse(savedData);
            console.log('📂 Données chargées depuis le stockage local');
        }
    } catch (error) {
        console.error('❌ Erreur chargement:', error);
    }
}

function manualSave() {
    saveCurrentSection();
    saveToStorage();
    showToast(messages.saveSuccess, 'success');
}

function manualLoad() {
    loadFromStorage();
    renderSection(state.currentSectionIndex);
    showToast(messages.loadSuccess, 'success');
}

// ========================================
// EXPORT PDF
// ========================================

function exportToPDF() {
    showToast('🚧 Fonctionnalité en cours de développement...', 'info');
    // TODO: Implémenter l'export PDF (Phase 5)
    console.log('📄 Export PDF - Données:', state.formData);
}

// ========================================
// UI & HELPERS
// ========================================

function updateUI() {
    // Mettre à jour les boutons de navigation
    DOM.btnPrev.disabled = state.currentSectionIndex === 0;
    DOM.btnNext.disabled = state.currentSectionIndex === sections.length - 1;
    
    if (state.currentSectionIndex === sections.length - 1) {
        DOM.btnNext.textContent = '✅ Terminer';
    } else {
        DOM.btnNext.textContent = 'Suivant →';
    }
    
    // Mettre à jour la barre de progression
    const progress = ((state.currentSectionIndex + 1) / sections.length) * 100;
    DOM.progressFill.style.width = `${progress}%`;
    DOM.progressPercent.textContent = Math.round(progress);
    DOM.currentSectionSpan.textContent = state.currentSectionIndex + 1;
    
    // Mettre à jour les boutons de section
    const sectionButtons = DOM.sectionsNav.querySelectorAll('.section-btn');
    sectionButtons.forEach((btn, index) => {
        if (index === state.currentSectionIndex) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    DOM.toastContainer.appendChild(toast);
    
    // Supprimer après 3 secondes
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================

function attachEventListeners() {
    // Navigation
    DOM.btnNext.addEventListener('click', goToNextSection);
    DOM.btnPrev.addEventListener('click', goToPrevSection);
    
    // Actions
    DOM.btnSave.addEventListener('click', manualSave);
    DOM.btnLoad.addEventListener('click', manualLoad);
    DOM.btnExport.addEventListener('click', exportToPDF);
    
    // Modal
    DOM.btnAbout.addEventListener('click', () => {
        DOM.modalAbout.showModal();
    });
    
    DOM.closeModal.addEventListener('click', () => {
        DOM.modalAbout.close();
    });
    
    // Fermer la modal en cliquant sur le backdrop
    DOM.modalAbout.addEventListener('click', (e) => {
        if (e.target === DOM.modalAbout) {
            DOM.modalAbout.close();
        }
    });
    
    // Prévenir la soumission du formulaire
    DOM.mainForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });
    
    // Sauvegarder avant de quitter
    window.addEventListener('beforeunload', () => {
        saveCurrentSection();
        saveToStorage();
    });
    
    // Navigation clavier
    document.addEventListener('keydown', (e) => {
        // Alt + Flèche droite : section suivante
        if (e.altKey && e.key === 'ArrowRight') {
            e.preventDefault();
            goToNextSection();
        }
        // Alt + Flèche gauche : section précédente
        if (e.altKey && e.key === 'ArrowLeft') {
            e.preventDefault();
            goToPrevSection();
        }
        // Ctrl + S : Sauvegarde manuelle
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            manualSave();
        }
    });
}

// ========================================
// DÉMARRAGE DE L'APPLICATION
// ========================================

// Attendre que le DOM soit chargé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}