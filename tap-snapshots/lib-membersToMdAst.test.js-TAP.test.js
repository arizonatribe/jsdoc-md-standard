/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`lib/membersToMdAst.test.js TAP membersToMdAst > Markdown AST. 1`] = `
{
  "type": "root",
  "children": [
    {
      "type": "heading",
      "depth": 3,
      "children": [
        {
          "type": "text",
          "value": "Table of contents"
        }
      ],
      "data": {
        "hProperties": {
          "id": "table-of-contents"
        },
        "id": "table-of-contents"
      }
    },
    {
      "type": "list",
      "ordered": false,
      "children": [
        {
          "type": "listItem",
          "loose": false,
          "children": [
            {
              "type": "paragraph",
              "children": [
                {
                  "type": "link",
                  "title": null,
                  "url": "#type-a",
                  "children": [
                    {
                      "type": "text",
                      "value": "type A"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "listItem",
          "loose": false,
          "children": [
            {
              "type": "paragraph",
              "children": [
                {
                  "type": "link",
                  "title": null,
                  "url": "#constant-b",
                  "children": [
                    {
                      "type": "text",
                      "value": "constant B"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "listItem",
          "loose": false,
          "children": [
            {
              "type": "paragraph",
              "children": [
                {
                  "type": "link",
                  "title": null,
                  "url": "#class-c",
                  "children": [
                    {
                      "type": "text",
                      "value": "class C"
                    }
                  ]
                }
              ]
            },
            {
              "type": "list",
              "ordered": false,
              "children": [
                {
                  "type": "listItem",
                  "loose": false,
                  "children": [
                    {
                      "type": "paragraph",
                      "children": [
                        {
                          "type": "link",
                          "title": null,
                          "url": "#c-static-method-a",
                          "children": [
                            {
                              "type": "text",
                              "value": "C static method a"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "listItem",
                  "loose": false,
                  "children": [
                    {
                      "type": "paragraph",
                      "children": [
                        {
                          "type": "link",
                          "title": null,
                          "url": "#c-instance-method-b",
                          "children": [
                            {
                              "type": "text",
                              "value": "C instance method b"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "listItem",
                  "loose": false,
                  "children": [
                    {
                      "type": "paragraph",
                      "children": [
                        {
                          "type": "link",
                          "title": null,
                          "url": "#c-inner-function-c",
                          "children": [
                            {
                              "type": "text",
                              "value": "C inner function c"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "listItem",
                  "loose": false,
                  "children": [
                    {
                      "type": "paragraph",
                      "children": [
                        {
                          "type": "link",
                          "title": null,
                          "url": "#c-static-property-e",
                          "children": [
                            {
                              "type": "text",
                              "value": "C static property e"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "listItem",
          "loose": false,
          "children": [
            {
              "type": "paragraph",
              "children": [
                {
                  "type": "link",
                  "title": null,
                  "url": "#function-d",
                  "children": [
                    {
                      "type": "text",
                      "value": "function d"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "listItem",
          "loose": false,
          "children": [
            {
              "type": "paragraph",
              "children": [
                {
                  "type": "link",
                  "title": null,
                  "url": "#type-e",
                  "children": [
                    {
                      "type": "text",
                      "value": "type E"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "listItem",
          "loose": false,
          "children": [
            {
              "type": "paragraph",
              "children": [
                {
                  "type": "link",
                  "title": null,
                  "url": "#type-f",
                  "children": [
                    {
                      "type": "text",
                      "value": "type F"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "children": [
        {
          "type": "text",
          "value": "type A"
        }
      ],
      "data": {
        "hProperties": {
          "id": "type-a"
        },
        "id": "type-a"
      }
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "Description.",
          "position": {
            "start": {
              "line": 1,
              "column": 1,
              "offset": 0
            },
            "end": {
              "line": 1,
              "column": 13,
              "offset": 12
            },
            "indent": []
          }
        }
      ],
      "position": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 1,
          "column": 13,
          "offset": 12
        },
        "indent": []
      }
    },
    {
      "type": "table",
      "children": [
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Property"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Type"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Description"
                }
              ]
            }
          ]
        },
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "a"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "link",
                  "url": "https://developer.mozilla.org/javascript/reference/global_objects/string",
                  "children": [
                    {
                      "type": "text",
                      "value": "string"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "text",
                      "value": "Description.",
                      "position": {
                        "start": {
                          "line": 1,
                          "column": 1,
                          "offset": 0
                        },
                        "end": {
                          "line": 1,
                          "column": 13,
                          "offset": 12
                        },
                        "indent": []
                      }
                    }
                  ],
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 13,
                      "offset": 12
                    },
                    "indent": []
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "b"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "link",
                  "url": "https://developer.mozilla.org/javascript/reference/global_objects/boolean",
                  "children": [
                    {
                      "type": "text",
                      "value": "boolean"
                    }
                  ]
                },
                {
                  "type": "text",
                  "value": " | "
                },
                {
                  "type": "link",
                  "url": "https://developer.mozilla.org/javascript/reference/global_objects/string",
                  "children": [
                    {
                      "type": "text",
                      "value": "string"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "text",
                      "value": "Description.",
                      "position": {
                        "start": {
                          "line": 1,
                          "column": 1,
                          "offset": 0
                        },
                        "end": {
                          "line": 1,
                          "column": 13,
                          "offset": 12
                        },
                        "indent": []
                      }
                    }
                  ],
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 13,
                      "offset": 12
                    },
                    "indent": []
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "children": [
        {
          "type": "text",
          "value": "constant B"
        }
      ],
      "data": {
        "hProperties": {
          "id": "constant-b"
        },
        "id": "constant-b"
      }
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "Description.",
          "position": {
            "start": {
              "line": 1,
              "column": 1,
              "offset": 0
            },
            "end": {
              "line": 1,
              "column": 13,
              "offset": 12
            },
            "indent": []
          }
        }
      ],
      "position": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 1,
          "column": 13,
          "offset": 12
        },
        "indent": []
      }
    },
    {
      "type": "heading",
      "depth": 3,
      "children": [
        {
          "type": "text",
          "value": "class C"
        }
      ],
      "data": {
        "hProperties": {
          "id": "class-c"
        },
        "id": "class-c"
      }
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "Description.",
          "position": {
            "start": {
              "line": 1,
              "column": 1,
              "offset": 0
            },
            "end": {
              "line": 1,
              "column": 13,
              "offset": 12
            },
            "indent": []
          }
        }
      ],
      "position": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 1,
          "column": 13,
          "offset": 12
        },
        "indent": []
      }
    },
    {
      "type": "table",
      "children": [
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Parameter"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Type"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Description"
                }
              ]
            }
          ]
        },
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "a"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "link",
                  "url": "#type-a",
                  "children": [
                    {
                      "type": "text",
                      "value": "A"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "text",
                      "value": "Description.",
                      "position": {
                        "start": {
                          "line": 1,
                          "column": 1,
                          "offset": 0
                        },
                        "end": {
                          "line": 1,
                          "column": 13,
                          "offset": 12
                        },
                        "indent": []
                      }
                    }
                  ],
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 13,
                      "offset": 12
                    },
                    "indent": []
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "children": [
        {
          "type": "text",
          "value": "C static method a"
        }
      ],
      "data": {
        "hProperties": {
          "id": "c-static-method-a"
        },
        "id": "c-static-method-a"
      }
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "Description.",
          "position": {
            "start": {
              "line": 1,
              "column": 1,
              "offset": 0
            },
            "end": {
              "line": 1,
              "column": 13,
              "offset": 12
            },
            "indent": []
          }
        }
      ],
      "position": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 1,
          "column": 13,
          "offset": 12
        },
        "indent": []
      }
    },
    {
      "type": "table",
      "children": [
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Parameter"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Type"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Description"
                }
              ]
            }
          ]
        },
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "a"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "link",
                  "url": "https://developer.mozilla.org/javascript/reference/global_objects/string",
                  "children": [
                    {
                      "type": "text",
                      "value": "string"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "text",
                      "value": "Description.",
                      "position": {
                        "start": {
                          "line": 1,
                          "column": 1,
                          "offset": 0
                        },
                        "end": {
                          "line": 1,
                          "column": 13,
                          "offset": 12
                        },
                        "indent": []
                      }
                    }
                  ],
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 13,
                      "offset": 12
                    },
                    "indent": []
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "b"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "link",
                  "url": "https://developer.mozilla.org/javascript/reference/global_objects/string",
                  "children": [
                    {
                      "type": "text",
                      "value": "string"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "text",
                      "value": "Description.",
                      "position": {
                        "start": {
                          "line": 1,
                          "column": 1,
                          "offset": 0
                        },
                        "end": {
                          "line": 1,
                          "column": 13,
                          "offset": 12
                        },
                        "indent": []
                      }
                    }
                  ],
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 13,
                      "offset": 12
                    },
                    "indent": []
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "children": [
        {
          "type": "text",
          "value": "C instance method b"
        }
      ],
      "data": {
        "hProperties": {
          "id": "c-instance-method-b"
        },
        "id": "c-instance-method-b"
      }
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "Description.",
          "position": {
            "start": {
              "line": 1,
              "column": 1,
              "offset": 0
            },
            "end": {
              "line": 1,
              "column": 13,
              "offset": 12
            },
            "indent": []
          }
        }
      ],
      "position": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 1,
          "column": 13,
          "offset": 12
        },
        "indent": []
      }
    },
    {
      "type": "table",
      "children": [
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Parameter"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Type"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Description"
                }
              ]
            }
          ]
        },
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "a"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "link",
                  "url": "https://developer.mozilla.org/javascript/reference/global_objects/string",
                  "children": [
                    {
                      "type": "text",
                      "value": "string"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "text",
                      "value": "Description.",
                      "position": {
                        "start": {
                          "line": 1,
                          "column": 1,
                          "offset": 0
                        },
                        "end": {
                          "line": 1,
                          "column": 13,
                          "offset": 12
                        },
                        "indent": []
                      }
                    }
                  ],
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 13,
                      "offset": 12
                    },
                    "indent": []
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "children": [
        {
          "type": "text",
          "value": "C inner function c"
        }
      ],
      "data": {
        "hProperties": {
          "id": "c-inner-function-c"
        },
        "id": "c-inner-function-c"
      }
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "Description.",
          "position": {
            "start": {
              "line": 1,
              "column": 1,
              "offset": 0
            },
            "end": {
              "line": 1,
              "column": 13,
              "offset": 12
            },
            "indent": []
          }
        }
      ],
      "position": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 1,
          "column": 13,
          "offset": 12
        },
        "indent": []
      }
    },
    {
      "type": "table",
      "children": [
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Parameter"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Type"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Description"
                }
              ]
            }
          ]
        },
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "a"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "link",
                  "url": "https://developer.mozilla.org/javascript/reference/global_objects/string",
                  "children": [
                    {
                      "type": "text",
                      "value": "string"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "text",
                      "value": "Description.",
                      "position": {
                        "start": {
                          "line": 1,
                          "column": 1,
                          "offset": 0
                        },
                        "end": {
                          "line": 1,
                          "column": 13,
                          "offset": 12
                        },
                        "indent": []
                      }
                    }
                  ],
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 13,
                      "offset": 12
                    },
                    "indent": []
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "children": [
        {
          "type": "text",
          "value": "C static property e"
        }
      ],
      "data": {
        "hProperties": {
          "id": "c-static-property-e"
        },
        "id": "c-static-property-e"
      }
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "Description.",
          "position": {
            "start": {
              "line": 1,
              "column": 1,
              "offset": 0
            },
            "end": {
              "line": 1,
              "column": 13,
              "offset": 12
            },
            "indent": []
          }
        }
      ],
      "position": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 1,
          "column": 13,
          "offset": 12
        },
        "indent": []
      }
    },
    {
      "type": "heading",
      "depth": 3,
      "children": [
        {
          "type": "text",
          "value": "function d"
        }
      ],
      "data": {
        "hProperties": {
          "id": "function-d"
        },
        "id": "function-d"
      }
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "Description.",
          "position": {
            "start": {
              "line": 1,
              "column": 1,
              "offset": 0
            },
            "end": {
              "line": 1,
              "column": 13,
              "offset": 12
            },
            "indent": []
          }
        }
      ],
      "position": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 1,
          "column": 13,
          "offset": 12
        },
        "indent": []
      }
    },
    {
      "type": "table",
      "children": [
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Parameter"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Type"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Description"
                }
              ]
            }
          ]
        },
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "a"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "link",
                  "url": "https://developer.mozilla.org/javascript/reference/global_objects/string",
                  "children": [
                    {
                      "type": "text",
                      "value": "string"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "text",
                      "value": "Description.",
                      "position": {
                        "start": {
                          "line": 1,
                          "column": 1,
                          "offset": 0
                        },
                        "end": {
                          "line": 1,
                          "column": 13,
                          "offset": 12
                        },
                        "indent": []
                      }
                    }
                  ],
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 13,
                      "offset": 12
                    },
                    "indent": []
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "children": [
        {
          "type": "text",
          "value": "type E"
        }
      ],
      "data": {
        "hProperties": {
          "id": "type-e"
        },
        "id": "type-e"
      }
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "Description.",
          "position": {
            "start": {
              "line": 1,
              "column": 1,
              "offset": 0
            },
            "end": {
              "line": 1,
              "column": 13,
              "offset": 12
            },
            "indent": []
          }
        }
      ],
      "position": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 1,
          "column": 13,
          "offset": 12
        },
        "indent": []
      }
    },
    {
      "type": "table",
      "children": [
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Parameter"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Type"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Description"
                }
              ]
            }
          ]
        },
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "a"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "link",
                  "url": "https://developer.mozilla.org/javascript/reference/global_objects/boolean",
                  "children": [
                    {
                      "type": "text",
                      "value": "boolean"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "text",
                      "value": "Description.",
                      "position": {
                        "start": {
                          "line": 1,
                          "column": 1,
                          "offset": 0
                        },
                        "end": {
                          "line": 1,
                          "column": 13,
                          "offset": 12
                        },
                        "indent": []
                      }
                    }
                  ],
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 13,
                      "offset": 12
                    },
                    "indent": []
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "children": [
        {
          "type": "text",
          "value": "type F"
        }
      ],
      "data": {
        "hProperties": {
          "id": "type-f"
        },
        "id": "type-f"
      }
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "Description.",
          "position": {
            "start": {
              "line": 1,
              "column": 1,
              "offset": 0
            },
            "end": {
              "line": 1,
              "column": 13,
              "offset": 12
            },
            "indent": []
          }
        }
      ],
      "position": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 1,
          "column": 13,
          "offset": 12
        },
        "indent": []
      }
    },
    {
      "type": "table",
      "children": [
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Property"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Type"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Description"
                }
              ]
            }
          ]
        },
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "a"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "link",
                  "url": "https://developer.mozilla.org/javascript/reference/global_objects/boolean",
                  "children": [
                    {
                      "type": "text",
                      "value": "boolean"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "text",
                      "value": "Description.",
                      "position": {
                        "start": {
                          "line": 1,
                          "column": 1,
                          "offset": 0
                        },
                        "end": {
                          "line": 1,
                          "column": 13,
                          "offset": 12
                        },
                        "indent": []
                      }
                    }
                  ],
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 13,
                      "offset": 12
                    },
                    "indent": []
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
`

exports[`lib/membersToMdAst.test.js TAP membersToMdAst > Markdown. 1`] = `
### Table of contents

- [type A](#type-a)
- [constant B](#constant-b)
- [class C](#class-c)
  - [C static method a](#c-static-method-a)
  - [C instance method b](#c-instance-method-b)
  - [C inner function c](#c-inner-function-c)
  - [C static property e](#c-static-property-e)
- [function d](#function-d)
- [type E](#type-e)
- [type F](#type-f)

### type A

Description.

| Property | Type                                                                                                                                                                       | Description  |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| a        | [string](https://developer.mozilla.org/javascript/reference/global_objects/string)                                                                                         | Description. |
| b        | [boolean](https://developer.mozilla.org/javascript/reference/global_objects/boolean) \\| [string](https://developer.mozilla.org/javascript/reference/global_objects/string) | Description. |

### constant B

Description.

### class C

Description.

| Parameter | Type         | Description  |
| --------- | ------------ | ------------ |
| a         | [A](#type-a) | Description. |

#### C static method a

Description.

| Parameter | Type                                                                               | Description  |
| --------- | ---------------------------------------------------------------------------------- | ------------ |
| a         | [string](https://developer.mozilla.org/javascript/reference/global_objects/string) | Description. |
| b         | [string](https://developer.mozilla.org/javascript/reference/global_objects/string) | Description. |

#### C instance method b

Description.

| Parameter | Type                                                                               | Description  |
| --------- | ---------------------------------------------------------------------------------- | ------------ |
| a         | [string](https://developer.mozilla.org/javascript/reference/global_objects/string) | Description. |

#### C inner function c

Description.

| Parameter | Type                                                                               | Description  |
| --------- | ---------------------------------------------------------------------------------- | ------------ |
| a         | [string](https://developer.mozilla.org/javascript/reference/global_objects/string) | Description. |

#### C static property e

Description.

### function d

Description.

| Parameter | Type                                                                               | Description  |
| --------- | ---------------------------------------------------------------------------------- | ------------ |
| a         | [string](https://developer.mozilla.org/javascript/reference/global_objects/string) | Description. |

### type E

Description.

| Parameter | Type                                                                                 | Description  |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| a         | [boolean](https://developer.mozilla.org/javascript/reference/global_objects/boolean) | Description. |

### type F

Description.

| Property | Type                                                                                 | Description  |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| a        | [boolean](https://developer.mozilla.org/javascript/reference/global_objects/boolean) | Description. |

`
