/**
 * Configuration des sections du cahier des charges
 * 
 * Chaque section contient :
 * - id : identifiant unique
 * - title : titre de la section
 * - fields : tableau des champs du formulaire
 * 
 * Types de champs supportés :
 * - text : champ texte simple
 * - textarea : zone de texte multiligne
 * - select : liste déroulante
 * - checkbox : cases à cocher
 * - radio : boutons radio
 * - number : champ numérique
 * - date : sélecteur de date
 */

export const sections = [
    {
        id: 'section1',
        title: '1. Analyse des besoins',
        fields: [
            {
                id: 'contexte_demandeur',
                label: 'Qui demande cette application ?',
                type: 'checkbox',
                options: [
                    'Client externe',
                    'Entreprise interne',
                    'Projet personnel',
                    'Autre'
                ],
                hint: 'Cochez toutes les cases qui s\'appliquent'
            },
            {
                id: 'contexte_details',
                label: 'Détails du demandeur',
                type: 'textarea',
                placeholder: 'Décrivez le contexte et le demandeur du projet...',
                hint: 'Qui est à l\'origine de la demande ? Quel est son contexte ?'
            },
            {
                id: 'appareils_cibles',
                label: 'Appareils cibles',
                type: 'checkbox',
                options: ['PC', 'Tablette', 'Mobile'],
                hint: 'Sur quels appareils l\'application doit-elle fonctionner ?'
            },
            {
                id: 'systemes_exploitation',
                label: 'Systèmes d\'exploitation',
                type: 'checkbox',
                options: ['Windows', 'Mac', 'Linux', 'Android', 'iOS']
            },
            {
                id: 'logiciels_existants',
                label: 'Logiciels existants à intégrer',
                type: 'text',
                placeholder: 'Ex: CRM existant, logiciel de comptabilité...'
            },
            {
                id: 'contraintes_techniques',
                label: 'Contraintes techniques',
                type: 'textarea',
                placeholder: 'Décrivez les contraintes techniques éventuelles...'
            },
            {
                id: 'structure_deploiement',
                label: 'Structure de déploiement',
                type: 'textarea',
                placeholder: 'Type d\'hébergement, type d\'application (web, PWA, iOS, Android)...',
                hint: 'Comment l\'application sera-t-elle déployée ?'
            },
            {
                id: 'contraintes_legales',
                label: 'Contraintes légales (RGPD, etc.)',
                type: 'textarea',
                placeholder: 'RGPD, protection des données, conformité...'
            },
            {
                id: 'budget_disponible',
                label: 'Budget disponible',
                type: 'text',
                placeholder: 'Ex: 5000€ ou budget flexible'
            },
            {
                id: 'echeances',
                label: 'Échéances',
                type: 'text',
                placeholder: 'Date de livraison souhaitée ou délais'
            },
            {
                id: 'solution_existante',
                label: 'Solution existante à remplacer/améliorer ?',
                type: 'radio',
                options: ['Oui', 'Non - Nouveau besoin'],
                hint: 'Y a-t-il déjà un système en place ?'
            },
            {
                id: 'solution_existante_details',
                label: 'Si oui, laquelle ?',
                type: 'textarea',
                placeholder: 'Décrivez la solution actuelle et ses limites...'
            }
        ]
    },
    {
        id: 'section2',
        title: '2. Problématique',
        fields: [
            {
                id: 'probleme_principal',
                label: 'Quel problème concret doit être résolu ?',
                type: 'textarea',
                placeholder: 'Décrivez le problème principal de manière claire et précise...',
                required: true,
                hint: 'Soyez spécifique : quel est le vrai problème à résoudre ?'
            },
            {
                id: 'difficulte_1',
                label: 'Difficulté 1',
                type: 'text',
                placeholder: 'Première difficulté rencontrée'
            },
            {
                id: 'difficulte_2',
                label: 'Difficulté 2',
                type: 'text',
                placeholder: 'Deuxième difficulté rencontrée'
            },
            {
                id: 'difficulte_3',
                label: 'Difficulté 3',
                type: 'text',
                placeholder: 'Troisième difficulté rencontrée'
            },
            {
                id: 'impact_temps',
                label: 'Impact temps',
                type: 'textarea',
                placeholder: 'Comment ces problèmes impactent-ils le temps de travail ?',
                hint: 'Combien de temps est perdu ? Quels retards sont causés ?'
            },
            {
                id: 'impact_financier',
                label: 'Impact financier',
                type: 'textarea',
                placeholder: 'Quel est l\'impact financier de ces problèmes ?',
                hint: 'Coûts supplémentaires, pertes de revenus...'
            },
            {
                id: 'impact_utilisateur',
                label: 'Impact utilisateur',
                type: 'textarea',
                placeholder: 'Comment ces problèmes affectent-ils les utilisateurs ?',
                hint: 'Frustration, perte de clients, mauvaise expérience...'
            }
        ]
    },
    {
        id: 'section3',
        title: '3. Utilisateurs cibles',
        fields: [
            {
                id: 'profil_1',
                label: 'Profil utilisateur 1',
                type: 'text',
                placeholder: 'Ex: Responsable marketing',
                hint: 'Qui utilisera principalement cette application ?'
            },
            {
                id: 'profil_1_nombre',
                label: 'Nombre d\'utilisateurs (profil 1)',
                type: 'number',
                placeholder: '0'
            },
            {
                id: 'profil_2',
                label: 'Profil utilisateur 2',
                type: 'text',
                placeholder: 'Ex: Commercial terrain'
            },
            {
                id: 'profil_2_nombre',
                label: 'Nombre d\'utilisateurs (profil 2)',
                type: 'number',
                placeholder: '0'
            },
            {
                id: 'niveau_technique',
                label: 'Niveau technique des utilisateurs',
                type: 'radio',
                options: ['Débutant', 'Intermédiaire', 'Avancé', 'Mixte'],
                hint: 'Quel est le niveau de compétence informatique général ?'
            },
            {
                id: 'lieu_utilisation',
                label: 'Lieu d\'utilisation',
                type: 'checkbox',
                options: ['Bureau', 'Domicile', 'Déplacement'],
                hint: 'Où l\'application sera-t-elle utilisée ?'
            },
            {
                id: 'frequence_utilisation',
                label: 'Fréquence d\'utilisation',
                type: 'radio',
                options: ['Quotidienne', 'Hebdomadaire', 'Occasionnelle']
            },
            {
                id: 'duree_utilisation',
                label: 'Durée d\'utilisation typique',
                type: 'text',
                placeholder: 'Ex: 30 minutes par session'
            }
        ]
    },
    {
        id: 'section4',
        title: '4. Objectifs du projet',
        fields: [
            {
                id: 'objectif_1',
                label: 'Objectif principal 1',
                type: 'textarea',
                placeholder: 'Premier objectif à atteindre...',
                required: true
            },
            {
                id: 'objectif_2',
                label: 'Objectif principal 2',
                type: 'textarea',
                placeholder: 'Deuxième objectif à atteindre...'
            },
            {
                id: 'objectif_3',
                label: 'Objectif principal 3',
                type: 'textarea',
                placeholder: 'Troisième objectif à atteindre...'
            },
            {
                id: 'fonctionnalite_obligatoire_1',
                label: 'Fonctionnalité obligatoire 1',
                type: 'text',
                placeholder: 'Ex: Système d\'authentification',
                hint: 'Fonctionnalités indispensables au lancement'
            },
            {
                id: 'fonctionnalite_obligatoire_2',
                label: 'Fonctionnalité obligatoire 2',
                type: 'text',
                placeholder: 'Ex: Tableau de bord'
            },
            {
                id: 'fonctionnalite_obligatoire_3',
                label: 'Fonctionnalité obligatoire 3',
                type: 'text',
                placeholder: 'Ex: Export PDF'
            },
            {
                id: 'fonctionnalite_souhaitable_1',
                label: 'Fonctionnalité souhaitable 1',
                type: 'text',
                placeholder: 'Ex: Notifications par email',
                hint: 'Fonctionnalités bonus, non critiques'
            },
            {
                id: 'fonctionnalite_souhaitable_2',
                label: 'Fonctionnalité souhaitable 2',
                type: 'text',
                placeholder: 'Ex: Mode sombre'
            },
            {
                id: 'indicateur_1',
                label: 'Indicateur de réussite 1',
                type: 'text',
                placeholder: 'Comment mesurer le succès ? Ex: Taux d\'adoption > 80%',
                hint: 'Comment saurez-vous que le projet est réussi ?'
            },
            {
                id: 'indicateur_2',
                label: 'Indicateur de réussite 2',
                type: 'text',
                placeholder: 'Ex: Réduction du temps de traitement de 50%'
            },
            {
                id: 'resultat_attendu_1',
                label: 'Résultat attendu 1',
                type: 'text',
                placeholder: 'Ex: Augmentation de la productivité'
            },
            {
                id: 'resultat_attendu_2',
                label: 'Résultat attendu 2',
                type: 'text',
                placeholder: 'Ex: Meilleure satisfaction utilisateur'
            }
        ]
    },
    {
        id: 'section5',
        title: '5. Périmètre fonctionnel',
        fields: [
            {
                id: 'fonctionnalite_incluse_1',
                label: 'Fonctionnalité incluse 1',
                type: 'textarea',
                placeholder: 'Décrivez la première fonctionnalité du projet...',
                hint: 'Que fera exactement cette fonctionnalité ?'
            },
            {
                id: 'fonctionnalite_incluse_2',
                label: 'Fonctionnalité incluse 2',
                type: 'textarea',
                placeholder: 'Décrivez la deuxième fonctionnalité du projet...'
            },
            {
                id: 'fonctionnalite_incluse_3',
                label: 'Fonctionnalité incluse 3',
                type: 'textarea',
                placeholder: 'Décrivez la troisième fonctionnalité du projet...'
            },
            {
                id: 'exclusion_1',
                label: 'Exclusion 1',
                type: 'text',
                placeholder: 'Ce qui ne sera PAS fait'
            },
            {
                id: 'exclusion_1_raison',
                label: 'Raison de l\'exclusion 1',
                type: 'text',
                placeholder: 'Pourquoi cette fonctionnalité est exclue ?'
            },
            {
                id: 'exclusion_2',
                label: 'Exclusion 2',
                type: 'text',
                placeholder: 'Ce qui ne sera PAS fait'
            },
            {
                id: 'exclusion_2_raison',
                label: 'Raison de l\'exclusion 2',
                type: 'text',
                placeholder: 'Pourquoi cette fonctionnalité est exclue ?'
            },
            {
                id: 'limite_1',
                label: 'Limite du système 1',
                type: 'text',
                placeholder: 'Ex: Maximum 1000 utilisateurs simultanés',
                hint: 'Quelles sont les limites acceptables du système ?'
            },
            {
                id: 'limite_2',
                label: 'Limite du système 2',
                type: 'text',
                placeholder: 'Ex: Fichiers limités à 10 Mo'
            },
            {
                id: 'temps_reponse_max',
                label: 'Temps de réponse maximum',
                type: 'text',
                placeholder: 'Ex: < 2 secondes',
                hint: 'Quelle est la performance attendue ?'
            },
            {
                id: 'utilisateurs_simultanes',
                label: 'Nombre d\'utilisateurs simultanés',
                type: 'number',
                placeholder: '100'
            },
            {
                id: 'volume_donnees',
                label: 'Volume de données',
                type: 'text',
                placeholder: 'Ex: 10 000 enregistrements',
                hint: 'Quelle quantité de données l\'application devra gérer ?'
            }
        ]
    },
    {
        id: 'section6',
        title: '6. Exigences de sécurité',
        fields: [
            {
                id: 'authentification',
                label: 'Authentification requise',
                type: 'radio',
                options: ['Oui', 'Non'],
                hint: 'Les utilisateurs doivent-ils se connecter ?'
            },
            {
                id: 'type_authentification',
                label: 'Type d\'authentification',
                type: 'checkbox',
                options: [
                    'Email/Mot de passe',
                    'OAuth (Google, Facebook...)',
                    'Double authentification (2FA)',
                    'Biométrie'
                ]
            },
            {
                id: 'chiffrement_donnees',
                label: 'Chiffrement des données',
                type: 'radio',
                options: ['Oui', 'Non']
            },
            {
                id: 'sauvegarde_auto',
                label: 'Sauvegarde automatique',
                type: 'radio',
                options: ['Oui', 'Non']
            },
            {
                id: 'frequence_sauvegarde',
                label: 'Fréquence de sauvegarde',
                type: 'text',
                placeholder: 'Ex: Quotidienne, Hebdomadaire'
            },
            {
                id: 'tracabilite',
                label: 'Traçabilité des actions',
                type: 'radio',
                options: ['Oui', 'Non'],
                hint: 'Faut-il conserver un historique des actions utilisateurs ?'
            },
            {
                id: 'autres_securite',
                label: 'Autres exigences de sécurité',
                type: 'textarea',
                placeholder: 'Protection contre les attaques, conformité, etc.'
            },
            {
                id: 'rgpd',
                label: 'Conformité RGPD',
                type: 'radio',
                options: ['Oui', 'Non', 'Non applicable']
            },
            {
                id: 'donnees_sensibles',
                label: 'Types de données sensibles',
                type: 'checkbox',
                options: [
                    'Données personnelles',
                    'Données financières',
                    'Données de santé',
                    'Aucune donnée sensible'
                ]
            }
        ]
    },
    {
        id: 'section7',
        title: '7. Compatibilité & Ergonomie',
        fields: [
            {
                id: 'navigateurs_supportes',
                label: 'Navigateurs supportés',
                type: 'checkbox',
                options: [
                    'Chrome',
                    'Firefox',
                    'Safari',
                    'Edge',
                    'Tous les navigateurs modernes'
                ]
            },
            {
                id: 'version_mobile',
                label: 'Version mobile',
                type: 'radio',
                options: ['Oui', 'Non']
            },
            {
                id: 'type_mobile',
                label: 'Type d\'application mobile',
                type: 'checkbox',
                options: [
                    'Application web responsive',
                    'PWA (Progressive Web App)',
                    'Application native iOS',
                    'Application native Android'
                ]
            },
            {
                id: 'integrations_requises',
                label: 'Intégrations requises',
                type: 'textarea',
                placeholder: 'Ex: API de paiement, Google Maps, CRM...',
                hint: 'Quels services externes doivent être intégrés ?'
            },
            {
                id: 'interface_intuitive',
                label: 'Interface intuitive',
                type: 'radio',
                options: ['Priorité haute', 'Priorité moyenne', 'Priorité basse']
            },
            {
                id: 'accessibilite',
                label: 'Accessibilité (handicap)',
                type: 'radio',
                options: ['Oui', 'Non', 'Niveau basique'],
                hint: 'L\'application doit-elle être accessible aux personnes handicapées ?'
            },
            {
                id: 'responsive_design',
                label: 'Responsive design',
                type: 'radio',
                options: ['Oui', 'Non']
            },
            {
                id: 'support_multilingue',
                label: 'Support multilingue',
                type: 'radio',
                options: ['Oui', 'Non']
            },
            {
                id: 'langues_supportees',
                label: 'Langues supportées',
                type: 'text',
                placeholder: 'Ex: Français, Anglais, Espagnol'
            },
            {
                id: 'autres_ergonomie',
                label: 'Autres exigences ergonomiques',
                type: 'textarea',
                placeholder: 'Mode sombre, personnalisation, raccourcis clavier...'
            }
        ]
    },
    {
        id: 'section8',
        title: '8. Architecture technique',
        fields: [
            {
                id: 'frontend_framework',
                label: 'Framework/Librairie Frontend',
                type: 'checkbox',
                options: [
                    'React',
                    'Vue.js',
                    'Angular',
                    'Vanilla JS',
                    'Autre'
                ]
            },
            {
                id: 'css_framework',
                label: 'Framework CSS',
                type: 'checkbox',
                options: [
                    'CSS pur',
                    'Sass/SCSS',
                    'Tailwind',
                    'Bootstrap',
                    'Autre'
                ]
            },
            {
                id: 'backend_langage',
                label: 'Langage Backend',
                type: 'checkbox',
                options: [
                    'Node.js',
                    'Python',
                    'PHP',
                    'Java',
                    'C#',
                    'Autre'
                ]
            },
            {
                id: 'backend_framework',
                label: 'Framework Backend',
                type: 'text',
                placeholder: 'Ex: Express, Django, Laravel, Spring...'
            },
            {
                id: 'base_donnees',
                label: 'Base de données',
                type: 'checkbox',
                options: [
                    'MySQL',
                    'PostgreSQL',
                    'MongoDB',
                    'SQLite',
                    'Autre'
                ]
            },
            {
                id: 'hebergement',
                label: 'Type d\'hébergement',
                type: 'checkbox',
                options: [
                    'VPS/Serveur dédié',
                    'Cloud (AWS/Azure/GCP)',
                    'PaaS (Heroku/Vercel/Netlify)',
                    'Hébergeur traditionnel'
                ]
            },
            {
                id: 'hebergement_choix',
                label: 'Choix d\'hébergement',
                type: 'text',
                placeholder: 'Ex: OVH, Heroku, Netlify...'
            },
            {
                id: 'api_type',
                label: 'Type d\'API',
                type: 'radio',
                options: ['REST', 'GraphQL', 'WebSockets', 'Aucune'],
                hint: 'Comment le frontend communiquera avec le backend ?'
            },
            {
                id: 'autres_tech',
                label: 'Autres technologies',
                type: 'textarea',
                placeholder: 'Redis, Docker, CI/CD, etc.'
            }
        ]
    },
    {
        id: 'section9',
        title: '9. Planning et Budget',
        fields: [
            {
                id: 'date_debut',
                label: 'Date de début souhaitée',
                type: 'date',
                hint: 'Quand souhaitez-vous démarrer le projet ?'
            },
            {
                id: 'date_livraison_mvp',
                label: 'Date de livraison MVP',
                type: 'date',
                hint: 'Quand la première version doit-elle être livrée ?'
            },
            {
                id: 'date_livraison_finale',
                label: 'Date de livraison finale',
                type: 'date'
            },
            {
                id: 'duree_estimee',
                label: 'Durée estimée du projet',
                type: 'text',
                placeholder: 'Ex: 3 mois',
                hint: 'Quelle est la durée totale prévue ?'
            },
            {
                id: 'budget_developpement',
                label: 'Budget développement',
                type: 'text',
                placeholder: 'Ex: 10 000€'
            },
            {
                id: 'budget_hebergement',
                label: 'Budget hébergement annuel',
                type: 'text',
                placeholder: 'Ex: 500€/an'
            },
            {
                id: 'budget_maintenance',
                label: 'Budget maintenance annuel',
                type: 'text',
                placeholder: 'Ex: 2 000€/an'
            },
            {
                id: 'equipe_projet',
                label: 'Équipe projet',
                type: 'textarea',
                placeholder: 'Développeurs, designers, chefs de projet...',
                hint: 'Qui travaillera sur le projet ?'
            },
            {
                id: 'risques_identifies',
                label: 'Risques identifiés',
                type: 'textarea',
                placeholder: 'Listez les risques potentiels du projet...',
                hint: 'Quels sont les obstacles prévisibles ?'
            },
            {
                id: 'plan_mitigation',
                label: 'Plan de mitigation des risques',
                type: 'textarea',
                placeholder: 'Comment gérer ces risques ?'
            },
            {
                id: 'support_post_livraison',
                label: 'Support post-livraison',
                type: 'radio',
                options: ['Oui', 'Non', 'À définir']
            },
            {
                id: 'duree_garantie',
                label: 'Durée de garantie',
                type: 'text',
                placeholder: 'Ex: 6 mois',
                hint: 'Période pendant laquelle les bugs sont corrigés gratuitement'
            },
            {
                id: 'formation_utilisateurs',
                label: 'Formation des utilisateurs',
                type: 'radio',
                options: ['Oui', 'Non', 'Documentation uniquement']
            }
        ]
    }
];

/**
 * Configuration générale de l'application
 */
export const appConfig = {
    appName: 'Générateur de Cahier des Charges',
    version: '1.0.0',
    storageKey: 'cahier_charges_data',
    autoSaveDelay: 2000, // Délai en ms avant sauvegarde auto
    pdfFileName: 'cahier_des_charges.pdf'
};

/**
 * Messages de l'application
 */
export const messages = {
    saveSuccess: '✅ Sauvegarde réussie !',
    saveError: '❌ Erreur lors de la sauvegarde',
    loadSuccess: '✅ Données chargées !',
    loadError: '❌ Aucune donnée sauvegardée',
    exportSuccess: '✅ PDF exporté !',
    exportError: '❌ Erreur lors de l\'export PDF',
    validationError: '⚠️ Veuillez remplir les champs obligatoires'
};