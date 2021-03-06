/**
 * Created by marcoslopez7 on 2/1/17.
 */
(function () {
    'use strict';
    angular.module('starterApp')
        .factory('portaFactory', function () {
            return {
                data: function () {
                    var areas = [
                        {
                            'title': 'Redes',
                            'img': '/img/icons/redes.png',
                            'list': [
                                'Soluciones con OPC específicos',
                                'Configuración de redes WAN',
                                'Configuración de redes LAN',
                                'Seguridad en redes'
                            ]
                        },
                        {
                            'title': 'Desarrollo Web',
                            'img': '/img/icons/web.png',
                            'list': [
                                'Sistemas Web (WebApps)',
                                'Landing Page',
                                'Ecommerce',
                                'Blogs'
                            ]
                        },
                        {
                            'title': 'Desarrollo de Aplicaciones Móviles',
                            'img': '/img/icons/mobile.png',
                            'list': [
                                'Android',
                                'iOS',
                                'Aplicaciones Híbridas'
                            ]
                        },
                        {
                            'title': 'Ingeniería de Software',
                            'img': '/img/icons/enge.png',
                            'list': [
                                'Gestión de Proyectos de desarrollo de Software',
                                'Calidad y Pruebas de Software',
                                'Ciclo de vida del software',
                                'Mantenimiento del Software'
                            ]
                        },
                        {
                            'title': 'Dirección y Gestión de Proyectos',
                            'img': '/img/icons/pm.png',
                            'list': [
                                'Planificación',
                                'Organización',
                                'Seguimiento',
                                'Control'
                            ]
                        },
                        {
                            'title': 'Drones',
                            'img': '/img/icons/dron.png',
                            'list': [
                                'Supervisión',
                                'Fumigación',
                                'Mapeo',
                                'Diseño y Construcción de Drones'
                            ]
                        },
                        {
                            'title': 'Robótica',
                            'img': '/img/icons/robot.png',
                            'list': [
                                'Construcción de mini-sumos',
                                'Construcción de radio control',
                                'Desarrollo de soluciones con robots',
                                'Construcción de máquinas'
                            ]
                        },
                        {
                            'title': 'Prototipado Escaneado 3D',
                            'img': '/img/icons/3d.png',
                            'list': [
                                'Impresión 3D',
                                'Prototipado de Escaneo 3D',
                                'Diseño Asistido por Computadora (CAD)',
                                'Ingeniería Asistida por Computadora (CAE)',
                                'Manufactura Asistida por Computadora (CAM)'
                            ]
                        },
                        {
                            'title': 'Automatización y Control',
                            'img': '/img/icons/control.png',
                            'list': [
                                'Automatización con PLC',
                                'Automatización con FPGA',
                                'Soluciones con Internet de las Cosas (IoT)'
                            ]
                        },
                        {
                            'title': 'Energía',
                            'img': '/img/icons/energy.png',
                            'list': [
                                'Soluciones de Generación',
                                'Soluciones de Ahorro',
                                'Desarrollo Sustentable'
                            ]
                        },
                        {
                            'title': 'Casas Inteligentes',
                            'img': '/img/icons/home.png',
                            'list': [
                                'Supervisión y Seguridad',
                                'Configuración de Red Interna',
                                'Soluciones de Automatización en el Hogar',
                                'Aplicaciones Móviles de Control para el Hogar',
                                'Energía Sustentable'
                            ]
                        },
                        {
                            'title': 'Desarrollo de Ingeniería',
                            'img': '/img/icons/inge.png',
                            'list': [
                                'Prototipado y Pruebas de Concepto',
                                'Soluciones Personalizadas',
                                'Sistemas de Entretenimiento',
                                'Venta de Ideas (Plan de Negocios)'
                            ]
                        }
                    ];

                    return areas;
                },
                area: function (i) {
                    return areas[i];
                }
            }
        })
})();