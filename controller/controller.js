var app = angular.module("cvApp", []);

app.controller("CvController", function ($scope) {
    $scope.header = "Jerome Demonchaux";
    $scope.sub_header = [
        {
            content: "5 rue de l'Orveau - 39100 Dole"
        },
        {
            content: "Jerome.demonchaux-at-gmail-dot-com"
        },
        {
            content: "06 70 51 10 58"
        },
        {
            content: "25 ans"
        }
    ];

    $scope.titre_cv = "Developpeur d'applications web et mobiles";

    $scope.projets = [
        {
            mois: "05",
            annee: "2016",
            categorie: "formation",
            titre: "Licence Administrateur des Systemes d'Informations (Bac +4)",
            soustitre: "Lycee Pasteur Mont-Roland",
            lieu: "Dole 39100"
        },
        {
            "mois": "11",
            "annee": "2015",
            "categorie": "pro",
            "titre": "Intranet de gestion des habilitations",
            "soustitre": "CAF de la Haute-Saone",
            "lieu": "Vesoul 70000",
            "description": "Dematerialisation du processus d'habilitation des agents CAF",
            "competences": [

                {
                    categorie: "Technique",
                    items: [
                        {content: "PHP7"},
                        {content: "Framework CodeIgniter"},
                        {content: "Material Design"}
                    ]
                },
                {
                    categorie: "Genie-Logiciel",
                    items: [
                        {content: "Business Modeling"},
                        {content: "Diagramme de use case"},
                        {content: "Diagramme de classe"}
                    ]
                },
                {
                    categorie: "Gestion de Projet",
                    items: [
                        {content: "Iteratif & incremental"},
                        {content: "Livraison par lot"},
                        {content: "Animation de reunion"}
                    ]
                }
            ]
        },
        {
            "mois": "06",
            "annee": "2015",
            "categorie": "formation",
            "titre": 'Projet "Semaine SCRUM"',
            "soustitre": "Lycee Pasteur Mont-Roland",
            "lieu": "Dole 39100",
            "description": "Partiel de programmation - semaine methode SCRUM",
            "competences": [

                {
                    categorie: "Front-end",
                    items: [
                        {content: "Java, modele MVC"},
                        {content: "Pattern DAO MongoDB"},
                        {content: "Application mobile Cordova / Ionic / AngularJS"}
                    ]
                },
                {
                    categorie: "Back-end",
                    items: [
                        {content: "Base de donnees MongoDB"},
                        {content: "Web Service REST nodeJS"},
                        {content: "Framework expressJS"}
                    ]
                },
                {
                    categorie: "Gestion de Projet",
                    items: [
                        {content: "Methodologie SCRUM"},
                        {content: "Gestion des stories"},
                        {content: "Gestion des priorites"},
                        {content: "Suivi de version : GIT"},
                    ]
                }
            ]
        },
        {
            "mois": "02",
            "annee": "2015",
            "categorie": "formation",
            "titre": 'Nuit du projet II.',
            "soustitre": "Lycee Saint-Joseph",
            "lieu": "Dijon 21000",
            "description": "Laureat du concours de creation d'application en 12heures",
            competences: [
                {
                    categorie: "Sujet",
                    items: [
                        {content: "Application de suivi de projet de la NDP"},
                        {content: "En equipe de 10"},
                        {content: "80 Participants"}
                    ]
                },
                {
                    categorie: "Technologies",
                    items: [
                        {content: "PHP, framework CodeIgniter"},
                        {content: "Bootstrap, JQuery, AJAX"},
                        {content: "SVN"},
                    ]
                }
            ]
        },
        {
            "mois": "06",
            "annee": "2014",
            "categorie": "formation",
            "titre": 'BTS Service Informatique aux Organisations',
            "soustitre": "Lycee Pasteur Mont-Roland",
            "lieu": "Dole 39100",
            "description": "Obtention du diplome"
        },
        {
            "mois": "05",
            "annee": "2014",
            "categorie": "pro",
            "titre": 'Logiciel SUGEST',
            "soustitre": "CAF de la Haute-Saone",
            "lieu": "Vesoul 70000",
            "description": "Logiciel de SUivi des droits d'acces bureautiques et GEStion des groupes d'utilisateurs Active Directory",
            "competences": [
                {
                    categorie: "Technique",
                    items: [
                        {content:"POO CSharp, .NET 4.5"},
                        {content:"Active Directory"},
                        {content:"Export excel / PDF"},
                    ]
                },
                {
                    categorie: "Fonctionnel",
                    items: [
                        {content:"Outil de gestion des audits de securite"},
                        {content:"Rapport des groupes AD, et leurs membres"},
                        {content:"Analyse des droits d'acces des agents sur le reseau"}
                    ]
                },
                {
                    categorie: "Genie-logiciel",
                    items: [
                        {content:"Aide a la definition des specifications"},
                        {content:"Developpement par prototypage"}
                    ]
                }
            ]
        },
        {
            "mois": "12",
            "annee": "2013",
            "categorie": "formation",
            "titre": 'Nuit du projet I.',
            "soustitre": "Lycee Pasteur Mont-Roland",
            "lieu": "Dole 39100",
            "description": "Laureat du concours de creation d'application en 12heures"
        },
        {
            "mois": "06",
            "annee": "2010",
            "categorie": "pro",
            "titre": 'Gestionnaire des applications locales',
            "soustitre": "CAF de la Haute-Saone",
            "lieu": "Vesoul 70000",
            "description": "Entree dans l'organisme"
        },
        {
            "mois": "05",
            "annee": "2010",
            "categorie": "formation",
            "titre": 'Technicien de Maintenance en Reseaux Informatiques',
            "soustitre": "GRETA70",
            "lieu": "Vesoul 70000",
            "description": "Obtention du titre"
        },

    ]

});