

window.onload = function() { 
  let retreivedFormData = JSON.parse(localStorage.getItem("formData"));
  Formio.createForm(document.getElementById('formio'),{

 
    "components": [
       {
    "display": "form",
    "settings": {},
    "components": [
        {
            "label": "Page Tab",
            "components": [
                {
                    "label": "Projektdaten",
                    "key": "projektdaten",
                    "components": [
                        {
                            "label": "Columns",
                            "columns": [
                                {
                                    "components": [
                                        {
                                            "label": "Montageort",
                                            "customClass": "instantquote-autocomplete",
                                            "tableView": true,
                                            "key": "plz",
                                            "attributes": {
                                                "data-elevation-target": "hoheUberDemMeeresspiegel"
                                            },
                                            "type": "textfield",
                                            "input": true,
                                            "hideOnChildrenHidden": false
                                        }
                                    ],
                                    "size": "md",
                                    "width": 6,
                                    "offset": 0,
                                    "push": 0,
                                    "pull": 0
                                },
                                {
                                    "components": [
                                        {
                                            "label": "Höhe über dem Meeresspiegel",
                                            "disabled": true,
                                            "tableView": false,
                                            "key": "hoheUberDemMeeresspiegel",
                                            "type": "textfield",
                                            "input": true,
                                            "hideOnChildrenHidden": false
                                        }
                                    ],
                                    "width": 6,
                                    "offset": 0,
                                    "push": 0,
                                    "pull": 0,
                                    "size": "md"
                                }
                            ],
                            "key": "columns8",
                            "type": "columns",
                            "input": false,
                            "tableView": false
                        },
                        {
                            "label": "Projektname oder Projektnummer:",
                            "tableView": true,
                            "key": "projektnameOderProjektnummer",
                            "properties": {
                                "order": "1"
                            },
                            "type": "textfield",
                            "input": true
                        },
                        {
                            "label": "Windowfilm 1 ",
                            "widget": "html5",
                            "customClass": "stop-autopopulate",
                            "tableView": true,
                            "dataSrc": "url",
                            "data": {
                                "values": [
                                    {
                                        "label": "",
                                        "value": ""
                                    }
                                ],
                                "url": "https://api.airtable.com/v0/appMBlCoKLYbeVnAE/Products?view=All%20products",
                                "headers": [
                                    {
                                        "key": "Authorization",
                                        "value": "Bearer keyLqLe23RE4VVJCn"
                                    }
                                ]
                            },
                            "template": "<span>{{ item.fields.Name }}</span>",
                            "selectThreshold": 0.3,
                            "validate": {
                                "onlyAvailableItems": false
                            },
                            "key": "windowfilm1",
                            "properties": {
                                "order": "3"
                            },
                            "type": "select",
                            "indexeddb": {
                                "filter": {}
                            },
                            "selectValues": "records",
                            "input": true,
                            "disableLimit": false,
                            "lazyLoad": false
                        },
                        {
                            "label": "Windowfilm 2",
                            "widget": "html5",
                            "customClass": "stop-autopopulate",
                            "tableView": true,
                            "dataSrc": "url",
                            "data": {
                                "values": [
                                    {
                                        "label": "",
                                        "value": ""
                                    }
                                ],
                                "url": "https://api.airtable.com/v0/appMBlCoKLYbeVnAE/Products?view=All%20products",
                                "headers": [
                                    {
                                        "key": "Authorization",
                                        "value": "Bearer keyLqLe23RE4VVJCn"
                                    }
                                ]
                            },
                            "template": "<span>{{ item.fields.Name }}</span>",
                            "selectThreshold": 0.3,
                            "validate": {
                                "onlyAvailableItems": false
                            },
                            "key": "windowfilm2",
                            "properties": {
                                "order": "4"
                            },
                            "type": "select",
                            "indexeddb": {
                                "filter": {}
                            },
                            "selectValues": "records",
                            "input": true,
                            "disableLimit": false,
                            "lazyLoad": false
                        },
                        {
                            "label": "Windowfilm 3",
                            "widget": "html5",
                            "customClass": "stop-autopopulate",
                            "tableView": true,
                            "dataSrc": "url",
                            "data": {
                                "values": [
                                    {
                                        "label": "",
                                        "value": ""
                                    }
                                ],
                                "url": "https://api.airtable.com/v0/appMBlCoKLYbeVnAE/Products?view=All%20products",
                                "headers": [
                                    {
                                        "key": "Authorization",
                                        "value": "Bearer keyLqLe23RE4VVJCn"
                                    }
                                ]
                            },
                            "template": "<span>{{ item.fields.Name }}</span>",
                            "selectThreshold": 0.3,
                            "validate": {
                                "onlyAvailableItems": false
                            },
                            "key": "windowfilm3",
                            "properties": {
                                "order": "5"
                            },
                            "type": "select",
                            "indexeddb": {
                                "filter": {}
                            },
                            "selectValues": "records",
                            "input": true,
                            "disableLimit": false,
                            "lazyLoad": false
                        }
                    ]
                },
                {
                    "label": "Fenster",
                    "key": "fenster",
                    "components": [
                        {
                            "label": "HTML",
                            "attrs": [
                                {
                                    "attr": "",
                                    "value": ""
                                }
                            ],
                            "content": "Sie können pro Anfrage bis zu 3 Folienarten analysieren, die Sie bei Projektdaten gewählt haben:",
                            "refreshOnChange": false,
                            "key": "html3",
                            "type": "htmlelement",
                            "input": false,
                            "tableView": false
                        },
                        {
                            "label": "Anzahl Gläser",
                            "delimiter": false,
                            "requireDecimal": false,
                            "key": "anzahlGlaser",
                            "properties": {
                                "order": "6"
                            },
                            "type": "number",
                            "input": true,
                            "tableView": false
                        },
                        {
                            "label": "Columns",
                            "columns": [
                                {
                                    "components": [
                                        {
                                            "label": "Glashöhe in mm",
                                            "delimiter": false,
                                            "requireDecimal": false,
                                            "key": "glashoheInMm",
                                            "properties": {
                                                "order": "7"
                                            },
                                            "type": "number",
                                            "input": true,
                                            "tableView": false,
                                            "hideOnChildrenHidden": false
                                        }
                                    ],
                                    "width": 6,
                                    "offset": 0,
                                    "push": 0,
                                    "pull": 0,
                                    "size": "md"
                                },
                                {
                                    "components": [
                                        {
                                            "label": "Glasbreite in mm ",
                                            "delimiter": false,
                                            "requireDecimal": false,
                                            "key": "glasbreiteInMm",
                                            "properties": {
                                                "order": "8"
                                            },
                                            "type": "number",
                                            "input": true,
                                            "tableView": false,
                                            "hideOnChildrenHidden": false
                                        }
                                    ],
                                    "width": 6,
                                    "offset": 0,
                                    "push": 0,
                                    "pull": 0,
                                    "size": "md"
                                }
                            ],
                            "key": "columns11",
                            "type": "columns",
                            "input": false,
                            "tableView": false
                        },
                        {
                            "label": "Exposition vom Glas ",
                            "widget": "html5",
                            "tableView": true,
                            "data": {
                                "values": [
                                    {
                                        "label": "Norden",
                                        "value": "norden"
                                    },
                                    {
                                        "label": "Nordosten",
                                        "value": "nordosten"
                                    },
                                    {
                                        "label": "Nordwesten",
                                        "value": "nordwesten"
                                    },
                                    {
                                        "label": "Osten",
                                        "value": "osten"
                                    },
                                    {
                                        "label": "Süden",
                                        "value": "suden"
                                    },
                                    {
                                        "label": "Südosten",
                                        "value": "sudosten"
                                    },
                                    {
                                        "label": "Südwesten",
                                        "value": "sudwesten"
                                    },
                                    {
                                        "label": "Westen",
                                        "value": "westen"
                                    }
                                ]
                            },
                            "selectThreshold": 0.3,
                            "key": "expositionVomGlas",
                            "properties": {
                                "order": "9"
                            },
                            "type": "select",
                            "indexeddb": {
                                "filter": {}
                            },
                            "input": true
                        },
                        {
                            "label": "Columns",
                            "columns": [
                                {
                                    "components": [
                                        {
                                            "label": "Fensterrahmen",
                                            "optionsLabelPosition": "right",
                                            "inline": false,
                                            "tableView": false,
                                            "values": [
                                                {
                                                    "label": "Holzrahmen",
                                                    "value": "holzrahmen",
                                                    "shortcut": ""
                                                },
                                                {
                                                    "label": "Metallrahmen",
                                                    "value": "metallrahmen",
                                                    "shortcut": ""
                                                },
                                                {
                                                    "label": "Kunststoffrahmen",
                                                    "value": "kunststoffrahmen",
                                                    "shortcut": ""
                                                }
                                            ],
                                            "key": "fensterrahmen",
                                            "properties": {
                                                "order": "10"
                                            },
                                            "attributes": {
                                                "data-has-images ": "true",
                                                "data-image-holzrahmen": "http://glass-stressanalyse.instantquote.ch/wp-content/uploads/2021/03/holzrahmen.png",
                                                "data-image-metallrahmen": "http://glass-stressanalyse.instantquote.ch/wp-content/uploads/2021/03/Metallrahmen.png",
                                                "data-image-kunststoffrahmen": "http://glass-stressanalyse.instantquote.ch/wp-content/uploads/2021/03/Kunststoffrahmen.png"
                                            },
                                            "type": "radio",
                                            "input": true,
                                            "hideOnChildrenHidden": false
                                        }
                                    ],
                                    "width": 6,
                                    "offset": 0,
                                    "push": 0,
                                    "pull": 0,
                                    "size": "md"
                                },
                                {
                                    "components": [],
                                    "width": 6,
                                    "offset": 0,
                                    "push": 0,
                                    "pull": 0,
                                    "size": "md"
                                }
                            ],
                            "key": "columns7",
                            "type": "columns",
                            "input": false,
                            "tableView": false
                        }
                    ]
                },
                {
                    "label": "Verglasungsart",
                    "key": "verglasungsart",
                    "components": [
                        {
                            "label": "Columns",
                            "columns": [
                                {
                                    "components": [
                                        {
                                            "label": "Verglasungsart",
                                            "optionsLabelPosition": "right",
                                            "inline": false,
                                            "tableView": false,
                                            "values": [
                                                {
                                                    "label": "1-fach Verglasung",
                                                    "value": "1fachverglasung",
                                                    "shortcut": ""
                                                },
                                                {
                                                    "label": "2-fach Verglasung",
                                                    "value": "2fachverglasung",
                                                    "shortcut": ""
                                                },
                                                {
                                                    "label": "3-fach  Verglasung",
                                                    "value": "3fachverglasung",
                                                    "shortcut": ""
                                                }
                                            ],
                                            "key": "verglasungsart1",
                                            "properties": {
                                                "order": "11"
                                            },
                                            "attributes": {
                                                "data-has-images ": "true",
                                                "data-image-2FachVerglasung": "https://glass-stressanalyse.instantquote.ch/wp-content/uploads/2021/03/2-fach-Verglasung-2.png",
                                                "data-image-3FachVerglasung": "https://glass-stressanalyse.instantquote.ch/wp-content/uploads/2021/03/3-fach-Verglasung-2.png",
                                                "data-image-1FachVerglasung": "https://glass-stressanalyse.instantquote.ch/wp-content/uploads/2021/03/1-fach-Verglasung-2.png"
                                            },
                                            "type": "radio",
                                            "input": true,
                                            "hideOnChildrenHidden": false
                                        },
                                        {
                                            "label": "1fachverglasung",
                                            "key": "Fachverglasung2",
                                            "conditional": {
                                                "show": true,
                                                "when": "verglasungsart1",
                                                "eq": "1fachverglasung"
                                            },
                                            "type": "well",
                                            "input": false,
                                            "tableView": false,
                                            "hideOnChildrenHidden": false,
                                            "components": [
                                                {
                                                    "label": "HTML",
                                                    "tag": "div",
                                                    "className": "spacer-small",
                                                    "attrs": [
                                                        {
                                                            "attr": "",
                                                            "value": ""
                                                        }
                                                    ],
                                                    "refreshOnChange": false,
                                                    "key": "html5",
                                                    "type": "htmlelement",
                                                    "input": false,
                                                    "tableView": false
                                                },
                                                {
                                                    "label": "Columns",
                                                    "columns": [
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Glasstärke - innen",
                                                                    "delimiter": false,
                                                                    "requireDecimal": false,
                                                                    "inputFormat": "plain",
                                                                    "key": "glasstarkeInnen5",
                                                                    "attributes": {
                                                                        "min": "1",
                                                                        "max": "20",
                                                                        "data-range-unit ": "mm",
                                                                        "step": "0.5"
                                                                    },
                                                                    "type": "range",
                                                                    "input": true,
                                                                    "tableView": false,
                                                                    "defaultValue": 0.5,
                                                                    "hideOnChildrenHidden": false
                                                                }
                                                            ],
                                                            "width": 6,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "size": "md"
                                                        },
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Glasart - innen",
                                                                    "widget": "html5",
                                                                    "tableView": true,
                                                                    "data": {
                                                                        "values": [
                                                                            {
                                                                                "label": "ESG",
                                                                                "value": "esg"
                                                                            },
                                                                            {
                                                                                "label": "VSG",
                                                                                "value": "vsg"
                                                                            },
                                                                            {
                                                                                "label": "TVG",
                                                                                "value": "tvg"
                                                                            },
                                                                            {
                                                                                "label": "Float",
                                                                                "value": "float"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "selectThreshold": 0.3,
                                                                    "key": "glasartInnen",
                                                                    "properties": {
                                                                        "order": "13"
                                                                    },
                                                                    "type": "select",
                                                                    "indexeddb": {
                                                                        "filter": {}
                                                                    },
                                                                    "input": true,
                                                                    "hideOnChildrenHidden": false
                                                                }
                                                            ],
                                                            "width": 6,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "size": "md"
                                                        }
                                                    ],
                                                    "key": "columns1",
                                                    "conditional": {
                                                        "show": true,
                                                        "when": "verglasungsart1",
                                                        "eq": "1fachverglasung"
                                                    },
                                                    "type": "columns",
                                                    "input": false,
                                                    "tableView": false
                                                }
                                            ]
                                        },
                                        {
                                            "label": "3fachverglasung",
                                            "key": "Fachverglasung1",
                                            "conditional": {
                                                "show": true,
                                                "when": "verglasungsart1",
                                                "eq": "2fachverglasung"
                                            },
                                            "type": "well",
                                            "input": false,
                                            "tableView": false,
                                            "hideOnChildrenHidden": false,
                                            "components": [
                                                {
                                                    "label": "HTML",
                                                    "tag": "div",
                                                    "className": "spacer-small",
                                                    "attrs": [
                                                        {
                                                            "attr": "",
                                                            "value": ""
                                                        }
                                                    ],
                                                    "refreshOnChange": false,
                                                    "key": "html6",
                                                    "type": "htmlelement",
                                                    "input": false,
                                                    "tableView": false
                                                },
                                                {
                                                    "label": "Columns",
                                                    "columns": [
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Glasstärke - innen",
                                                                    "delimiter": false,
                                                                    "requireDecimal": false,
                                                                    "inputFormat": "plain",
                                                                    "key": "glasstarkeInnen7",
                                                                    "attributes": {
                                                                        "min": "1",
                                                                        "max": "20",
                                                                        "data-range-unit ": "mm",
                                                                        "step": "0.5"
                                                                    },
                                                                    "type": "range",
                                                                    "input": true,
                                                                    "tableView": false,
                                                                    "defaultValue": 0.5,
                                                                    "hideOnChildrenHidden": false
                                                                }
                                                            ],
                                                            "width": 4,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "size": "md"
                                                        },
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Glasart - innen",
                                                                    "widget": "html5",
                                                                    "tableView": true,
                                                                    "data": {
                                                                        "values": [
                                                                            {
                                                                                "label": "ESG",
                                                                                "value": "esg"
                                                                            },
                                                                            {
                                                                                "label": "VSG",
                                                                                "value": "vsg"
                                                                            },
                                                                            {
                                                                                "label": "TVG",
                                                                                "value": "tvg"
                                                                            },
                                                                            {
                                                                                "label": "Float",
                                                                                "value": "float"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "selectThreshold": 0.3,
                                                                    "key": "glasartInnen3",
                                                                    "properties": {
                                                                        "order": "13"
                                                                    },
                                                                    "type": "select",
                                                                    "indexeddb": {
                                                                        "filter": {}
                                                                    },
                                                                    "input": true,
                                                                    "hideOnChildrenHidden": false
                                                                }
                                                            ],
                                                            "width": 4,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "size": "md"
                                                        },
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Beschichtung",
                                                                    "widget": "html5",
                                                                    "tableView": true,
                                                                    "data": {
                                                                        "values": [
                                                                            {
                                                                                "label": "Hitzeschutzbedampfung",
                                                                                "value": "hitzeschutzbedampfung"
                                                                            },
                                                                            {
                                                                                "label": "Low e-Bedampfung",
                                                                                "value": "lowEBedampfung"
                                                                            },
                                                                            {
                                                                                "label": "Keine",
                                                                                "value": "keine"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "selectThreshold": 0.3,
                                                                    "validate": {
                                                                        "onlyAvailableItems": false
                                                                    },
                                                                    "key": "hitzeschutzbedampfung1",
                                                                    "type": "select",
                                                                    "indexeddb": {
                                                                        "filter": {}
                                                                    },
                                                                    "input": true,
                                                                    "hideOnChildrenHidden": false
                                                                }
                                                            ],
                                                            "size": "md",
                                                            "width": 4,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0
                                                        }
                                                    ],
                                                    "key": "columns2",
                                                    "type": "columns",
                                                    "input": false,
                                                    "tableView": false
                                                },
                                                {
                                                    "label": "Columns",
                                                    "columns": [
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Glasstärke - aussen",
                                                                    "defaultValue": 0,
                                                                    "delimiter": false,
                                                                    "requireDecimal": false,
                                                                    "key": "glasstarkeInnen8",
                                                                    "attributes": {
                                                                        "min": "1",
                                                                        "max": "20",
                                                                        "data-range-unit ": "mm",
                                                                        "step": "0.5"
                                                                    },
                                                                    "type": "range",
                                                                    "inputFormat": "plain",
                                                                    "input": true,
                                                                    "tableView": false,
                                                                    "hideOnChildrenHidden": false
                                                                }
                                                            ],
                                                            "width": 4,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "size": "md"
                                                        },
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Glasart - aussen",
                                                                    "widget": "html5",
                                                                    "tableView": true,
                                                                    "data": {
                                                                        "values": [
                                                                            {
                                                                                "label": "ESG",
                                                                                "value": "esg"
                                                                            },
                                                                            {
                                                                                "label": "VSG",
                                                                                "value": "vsg"
                                                                            },
                                                                            {
                                                                                "label": "TVG",
                                                                                "value": "tvg"
                                                                            },
                                                                            {
                                                                                "label": "Float",
                                                                                "value": "float"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "selectThreshold": 0.3,
                                                                    "validate": {
                                                                        "onlyAvailableItems": false
                                                                    },
                                                                    "key": "glasartInnen4",
                                                                    "properties": {
                                                                        "order": "13"
                                                                    },
                                                                    "type": "select",
                                                                    "indexeddb": {
                                                                        "filter": {}
                                                                    },
                                                                    "input": true,
                                                                    "hideOnChildrenHidden": false
                                                                }
                                                            ],
                                                            "width": 4,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "size": "md"
                                                        },
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Beschichtung",
                                                                    "widget": "html5",
                                                                    "tableView": true,
                                                                    "data": {
                                                                        "values": [
                                                                            {
                                                                                "label": "Hitzeschutzbedampfung",
                                                                                "value": "hitzeschutzbedampfung"
                                                                            },
                                                                            {
                                                                                "label": "Low e-Bedampfung",
                                                                                "value": "lowEBedampfung"
                                                                            },
                                                                            {
                                                                                "label": "Keine",
                                                                                "value": "keine"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "selectThreshold": 0.3,
                                                                    "validate": {
                                                                        "onlyAvailableItems": false
                                                                    },
                                                                    "key": "hitzeschutzbedampfung2",
                                                                    "type": "select",
                                                                    "indexeddb": {
                                                                        "filter": {}
                                                                    },
                                                                    "input": true,
                                                                    "hideOnChildrenHidden": false
                                                                }
                                                            ],
                                                            "size": "md",
                                                            "width": 4,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0
                                                        }
                                                    ],
                                                    "key": "columns3",
                                                    "type": "columns",
                                                    "input": false,
                                                    "tableView": false
                                                }
                                            ]
                                        },
                                        {
                                            "label": "3fachverglasung",
                                            "key": "Fachverglasung",
                                            "conditional": {
                                                "show": true,
                                                "when": "verglasungsart1",
                                                "eq": "3fachverglasung"
                                            },
                                            "type": "well",
                                            "input": false,
                                            "tableView": false,
                                            "hideOnChildrenHidden": false,
                                            "components": [
                                                {
                                                    "label": "HTML",
                                                    "tag": "div",
                                                    "className": "spacer-small",
                                                    "attrs": [
                                                        {
                                                            "attr": "",
                                                            "value": ""
                                                        }
                                                    ],
                                                    "refreshOnChange": false,
                                                    "key": "html7",
                                                    "type": "htmlelement",
                                                    "input": false,
                                                    "tableView": false
                                                },
                                                {
                                                    "label": "Columns",
                                                    "columns": [
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Glasstärke - innen",
                                                                    "defaultValue": 0.5,
                                                                    "delimiter": false,
                                                                    "requireDecimal": false,
                                                                    "inputFormat": "plain",
                                                                    "key": "glasstarkeInnen9",
                                                                    "attributes": {
                                                                        "min": "1",
                                                                        "max": "20",
                                                                        "data-range-unit ": "mm",
                                                                        "step": "0.5"
                                                                    },
                                                                    "type": "range",
                                                                    "input": true,
                                                                    "tableView": false,
                                                                    "hideOnChildrenHidden": false
                                                                }
                                                            ],
                                                            "width": 4,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "size": "md"
                                                        },
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Glasart - innen",
                                                                    "widget": "html5",
                                                                    "tableView": true,
                                                                    "data": {
                                                                        "values": [
                                                                            {
                                                                                "label": "ESG",
                                                                                "value": "esg"
                                                                            },
                                                                            {
                                                                                "label": "VSG",
                                                                                "value": "vsg"
                                                                            },
                                                                            {
                                                                                "label": "TVG",
                                                                                "value": "tvg"
                                                                            },
                                                                            {
                                                                                "label": "Float",
                                                                                "value": "float"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "selectThreshold": 0.3,
                                                                    "key": "glasartInnen5",
                                                                    "properties": {
                                                                        "order": "13"
                                                                    },
                                                                    "type": "select",
                                                                    "indexeddb": {
                                                                        "filter": {}
                                                                    },
                                                                    "input": true,
                                                                    "hideOnChildrenHidden": false
                                                                }
                                                            ],
                                                            "width": 4,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "size": "md"
                                                        },
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Beschichtung",
                                                                    "widget": "html5",
                                                                    "tableView": true,
                                                                    "data": {
                                                                        "values": [
                                                                            {
                                                                                "label": "Hitzeschutzbedampfung",
                                                                                "value": "hitzeschutzbedampfung"
                                                                            },
                                                                            {
                                                                                "label": "Low e-Bedampfung",
                                                                                "value": "lowEBedampfung"
                                                                            },
                                                                            {
                                                                                "label": "Keine",
                                                                                "value": "keine"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "selectThreshold": 0.3,
                                                                    "validate": {
                                                                        "onlyAvailableItems": false
                                                                    },
                                                                    "key": "hitzeschutzbedampfung3",
                                                                    "type": "select",
                                                                    "indexeddb": {
                                                                        "filter": {}
                                                                    },
                                                                    "input": true,
                                                                    "hideOnChildrenHidden": false
                                                                }
                                                            ],
                                                            "size": "md",
                                                            "width": 4,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0
                                                        }
                                                    ],
                                                    "key": "columns4",
                                                    "type": "columns",
                                                    "input": false,
                                                    "tableView": false
                                                },
                                                {
                                                    "label": "Columns",
                                                    "columns": [
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Glasstärke - mittig",
                                                                    "defaultValue": 0,
                                                                    "delimiter": false,
                                                                    "requireDecimal": false,
                                                                    "inputFormat": "plain",
                                                                    "key": "glasstarkeInnen10",
                                                                    "attributes": {
                                                                        "min": "1",
                                                                        "max": "20",
                                                                        "data-range-unit ": "mm",
                                                                        "step": "0.5"
                                                                    },
                                                                    "type": "range",
                                                                    "input": true,
                                                                    "tableView": false,
                                                                    "hideOnChildrenHidden": false
                                                                }
                                                            ],
                                                            "width": 4,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "size": "md"
                                                        },
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Glasart - mittig",
                                                                    "widget": "html5",
                                                                    "tableView": true,
                                                                    "data": {
                                                                        "values": [
                                                                            {
                                                                                "label": "ESG",
                                                                                "value": "esg"
                                                                            },
                                                                            {
                                                                                "label": "VSG",
                                                                                "value": "vsg"
                                                                            },
                                                                            {
                                                                                "label": "TVG",
                                                                                "value": "tvg"
                                                                            },
                                                                            {
                                                                                "label": "Float",
                                                                                "value": "float"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "selectThreshold": 0.3,
                                                                    "key": "glasartInnen6",
                                                                    "properties": {
                                                                        "order": "13"
                                                                    },
                                                                    "type": "select",
                                                                    "indexeddb": {
                                                                        "filter": {}
                                                                    },
                                                                    "input": true,
                                                                    "hideOnChildrenHidden": false
                                                                }
                                                            ],
                                                            "width": 4,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "size": "md"
                                                        },
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Beschichtung aussen",
                                                                    "widget": "html5",
                                                                    "tableView": true,
                                                                    "data": {
                                                                        "values": [
                                                                            {
                                                                                "label": "Hitzeschutzbedampfung",
                                                                                "value": "hitzeschutzbedampfung"
                                                                            },
                                                                            {
                                                                                "label": "Low e-Bedampfung",
                                                                                "value": "lowEBedampfung"
                                                                            },
                                                                            {
                                                                                "label": "Keine",
                                                                                "value": "keine"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "selectThreshold": 0.3,
                                                                    "validate": {
                                                                        "onlyAvailableItems": false
                                                                    },
                                                                    "key": "hitzeschutzbedampfung4",
                                                                    "type": "select",
                                                                    "indexeddb": {
                                                                        "filter": {}
                                                                    },
                                                                    "input": true,
                                                                    "hideOnChildrenHidden": false
                                                                }
                                                            ],
                                                            "size": "md",
                                                            "width": 4,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0
                                                        }
                                                    ],
                                                    "key": "columns5",
                                                    "type": "columns",
                                                    "input": false,
                                                    "tableView": false
                                                },
                                                {
                                                    "label": "Columns",
                                                    "columns": [
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Glasstärke - aussen",
                                                                    "defaultValue": 0,
                                                                    "delimiter": false,
                                                                    "requireDecimal": false,
                                                                    "inputFormat": "plain",
                                                                    "key": "glasstarkeInnen11",
                                                                    "attributes": {
                                                                        "min": "1",
                                                                        "max": "20",
                                                                        "data-range-unit ": "mm",
                                                                        "step": "0.5"
                                                                    },
                                                                    "type": "range",
                                                                    "input": true,
                                                                    "tableView": false,
                                                                    "hideOnChildrenHidden": false
                                                                }
                                                            ],
                                                            "width": 4,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "size": "md"
                                                        },
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Glasart - aussen",
                                                                    "widget": "html5",
                                                                    "tableView": true,
                                                                    "data": {
                                                                        "values": [
                                                                            {
                                                                                "label": "ESG",
                                                                                "value": "esg"
                                                                            },
                                                                            {
                                                                                "label": "VSG",
                                                                                "value": "vsg"
                                                                            },
                                                                            {
                                                                                "label": "TVG",
                                                                                "value": "tvg"
                                                                            },
                                                                            {
                                                                                "label": "Float",
                                                                                "value": "float"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "selectThreshold": 0.3,
                                                                    "key": "glasartInnen7",
                                                                    "properties": {
                                                                        "order": "13"
                                                                    },
                                                                    "type": "select",
                                                                    "indexeddb": {
                                                                        "filter": {}
                                                                    },
                                                                    "input": true,
                                                                    "hideOnChildrenHidden": false
                                                                }
                                                            ],
                                                            "width": 4,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "size": "md"
                                                        },
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Beschichtung",
                                                                    "widget": "html5",
                                                                    "tableView": true,
                                                                    "data": {
                                                                        "values": [
                                                                            {
                                                                                "label": "Hitzeschutzbedampfung",
                                                                                "value": "hitzeschutzbedampfung"
                                                                            },
                                                                            {
                                                                                "label": "Low e-Bedampfung",
                                                                                "value": "lowEBedampfung"
                                                                            },
                                                                            {
                                                                                "label": "Keine",
                                                                                "value": "keine"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "selectThreshold": 0.3,
                                                                    "validate": {
                                                                        "onlyAvailableItems": false
                                                                    },
                                                                    "key": "hitzeschutzbedampfung5",
                                                                    "type": "select",
                                                                    "indexeddb": {
                                                                        "filter": {}
                                                                    },
                                                                    "input": true,
                                                                    "hideOnChildrenHidden": false
                                                                }
                                                            ],
                                                            "size": "md",
                                                            "width": 4,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0
                                                        }
                                                    ],
                                                    "key": "columns6",
                                                    "type": "columns",
                                                    "input": false,
                                                    "tableView": false
                                                }
                                            ]
                                        }
                                    ],
                                    "width": 6,
                                    "offset": 0,
                                    "push": 0,
                                    "pull": 0,
                                    "size": "md"
                                },
                                {
                                    "components": [
                                        {
                                            "label": "1-fach-verglasung",
                                            "customClass": "glass-well-align-1",
                                            "key": "FachVerglasung",
                                            "conditional": {
                                                "show": true,
                                                "when": "verglasungsart1",
                                                "eq": "1fachverglasung"
                                            },
                                            "type": "well",
                                            "input": false,
                                            "tableView": false,
                                            "components": [
                                                {
                                                    "label": "HTML",
                                                    "attrs": [
                                                        {
                                                            "attr": "",
                                                            "value": ""
                                                        }
                                                    ],
                                                    "content": "<img src=\"http://glass-stressanalyse.instantquote.ch/wp-content/uploads/2021/03/1-fach-verglasung.png\">",
                                                    "refreshOnChange": false,
                                                    "key": "html",
                                                    "type": "htmlelement",
                                                    "input": false,
                                                    "tableView": false
                                                }
                                            ],
                                            "hideOnChildrenHidden": false
                                        },
                                        {
                                            "label": "2-fach-verglasung",
                                            "customClass": "glass-well-align-2",
                                            "key": "FachVerglasung1",
                                            "conditional": {
                                                "show": true,
                                                "when": "verglasungsart1",
                                                "eq": "2fachverglasung"
                                            },
                                            "type": "well",
                                            "input": false,
                                            "tableView": false,
                                            "components": [
                                                {
                                                    "label": "HTML",
                                                    "attrs": [
                                                        {
                                                            "attr": "",
                                                            "value": ""
                                                        }
                                                    ],
                                                    "content": "<img src=\"http://glass-stressanalyse.instantquote.ch/wp-content/uploads/2021/03/2-fach-verglasung.png\">",
                                                    "refreshOnChange": false,
                                                    "key": "html1",
                                                    "type": "htmlelement",
                                                    "input": false,
                                                    "tableView": false
                                                }
                                            ],
                                            "hideOnChildrenHidden": false
                                        },
                                        {
                                            "label": "3-fach-verglasung",
                                            "customClass": "glass-well-align-3",
                                            "key": "FachVerglasung2",
                                            "conditional": {
                                                "show": true,
                                                "when": "verglasungsart1",
                                                "eq": "3fachverglasung"
                                            },
                                            "type": "well",
                                            "input": false,
                                            "tableView": false,
                                            "components": [
                                                {
                                                    "label": "HTML",
                                                    "attrs": [
                                                        {
                                                            "attr": "",
                                                            "value": ""
                                                        }
                                                    ],
                                                    "content": "<img src=\"http://glass-stressanalyse.instantquote.ch/wp-content/uploads/2021/03/3-fach-verglasung.png\">",
                                                    "refreshOnChange": false,
                                                    "key": "html2",
                                                    "type": "htmlelement",
                                                    "input": false,
                                                    "tableView": false
                                                },
                                                {
                                                    "label": "Columns",
                                                    "columns": [
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "HTML",
                                                                    "tag": "div",
                                                                    "className": "spacer-medium",
                                                                    "attrs": [
                                                                        {
                                                                            "attr": "",
                                                                            "value": ""
                                                                        }
                                                                    ],
                                                                    "refreshOnChange": false,
                                                                    "key": "html8",
                                                                    "type": "htmlelement",
                                                                    "input": false,
                                                                    "tableView": false,
                                                                    "hideOnChildrenHidden": false
                                                                }
                                                            ],
                                                            "width": 4,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "size": "md"
                                                        },
                                                        {
                                                            "components": [],
                                                            "width": 4,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "size": "md"
                                                        },
                                                        {
                                                            "components": [],
                                                            "size": "md",
                                                            "width": 4,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0
                                                        }
                                                    ],
                                                    "key": "columns9",
                                                    "type": "columns",
                                                    "input": false,
                                                    "tableView": false
                                                },
                                                {
                                                    "label": "Columns",
                                                    "columns": [
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Beschichtung innen",
                                                                    "widget": "html5",
                                                                    "tableView": true,
                                                                    "data": {
                                                                        "values": [
                                                                            {
                                                                                "label": "Hitzeschutzbedampfung",
                                                                                "value": "hitzeschutzbedampfung"
                                                                            },
                                                                            {
                                                                                "label": "Low e-Bedampfung",
                                                                                "value": "lowEBedampfung"
                                                                            },
                                                                            {
                                                                                "label": "Keine",
                                                                                "value": "keine"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "selectThreshold": 0.3,
                                                                    "validate": {
                                                                        "onlyAvailableItems": false
                                                                    },
                                                                    "key": "hitzeschutzbedampfung6",
                                                                    "type": "select",
                                                                    "indexeddb": {
                                                                        "filter": {}
                                                                    },
                                                                    "input": true,
                                                                    "hideOnChildrenHidden": false
                                                                }
                                                            ],
                                                            "width": 4,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "size": "md"
                                                        },
                                                        {
                                                            "components": [],
                                                            "width": 4,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "size": "md"
                                                        },
                                                        {
                                                            "components": [],
                                                            "size": "md",
                                                            "width": 4,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0
                                                        }
                                                    ],
                                                    "key": "columns10",
                                                    "type": "columns",
                                                    "input": false,
                                                    "tableView": false
                                                }
                                            ],
                                            "hideOnChildrenHidden": false
                                        }
                                    ],
                                    "width": 6,
                                    "offset": 0,
                                    "push": 0,
                                    "pull": 0,
                                    "size": "md"
                                }
                            ],
                            "key": "columns",
                            "type": "columns",
                            "input": false,
                            "tableView": false
                        }
                    ]
                },
                {
                    "label": "Abschluss",
                    "key": "abschluss",
                    "components": [
                        {
                            "label": "HTML",
                            "attrs": [
                                {
                                    "attr": "",
                                    "value": ""
                                }
                            ],
                            "content": "<center>Bitte reichen Sie an dieser Stelle Fotos vom Gebäude ein. Wichtig: Die Bilder müssen im Dateiformat jpg hochgeladen werden.</center>",
                            "refreshOnChange": false,
                            "key": "html4",
                            "type": "htmlelement",
                            "input": false,
                            "tableView": false
                        },
                        {
                            "label": "file-holder",
                            "customClass": "file-holder",
                            "key": "fileHolder",
                            "type": "well",
                            "input": false,
                            "tableView": false,
                            "components": [
                                {
                                    "label": "Upload File",
                                    "customClass": "do-not-show-in-price-change first-file-upload",
                                    "hideLabel": true,
                                    "tableView": false,
                                    "storage": "base64",
                                    "image": true,
                                    "webcam": false,
                                    "fileTypes": [
                                        {
                                            "label": "",
                                            "value": ""
                                        }
                                    ],
                                    "filePattern": ".jpg,.jpeg",
                                    "fileMaxSize": "15MB",
                                    "multiple": true,
                                    "key": "uploadFile1",
                                    "type": "file",
                                    "input": true
                                }
                            ]
                        },
                        {
                            "label": "Bitte laden Sie das entsprechende Datenblatt hier hoch:",
                            "key": "verglasungsart2",
                            "conditional": {
                                "show": true,
                                "when": "verglasungsart1",
                                "eq": "3fachverglasung"
                            },
                            "type": "well",
                            "input": false,
                            "tableView": false,
                            "components": [
                                {
                                    "label": "HTML",
                                    "attrs": [
                                        {
                                            "attr": "",
                                            "value": ""
                                        }
                                    ],
                                    "content": "<center>Bitte laden Sie das entsprechende Datenblatt hier hoch:</center>",
                                    "refreshOnChange": false,
                                    "key": "html10",
                                    "type": "htmlelement",
                                    "input": false,
                                    "tableView": false
                                },
                                {
                                    "label": "Upload File",
                                    "customClass": "second-file-upload",
                                    "hideLabel": true,
                                    "tableView": false,
                                    "storage": "base64",
                                    "webcam": false,
                                    "fileTypes": [
                                        {
                                            "label": "",
                                            "value": ""
                                        }
                                    ],
                                    "filePattern": ".pdf",
                                    "fileMaxSize": "10MB",
                                    "multiple": true,
                                    "key": "uploadFile2",
                                    "type": "file",
                                    "input": true
                                }
                            ]
                        },
                         {
        "label": "Jetzt Glas-Stressanalyse einreichen",
        "className": "Jetzt-Glas-Stressanalyse-einreichen",
        "action": "event",
        "showValidations": false,
        "disableOnInvalid": true,
        "type": "button",
        "key": "submit",
        "input": true,
        "tableView": false,
        "event": "offerte-anfordern"
      }
                    ]
                }
            ],
            "customClass": "page-tabs",
            "type": "tabs",
            "key": "pageTab",
            "input": false,
            "tableView": false
        }
    ]
}
    ]

  })
  .then(function(form){
$('.nav-tabs.card-header-tabs .nav-item').click(function(){
  
      $(this).nextAll().removeClass('border-highlight');
      $(this).removeClass('border-highlight').prevAll().addClass('border-highlight');
 

    });
    const checkboxCustomImage = form.component.checkboxCustomImage;
    
    function RadioCheckboxesImage(pluginURL, checkboxCustomImage){
      const radioInputs = jQuery('input[type="radio"]');

      radioInputs.each(function(i, item) {

        const itemObj = jQuery(item);

        const hasImages = itemObj.data('has-images');
        if (!hasImages) {
          return;
        }

        const itemValue = itemObj.val();

        const imageUrl = itemObj.data(`image-${itemValue}`);

        const parentWrapper = itemObj.parents('.form-radio');
        const parentLabel = itemObj.parents('.form-check-label');

        parentWrapper.addClass('form-radio--has-images');
        parentLabel.addClass('form-check-label--radio-has-image');
        parentLabel.css('background-image', `url(${imageUrl})`);

        let checkboxIcon = document.createElement("div");
        checkboxIcon.className = "form-check-label--radio-has-image-custom-radio"; // set the CSS class
        if(checkboxCustomImage !== '' && checkboxCustomImage !== undefined){
          checkboxIcon.innerHTML = `<img src ="${checkboxCustomImage}">`;
        } else{
          checkboxIcon.innerHTML =`<img src ="https://cdn.shopify.com/s/files/1/0556/7148/8697/files/checkboxcustom.png?v=1624085000">`;
        }
        if(parentLabel.find('.form-check-label--radio-has-image-custom-radio').length < 1) {
          parentLabel.append(checkboxIcon);
        }

        //fix for formio not adding radio-selected class to selected items when they are displayed based on conditional logic on page reload
        const parentLabelContainer = parentLabel.parents('.form-check');
        if (itemObj.is(':checked')) {
          // const parentLabelContainer = parentLabel.parents('.form-check');
          parentLabelContainer.addClass('radio-selected');
        } else {
          parentLabelContainer.removeClass('radio-selected');
        }
      });

      const imageCheckboxes = jQuery('.checkboxes-image-row input[type="checkbox"]');
      //  console.log(imageCheckboxes);
      imageCheckboxes.each(function(i, item) {
        const itemObj = jQuery(item);

        const activationCheck = itemObj.data('checkbox-activated');
        if (activationCheck) {
          return;
        }

        const imageUrl = itemObj.data('image');


        const parentLabel = itemObj.parents('.form-check-label');

        parentLabel.addClass('form-check-label--checkbox-has-image');
        parentLabel.css('background-image', `url(${imageUrl})`)

        let checkboxIcon = document.createElement("div");
        checkboxIcon.className = "form-check-label--radio-has-image-custom-checkbox"; // set the CSS class
        if(checkboxCustomImage !== '' && checkboxCustomImage !== undefined){
          checkboxIcon.innerHTML = `<img src ="${checkboxCustomImage}">`;
        } else{
          checkboxIcon.innerHTML =`<img src ="https://cdn.shopify.com/s/files/1/0556/7148/8697/files/checkboxcustom.png?v=1624085000">`;
        }
        parentLabel.append(checkboxIcon);


        //timeout needed due to formio timings - with no timing values are not in the DOM yet
        setTimeout(function() {
          // const itemVal = itemObj.val();
          const isChecked = itemObj[0].checked;
          if (isChecked) {
            jQuery(checkboxIcon).addClass('checkbox-label-checked');
            jQuery(parentLabel).addClass('checkbox-label-checked');
          }
        }, 100);

        itemObj.change(function() {
          //  console.log('change function runs for:', this);
          jQuery(checkboxIcon).toggleClass('checkbox-label-checked');
          jQuery(parentLabel).toggleClass('checkbox-label-checked');

        });
        itemObj.data('checkbox-activated', true);
      });

      const imageCheckboxesSmall = jQuery('.checkboxes-image-row-small input[type="checkbox"]');

      imageCheckboxesSmall.each(function(i, item) {
        const itemObj = jQuery(item);

        const activationCheck = itemObj.data('checkbox-activated');
        if (activationCheck) {
          return;
        }

        const imageUrl = itemObj.data('image-small');

        const parentLabel = itemObj.parents('.form-check-label');
        const labelSpan = parentLabel.find('span');
        labelSpan.before(`<div class="form-check-label-image-small" style="background-image: url(${imageUrl});"></div>`);
        parentLabel.addClass('form-check-label--checkbox-has-image-small');
        // parentLabel.css('background-image', `url(${imageUrl})`)

        //timeout needed due to formio timings - with no timing values are not in the DOM yet
        setTimeout(function() {
          //  const itemVal = itemObj.val();
          const isChecked = itemObj[0].checked;
          if (isChecked) {
            parentLabel.addClass('checkbox-label-checked');
          }
        }, 10)

        itemObj.change(function() {
          parentLabel.toggleClass('checkbox-label-checked');
        });
        parentLabel.addClass('checkbox-design-activated');
        itemObj.data('checkbox-activated', true);
      });

    }
    RadioCheckboxesImage( checkboxCustomImage);

    form.on('change', function(event) {
      retreivedFormData = event.data;
      localStorage.setItem('formData', JSON.stringify(retreivedFormData));


      function onChangeEventFunction(form){
        window.onChangeEventFunction = function () {
          return form;
        }
      }

      let jsondata = event.changed.component;
      

      const checkboxCustomImage = jsondata.checkboxCustomImage;
      function RadioCheckboxesImage(pluginURL, checkboxCustomImage){
        const radioInputs = jQuery('input[type="radio"]');

        radioInputs.each(function(i, item) {

          const itemObj = jQuery(item);

          const hasImages = itemObj.data('has-images');
          if (!hasImages) {
            return;
          }

          const itemValue = itemObj.val();

          const imageUrl = itemObj.data(`image-${itemValue}`);

          const parentWrapper = itemObj.parents('.form-radio');
          const parentLabel = itemObj.parents('.form-check-label');

          parentWrapper.addClass('form-radio--has-images');
          parentLabel.addClass('form-check-label--radio-has-image');
          parentLabel.css('background-image', `url(${imageUrl})`);

          let checkboxIcon = document.createElement("div");
          checkboxIcon.className = "form-check-label--radio-has-image-custom-radio"; // set the CSS class
          if(checkboxCustomImage !== '' && checkboxCustomImage !== undefined){
            checkboxIcon.innerHTML = `<img src ="${checkboxCustomImage}">`;
          } else{
            checkboxIcon.innerHTML =`<img src ="https://cdn.shopify.com/s/files/1/0556/7148/8697/files/checkboxcustom.png?v=1624085000">`;
          }
          if(parentLabel.find('.form-check-label--radio-has-image-custom-radio').length < 1) {
            parentLabel.append(checkboxIcon);
          }

          //fix for formio not adding radio-selected class to selected items when they are displayed based on conditional logic on page reload
          const parentLabelContainer = parentLabel.parents('.form-check');
          if (itemObj.is(':checked')) {
            // const parentLabelContainer = parentLabel.parents('.form-check');
            parentLabelContainer.addClass('radio-selected');
          } else {
            parentLabelContainer.removeClass('radio-selected');
          }
        });

        const imageCheckboxes = jQuery('.checkboxes-image-row input[type="checkbox"]');
        //  console.log(imageCheckboxes);
        imageCheckboxes.each(function(i, item) {
          const itemObj = jQuery(item);

          const activationCheck = itemObj.data('checkbox-activated');
          if (activationCheck) {
            return;
          }

          const imageUrl = itemObj.data('image');


          const parentLabel = itemObj.parents('.form-check-label');

          parentLabel.addClass('form-check-label--checkbox-has-image');
          parentLabel.css('background-image', `url(${imageUrl})`)

          let checkboxIcon = document.createElement("div");
          checkboxIcon.className = "form-check-label--radio-has-image-custom-checkbox"; // set the CSS class
          if(checkboxCustomImage !== '' && checkboxCustomImage !== undefined){
            checkboxIcon.innerHTML = `<img src ="${checkboxCustomImage}">`;
          } else{
            checkboxIcon.innerHTML =`<img src ="https://cdn.shopify.com/s/files/1/0556/7148/8697/files/checkboxcustom.png?v=1624085000">`;
          }
          parentLabel.append(checkboxIcon);


          //timeout needed due to formio timings - with no timing values are not in the DOM yet
          setTimeout(function() {
            // const itemVal = itemObj.val();
            const isChecked = itemObj[0].checked;
            if (isChecked) {
              jQuery(checkboxIcon).addClass('checkbox-label-checked');
              jQuery(parentLabel).addClass('checkbox-label-checked');
            }
          }, 100);

          itemObj.change(function() {
            //  console.log('change function runs for:', this);
            jQuery(checkboxIcon).toggleClass('checkbox-label-checked');
            jQuery(parentLabel).toggleClass('checkbox-label-checked');

          });
          itemObj.data('checkbox-activated', true);
        });

        const imageCheckboxesSmall = jQuery('.checkboxes-image-row-small input[type="checkbox"]');

        imageCheckboxesSmall.each(function(i, item) {
          const itemObj = jQuery(item);

          const activationCheck = itemObj.data('checkbox-activated');
          if (activationCheck) {
            return;
          }

          const imageUrl = itemObj.data('image-small');

          const parentLabel = itemObj.parents('.form-check-label');
          const labelSpan = parentLabel.find('span');
          labelSpan.before(`<div class="form-check-label-image-small" style="background-image: url(${imageUrl});"></div>`);
          parentLabel.addClass('form-check-label--checkbox-has-image-small');
          // parentLabel.css('background-image', `url(${imageUrl})`)

          //timeout needed due to formio timings - with no timing values are not in the DOM yet
          setTimeout(function() {
            //  const itemVal = itemObj.val();
            const isChecked = itemObj[0].checked;
            if (isChecked) {
              parentLabel.addClass('checkbox-label-checked');
            }
          }, 10)

          itemObj.change(function() {
            parentLabel.toggleClass('checkbox-label-checked');
          });
          parentLabel.addClass('checkbox-design-activated');
          itemObj.data('checkbox-activated', true);
        });

      }
      RadioCheckboxesImage( checkboxCustomImage);


      // Slider button width in px
      const tw = 40,
            halfTw = tw / 2,
            halfPoint = 5;

      /**
 * Get array of coordinates
 * @param context
 * @param w
 * @param tw
 * @param step
 * @param diff
 * @param min
 * @returns {{val: *, min: number, tw: *, max: number, w: *, step: (*|number)}}
 */
      let get_coords = (context, w, tw, step, diff, min) => {
        return {
          min: 0,
          max: parseFloat(diff),
          tw: tw,
          val: min !== 0 ? jQuery(context).val() - min : jQuery(context).val(),
          step: step ? step : 1,
          w: w
        }
      }
      /**
 * Set left offset of slider button
 * @param context
 * @param xPX
 */
      let set_thumb = (context, xPX) => {
        context.next(".slider-container").find("span.bar-btn").css("left", `${xPX + halfTw}px `)
      }
      /**
 * Set left offset of slider progress bar
 * @param context
 * @param xPX
 */
      let set_bar = (context, xPX) => {
        context.next(".slider-container").find("span.bar > span").css("width", xPX + "px")
      }
      /**
 * Set point text
 * @param context
 * @param output
 */
      let set_output_text = (context, output) => {
        context.next(".slider-container").find("span.bar-btn > span").html(output);
      }
      /**
 * Get offset value of slider bar
 * @param val
 * @param w
 * @param tw
 * @param max
 * @returns {number}
 */
      let get_xpx = (val, w, tw, max) => {
        return val * (w - tw) / max
      }
      /**
 * Get offset of slider point
 * @param w
 * @param tw
 * @param diff
 * @param step
 * @returns {number}
 */
      let get_ppx = (w, tw, diff, step) => {
        step = isNaN(step) ? 1 : step;
        console.log(step);
        return (w - tw) / (diff / step)
      }

      function updateSlider(passObj, isResize = false) {
        let $range = jQuery(passObj);
        let original_max = parseFloat($range.attr("max")),
            original_min = parseFloat($range.attr("min")),
            diff = original_max - original_min;

        let w = $range.width(),
            step = parseFloat($range.attr("step")),
            coord = get_coords($range, w, tw, step, diff, original_min);

        let xPX = get_xpx(coord.val, w, tw, coord.max),
            pPX = get_ppx(w, tw, diff, step);

        const rangeParent = $range.parents('.formio-component-range');
        if ((rangeParent.find('.slider-container').length < 1 && w > 0) || isResize) {

          if (isResize) $range.next('.slider-container').remove()

          let slider_stop = (original_max - original_min) / step;
          let dots = '',
              color = "range-slider-color";
          if (slider_stop <= 30) {

            for (let i = 0; i <= slider_stop; i++) {
              let calc = pPX * i + (tw / 2) - halfPoint
              dots += "<div class='dot' id='" + i + "' style='left: " + calc + "px'></div>";
            }
          }

          $range.after("<span class='slider-container " + color + "'><span class='bar'><span></span>" + dots + "</span><span class='bar-btn'><span>0</span></span></span>");
        }

        set_thumb($range, xPX)
        set_bar($range, xPX)

        let output = parseFloat(coord.val) + original_min;
        const unitTextData = $range.data('range-unit');
        if (unitTextData) {
          output += unitTextData;
        }

        set_output_text($range, output);

      }

      // TODO: don't used in current version
      function createBubbles(form, rangeItem = undefined) {

        // form.everyComponent((componentInstance) => {
        //   // Do what you want with componentInstance
        //   console.log(componentInstance);
        // });


        const allRanges = jQuery(".formio-component-range div[ref='element'] input[type='range']");
        allRanges.each((i, item) => {
          rangeSlider(item);
        });
      }



      function rangeSlider(item) {

        var obj = jQuery(item); // input element

        const rangeParent = obj.parents('.formio-component-range');
        rangeParent.addClass('range-inactive');
        obj.attr('data-range-initiated', true);
        obj.on("input", () => {

               obj.parents('.formio-component-range').removeClass('range-inactive');
      });

      var color = "range-slider-color";

      let sliderParent  = obj.parents('.formio-component-range').find('.slider');
      if(sliderParent.length < 1){
        obj.wrap("<span class='slider " + color + "'></span>");  // add only once
      }

      const componentInactiveValue = obj.data('inactive-value');

      if (typeof (componentInactiveValue) != "undefined") {
        //if inactive value is defined, activate only if current value is different
        if (componentInactiveValue != obj.val()) {
          const rangeElement = rangeParent.find('input[type="range"]');
          rangeParent.removeClass('range-inactive');
          updateSlider(rangeElement);
        }
      } else { //if inactive value is undefined, always activate
        const rangeElement = rangeParent.find('input');
        rangeParent.removeClass('range-inactive');

        updateSlider(rangeElement);
      }

      obj.on("input", () => {
             obj.parents('.formio-component-range').removeClass('range-inactive');
      updateSlider(item);
    });

    jQuery(window).on('resize', function () {
      updateSlider(item, true);
    });

    jQuery('.nav-tabs .nav-item, .iq-tabs-prev, .iq-tabs-next').on('click', function () {
      setTimeout(function () {
        updateSlider(item, true);

      }, 100);
    });
    jQuery('#iq-tabs-select').on('change', function () {
      setTimeout(function () {
        updateSlider(item, true);

      }, 100);
    });
    return obj;
  }

        function initiateBubble(item) {

    // jQuery(rangeBubble).insertAfter( item );

    const itemObj = jQuery(item);
    const range = itemObj.find("input[type='range']");
    // let rangeBubble = '<output class="bubble"></output>';
    // range.after(rangeBubble);

    // const bubble = itemObj.find(".bubble");
    const rangeParent = itemObj.parent('.formio-component-range');

    rangeParent.addClass('range-inactive');
    range.attr('data-range-initiated', true);
    range.on("input", () => {

             range.parents('.formio-component-range').removeClass('range-inactive');
    setBubble(range);
  });

}


function setBubble(range) {
  const bubble = range.siblings('.bubble');
  const val = range.val();
  const min = range.attr('min') ? range.attr('min') : 0;
  const max = range.attr('max') ? range.attr('max') : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.html(val);
  // Sorta magic numbers based on size of the native UI thumb
  bubble.css('left', `calc(${newVal}% + (${8 - newVal * 0.15}px))`);
}

createBubbles(form);
const expressCostIncrease = 0
const expressTimeDecrease = 0
function getWeekNumber(d) {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
  // Get first day of year
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  // Calculate full weeks to nearest Thursday
  let weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
  // Return array of year and week number
  return [d.getUTCFullYear(), weekNo];
}
let normalTime;
let expressTime;

function updateUI(){
  let  totalCostFormatted;
  let  expressCostFormatted;
  let retreivedFormUI= JSON.parse(localStorage.getItem("formDataUI"));
  // console.log(retreivedFormUI);
  if(retreivedFormUI){
    if(retreivedFormUI.totalCost){
      totalCostFormatted = retreivedFormUI.totalCost.toLocaleString("de-AT", {style:"currency", currency:"CHF"}).replace("CHF", "");
    }else{
      totalCostFormatted = "-";
    }

    if(retreivedFormUI.totalExpressCost){
      expressCostFormatted = retreivedFormUI.totalExpressCost.toFixed(2).replace(".",",");
    }else{
      expressCostFormatted = 0;
    }


    // look for coupon

    let coupon = Number(retreivedFormUI.coupon);
    if(coupon){
      // console.log(coupon);
      if(coupon !== 1 ){
        let couponCost = Number(retreivedFormUI.totalCost);
        couponCost = couponCost * (1-coupon);
        couponCost = `<span class="cost__after-coupon">${couponCost.toFixed(2).replace(".",",")}</span>`;
        let cost = Number(retreivedFormUI.totalCost);
        cost = `<span class="cost__before-coupon">  ${cost.toFixed(2).replace(".",",")}  </span>`;



        totalCostFormatted = `${cost}`;
        document.querySelector(".instantquote__total-cost--price .price__box").classList.add("price__box-before-coupon")
        jQuery(".price__box-value").html(totalCostFormatted);
        jQuery(".price__box--coupon").show();
        jQuery(".price__box--coupon .price__box-value").html(couponCost);
      }else{
        jQuery(".price__box-value").html(totalCostFormatted);
      }
    }
    else{
      jQuery(".price__box-value").html(totalCostFormatted);
    }



    jQuery(".price__box-express-value").html(expressCostFormatted);
  }


}function updateDataTime(iQteamMetric){


  updateUI();
}

function updateDataUI(form,iQteam=[]){
  let iQteamMetric = [];
  let totalVariableCost = 0;
  let totalCostFactor = 0;

  let totalProjectCost = 0;
  let  totalcost =0;
  let totalcurrentcost = 0;

  let updateDataUI= JSON.parse(localStorage.getItem("formData"));
  if(updateDataUI == null){
    updateDataUI = {};
  }

  let retreivedFormUI = JSON.parse(localStorage.getItem("formDataUI"));
  if(retreivedFormUI == null){
    retreivedFormUI = {};
  }

  //  cost
  for (const prop in updateDataUI) {


    //handling ranges
    const component = form.getComponent(prop);
    let customClass = component.component.customClass;
    if("do-not-show-in-price-change" == customClass.trim()){
      // do nothing 
      continue; 
    }
    //if("do-not-show-in-price-change" in )
    const componentObj = jQuery(component.element);
    const componentInput = componentObj.find('input[type="range"]');
    const componentInactiveValue = component.component.attributes['data-inactive-value'] ? component.component.attributes['data-inactive-value'] : 0;
    if (componentInput.length) {
      if (!componentInput.data('range-initiated')) {
        // console.log('initiating range on newly displayed component');
        // const rangeWrapper = componentInput.parents("div[ref='element']");
        //               rangeSlider(componentInput);
      };
    }
    let currentNum = Number(updateDataUI[prop]);
    if (typeof(componentInactiveValue) != "undefined" && componentInactiveValue != currentNum) {
      componentObj.removeClass('range-inactive');
      //             updateSlider(componentInput);
      // setBubble(rangeElement);
    }

    // console.log(currentNum);
    if(isNaN(currentNum)){
      currentNum = 0;
    }
    if(updateDataUI[prop] === false ){
      currentNum=0;
    }
    if(updateDataUI[prop] === true ){
      currentNum=1;
    }
    let fixedcostperunit = form.getComponent(prop).component.properties.fixedcostperunit;

    // let coupon = form.getComponent(prop).component.properties.coupon;
    // form.setComponent(prop).component.properties.coupon;
    // console.log(coupon);

    // console.log(fixedcostperunit);
    fixedcostperunit = Number(fixedcostperunit);
    //console.log(fixedcostperunit);
    // if(fixedcostperunit === 0){
    //     // do nothing
    // }
    if(isNaN(fixedcostperunit) ||  (fixedcostperunit === undefined)){
      fixedcostperunit = 0;
    }

    //console.log(currentNum);
    currentNum =fixedcostperunit * currentNum;

    // fixecost
    let fixedcost = form.getComponent(prop).component.properties.fixedcost;

    if(isNaN(fixedcost) ||  (fixedcost === undefined)){
      fixedcost = 0;
    }
    // console.log(currentNum,totalProjectCost,fixedcost);
    totalProjectCost =  Number(currentNum) + Number(totalProjectCost) + Number(fixedcost);
    // console.log(currentNum,totalProjectCost,fixedcost);

    //console.log(totalProjectCost);
  }

  for (const prop in updateDataUI) {

    totalCostFactor = form.getComponent(prop).component.properties.totalcost;
    //console.log("totalCostFactor" + JSON.stringify(form.getComponent(prop).component.properties));
    let currentNum = Number(updateDataUI[prop]);
    if(isNaN(currentNum)){
      currentNum = 0;
    }
    if(updateDataUI[prop] === false ){
      currentNum=0;
    }
    if(updateDataUI[prop] === true ){
      currentNum=0;
    }

    //console.log(currentNum,totalcurrentcost);
    if(totalCostFactor !== undefined){


      // console.log(totalCostFactor);

      //console.log(totalProjectCost);
      //console.log(currentNum);
      totalcurrentcost = totalProjectCost * currentNum * totalCostFactor;
      //console.log(totalcurrentcost);

      break;
    }

  }
  const totalCostUpdated = Number(totalProjectCost+ totalcurrentcost+ totalVariableCost);
  //showPriceChange(retreivedFormUI["totalCost"], totalCostUpdated, retreivedFormUI["totalExpressCost"], Number(totalProjectCost+ totalcurrentcost+ totalVariableCost) * (1 + Number(expressCostIncrease)/100));

  retreivedFormUI["totalCost"] = totalCostUpdated;
  retreivedFormUI["totalExpressCost"] = Number(retreivedFormUI["totalCost"]) * (1 + Number(expressCostIncrease)/100);

  // retreivedFormUI["coupon"] = coupon;
  localStorage.setItem('formDataUI', JSON.stringify(retreivedFormUI));


  updateDataTime(iQteamMetric);

  //pluggable function
  if (typeof window.afterUpdateDataUI === "function") {
    window.afterUpdateDataUI();
  }



};
updateDataUI(form);
//formDataUI
// console.log(event);

let val = 1;
let getCurrentInstance ="" ;
let apiLabel = "";
// let apiSubLabel = "";
let apivaluetoshow = "";
const notificationEl = $('.iq__price-update-dynamic');
let totalCostFactor = 0;
let valueLiteral="";
let formDataUI = "";
let zeroVal = 0;
let fixedcostperunit = 1;
let cost = "";
let showpricechange = "";
let showpricechangevalue ="";
getCurrentInstance = event.changed.instance.component;
const showPriceHeading = getCurrentInstance.label;

if(event){

  getCurrentInstance = event.changed.instance.component;

  let hideField =  getCurrentInstance.customClass.search("hide-field");
  if( hideField >= 0){
    // do not show in price change
    return ;
  }
  let doNotShowInPriceChange = getCurrentInstance.customClass.search("do-not-show-in-price-change");
  if( doNotShowInPriceChange >= 0){
    return;
  }




  apiLabel = getCurrentInstance.properties.showpricelabel;
  apiLabel = apiLabel ? `<p class="price__change-title"> ${apiLabel}</p>` :  `<p class="price__change-title">${getCurrentInstance.label}</p>`;
  // apiSubLabel = getCurrentInstance.properties.showpricesublabel;
  // apiSubLabel =  apiSubLabel ?  `<p class="price__change-sub-title">${apiSubLabel} </p>` :"";
  // apivaluetoshow  = getCurrentInstance.properties.apivaluetoshow;
  // if(apivaluetoshow){
  //   val = form.getComponent(apivaluetoshow).getValue();
  //   fixedcostperunit = form.getComponent(apivaluetoshow).component.properties.fixedcostperunit;
  //   totalCostFactor = form.getComponent(apivaluetoshow).component.properties.totalcost;
  // }else{
  val = event.changed.value;

  // console.log(event.changed.component.values);
  // if(event.changed.component.type == undefined){
  //   return;
  // }

  if(event.changed.component.type == "radio" ){
    let arrayVals = event.changed.component.values;
    // console.log(event.changed);
    let radioValue = arrayVals.filter(item=>{
      return item.value == val;
    });

    if(radioValue.length > 0){
      valueLiteral = (radioValue[0].label);
    }

    //// to be removed after testing
    // if(radioValue[0] == undefined){
    //   return ;
    // }
    // valueLiteral = (radioValue[0].label);
  }

  if( event.changed.component.type == "select"){
    let arrayVals = event.changed.component.data.values;
    let radioValue = arrayVals.filter(item=>{
      return item.value == val;
    });
    if(radioValue[0] == undefined){
      return ;
    }
    valueLiteral = (radioValue[0].label);
  }

  fixedcostperunit = getCurrentInstance.properties.fixedcostperunit;
  totalCostFactor = getCurrentInstance.properties.totalcost;
  // }
  cost = Number(val) * Number(fixedcostperunit);
  if(totalCostFactor !== undefined && totalCostFactor > 0 ){
    cost = Number(formDataUI.totalCost) * Number(totalCostFactor) * Number(val);
  }
}

if(valueLiteral === null || val == null){
  return;
}

let couponCost = Number(cost);

//showpricechange
showpricechange = getCurrentInstance.properties.showpricechange;
if(showpricechange){
  cost = showpricechange;
  couponCost = Number(cost)
}

showpricechangevalue = getCurrentInstance.properties.showpricechangevalue;
if(showpricechangevalue){
  valueLiteral = showpricechangevalue;
}


cost = ! isNaN(cost)?`<span>  ${Number(cost).toFixed(2).replace(".",",")}  </span>`: zeroVal.toFixed(2).replace(".",",");



formDataUI = JSON.parse(localStorage.getItem("formDataUI"));

let coupon ;
if(formDataUI){
  coupon = formDataUI.coupon;
}


if( coupon){
  //  document.querySelector(".show__price-api-price-change").classList.add("show__price-api-price-change--has-coupon");
  document.querySelector(".iq__price-update").classList.add("iq__price-update--has-coupon");
  coupon = Number(formDataUI.coupon);
  if(coupon !== 1 ){
    if(isNaN(couponCost)){
      couponCost = 0;
    }
    cost = `<span class="cost__before-coupon">  ${couponCost.toFixed(2).replace(".",",")}  </span>`;
    couponCost = couponCost * (1-coupon);
    couponCost = `<span class="cost__after-coupon">${couponCost.toFixed(2).replace(".",",")}</span>`;
    cost = `${cost} ${couponCost}`
  }
}

if(showpricechange !== false){
  notificationEl.html(`
<div class="show__price-api-wrapper">
<div class="show__price--label">
<div class="show__price-heading">${showPriceHeading}</div>
<div class="show__price-api-title"> 
${apiLabel }

${valueLiteral ? "<p>&nbsp;-&nbsp;" + valueLiteral+"</p>": "<p>&nbsp;-&nbsp;"+val+"</p>"}
</div> 

</div>
<div class="show__price-api-price-change">
${ cost }
</div> 
</div>
`);
}
valueLiteral = valueLiteral.replace(/"/g, "'");
const formDataBuffer = (key, value) => {
  if (!value || !key) {
    return;
  }
  let formDataStorageName = 'formDataBuffer',
      dataBufferObj,
      dataBuffer = GetFormDataBuffer(formDataStorageName);
  dataBuffer[key] = value
  dataBufferObj = Object.assign({}, dataBuffer);
  SetFormDataBuffer(formDataStorageName, dataBufferObj)
}

const SetFormDataBuffer = (storageKey, dataBufferObj) => {
  localStorage.setItem(storageKey, JSON.stringify(dataBufferObj));
}

const GetFormDataBuffer = (storageKey) => {
  return localStorage.getItem(storageKey) ? JSON.parse(localStorage.getItem(storageKey)) : [];
}
formDataBuffer('showpricelabel_' + getCurrentInstance.key, apiLabel + valueLiteral)
formDataBuffer('fixedcost_' + getCurrentInstance.key, fixedcostperunit)
onChangeEventFunction(form);

});

form.on('offerte-anfordern', function(){
  console.log("kjsdfg");
       event.preventDefault();
              var montageort = $('[name="data[plz]"]').val();
              var meeresspiegel = $('[name="data[hoheUberDemMeeresspiegel]"]').val();
              var projektnummer = $('[name="data[projektnameOderProjektnummer]"]').val();
              var windowfilm1 = $('[name="data[windowfilm1]"]').val();
              var windowfilm2 = $('[name="data[windowfilm2]"]').val();
              var windowfilm3 = $('[name="data[windowfilm3]"]').val();
              var Anzahl = $('[name="data[anzahlGlaser]"]').val();
              var Glashohe = $('[name="data[glashoheInMm]"]').val();
              var Glasbreite = $('[name="data[glasbreiteInMm]"]').val();
              var expositionVomGlas = $('[name="data[expositionVomGlas]"]').val();
              var windowFrame = $('[name="data[fensterrahmen][edns4fs]"]').val();
             
              var verglasungsart = $('[name="data[verglasungsart1][emj8xxie]').val();
              
              var glass_thickness_inside = $('[name="data[glasstarkeInnen5]"]').val()
              var glass_type_inside = $('[name="data[glasartInnen]"]').val();
              var coating_inside_glass = $('[name="data[hitzeschutzbedampfung1]"]').val();
              
              
              var glass_thickness_middle = $('[name="data[glasstarkeInnen10]"]').val();
              var glass_type_middle = $('[name="data[glasartInnen6]"]').val();
              var coating_middle_in = $('[name="data[hitzeschutzbedampfung6]"]').val();
              var coating_middle_out = $('[name="data[hitzeschutzbedampfung4]"]').val();
              
              
              
              
              var glass_thickness_outside = $('[name="data[glasstarkeInnen11]"]').val();
              var glass_type_outside = $('[name="data[glasartInnen7]"]').val();
              var coating_outside = $('[name="data[hitzeschutzbedampfung5]"]').val();
              
             
              
              var email = $('.main_page_div').attr('data_shop_email');
              
              var form = new FormData();
             // form.append("pdf", $('#file').prop('files')[0]);
              form.append("image", $('.fileName ').text());
              form.append("installation_location", montageort);
              form.append("above_sea_level", meeresspiegel);
              form.append("project_name_or_number", projektnummer);
              form.append("windowfilm1",windowfilm1);
              form.append("windowfilm2", windowfilm2);
              form.append("windowfilm3", windowfilm3);
              form.append("nr_of_glasses", Anzahl);
              form.append("glass_height_in_mm", Glashohe);
              form.append("glass_width_in_mm", Glasbreite);
              form.append("exposure_of_glass", expositionVomGlas);
              form.append("window_frame", windowFrame);
              form.append("glass_name", verglasungsart);
              form.append("glass_thickness_inside", glass_thickness_inside);
              form.append("glass_type_inside", glass_type_inside);
              form.append("coating_inside_glass", coating_inside_glass);
              form.append("glass_thickness_middle", glass_thickness_middle);
              form.append("glass_type_middle", glass_type_middle);
              form.append("coating_outside", coating_middle_out);
              form.append("coating_inside", coating_middle_in);
              form.append("glass_thickness_outside", glass_thickness_outside);
              form.append("glass_type_outside", glass_type_outside);
              form.append("coating_outside_glass", coating_outside);
              form.append("email", email);
              
              var settings = {
                "url": "https://aico.folienzuschnitt.ch/project-data",
                "method": "POST",
                "timeout": 0,
                "processData": false,
                "mimeType": "multipart/form-data",
                "contentType": false,
                "data": form
              };

              $.ajax(settings).done(function (response) {
                console.log(response);
              });

});

});
}

$(document).ready(function () {

    $(".section-custom-slider").slick({
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "320px",
    infinite: false,
    slidesToScroll: 1,
    arrows: true,
    rtl: true,
    prevArrow:
      '<button class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g transform="rotate(-90 24 24)"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 30L25 18L37 30"/></g></svg></button>',
    nextArrow:
      '<button class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g transform="rotate(90 24 24)"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 30L25 18L37 30"/></g></svg></button>',
  });
   
 });
