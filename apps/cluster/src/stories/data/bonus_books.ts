export default [
 {
  "id": 1,
  "payoutMultiplier": 2.52,
  "events": [
   {
    "index": 0,
    "type": "reveal",
    "board": [
     [
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "Q"
      },
      {
       "name": "MOON",
       "scatter": true
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "SMITH"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "GUARD"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "FARMER"
      },
      {
       "name": "A"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "FARMER"
      },
      {
       "name": "MOON",
       "scatter": true
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "K"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "J"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "MOON",
       "scatter": true
      }
     ]
    ],
    "paddingPositions": [
     12,
     96,
     171,
     60,
     20,
     164
    ],
    "gameType": "basegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     1,
     2
    ]
   },
   {
    "index": 1,
    "type": "winInfo",
    "totalWin": 50,
    "wins": [
     {
      "symbol": "SMITH",
      "clusterSize": 6,
      "win": 50,
      "positions": [
       {
        "reel": 0,
        "row": 2
       },
       {
        "reel": 0,
        "row": 3
       },
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 3,
        "row": 2
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 50,
       "overlay": {
        "reel": 2,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 2,
    "type": "updateTumbleWin",
    "amount": 50
   },
   {
    "index": 3,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "MOON",
       "scatter": true
      }
     ],
     [
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "J"
      }
     ],
     [],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 2
     },
     {
      "reel": 0,
      "row": 3
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 2
     }
    ]
   },
   {
    "index": 4,
    "type": "setWin",
    "amount": 50,
    "winLevel": 2
   },
   {
    "index": 5,
    "type": "setTotalWin",
    "amount": 50
   },
   {
    "index": 6,
    "type": "freeSpinTrigger",
    "totalFs": 15,
    "positions": [
     {
      "reel": 0,
      "row": 2
     },
     {
      "reel": 0,
      "row": 3
     },
     {
      "reel": 1,
      "row": 4
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     }
    ]
   },
   {
    "index": 7,
    "type": "updateFreeSpin",
    "amount": 1,
    "total": 15
   },
   {
    "index": 8,
    "type": "reveal",
    "board": [
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      },
      {
       "name": "Q"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "K"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "K"
      },
      {
       "name": "J"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "K"
      }
     ]
    ],
    "paddingPositions": [
     146,
     153,
     129,
     45,
     176,
     235
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 9,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 10,
    "type": "setTotalWin",
    "amount": 50
   },
   {
    "index": 11,
    "type": "updateFreeSpin",
    "amount": 2,
    "total": 15
   },
   {
    "index": 12,
    "type": "reveal",
    "board": [
     [
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "K"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "K"
      },
      {
       "name": "K"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "Q"
      },
      {
       "name": "K"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      }
     ]
    ],
    "paddingPositions": [
     8,
     185,
     207,
     196,
     90,
     109
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 13,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 14,
    "type": "winInfo",
    "totalWin": 50,
    "wins": [
     {
      "symbol": "SMITH",
      "clusterSize": 8,
      "win": 50,
      "positions": [
       {
        "reel": 1,
        "row": 1
       },
       {
        "reel": 1,
        "row": 2
       },
       {
        "reel": 0,
        "row": 2
       },
       {
        "reel": 0,
        "row": 3
       },
       {
        "reel": 0,
        "row": 4
       },
       {
        "reel": 1,
        "row": 4
       },
       {
        "reel": 1,
        "row": 5
       },
       {
        "reel": 1,
        "row": 3
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 50,
       "overlay": {
        "reel": 1,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 15,
    "type": "updateTumbleWin",
    "amount": 50
   },
   {
    "index": 16,
    "type": "vampireKillUpdate",
    "killsAdded": 5,
    "totalKills": 5
   },
   {
    "index": 17,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PEASANT"
      }
     ],
     [],
     [],
     [],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 2
     },
     {
      "reel": 0,
      "row": 3
     },
     {
      "reel": 0,
      "row": 4
     },
     {
      "reel": 1,
      "row": 1
     },
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 1,
      "row": 4
     },
     {
      "reel": 1,
      "row": 5
     },
     {
      "reel": 1,
      "row": 3
     }
    ]
   },
   {
    "index": 18,
    "type": "setWin",
    "amount": 50,
    "winLevel": 2
   },
   {
    "index": 19,
    "type": "setTotalWin",
    "amount": 100
   },
   {
    "index": 20,
    "type": "updateFreeSpin",
    "amount": 3,
    "total": 15
   },
   {
    "index": 21,
    "type": "reveal",
    "board": [
     [
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "K"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "Q"
      }
     ]
    ],
    "paddingPositions": [
     70,
     224,
     73,
     69,
     141,
     101
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 22,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 23,
    "type": "winInfo",
    "totalWin": 50,
    "wins": [
     {
      "symbol": "SMITH",
      "clusterSize": 6,
      "win": 50,
      "positions": [
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 5,
        "row": 3
       },
       {
        "reel": 5,
        "row": 2
       },
       {
        "reel": 5,
        "row": 4
       },
       {
        "reel": 5,
        "row": 5
       },
       {
        "reel": 4,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 50,
       "overlay": {
        "reel": 5,
        "row": 4
       }
      }
     }
    ]
   },
   {
    "index": 24,
    "type": "updateTumbleWin",
    "amount": 50
   },
   {
    "index": 25,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [],
     [],
     [],
     [
      {
       "name": "Q"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 5,
      "row": 3
     },
     {
      "reel": 5,
      "row": 2
     },
     {
      "reel": 5,
      "row": 4
     },
     {
      "reel": 5,
      "row": 5
     }
    ]
   },
   {
    "index": 26,
    "type": "setWin",
    "amount": 50,
    "winLevel": 2
   },
   {
    "index": 27,
    "type": "setTotalWin",
    "amount": 150
   },
   {
    "index": 28,
    "type": "updateFreeSpin",
    "amount": 4,
    "total": 15
   },
   {
    "index": 29,
    "type": "reveal",
    "board": [
     [
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "J"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "Q"
      },
      {
       "name": "K"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PRIEST"
      }
     ]
    ],
    "paddingPositions": [
     112,
     240,
     182,
     117,
     60,
     220
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 30,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 31,
    "type": "setTotalWin",
    "amount": 150
   },
   {
    "index": 32,
    "type": "updateFreeSpin",
    "amount": 5,
    "total": 15
   },
   {
    "index": 33,
    "type": "reveal",
    "board": [
     [
      {
       "name": "J"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "K"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "Q"
      },
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "Q"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "K"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      }
     ]
    ],
    "paddingPositions": [
     109,
     123,
     76,
     109,
     102,
     190
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 34,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 35,
    "type": "setTotalWin",
    "amount": 150
   },
   {
    "index": 36,
    "type": "updateFreeSpin",
    "amount": 6,
    "total": 15
   },
   {
    "index": 37,
    "type": "reveal",
    "board": [
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "K"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "J"
      },
      {
       "name": "Q"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "Q"
      },
      {
       "name": "K"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      }
     ]
    ],
    "paddingPositions": [
     190,
     134,
     193,
     105,
     91,
     193
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 38,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 39,
    "type": "setTotalWin",
    "amount": 150
   },
   {
    "index": 40,
    "type": "updateFreeSpin",
    "amount": 7,
    "total": 15
   },
   {
    "index": 41,
    "type": "reveal",
    "board": [
     [
      {
       "name": "J"
      },
      {
       "name": "Q"
      },
      {
       "name": "J"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "J"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      }
     ]
    ],
    "paddingPositions": [
     121,
     146,
     235,
     219,
     118,
     5
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 42,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 43,
    "type": "setTotalWin",
    "amount": 150
   },
   {
    "index": 44,
    "type": "updateFreeSpin",
    "amount": 8,
    "total": 15
   },
   {
    "index": 45,
    "type": "reveal",
    "board": [
     [
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "Q"
      },
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      }
     ]
    ],
    "paddingPositions": [
     110,
     159,
     115,
     89,
     129,
     129
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 46,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 47,
    "type": "setTotalWin",
    "amount": 150
   },
   {
    "index": 48,
    "type": "updateFreeSpin",
    "amount": 9,
    "total": 15
   },
   {
    "index": 49,
    "type": "reveal",
    "board": [
     [
      {
       "name": "J"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "K"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "K"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "Q"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      }
     ]
    ],
    "paddingPositions": [
     216,
     200,
     84,
     198,
     154,
     193
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 50,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 51,
    "type": "setTotalWin",
    "amount": 150
   },
   {
    "index": 52,
    "type": "updateFreeSpin",
    "amount": 10,
    "total": 15
   },
   {
    "index": 53,
    "type": "reveal",
    "board": [
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "J"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "J"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "K"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      }
     ]
    ],
    "paddingPositions": [
     34,
     11,
     196,
     120,
     230,
     230
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 54,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 55,
    "type": "setTotalWin",
    "amount": 150
   },
   {
    "index": 56,
    "type": "updateFreeSpin",
    "amount": 11,
    "total": 15
   },
   {
    "index": 57,
    "type": "reveal",
    "board": [
     [
      {
       "name": "J"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "K"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "J"
      },
      {
       "name": "Q"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "Q"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "A"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "Q"
      },
      {
       "name": "FARMER"
      }
     ]
    ],
    "paddingPositions": [
     205,
     17,
     110,
     105,
     67,
     49
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 58,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 59,
    "type": "setTotalWin",
    "amount": 150
   },
   {
    "index": 60,
    "type": "updateFreeSpin",
    "amount": 12,
    "total": 15
   },
   {
    "index": 61,
    "type": "reveal",
    "board": [
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "A"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "J"
      },
      {
       "name": "Q"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "K"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      }
     ]
    ],
    "paddingPositions": [
     54,
     218,
     167,
     55,
     218,
     227
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 62,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 63,
    "type": "setTotalWin",
    "amount": 150
   },
   {
    "index": 64,
    "type": "updateFreeSpin",
    "amount": 13,
    "total": 15
   },
   {
    "index": 65,
    "type": "reveal",
    "board": [
     [
      {
       "name": "FARMER"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "J"
      },
      {
       "name": "Q"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "Q"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "Q"
      },
      {
       "name": "A"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      }
     ]
    ],
    "paddingPositions": [
     155,
     114,
     244,
     203,
     184,
     105
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 66,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 67,
    "type": "setTotalWin",
    "amount": 150
   },
   {
    "index": 68,
    "type": "updateFreeSpin",
    "amount": 14,
    "total": 15
   },
   {
    "index": 69,
    "type": "reveal",
    "board": [
     [
      {
       "name": "Q"
      },
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "MOON",
       "scatter": true
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "K"
      },
      {
       "name": "K"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "K"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "MOON",
       "scatter": true
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "Q"
      }
     ]
    ],
    "paddingPositions": [
     27,
     234,
     58,
     195,
     234,
     124
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 70,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 71,
    "type": "winInfo",
    "totalWin": 2,
    "wins": [
     {
      "symbol": "K",
      "clusterSize": 5,
      "win": 2,
      "positions": [
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 3,
        "row": 3
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 2,
       "overlay": {
        "reel": 3,
        "row": 4
       }
      }
     }
    ]
   },
   {
    "index": 72,
    "type": "updateTumbleWin",
    "amount": 2
   },
   {
    "index": 73,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [],
     [
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      }
     ],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 3
     }
    ]
   },
   {
    "index": 74,
    "type": "setWin",
    "amount": 2,
    "winLevel": 1
   },
   {
    "index": 75,
    "type": "setTotalWin",
    "amount": 152
   },
   {
    "index": 76,
    "type": "updateFreeSpin",
    "amount": 15,
    "total": 15
   },
   {
    "index": 77,
    "type": "reveal",
    "board": [
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "Q"
      },
      {
       "name": "Q"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "Q"
      },
      {
       "name": "A"
      },
      {
       "name": "PEASANT"
      }
     ]
    ],
    "paddingPositions": [
     203,
     107,
     27,
     240,
     140,
     103
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 78,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 79,
    "type": "winInfo",
    "totalWin": 100,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 7,
      "win": 100,
      "positions": [
       {
        "reel": 0,
        "row": 4
       },
       {
        "reel": 1,
        "row": 4
       },
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 2,
        "row": 5
       },
       {
        "reel": 1,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 100,
       "overlay": {
        "reel": 2,
        "row": 4
       }
      }
     }
    ]
   },
   {
    "index": 80,
    "type": "updateTumbleWin",
    "amount": 100
   },
   {
    "index": 81,
    "type": "vampireKillUpdate",
    "killsAdded": 6,
    "totalKills": 11
   },
   {
    "index": 82,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "Q"
      }
     ],
     [],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 4
     },
     {
      "reel": 1,
      "row": 4
     },
     {
      "reel": 1,
      "row": 5
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 5
     },
     {
      "reel": 3,
      "row": 3
     }
    ]
   },
   {
    "index": 83,
    "type": "setWin",
    "amount": 100,
    "winLevel": 3
   },
   {
    "index": 84,
    "type": "setTotalWin",
    "amount": 252
   },
   {
    "index": 85,
    "type": "freeSpinEnd",
    "amount": 202,
    "winLevel": 2
   },
   {
    "index": 86,
    "type": "finalWin",
    "amount": 252
   }
  ]
 },
 {
  "id": 2,
  "payoutMultiplier": 3958.62,
  "events": [
   {
    "index": 0,
    "type": "reveal",
    "board": [
     [
      {
       "name": "FARMER"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "MOON",
       "scatter": true
      }
     ],
     [
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "MOON",
       "scatter": true
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "FARMER"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ]
    ],
    "paddingPositions": [
     116,
     155,
     149,
     145,
     164,
     184
    ],
    "gameType": "basegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     1,
     2
    ]
   },
   {
    "index": 1,
    "type": "winInfo",
    "totalWin": 20,
    "wins": [
     {
      "symbol": "GUARD",
      "clusterSize": 5,
      "win": 20,
      "positions": [
       {
        "reel": 2,
        "row": 5
       },
       {
        "reel": 3,
        "row": 5
       },
       {
        "reel": 4,
        "row": 5
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 2,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 20,
       "overlay": {
        "reel": 3,
        "row": 5
       }
      }
     }
    ]
   },
   {
    "index": 2,
    "type": "updateTumbleWin",
    "amount": 20
   },
   {
    "index": 3,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "MOON",
       "scatter": true
      }
     ],
     [
      {
       "name": "K"
      }
     ],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 2,
      "row": 5
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 4,
      "row": 5
     }
    ]
   },
   {
    "index": 4,
    "type": "setWin",
    "amount": 20,
    "winLevel": 2
   },
   {
    "index": 5,
    "type": "setTotalWin",
    "amount": 20
   },
   {
    "index": 6,
    "type": "freeSpinTrigger",
    "totalFs": 18,
    "positions": [
     {
      "reel": 0,
      "row": 5
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 3,
      "row": 1
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 5,
      "row": 4
     }
    ]
   },
   {
    "index": 7,
    "type": "updateFreeSpin",
    "amount": 1,
    "total": 18
   },
   {
    "index": 8,
    "type": "reveal",
    "board": [
     [
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "Q"
      },
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "A"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "Q"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "J"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      }
     ]
    ],
    "paddingPositions": [
     24,
     194,
     185,
     76,
     7,
     98
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 9,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 10,
    "type": "setTotalWin",
    "amount": 20
   },
   {
    "index": 11,
    "type": "updateFreeSpin",
    "amount": 2,
    "total": 18
   },
   {
    "index": 12,
    "type": "reveal",
    "board": [
     [
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "K"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "Q"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "Q"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "Q"
      },
      {
       "name": "Q"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "Q"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      },
      {
       "name": "K"
      }
     ]
    ],
    "paddingPositions": [
     8,
     20,
     149,
     184,
     22,
     53
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     1
    ]
   },
   {
    "index": 13,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 14,
    "type": "winInfo",
    "totalWin": 2,
    "wins": [
     {
      "symbol": "K",
      "clusterSize": 5,
      "win": 2,
      "positions": [
       {
        "reel": 0,
        "row": 5
       },
       {
        "reel": 0,
        "row": 4
       },
       {
        "reel": 0,
        "row": 3
       },
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 0,
        "row": 2
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 2,
       "overlay": {
        "reel": 0,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 15,
    "type": "updateTumbleWin",
    "amount": 2
   },
   {
    "index": 16,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "Q"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "A"
      }
     ],
     [],
     [],
     [],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 5
     },
     {
      "reel": 0,
      "row": 4
     },
     {
      "reel": 0,
      "row": 3
     },
     {
      "reel": 0,
      "row": 2
     },
     {
      "reel": 1,
      "row": 3
     }
    ]
   },
   {
    "index": 17,
    "type": "winInfo",
    "totalWin": 30,
    "wins": [
     {
      "symbol": "FARMER",
      "clusterSize": 6,
      "win": 30,
      "positions": [
       {
        "reel": 0,
        "row": 2
       },
       {
        "reel": 1,
        "row": 2
       },
       {
        "reel": 1,
        "row": 1
       },
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 0,
        "row": 1
       },
       {
        "reel": 0,
        "row": 3
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 30,
       "overlay": {
        "reel": 1,
        "row": 2
       }
      }
     }
    ]
   },
   {
    "index": 18,
    "type": "updateTumbleWin",
    "amount": 32
   },
   {
    "index": 19,
    "type": "vampireKillUpdate",
    "killsAdded": 5,
    "totalKills": 5
   },
   {
    "index": 20,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "PRIEST"
      }
     ],
     [],
     [],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 2
     },
     {
      "reel": 0,
      "row": 1
     },
     {
      "reel": 0,
      "row": 3
     },
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 1,
      "row": 1
     },
     {
      "reel": 2,
      "row": 1
     }
    ]
   },
   {
    "index": 21,
    "type": "setWin",
    "amount": 32,
    "winLevel": 2
   },
   {
    "index": 22,
    "type": "setTotalWin",
    "amount": 52
   },
   {
    "index": 23,
    "type": "updateFreeSpin",
    "amount": 3,
    "total": 18
   },
   {
    "index": 24,
    "type": "reveal",
    "board": [
     [
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "Q"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "SMITH"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "K"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "Q"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "A"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "K"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "SMITH"
      }
     ]
    ],
    "paddingPositions": [
     110,
     53,
     131,
     130,
     67,
     21
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 25,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 26,
    "type": "winInfo",
    "totalWin": 8,
    "wins": [
     {
      "symbol": "A",
      "clusterSize": 7,
      "win": 8,
      "positions": [
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 1,
        "row": 4
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 5,
        "row": 4
       },
       {
        "reel": 3,
        "row": 5
       },
       {
        "reel": 2,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 8,
       "overlay": {
        "reel": 3,
        "row": 4
       }
      }
     }
    ]
   },
   {
    "index": 27,
    "type": "updateTumbleWin",
    "amount": 8
   },
   {
    "index": 28,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "PEASANT"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 1,
      "row": 4
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 5
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 5,
      "row": 4
     }
    ]
   },
   {
    "index": 29,
    "type": "setWin",
    "amount": 8,
    "winLevel": 1
   },
   {
    "index": 30,
    "type": "setTotalWin",
    "amount": 60
   },
   {
    "index": 31,
    "type": "updateFreeSpin",
    "amount": 4,
    "total": 18
   },
   {
    "index": 32,
    "type": "reveal",
    "board": [
     [
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "Q"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "K"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      }
     ]
    ],
    "paddingPositions": [
     72,
     74,
     245,
     15,
     233,
     110
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 33,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 34,
    "type": "winInfo",
    "totalWin": 30,
    "wins": [
     {
      "symbol": "FARMER",
      "clusterSize": 6,
      "win": 30,
      "positions": [
       {
        "reel": 0,
        "row": 3
       },
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 1,
        "row": 2
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 30,
       "overlay": {
        "reel": 2,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 35,
    "type": "updateTumbleWin",
    "amount": 30
   },
   {
    "index": 36,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 3
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 3,
      "row": 2
     }
    ]
   },
   {
    "index": 37,
    "type": "setWin",
    "amount": 30,
    "winLevel": 2
   },
   {
    "index": 38,
    "type": "setTotalWin",
    "amount": 90
   },
   {
    "index": 39,
    "type": "updateFreeSpin",
    "amount": 5,
    "total": 18
   },
   {
    "index": 40,
    "type": "reveal",
    "board": [
     [
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      },
      {
       "name": "Q"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "K"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      }
     ]
    ],
    "paddingPositions": [
     145,
     16,
     108,
     56,
     59,
     5
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 41,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 42,
    "type": "setTotalWin",
    "amount": 90
   },
   {
    "index": 43,
    "type": "updateFreeSpin",
    "amount": 6,
    "total": 18
   },
   {
    "index": 44,
    "type": "reveal",
    "board": [
     [
      {
       "name": "SMITH"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "J"
      },
      {
       "name": "Q"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "K"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "K"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "Q"
      }
     ]
    ],
    "paddingPositions": [
     249,
     23,
     82,
     122,
     224,
     69
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 45,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 46,
    "type": "winInfo",
    "totalWin": 30,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 5,
      "win": 30,
      "positions": [
       {
        "reel": 1,
        "row": 2
       },
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 1,
        "row": 4
       },
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 2,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 30,
       "overlay": {
        "reel": 1,
        "row": 4
       }
      }
     }
    ]
   },
   {
    "index": 47,
    "type": "updateTumbleWin",
    "amount": 30
   },
   {
    "index": 48,
    "type": "vampireKillUpdate",
    "killsAdded": 4,
    "totalKills": 9
   },
   {
    "index": 49,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "GUARD"
      }
     ],
     [],
     [],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 1,
      "row": 4
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 5
     }
    ]
   },
   {
    "index": 50,
    "type": "setWin",
    "amount": 30,
    "winLevel": 2
   },
   {
    "index": 51,
    "type": "setTotalWin",
    "amount": 120
   },
   {
    "index": 52,
    "type": "updateFreeSpin",
    "amount": 7,
    "total": 18
   },
   {
    "index": 53,
    "type": "reveal",
    "board": [
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "Q"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "J"
      },
      {
       "name": "Q"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "GUARD"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "K"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "Q"
      },
      {
       "name": "A"
      }
     ]
    ],
    "paddingPositions": [
     129,
     220,
     101,
     31,
     222,
     79
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 54,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 55,
    "type": "setTotalWin",
    "amount": 120
   },
   {
    "index": 56,
    "type": "updateFreeSpin",
    "amount": 8,
    "total": 18
   },
   {
    "index": 57,
    "type": "reveal",
    "board": [
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "K"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "Q"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "Q"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ]
    ],
    "paddingPositions": [
     16,
     23,
     208,
     152,
     32,
     72
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 58,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 59,
    "type": "winInfo",
    "totalWin": 122,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 7,
      "win": 100,
      "positions": [
       {
        "reel": 0,
        "row": 4
       },
       {
        "reel": 1,
        "row": 4
       },
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 1,
        "row": 2
       },
       {
        "reel": 0,
        "row": 2
       },
       {
        "reel": 0,
        "row": 3
       },
       {
        "reel": 0,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 100,
       "overlay": {
        "reel": 0,
        "row": 3
       }
      }
     },
     {
      "symbol": "GUARD",
      "clusterSize": 5,
      "win": 20,
      "positions": [
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 0,
        "row": 3
       },
       {
        "reel": 0,
        "row": 2
       },
       {
        "reel": 2,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 20,
       "overlay": {
        "reel": 1,
        "row": 3
       }
      }
     },
     {
      "symbol": "A",
      "clusterSize": 5,
      "win": 2,
      "positions": [
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 4,
        "row": 1
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 2,
       "overlay": {
        "reel": 4,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 60,
    "type": "updateTumbleWin",
    "amount": 122
   },
   {
    "index": 61,
    "type": "vampireKillUpdate",
    "killsAdded": 5,
    "totalKills": 14
   },
   {
    "index": 62,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "K"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      }
     ],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 4
     },
     {
      "reel": 0,
      "row": 2
     },
     {
      "reel": 0,
      "row": 3
     },
     {
      "reel": 0,
      "row": 5
     },
     {
      "reel": 0,
      "row": 3
     },
     {
      "reel": 0,
      "row": 2
     },
     {
      "reel": 1,
      "row": 4
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 1
     }
    ]
   },
   {
    "index": 63,
    "type": "setWin",
    "amount": 122,
    "winLevel": 3
   },
   {
    "index": 64,
    "type": "setTotalWin",
    "amount": 242
   },
   {
    "index": 65,
    "type": "updateFreeSpin",
    "amount": 9,
    "total": 18
   },
   {
    "index": 66,
    "type": "reveal",
    "board": [
     [
      {
       "name": "J"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "K"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "Q"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "Q"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      }
     ]
    ],
    "paddingPositions": [
     109,
     87,
     91,
     193,
     104,
     134
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 67,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 68,
    "type": "setTotalWin",
    "amount": 242
   },
   {
    "index": 69,
    "type": "updateFreeSpin",
    "amount": 10,
    "total": 18
   },
   {
    "index": 70,
    "type": "reveal",
    "board": [
     [
      {
       "name": "A"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "Q"
      },
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "A"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "A"
      }
     ]
    ],
    "paddingPositions": [
     171,
     160,
     67,
     149,
     157,
     244
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 71,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 72,
    "type": "setTotalWin",
    "amount": 242
   },
   {
    "index": 73,
    "type": "updateFreeSpin",
    "amount": 11,
    "total": 18
   },
   {
    "index": 74,
    "type": "reveal",
    "board": [
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "Q"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "K"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      }
     ]
    ],
    "paddingPositions": [
     2,
     80,
     31,
     129,
     236,
     172
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 75,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 76,
    "type": "winInfo",
    "totalWin": 2,
    "wins": [
     {
      "symbol": "A",
      "clusterSize": 5,
      "win": 2,
      "positions": [
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 0,
        "row": 3
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 3,
        "row": 2
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 2,
       "overlay": {
        "reel": 2,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 77,
    "type": "updateTumbleWin",
    "amount": 2
   },
   {
    "index": 78,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      }
     ],
     [],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 3
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 2
     }
    ]
   },
   {
    "index": 79,
    "type": "setWin",
    "amount": 2,
    "winLevel": 1
   },
   {
    "index": 80,
    "type": "setTotalWin",
    "amount": 244
   },
   {
    "index": 81,
    "type": "updateFreeSpin",
    "amount": 12,
    "total": 18
   },
   {
    "index": 82,
    "type": "reveal",
    "board": [
     [
      {
       "name": "J"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "Q"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "J"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "K"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "Q"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "A"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      }
     ]
    ],
    "paddingPositions": [
     44,
     166,
     229,
     150,
     67,
     110
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 83,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 84,
    "type": "setTotalWin",
    "amount": 244
   },
   {
    "index": 85,
    "type": "updateFreeSpin",
    "amount": 13,
    "total": 18
   },
   {
    "index": 86,
    "type": "reveal",
    "board": [
     [
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "J"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "Q"
      }
     ]
    ],
    "paddingPositions": [
     176,
     64,
     123,
     77,
     178,
     160
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 87,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 88,
    "type": "setTotalWin",
    "amount": 244
   },
   {
    "index": 89,
    "type": "updateFreeSpin",
    "amount": 14,
    "total": 18
   },
   {
    "index": 90,
    "type": "reveal",
    "board": [
     [
      {
       "name": "FARMER"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "Q"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      }
     ]
    ],
    "paddingPositions": [
     218,
     83,
     54,
     27,
     3,
     52
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 91,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 92,
    "type": "winInfo",
    "totalWin": 694,
    "wins": [
     {
      "symbol": "A",
      "clusterSize": 8,
      "win": 8,
      "positions": [
       {
        "reel": 4,
        "row": 5
       },
       {
        "reel": 3,
        "row": 5
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 5,
        "row": 5
       },
       {
        "reel": 5,
        "row": 4
       },
       {
        "reel": 4,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 8,
       "overlay": {
        "reel": 4,
        "row": 4
       }
      }
     },
     {
      "symbol": "GUARD",
      "clusterSize": 9,
      "win": 600,
      "positions": [
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 3,
        "row": 5
       },
       {
        "reel": 2,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 600,
       "overlay": {
        "reel": 3,
        "row": 3
       }
      }
     },
     {
      "symbol": "SMITH",
      "clusterSize": 6,
      "win": 50,
      "positions": [
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 3,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 50,
       "overlay": {
        "reel": 3,
        "row": 3
       }
      }
     },
     {
      "symbol": "K",
      "clusterSize": 6,
      "win": 6,
      "positions": [
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 3,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 6,
       "overlay": {
        "reel": 3,
        "row": 4
       }
      }
     },
     {
      "symbol": "FARMER",
      "clusterSize": 8,
      "win": 30,
      "positions": [
       {
        "reel": 4,
        "row": 1
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 3,
        "row": 5
       },
       {
        "reel": 5,
        "row": 3
       },
       {
        "reel": 4,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 30,
       "overlay": {
        "reel": 4,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 93,
    "type": "updateTumbleWin",
    "amount": 694
   },
   {
    "index": 94,
    "type": "vampireKillUpdate",
    "killsAdded": 7,
    "totalKills": 21
   },
   {
    "index": 95,
    "type": "updateGlobalMult",
    "globalMult": 2
   },
   {
    "index": 96,
    "type": "vampireLevelUp",
    "level": 1,
    "eliminatedSymbol": "PEASANT",
    "freeSpinsAwarded": 2
   },
   {
    "index": 97,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "J"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "A"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 5
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 5,
      "row": 5
     },
     {
      "reel": 5,
      "row": 4
     },
     {
      "reel": 5,
      "row": 3
     }
    ]
   },
   {
    "index": 98,
    "type": "winInfo",
    "totalWin": 100,
    "wins": [
     {
      "symbol": "SMITH",
      "clusterSize": 6,
      "win": 100,
      "positions": [
       {
        "reel": 1,
        "row": 1
       },
       {
        "reel": 1,
        "row": 2
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 3,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 2,
       "clusterMult": 1,
       "winWithoutMult": 50,
       "overlay": {
        "reel": 2,
        "row": 2
       }
      }
     }
    ]
   },
   {
    "index": 99,
    "type": "updateTumbleWin",
    "amount": 794
   },
   {
    "index": 100,
    "type": "vampireKillUpdate",
    "killsAdded": 5,
    "totalKills": 26
   },
   {
    "index": 101,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      }
     ],
     [],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 1,
      "row": 1
     },
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 4
     }
    ]
   },
   {
    "index": 102,
    "type": "setWin",
    "amount": 794,
    "winLevel": 5
   },
   {
    "index": 103,
    "type": "setTotalWin",
    "amount": 1038
   },
   {
    "index": 104,
    "type": "updateFreeSpin",
    "amount": 15,
    "total": 20
   },
   {
    "index": 105,
    "type": "reveal",
    "board": [
     [
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "J"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "A"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "Q"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "J"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      }
     ]
    ],
    "paddingPositions": [
     206,
     246,
     117,
     211,
     118,
     35
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 106,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 107,
    "type": "setTotalWin",
    "amount": 1038
   },
   {
    "index": 108,
    "type": "updateFreeSpin",
    "amount": 16,
    "total": 20
   },
   {
    "index": 109,
    "type": "reveal",
    "board": [
     [
      {
       "name": "K"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "Q"
      },
      {
       "name": "Q"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "A"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "J"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "J"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ]
    ],
    "paddingPositions": [
     40,
     146,
     8,
     206,
     238,
     33
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 110,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 111,
    "type": "winInfo",
    "totalWin": 216,
    "wins": [
     {
      "symbol": "GUARD",
      "clusterSize": 6,
      "win": 140,
      "positions": [
       {
        "reel": 0,
        "row": 2
       },
       {
        "reel": 1,
        "row": 2
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 3,
        "row": 3
       }
      ],
      "meta": {
       "globalMult": 2,
       "clusterMult": 1,
       "winWithoutMult": 70,
       "overlay": {
        "reel": 2,
        "row": 2
       }
      }
     },
     {
      "symbol": "PRIEST",
      "clusterSize": 5,
      "win": 60,
      "positions": [
       {
        "reel": 1,
        "row": 1
       },
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 1,
        "row": 3
       }
      ],
      "meta": {
       "globalMult": 2,
       "clusterMult": 1,
       "winWithoutMult": 30,
       "overlay": {
        "reel": 2,
        "row": 2
       }
      }
     },
     {
      "symbol": "A",
      "clusterSize": 6,
      "win": 16,
      "positions": [
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 3,
        "row": 1
       },
       {
        "reel": 2,
        "row": 1
       }
      ],
      "meta": {
       "globalMult": 2,
       "clusterMult": 1,
       "winWithoutMult": 8,
       "overlay": {
        "reel": 2,
        "row": 2
       }
      }
     }
    ]
   },
   {
    "index": 112,
    "type": "updateTumbleWin",
    "amount": 216
   },
   {
    "index": 113,
    "type": "vampireKillUpdate",
    "killsAdded": 5,
    "totalKills": 31
   },
   {
    "index": 114,
    "type": "updateGlobalMult",
    "globalMult": 3
   },
   {
    "index": 115,
    "type": "vampireLevelUp",
    "level": 2,
    "eliminatedSymbol": "FARMER",
    "freeSpinsAwarded": 2
   },
   {
    "index": 116,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "J"
      }
     ],
     [],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 2
     },
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 1,
      "row": 1
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 1
     }
    ]
   },
   {
    "index": 117,
    "type": "setWin",
    "amount": 216,
    "winLevel": 4
   },
   {
    "index": 118,
    "type": "setTotalWin",
    "amount": 1254
   },
   {
    "index": 119,
    "type": "updateFreeSpin",
    "amount": 17,
    "total": 22
   },
   {
    "index": 120,
    "type": "reveal",
    "board": [
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "J"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "GUARD"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "SMITH"
      }
     ]
    ],
    "paddingPositions": [
     12,
     213,
     40,
     71,
     100,
     130
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 121,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 122,
    "type": "winInfo",
    "totalWin": 360,
    "wins": [
     {
      "symbol": "GUARD",
      "clusterSize": 8,
      "win": 210,
      "positions": [
       {
        "reel": 1,
        "row": 5
       },
       {
        "reel": 2,
        "row": 5
       },
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 2,
        "row": 1
       }
      ],
      "meta": {
       "globalMult": 3,
       "clusterMult": 1,
       "winWithoutMult": 70,
       "overlay": {
        "reel": 2,
        "row": 3
       }
      }
     },
     {
      "symbol": "SMITH",
      "clusterSize": 6,
      "win": 150,
      "positions": [
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 2,
        "row": 5
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 4,
        "row": 5
       },
       {
        "reel": 3,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 3,
       "clusterMult": 1,
       "winWithoutMult": 50,
       "overlay": {
        "reel": 3,
        "row": 5
       }
      }
     }
    ]
   },
   {
    "index": 123,
    "type": "updateTumbleWin",
    "amount": 360
   },
   {
    "index": 124,
    "type": "vampireKillUpdate",
    "killsAdded": 8,
    "totalKills": 39
   },
   {
    "index": 125,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "Q"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "GUARD"
      }
     ],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 1,
      "row": 5
     },
     {
      "reel": 2,
      "row": 5
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 5
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 5
     }
    ]
   },
   {
    "index": 126,
    "type": "setWin",
    "amount": 360,
    "winLevel": 4
   },
   {
    "index": 127,
    "type": "setTotalWin",
    "amount": 1614
   },
   {
    "index": 128,
    "type": "updateFreeSpin",
    "amount": 18,
    "total": 22
   },
   {
    "index": 129,
    "type": "reveal",
    "board": [
     [
      {
       "name": "J"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      }
     ]
    ],
    "paddingPositions": [
     216,
     197,
     19,
     166,
     64,
     84
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 130,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 131,
    "type": "winInfo",
    "totalWin": 159,
    "wins": [
     {
      "symbol": "SMITH",
      "clusterSize": 5,
      "win": 45,
      "positions": [
       {
        "reel": 3,
        "row": 1
       },
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 3,
        "row": 3
       }
      ],
      "meta": {
       "globalMult": 3,
       "clusterMult": 1,
       "winWithoutMult": 15,
       "overlay": {
        "reel": 2,
        "row": 2
       }
      }
     },
     {
      "symbol": "A",
      "clusterSize": 6,
      "win": 24,
      "positions": [
       {
        "reel": 0,
        "row": 2
       },
       {
        "reel": 0,
        "row": 3
       },
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 2,
        "row": 1
       }
      ],
      "meta": {
       "globalMult": 3,
       "clusterMult": 1,
       "winWithoutMult": 8,
       "overlay": {
        "reel": 1,
        "row": 2
       }
      }
     },
     {
      "symbol": "PRIEST",
      "clusterSize": 5,
      "win": 90,
      "positions": [
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 2,
        "row": 1
       }
      ],
      "meta": {
       "globalMult": 3,
       "clusterMult": 1,
       "winWithoutMult": 30,
       "overlay": {
        "reel": 2,
        "row": 2
       }
      }
     }
    ]
   },
   {
    "index": 132,
    "type": "updateTumbleWin",
    "amount": 159
   },
   {
    "index": 133,
    "type": "vampireKillUpdate",
    "killsAdded": 4,
    "totalKills": 43
   },
   {
    "index": 134,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      }
     ],
     [],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 2
     },
     {
      "reel": 0,
      "row": 3
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 3,
      "row": 1
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 2
     }
    ]
   },
   {
    "index": 135,
    "type": "setWin",
    "amount": 159,
    "winLevel": 3
   },
   {
    "index": 136,
    "type": "setTotalWin",
    "amount": 1773
   },
   {
    "index": 137,
    "type": "updateFreeSpin",
    "amount": 19,
    "total": 22
   },
   {
    "index": 138,
    "type": "reveal",
    "board": [
     [
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "MOON",
       "scatter": true
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "Q"
      },
      {
       "name": "Q"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      }
     ]
    ],
    "paddingPositions": [
     195,
     243,
     18,
     82,
     168,
     210
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 139,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 140,
    "type": "winInfo",
    "totalWin": 234,
    "wins": [
     {
      "symbol": "GUARD",
      "clusterSize": 6,
      "win": 210,
      "positions": [
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 3,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 3,
       "clusterMult": 1,
       "winWithoutMult": 70,
       "overlay": {
        "reel": 2,
        "row": 3
       }
      }
     },
     {
      "symbol": "A",
      "clusterSize": 6,
      "win": 24,
      "positions": [
       {
        "reel": 1,
        "row": 4
       },
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 1,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 3,
       "clusterMult": 1,
       "winWithoutMult": 8,
       "overlay": {
        "reel": 2,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 141,
    "type": "updateTumbleWin",
    "amount": 234
   },
   {
    "index": 142,
    "type": "vampireKillUpdate",
    "killsAdded": 3,
    "totalKills": 46
   },
   {
    "index": 143,
    "type": "updateGlobalMult",
    "globalMult": 5
   },
   {
    "index": 144,
    "type": "vampireLevelUp",
    "level": 3,
    "eliminatedSymbol": "SMITH",
    "freeSpinsAwarded": 3
   },
   {
    "index": 145,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "Q"
      }
     ],
     [],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 1,
      "row": 4
     },
     {
      "reel": 1,
      "row": 5
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 5
     }
    ]
   },
   {
    "index": 146,
    "type": "setWin",
    "amount": 234,
    "winLevel": 4
   },
   {
    "index": 147,
    "type": "setTotalWin",
    "amount": 2007
   },
   {
    "index": 148,
    "type": "updateFreeSpin",
    "amount": 20,
    "total": 25
   },
   {
    "index": 149,
    "type": "reveal",
    "board": [
     [
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "Q"
      },
      {
       "name": "J"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "Q"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      },
      {
       "name": "J"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      }
     ]
    ],
    "paddingPositions": [
     153,
     222,
     145,
     25,
     175,
     123
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 150,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 151,
    "type": "winInfo",
    "totalWin": 510,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 8,
      "win": 500,
      "positions": [
       {
        "reel": 1,
        "row": 5
       },
       {
        "reel": 2,
        "row": 5
       },
       {
        "reel": 3,
        "row": 5
       },
       {
        "reel": 4,
        "row": 5
       },
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 3,
        "row": 2
       }
      ],
      "meta": {
       "globalMult": 5,
       "clusterMult": 1,
       "winWithoutMult": 100,
       "overlay": {
        "reel": 2,
        "row": 4
       }
      }
     },
     {
      "symbol": "A",
      "clusterSize": 5,
      "win": 10,
      "positions": [
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 3,
        "row": 5
       },
       {
        "reel": 4,
        "row": 5
       },
       {
        "reel": 5,
        "row": 5
       },
       {
        "reel": 5,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 5,
       "clusterMult": 1,
       "winWithoutMult": 2,
       "overlay": {
        "reel": 4,
        "row": 5
       }
      }
     }
    ]
   },
   {
    "index": 152,
    "type": "updateTumbleWin",
    "amount": 510
   },
   {
    "index": 153,
    "type": "vampireKillUpdate",
    "killsAdded": 6,
    "totalKills": 52
   },
   {
    "index": 154,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "Q"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "MOON",
       "scatter": true
      }
     ],
     [
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 1,
      "row": 5
     },
     {
      "reel": 2,
      "row": 5
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 5,
      "row": 5
     },
     {
      "reel": 5,
      "row": 4
     }
    ]
   },
   {
    "index": 155,
    "type": "setWin",
    "amount": 510,
    "winLevel": 5
   },
   {
    "index": 156,
    "type": "setTotalWin",
    "amount": 2517
   },
   {
    "index": 157,
    "type": "updateFreeSpin",
    "amount": 21,
    "total": 25
   },
   {
    "index": 158,
    "type": "reveal",
    "board": [
     [
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "Q"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "Q"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "J"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "Q"
      }
     ]
    ],
    "paddingPositions": [
     218,
     167,
     85,
     44,
     68,
     131
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 159,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 160,
    "type": "winInfo",
    "totalWin": 500,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 8,
      "win": 500,
      "positions": [
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 3,
        "row": 5
       },
       {
        "reel": 4,
        "row": 5
       },
       {
        "reel": 5,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 5,
       "clusterMult": 1,
       "winWithoutMult": 100,
       "overlay": {
        "reel": 3,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 161,
    "type": "updateTumbleWin",
    "amount": 500
   },
   {
    "index": 162,
    "type": "vampireKillUpdate",
    "killsAdded": 7,
    "totalKills": 59
   },
   {
    "index": 163,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "J"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "Q"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 5,
      "row": 5
     }
    ]
   },
   {
    "index": 164,
    "type": "winInfo",
    "totalWin": 155,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 5,
      "win": 150,
      "positions": [
       {
        "reel": 5,
        "row": 1
       },
       {
        "reel": 5,
        "row": 2
       },
       {
        "reel": 5,
        "row": 3
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 5,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 5,
       "clusterMult": 1,
       "winWithoutMult": 30,
       "overlay": {
        "reel": 5,
        "row": 3
       }
      }
     },
     {
      "symbol": "Q",
      "clusterSize": 5,
      "win": 5,
      "positions": [
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 5,
        "row": 3
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 3,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 5,
       "clusterMult": 1,
       "winWithoutMult": 1,
       "overlay": {
        "reel": 4,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 165,
    "type": "updateTumbleWin",
    "amount": 655
   },
   {
    "index": 166,
    "type": "vampireKillUpdate",
    "killsAdded": 3,
    "totalKills": 62
   },
   {
    "index": 167,
    "type": "updateGlobalMult",
    "globalMult": 10
   },
   {
    "index": 168,
    "type": "vampireLevelUp",
    "level": 4,
    "eliminatedSymbol": "GUARD",
    "freeSpinsAwarded": 3
   },
   {
    "index": 169,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [],
     [],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 5,
      "row": 1
     },
     {
      "reel": 5,
      "row": 2
     },
     {
      "reel": 5,
      "row": 3
     },
     {
      "reel": 5,
      "row": 4
     },
     {
      "reel": 5,
      "row": 3
     }
    ]
   },
   {
    "index": 170,
    "type": "setWin",
    "amount": 655,
    "winLevel": 5
   },
   {
    "index": 171,
    "type": "setTotalWin",
    "amount": 3172
   },
   {
    "index": 172,
    "type": "updateFreeSpin",
    "amount": 22,
    "total": 28
   },
   {
    "index": 173,
    "type": "reveal",
    "board": [
     [
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "K"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "A"
      },
      {
       "name": "Q"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "MOON",
       "scatter": true
      }
     ]
    ],
    "paddingPositions": [
     162,
     249,
     224,
     60,
     161,
     234
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 174,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 175,
    "type": "winInfo",
    "totalWin": 1480,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 6,
      "win": 1000,
      "positions": [
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 5,
        "row": 3
       },
       {
        "reel": 3,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 100,
       "overlay": {
        "reel": 3,
        "row": 4
       }
      }
     },
     {
      "symbol": "A",
      "clusterSize": 8,
      "win": 80,
      "positions": [
       {
        "reel": 1,
        "row": 1
       },
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 3,
        "row": 1
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 3,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 8,
       "overlay": {
        "reel": 3,
        "row": 2
       }
      }
     },
     {
      "symbol": "J",
      "clusterSize": 9,
      "win": 400,
      "positions": [
       {
        "reel": 1,
        "row": 2
       },
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 1,
        "row": 4
       },
       {
        "reel": 1,
        "row": 5
       },
       {
        "reel": 0,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 40,
       "overlay": {
        "reel": 2,
        "row": 4
       }
      }
     }
    ]
   },
   {
    "index": 176,
    "type": "updateTumbleWin",
    "amount": 1480
   },
   {
    "index": 177,
    "type": "vampireKillUpdate",
    "killsAdded": 3,
    "totalKills": 65
   },
   {
    "index": 178,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "J"
      },
      {
       "name": "K"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "A"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 5
     },
     {
      "reel": 1,
      "row": 1
     },
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 1,
      "row": 4
     },
     {
      "reel": 1,
      "row": 5
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 3,
      "row": 1
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 5,
      "row": 3
     }
    ]
   },
   {
    "index": 179,
    "type": "winInfo",
    "totalWin": 10,
    "wins": [
     {
      "symbol": "A",
      "clusterSize": 6,
      "win": 8,
      "positions": [
       {
        "reel": 0,
        "row": 3
       },
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 1,
        "row": 4
       },
       {
        "reel": 1,
        "row": 5
       },
       {
        "reel": 0,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 8,
       "overlay": {
        "reel": 1,
        "row": 4
       }
      }
     },
     {
      "symbol": "K",
      "clusterSize": 5,
      "win": 2,
      "positions": [
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 2,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 2,
       "overlay": {
        "reel": 3,
        "row": 4
       }
      }
     }
    ]
   },
   {
    "index": 180,
    "type": "updateTumbleWin",
    "amount": 1490
   },
   {
    "index": 181,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "PRIEST"
      }
     ],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 3
     },
     {
      "reel": 0,
      "row": 4
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 1,
      "row": 4
     },
     {
      "reel": 1,
      "row": 5
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 5
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     }
    ]
   },
   {
    "index": 182,
    "type": "winInfo",
    "totalWin": 8060,
    "wins": [
     {
      "symbol": "K",
      "clusterSize": 6,
      "win": 60,
      "positions": [
       {
        "reel": 0,
        "row": 1
       },
       {
        "reel": 1,
        "row": 1
       },
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 3,
        "row": 1
       },
       {
        "reel": 4,
        "row": 1
       },
       {
        "reel": 5,
        "row": 1
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 6,
       "overlay": {
        "reel": 2,
        "row": 1
       }
      }
     },
     {
      "symbol": "PRIEST",
      "clusterSize": 10,
      "win": 8000,
      "positions": [
       {
        "reel": 0,
        "row": 4
       },
       {
        "reel": 0,
        "row": 5
       },
       {
        "reel": 1,
        "row": 5
       },
       {
        "reel": 2,
        "row": 5
       },
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 3,
        "row": 1
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 800,
       "overlay": {
        "reel": 2,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 183,
    "type": "updateTumbleWin",
    "amount": 9550
   },
   {
    "index": 184,
    "type": "vampireKillUpdate",
    "killsAdded": 8,
    "totalKills": 73
   },
   {
    "index": 185,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "MOON",
       "scatter": true
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "A"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 1
     },
     {
      "reel": 0,
      "row": 4
     },
     {
      "reel": 0,
      "row": 5
     },
     {
      "reel": 1,
      "row": 1
     },
     {
      "reel": 1,
      "row": 5
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 2,
      "row": 5
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 3,
      "row": 1
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 1
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 5,
      "row": 1
     }
    ]
   },
   {
    "index": 186,
    "type": "winInfo",
    "totalWin": 80,
    "wins": [
     {
      "symbol": "A",
      "clusterSize": 7,
      "win": 80,
      "positions": [
       {
        "reel": 0,
        "row": 4
       },
       {
        "reel": 1,
        "row": 4
       },
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 2,
        "row": 5
       },
       {
        "reel": 3,
        "row": 5
       },
       {
        "reel": 0,
        "row": 3
       },
       {
        "reel": 0,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 8,
       "overlay": {
        "reel": 1,
        "row": 4
       }
      }
     }
    ]
   },
   {
    "index": 187,
    "type": "updateTumbleWin",
    "amount": 9630
   },
   {
    "index": 188,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 4
     },
     {
      "reel": 0,
      "row": 3
     },
     {
      "reel": 0,
      "row": 5
     },
     {
      "reel": 1,
      "row": 4
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 5
     },
     {
      "reel": 3,
      "row": 5
     }
    ]
   },
   {
    "index": 189,
    "type": "winInfo",
    "totalWin": 1000,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 6,
      "win": 1000,
      "positions": [
       {
        "reel": 0,
        "row": 1
       },
       {
        "reel": 1,
        "row": 1
       },
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 3,
        "row": 1
       },
       {
        "reel": 4,
        "row": 1
       },
       {
        "reel": 4,
        "row": 2
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 100,
       "overlay": {
        "reel": 2,
        "row": 1
       }
      }
     }
    ]
   },
   {
    "index": 190,
    "type": "updateTumbleWin",
    "amount": 10630
   },
   {
    "index": 191,
    "type": "vampireKillUpdate",
    "killsAdded": 5,
    "totalKills": 78
   },
   {
    "index": 192,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 1
     },
     {
      "reel": 1,
      "row": 1
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 3,
      "row": 1
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 4,
      "row": 2
     }
    ]
   },
   {
    "index": 193,
    "type": "setWin",
    "amount": 10630,
    "winLevel": 9
   },
   {
    "index": 194,
    "type": "setTotalWin",
    "amount": 13802
   },
   {
    "index": 195,
    "type": "updateFreeSpin",
    "amount": 23,
    "total": 28
   },
   {
    "index": 196,
    "type": "reveal",
    "board": [
     [
      {
       "name": "A"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "K"
      },
      {
       "name": "Q"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ]
    ],
    "paddingPositions": [
     14,
     14,
     0,
     200,
     50,
     39
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 197,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 198,
    "type": "winInfo",
    "totalWin": 180230,
    "wins": [
     {
      "symbol": "K",
      "clusterSize": 7,
      "win": 60,
      "positions": [
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 4,
        "row": 1
       },
       {
        "reel": 4,
        "row": 5
       },
       {
        "reel": 5,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 6,
       "overlay": {
        "reel": 4,
        "row": 3
       }
      }
     },
     {
      "symbol": "PRIEST",
      "clusterSize": 14,
      "win": 180000,
      "positions": [
       {
        "reel": 0,
        "row": 2
       },
       {
        "reel": 1,
        "row": 2
       },
       {
        "reel": 1,
        "row": 1
       },
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 3,
        "row": 1
       },
       {
        "reel": 4,
        "row": 1
       },
       {
        "reel": 5,
        "row": 1
       },
       {
        "reel": 5,
        "row": 2
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 5,
        "row": 4
       },
       {
        "reel": 5,
        "row": 5
       },
       {
        "reel": 4,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 18000,
       "overlay": {
        "reel": 3,
        "row": 2
       }
      }
     },
     {
      "symbol": "J",
      "clusterSize": 7,
      "win": 40,
      "positions": [
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 4,
        "row": 1
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 4,
        "row": 5
       },
       {
        "reel": 5,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 4,
       "overlay": {
        "reel": 4,
        "row": 3
       }
      }
     },
     {
      "symbol": "A",
      "clusterSize": 8,
      "win": 80,
      "positions": [
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 4,
        "row": 1
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 5,
        "row": 3
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 4,
        "row": 5
       },
       {
        "reel": 5,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 8,
       "overlay": {
        "reel": 4,
        "row": 3
       }
      }
     },
     {
      "symbol": "Q",
      "clusterSize": 7,
      "win": 50,
      "positions": [
       {
        "reel": 3,
        "row": 5
       },
       {
        "reel": 4,
        "row": 5
       },
       {
        "reel": 5,
        "row": 5
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 4,
        "row": 1
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 5,
       "overlay": {
        "reel": 4,
        "row": 4
       }
      }
     }
    ]
   },
   {
    "index": 199,
    "type": "updateTumbleWin",
    "amount": 180230
   },
   {
    "index": 200,
    "type": "vampireKillUpdate",
    "killsAdded": 8,
    "totalKills": 86
   },
   {
    "index": 201,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 2
     },
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 1,
      "row": 1
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 1
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 5,
      "row": 5
     },
     {
      "reel": 5,
      "row": 1
     },
     {
      "reel": 5,
      "row": 2
     },
     {
      "reel": 5,
      "row": 4
     },
     {
      "reel": 5,
      "row": 5
     },
     {
      "reel": 5,
      "row": 5
     },
     {
      "reel": 5,
      "row": 3
     },
     {
      "reel": 5,
      "row": 5
     },
     {
      "reel": 5,
      "row": 5
     }
    ]
   },
   {
    "index": 202,
    "type": "winInfo",
    "totalWin": 1080,
    "wins": [
     {
      "symbol": "A",
      "clusterSize": 7,
      "win": 80,
      "positions": [
       {
        "reel": 3,
        "row": 1
       },
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 4,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 8,
       "overlay": {
        "reel": 3,
        "row": 3
       }
      }
     },
     {
      "symbol": "PRIEST",
      "clusterSize": 7,
      "win": 1000,
      "positions": [
       {
        "reel": 3,
        "row": 5
       },
       {
        "reel": 4,
        "row": 5
       },
       {
        "reel": 5,
        "row": 5
       },
       {
        "reel": 5,
        "row": 4
       },
       {
        "reel": 5,
        "row": 3
       },
       {
        "reel": 5,
        "row": 2
       },
       {
        "reel": 4,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 100,
       "overlay": {
        "reel": 4,
        "row": 4
       }
      }
     }
    ]
   },
   {
    "index": 203,
    "type": "updateTumbleWin",
    "amount": 181310
   },
   {
    "index": 204,
    "type": "vampireKillUpdate",
    "killsAdded": 5,
    "totalKills": 91
   },
   {
    "index": 205,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [],
     [
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 3,
      "row": 1
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 5,
      "row": 5
     },
     {
      "reel": 5,
      "row": 4
     },
     {
      "reel": 5,
      "row": 3
     },
     {
      "reel": 5,
      "row": 2
     }
    ]
   },
   {
    "index": 206,
    "type": "winInfo",
    "totalWin": 1000,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 6,
      "win": 1000,
      "positions": [
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 5,
        "row": 3
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 4,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 100,
       "overlay": {
        "reel": 4,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 207,
    "type": "updateTumbleWin",
    "amount": 182310
   },
   {
    "index": 208,
    "type": "vampireKillUpdate",
    "killsAdded": 5,
    "totalKills": 96
   },
   {
    "index": 209,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [],
     [],
     [
      {
       "name": "A"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "Q"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 5,
      "row": 3
     }
    ]
   },
   {
    "index": 210,
    "type": "setWin",
    "amount": 182310,
    "winLevel": 9
   },
   {
    "index": 211,
    "type": "setTotalWin",
    "amount": 196112
   },
   {
    "index": 212,
    "type": "updateFreeSpin",
    "amount": 24,
    "total": 28
   },
   {
    "index": 213,
    "type": "reveal",
    "board": [
     [
      {
       "name": "J"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "Q"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      }
     ]
    ],
    "paddingPositions": [
     187,
     73,
     70,
     85,
     47,
     208
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 214,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 215,
    "type": "winInfo",
    "totalWin": 1140,
    "wins": [
     {
      "symbol": "K",
      "clusterSize": 5,
      "win": 20,
      "positions": [
       {
        "reel": 5,
        "row": 5
       },
       {
        "reel": 4,
        "row": 5
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 2
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 2,
       "overlay": {
        "reel": 4,
        "row": 4
       }
      }
     },
     {
      "symbol": "PRIEST",
      "clusterSize": 7,
      "win": 1000,
      "positions": [
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 5,
        "row": 2
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 4,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 100,
       "overlay": {
        "reel": 4,
        "row": 3
       }
      }
     },
     {
      "symbol": "A",
      "clusterSize": 5,
      "win": 20,
      "positions": [
       {
        "reel": 0,
        "row": 4
       },
       {
        "reel": 1,
        "row": 4
       },
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 0,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 2,
       "overlay": {
        "reel": 1,
        "row": 4
       }
      }
     },
     {
      "symbol": "A",
      "clusterSize": 8,
      "win": 80,
      "positions": [
       {
        "reel": 3,
        "row": 1
       },
       {
        "reel": 4,
        "row": 1
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 4,
        "row": 5
       },
       {
        "reel": 3,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 8,
       "overlay": {
        "reel": 4,
        "row": 3
       }
      }
     },
     {
      "symbol": "Q",
      "clusterSize": 5,
      "win": 10,
      "positions": [
       {
        "reel": 5,
        "row": 4
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 4,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 1,
       "overlay": {
        "reel": 4,
        "row": 4
       }
      }
     },
     {
      "symbol": "J",
      "clusterSize": 5,
      "win": 10,
      "positions": [
       {
        "reel": 5,
        "row": 3
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 4,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 1,
       "overlay": {
        "reel": 4,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 216,
    "type": "updateTumbleWin",
    "amount": 1140
   },
   {
    "index": 217,
    "type": "vampireKillUpdate",
    "killsAdded": 3,
    "totalKills": 99
   },
   {
    "index": 218,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "A"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "K"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 4
     },
     {
      "reel": 0,
      "row": 5
     },
     {
      "reel": 1,
      "row": 4
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 1
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 5,
      "row": 5
     },
     {
      "reel": 5,
      "row": 2
     },
     {
      "reel": 5,
      "row": 4
     },
     {
      "reel": 5,
      "row": 3
     }
    ]
   },
   {
    "index": 219,
    "type": "winInfo",
    "totalWin": 130,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 6,
      "win": 100,
      "positions": [
       {
        "reel": 0,
        "row": 4
       },
       {
        "reel": 0,
        "row": 5
       },
       {
        "reel": 1,
        "row": 5
       },
       {
        "reel": 2,
        "row": 5
       },
       {
        "reel": 3,
        "row": 5
       },
       {
        "reel": 2,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 100,
       "overlay": {
        "reel": 1,
        "row": 5
       }
      }
     },
     {
      "symbol": "PRIEST",
      "clusterSize": 5,
      "win": 30,
      "positions": [
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 5,
        "row": 3
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 4,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 30,
       "overlay": {
        "reel": 4,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 220,
    "type": "updateTumbleWin",
    "amount": 1270
   },
   {
    "index": 221,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "A"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 4
     },
     {
      "reel": 0,
      "row": 5
     },
     {
      "reel": 1,
      "row": 5
     },
     {
      "reel": 2,
      "row": 5
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 5,
      "row": 3
     }
    ]
   },
   {
    "index": 222,
    "type": "winInfo",
    "totalWin": 20,
    "wins": [
     {
      "symbol": "K",
      "clusterSize": 5,
      "win": 20,
      "positions": [
       {
        "reel": 0,
        "row": 3
       },
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 1,
        "row": 2
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 2,
        "row": 1
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 2,
       "overlay": {
        "reel": 1,
        "row": 2
       }
      }
     }
    ]
   },
   {
    "index": 223,
    "type": "updateTumbleWin",
    "amount": 1290
   },
   {
    "index": 224,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      }
     ],
     [],
     [],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 3
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 2,
      "row": 1
     }
    ]
   },
   {
    "index": 225,
    "type": "winInfo",
    "totalWin": 300,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 5,
      "win": 300,
      "positions": [
       {
        "reel": 0,
        "row": 2
       },
       {
        "reel": 1,
        "row": 2
       },
       {
        "reel": 1,
        "row": 1
       },
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 0,
        "row": 1
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 30,
       "overlay": {
        "reel": 1,
        "row": 1
       }
      }
     }
    ]
   },
   {
    "index": 226,
    "type": "updateTumbleWin",
    "amount": 1590
   },
   {
    "index": 227,
    "type": "vampireKillUpdate",
    "killsAdded": 4,
    "totalKills": 103
   },
   {
    "index": 228,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "J"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "A"
      }
     ],
     [],
     [],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 2
     },
     {
      "reel": 0,
      "row": 1
     },
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 1,
      "row": 1
     },
     {
      "reel": 2,
      "row": 1
     }
    ]
   },
   {
    "index": 229,
    "type": "setWin",
    "amount": 1590,
    "winLevel": 6
   },
   {
    "index": 230,
    "type": "setTotalWin",
    "amount": 197702
   },
   {
    "index": 231,
    "type": "updateFreeSpin",
    "amount": 25,
    "total": 28
   },
   {
    "index": 232,
    "type": "reveal",
    "board": [
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "Q"
      },
      {
       "name": "Q"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      }
     ]
    ],
    "paddingPositions": [
     118,
     14,
     21,
     87,
     32,
     231
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 233,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 234,
    "type": "winInfo",
    "totalWin": 16000,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 6,
      "win": 1000,
      "positions": [
       {
        "reel": 0,
        "row": 1
       },
       {
        "reel": 1,
        "row": 1
       },
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 1,
        "row": 2
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 100,
       "overlay": {
        "reel": 2,
        "row": 1
       }
      }
     },
     {
      "symbol": "A",
      "clusterSize": 16,
      "win": 15000,
      "positions": [
       {
        "reel": 1,
        "row": 4
       },
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 5,
        "row": 4
       },
       {
        "reel": 5,
        "row": 5
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 5,
        "row": 2
       },
       {
        "reel": 5,
        "row": 1
       },
       {
        "reel": 4,
        "row": 1
       },
       {
        "reel": 3,
        "row": 1
       },
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 3,
        "row": 5
       },
       {
        "reel": 1,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 1500,
       "overlay": {
        "reel": 3,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 235,
    "type": "updateTumbleWin",
    "amount": 16000
   },
   {
    "index": 236,
    "type": "vampireKillUpdate",
    "killsAdded": 5,
    "totalKills": 108
   },
   {
    "index": 237,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 1
     },
     {
      "reel": 1,
      "row": 1
     },
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 1,
      "row": 4
     },
     {
      "reel": 1,
      "row": 5
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 1
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 5,
      "row": 4
     },
     {
      "reel": 5,
      "row": 5
     },
     {
      "reel": 5,
      "row": 2
     },
     {
      "reel": 5,
      "row": 1
     }
    ]
   },
   {
    "index": 238,
    "type": "winInfo",
    "totalWin": 1000,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 7,
      "win": 1000,
      "positions": [
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 3,
        "row": 1
       },
       {
        "reel": 1,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 100,
       "overlay": {
        "reel": 2,
        "row": 2
       }
      }
     }
    ]
   },
   {
    "index": 239,
    "type": "updateTumbleWin",
    "amount": 17000
   },
   {
    "index": 240,
    "type": "vampireKillUpdate",
    "killsAdded": 5,
    "totalKills": 113
   },
   {
    "index": 241,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [
      {
       "name": "A"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      }
     ],
     [],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 1,
      "row": 4
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 1
     }
    ]
   },
   {
    "index": 242,
    "type": "setWin",
    "amount": 17000,
    "winLevel": 9
   },
   {
    "index": 243,
    "type": "setTotalWin",
    "amount": 214702
   },
   {
    "index": 244,
    "type": "updateFreeSpin",
    "amount": 26,
    "total": 28
   },
   {
    "index": 245,
    "type": "reveal",
    "board": [
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "K"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "Q"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ]
    ],
    "paddingPositions": [
     61,
     87,
     75,
     105,
     233,
     164
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 246,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 247,
    "type": "setTotalWin",
    "amount": 214702
   },
   {
    "index": 248,
    "type": "updateFreeSpin",
    "amount": 27,
    "total": 28
   },
   {
    "index": 249,
    "type": "reveal",
    "board": [
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "J"
      },
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "K"
      },
      {
       "name": "Q"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ]
    ],
    "paddingPositions": [
     141,
     204,
     33,
     193,
     231,
     138
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 250,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 251,
    "type": "winInfo",
    "totalWin": 180060,
    "wins": [
     {
      "symbol": "J",
      "clusterSize": 6,
      "win": 40,
      "positions": [
       {
        "reel": 0,
        "row": 1
       },
       {
        "reel": 1,
        "row": 1
       },
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 1,
        "row": 2
       },
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 2,
        "row": 3
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 4,
       "overlay": {
        "reel": 1,
        "row": 2
       }
      }
     },
     {
      "symbol": "PRIEST",
      "clusterSize": 13,
      "win": 180000,
      "positions": [
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 5,
        "row": 2
       },
       {
        "reel": 5,
        "row": 3
       },
       {
        "reel": 5,
        "row": 4
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 5,
        "row": 5
       },
       {
        "reel": 4,
        "row": 1
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 3,
        "row": 1
       },
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 2,
        "row": 3
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 18000,
       "overlay": {
        "reel": 4,
        "row": 3
       }
      }
     },
     {
      "symbol": "A",
      "clusterSize": 5,
      "win": 20,
      "positions": [
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 4,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 2,
       "overlay": {
        "reel": 3,
        "row": 4
       }
      }
     }
    ]
   },
   {
    "index": 252,
    "type": "updateTumbleWin",
    "amount": 180060
   },
   {
    "index": 253,
    "type": "vampireKillUpdate",
    "killsAdded": 10,
    "totalKills": 123
   },
   {
    "index": 254,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 1
     },
     {
      "reel": 1,
      "row": 1
     },
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 1
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 5,
      "row": 2
     },
     {
      "reel": 5,
      "row": 3
     },
     {
      "reel": 5,
      "row": 4
     },
     {
      "reel": 5,
      "row": 5
     }
    ]
   },
   {
    "index": 255,
    "type": "setWin",
    "amount": 180060,
    "winLevel": 9
   },
   {
    "index": 256,
    "type": "setTotalWin",
    "amount": 394762
   },
   {
    "index": 257,
    "type": "updateFreeSpin",
    "amount": 28,
    "total": 28
   },
   {
    "index": 258,
    "type": "reveal",
    "board": [
     [
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "Q"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      }
     ]
    ],
    "paddingPositions": [
     57,
     220,
     60,
     75,
     96,
     140
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 259,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 260,
    "type": "winInfo",
    "totalWin": 800,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 9,
      "win": 800,
      "positions": [
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 5,
        "row": 3
       },
       {
        "reel": 5,
        "row": 2
       },
       {
        "reel": 5,
        "row": 1
       },
       {
        "reel": 4,
        "row": 1
       },
       {
        "reel": 5,
        "row": 4
       },
       {
        "reel": 3,
        "row": 2
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 800,
       "overlay": {
        "reel": 4,
        "row": 2
       }
      }
     }
    ]
   },
   {
    "index": 261,
    "type": "updateTumbleWin",
    "amount": 800
   },
   {
    "index": 262,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [],
     [
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 5,
      "row": 3
     },
     {
      "reel": 5,
      "row": 2
     },
     {
      "reel": 5,
      "row": 1
     },
     {
      "reel": 5,
      "row": 4
     }
    ]
   },
   {
    "index": 263,
    "type": "winInfo",
    "totalWin": 300,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 5,
      "win": 300,
      "positions": [
       {
        "reel": 3,
        "row": 1
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 5,
        "row": 2
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 30,
       "overlay": {
        "reel": 3,
        "row": 2
       }
      }
     }
    ]
   },
   {
    "index": 264,
    "type": "updateTumbleWin",
    "amount": 1100
   },
   {
    "index": 265,
    "type": "vampireKillUpdate",
    "killsAdded": 3,
    "totalKills": 126
   },
   {
    "index": 266,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [],
     [
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "K"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 3,
      "row": 1
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 5,
      "row": 2
     }
    ]
   },
   {
    "index": 267,
    "type": "setWin",
    "amount": 1100,
    "winLevel": 5
   },
   {
    "index": 268,
    "type": "setTotalWin",
    "amount": 395862
   },
   {
    "index": 269,
    "type": "freeSpinEnd",
    "amount": 395842,
    "winLevel": 9
   },
   {
    "index": 270,
    "type": "finalWin",
    "amount": 395862
   }
  ]
 },
 {
  "id": 3,
  "payoutMultiplier": 3886.88,
  "events": [
   {
    "index": 0,
    "type": "reveal",
    "board": [
     [
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "A"
      },
      {
       "name": "Q"
      },
      {
       "name": "K"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "K"
      },
      {
       "name": "MOON",
       "scatter": true
      }
     ],
     [
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "FARMER"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "J"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "FARMER"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "Q"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "J"
      },
      {
       "name": "Q"
      },
      {
       "name": "MOON",
       "scatter": true
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ]
    ],
    "paddingPositions": [
     183,
     170,
     10,
     168,
     116,
     51
    ],
    "gameType": "basegame",
    "anticipation": [
     0,
     0,
     0,
     1,
     2,
     3
    ]
   },
   {
    "index": 1,
    "type": "setTotalWin",
    "amount": 0
   },
   {
    "index": 2,
    "type": "freeSpinTrigger",
    "totalFs": 10,
    "positions": [
     {
      "reel": 0,
      "row": 4
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 5,
      "row": 5
     }
    ]
   },
   {
    "index": 3,
    "type": "updateFreeSpin",
    "amount": 1,
    "total": 10
   },
   {
    "index": 4,
    "type": "reveal",
    "board": [
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "Q"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "Q"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      }
     ]
    ],
    "paddingPositions": [
     65,
     45,
     139,
     110,
     71,
     233
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 5,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 6,
    "type": "setTotalWin",
    "amount": 0
   },
   {
    "index": 7,
    "type": "updateFreeSpin",
    "amount": 2,
    "total": 10
   },
   {
    "index": 8,
    "type": "reveal",
    "board": [
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "A"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "A"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "Q"
      },
      {
       "name": "Q"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "FARMER"
      }
     ]
    ],
    "paddingPositions": [
     151,
     116,
     11,
     152,
     24,
     197
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 9,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 10,
    "type": "winInfo",
    "totalWin": 30,
    "wins": [
     {
      "symbol": "FARMER",
      "clusterSize": 5,
      "win": 10,
      "positions": [
       {
        "reel": 1,
        "row": 5
       },
       {
        "reel": 2,
        "row": 5
       },
       {
        "reel": 3,
        "row": 5
       },
       {
        "reel": 4,
        "row": 5
       },
       {
        "reel": 4,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 10,
       "overlay": {
        "reel": 3,
        "row": 5
       }
      }
     },
     {
      "symbol": "GUARD",
      "clusterSize": 5,
      "win": 20,
      "positions": [
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 2,
        "row": 5
       },
       {
        "reel": 1,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 20,
       "overlay": {
        "reel": 2,
        "row": 4
       }
      }
     }
    ]
   },
   {
    "index": 11,
    "type": "updateTumbleWin",
    "amount": 30
   },
   {
    "index": 12,
    "type": "vampireKillUpdate",
    "killsAdded": 8,
    "totalKills": 8
   },
   {
    "index": 13,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "PEASANT"
      }
     ],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 1,
      "row": 5
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 1,
      "row": 4
     },
     {
      "reel": 2,
      "row": 5
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 5
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 4,
      "row": 4
     }
    ]
   },
   {
    "index": 14,
    "type": "winInfo",
    "totalWin": 52,
    "wins": [
     {
      "symbol": "A",
      "clusterSize": 5,
      "win": 2,
      "positions": [
       {
        "reel": 1,
        "row": 1
       },
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 2,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 2,
       "overlay": {
        "reel": 2,
        "row": 2
       }
      }
     },
     {
      "symbol": "SMITH",
      "clusterSize": 6,
      "win": 50,
      "positions": [
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 3,
        "row": 1
       },
       {
        "reel": 2,
        "row": 1
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 50,
       "overlay": {
        "reel": 2,
        "row": 2
       }
      }
     }
    ]
   },
   {
    "index": 15,
    "type": "updateTumbleWin",
    "amount": 82
   },
   {
    "index": 16,
    "type": "vampireKillUpdate",
    "killsAdded": 3,
    "totalKills": 11
   },
   {
    "index": 17,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "SMITH"
      }
     ],
     [],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 1,
      "row": 1
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 1
     }
    ]
   },
   {
    "index": 18,
    "type": "setWin",
    "amount": 82,
    "winLevel": 2
   },
   {
    "index": 19,
    "type": "setTotalWin",
    "amount": 82
   },
   {
    "index": 20,
    "type": "updateFreeSpin",
    "amount": 3,
    "total": 10
   },
   {
    "index": 21,
    "type": "reveal",
    "board": [
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      },
      {
       "name": "Q"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "Q"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      }
     ]
    ],
    "paddingPositions": [
     29,
     135,
     183,
     133,
     201,
     5
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 22,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 23,
    "type": "setTotalWin",
    "amount": 82
   },
   {
    "index": 24,
    "type": "updateFreeSpin",
    "amount": 4,
    "total": 10
   },
   {
    "index": 25,
    "type": "reveal",
    "board": [
     [
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "K"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "Q"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      }
     ]
    ],
    "paddingPositions": [
     101,
     126,
     89,
     55,
     104,
     143
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 26,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 27,
    "type": "winInfo",
    "totalWin": 4,
    "wins": [
     {
      "symbol": "J",
      "clusterSize": 6,
      "win": 4,
      "positions": [
       {
        "reel": 1,
        "row": 2
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 3,
        "row": 1
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 2,
        "row": 3
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 4,
       "overlay": {
        "reel": 2,
        "row": 2
       }
      }
     }
    ]
   },
   {
    "index": 28,
    "type": "updateTumbleWin",
    "amount": 4
   },
   {
    "index": 29,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PEASANT"
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      }
     ],
     [],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 1
     },
     {
      "reel": 3,
      "row": 3
     }
    ]
   },
   {
    "index": 30,
    "type": "setWin",
    "amount": 4,
    "winLevel": 1
   },
   {
    "index": 31,
    "type": "setTotalWin",
    "amount": 86
   },
   {
    "index": 32,
    "type": "updateFreeSpin",
    "amount": 5,
    "total": 10
   },
   {
    "index": 33,
    "type": "reveal",
    "board": [
     [
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "K"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "Q"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      }
     ]
    ],
    "paddingPositions": [
     137,
     15,
     176,
     16,
     38,
     45
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 34,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 35,
    "type": "setTotalWin",
    "amount": 86
   },
   {
    "index": 36,
    "type": "updateFreeSpin",
    "amount": 6,
    "total": 10
   },
   {
    "index": 37,
    "type": "reveal",
    "board": [
     [
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "J"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "K"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "K"
      },
      {
       "name": "K"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "Q"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      }
     ]
    ],
    "paddingPositions": [
     214,
     181,
     92,
     142,
     20,
     87
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 38,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 39,
    "type": "setTotalWin",
    "amount": 86
   },
   {
    "index": 40,
    "type": "updateFreeSpin",
    "amount": 7,
    "total": 10
   },
   {
    "index": 41,
    "type": "reveal",
    "board": [
     [
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "J"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "Q"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "K"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "Q"
      }
     ]
    ],
    "paddingPositions": [
     105,
     15,
     146,
     198,
     204,
     124
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 42,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 43,
    "type": "setTotalWin",
    "amount": 86
   },
   {
    "index": 44,
    "type": "updateFreeSpin",
    "amount": 8,
    "total": 10
   },
   {
    "index": 45,
    "type": "reveal",
    "board": [
     [
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "SMITH"
      },
      {
       "name": "J"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "Q"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "Q"
      },
      {
       "name": "K"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PEASANT"
      }
     ]
    ],
    "paddingPositions": [
     199,
     41,
     204,
     85,
     83,
     219
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 46,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 47,
    "type": "setTotalWin",
    "amount": 86
   },
   {
    "index": 48,
    "type": "updateFreeSpin",
    "amount": 9,
    "total": 10
   },
   {
    "index": 49,
    "type": "reveal",
    "board": [
     [
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "Q"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "PEASANT"
      },
      {
       "name": "K"
      },
      {
       "name": "K"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PEASANT"
      }
     ]
    ],
    "paddingPositions": [
     58,
     121,
     150,
     197,
     6,
     224
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 50,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 51,
    "type": "winInfo",
    "totalWin": 40,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 5,
      "win": 30,
      "positions": [
       {
        "reel": 0,
        "row": 1
       },
       {
        "reel": 1,
        "row": 1
       },
       {
        "reel": 0,
        "row": 2
       },
       {
        "reel": 0,
        "row": 3
       },
       {
        "reel": 0,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 30,
       "overlay": {
        "reel": 0,
        "row": 2
       }
      }
     },
     {
      "symbol": "FARMER",
      "clusterSize": 5,
      "win": 10,
      "positions": [
       {
        "reel": 1,
        "row": 2
       },
       {
        "reel": 0,
        "row": 2
       },
       {
        "reel": 0,
        "row": 3
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 2,
        "row": 3
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 10,
       "overlay": {
        "reel": 1,
        "row": 2
       }
      }
     }
    ]
   },
   {
    "index": 52,
    "type": "updateTumbleWin",
    "amount": 40
   },
   {
    "index": 53,
    "type": "vampireKillUpdate",
    "killsAdded": 6,
    "totalKills": 17
   },
   {
    "index": 54,
    "type": "updateGlobalMult",
    "globalMult": 2
   },
   {
    "index": 55,
    "type": "vampireLevelUp",
    "level": 1,
    "eliminatedSymbol": "PEASANT",
    "freeSpinsAwarded": 2
   },
   {
    "index": 56,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "PEASANT"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [],
     [],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 1
     },
     {
      "reel": 0,
      "row": 2
     },
     {
      "reel": 0,
      "row": 3
     },
     {
      "reel": 0,
      "row": 4
     },
     {
      "reel": 0,
      "row": 2
     },
     {
      "reel": 0,
      "row": 3
     },
     {
      "reel": 1,
      "row": 1
     },
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 2,
      "row": 3
     }
    ]
   },
   {
    "index": 57,
    "type": "setWin",
    "amount": 40,
    "winLevel": 2
   },
   {
    "index": 58,
    "type": "setTotalWin",
    "amount": 126
   },
   {
    "index": 59,
    "type": "updateFreeSpin",
    "amount": 10,
    "total": 12
   },
   {
    "index": 60,
    "type": "reveal",
    "board": [
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "K"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "K"
      },
      {
       "name": "Q"
      }
     ]
    ],
    "paddingPositions": [
     147,
     205,
     161,
     5,
     251,
     238
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 61,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 62,
    "type": "winInfo",
    "totalWin": 204,
    "wins": [
     {
      "symbol": "GUARD",
      "clusterSize": 6,
      "win": 140,
      "positions": [
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 3,
        "row": 1
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 4,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 2,
       "clusterMult": 1,
       "winWithoutMult": 70,
       "overlay": {
        "reel": 3,
        "row": 3
       }
      }
     },
     {
      "symbol": "K",
      "clusterSize": 5,
      "win": 4,
      "positions": [
       {
        "reel": 0,
        "row": 2
       },
       {
        "reel": 1,
        "row": 2
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 3,
        "row": 3
       }
      ],
      "meta": {
       "globalMult": 2,
       "clusterMult": 1,
       "winWithoutMult": 2,
       "overlay": {
        "reel": 2,
        "row": 2
       }
      }
     },
     {
      "symbol": "FARMER",
      "clusterSize": 7,
      "win": 60,
      "positions": [
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 5,
        "row": 4
       },
       {
        "reel": 4,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 2,
       "clusterMult": 1,
       "winWithoutMult": 30,
       "overlay": {
        "reel": 4,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 63,
    "type": "updateTumbleWin",
    "amount": 204
   },
   {
    "index": 64,
    "type": "vampireKillUpdate",
    "killsAdded": 7,
    "totalKills": 24
   },
   {
    "index": 65,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "FARMER"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "SMITH"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 2
     },
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 3,
      "row": 1
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 5,
      "row": 4
     }
    ]
   },
   {
    "index": 66,
    "type": "setWin",
    "amount": 204,
    "winLevel": 4
   },
   {
    "index": 67,
    "type": "setTotalWin",
    "amount": 330
   },
   {
    "index": 68,
    "type": "updateFreeSpin",
    "amount": 11,
    "total": 12
   },
   {
    "index": 69,
    "type": "reveal",
    "board": [
     [
      {
       "name": "Q"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "J"
      },
      {
       "name": "Q"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "Q"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "K"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "K"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      }
     ]
    ],
    "paddingPositions": [
     4,
     101,
     70,
     57,
     166,
     196
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 70,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 71,
    "type": "setTotalWin",
    "amount": 330
   },
   {
    "index": 72,
    "type": "updateFreeSpin",
    "amount": 12,
    "total": 12
   },
   {
    "index": 73,
    "type": "reveal",
    "board": [
     [
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "Q"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "GUARD"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "FARMER"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "J"
      },
      {
       "name": "FARMER"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "A"
      }
     ]
    ],
    "paddingPositions": [
     89,
     36,
     40,
     21,
     239,
     19
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     1
    ]
   },
   {
    "index": 74,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 75,
    "type": "winInfo",
    "totalWin": 1234,
    "wins": [
     {
      "symbol": "GUARD",
      "clusterSize": 9,
      "win": 1200,
      "positions": [
       {
        "reel": 0,
        "row": 1
       },
       {
        "reel": 1,
        "row": 1
       },
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 2,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 2,
       "clusterMult": 1,
       "winWithoutMult": 600,
       "overlay": {
        "reel": 2,
        "row": 3
       }
      }
     },
     {
      "symbol": "K",
      "clusterSize": 5,
      "win": 4,
      "positions": [
       {
        "reel": 0,
        "row": 4
       },
       {
        "reel": 1,
        "row": 4
       },
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 2,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 2,
       "clusterMult": 1,
       "winWithoutMult": 2,
       "overlay": {
        "reel": 2,
        "row": 4
       }
      }
     },
     {
      "symbol": "SMITH",
      "clusterSize": 5,
      "win": 30,
      "positions": [
       {
        "reel": 3,
        "row": 5
       },
       {
        "reel": 2,
        "row": 5
       },
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 4,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 2,
       "clusterMult": 1,
       "winWithoutMult": 15,
       "overlay": {
        "reel": 3,
        "row": 4
       }
      }
     }
    ]
   },
   {
    "index": 76,
    "type": "updateTumbleWin",
    "amount": 1234
   },
   {
    "index": 77,
    "type": "vampireKillUpdate",
    "killsAdded": 6,
    "totalKills": 30
   },
   {
    "index": 78,
    "type": "updateGlobalMult",
    "globalMult": 3
   },
   {
    "index": 79,
    "type": "vampireLevelUp",
    "level": 2,
    "eliminatedSymbol": "FARMER",
    "freeSpinsAwarded": 2
   },
   {
    "index": 80,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "K"
      }
     ],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 1
     },
     {
      "reel": 0,
      "row": 4
     },
     {
      "reel": 1,
      "row": 1
     },
     {
      "reel": 1,
      "row": 4
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 5
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 5
     },
     {
      "reel": 2,
      "row": 5
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 4,
      "row": 4
     }
    ]
   },
   {
    "index": 81,
    "type": "setWin",
    "amount": 1234,
    "winLevel": 5
   },
   {
    "index": 82,
    "type": "setTotalWin",
    "amount": 1564
   },
   {
    "index": 83,
    "type": "freeSpinRetrigger",
    "totalFs": 19,
    "positions": [
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 5,
      "row": 5
     }
    ]
   },
   {
    "index": 84,
    "type": "updateFreeSpin",
    "amount": 13,
    "total": 19
   },
   {
    "index": 85,
    "type": "reveal",
    "board": [
     [
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "J"
      },
      {
       "name": "Q"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      }
     ]
    ],
    "paddingPositions": [
     217,
     108,
     82,
     209,
     101,
     41
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 86,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 87,
    "type": "winInfo",
    "totalWin": 75,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 5,
      "win": 30,
      "positions": [
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 1,
        "row": 4
       },
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 2,
        "row": 5
       },
       {
        "reel": 3,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 30,
       "overlay": {
        "reel": 2,
        "row": 4
       }
      }
     },
     {
      "symbol": "SMITH",
      "clusterSize": 5,
      "win": 45,
      "positions": [
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 5,
        "row": 3
       },
       {
        "reel": 5,
        "row": 4
       },
       {
        "reel": 5,
        "row": 5
       },
       {
        "reel": 4,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 3,
       "clusterMult": 1,
       "winWithoutMult": 15,
       "overlay": {
        "reel": 5,
        "row": 4
       }
      }
     }
    ]
   },
   {
    "index": 88,
    "type": "updateTumbleWin",
    "amount": 75
   },
   {
    "index": 89,
    "type": "vampireKillUpdate",
    "killsAdded": 2,
    "totalKills": 32
   },
   {
    "index": 90,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [
      {
       "name": "A"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 1,
      "row": 4
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 5
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 5,
      "row": 3
     },
     {
      "reel": 5,
      "row": 4
     },
     {
      "reel": 5,
      "row": 5
     }
    ]
   },
   {
    "index": 91,
    "type": "setWin",
    "amount": 75,
    "winLevel": 2
   },
   {
    "index": 92,
    "type": "setTotalWin",
    "amount": 1639
   },
   {
    "index": 93,
    "type": "updateFreeSpin",
    "amount": 14,
    "total": 19
   },
   {
    "index": 94,
    "type": "reveal",
    "board": [
     [
      {
       "name": "Q"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "Q"
      },
      {
       "name": "Q"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "GUARD"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "Q"
      }
     ]
    ],
    "paddingPositions": [
     117,
     20,
     14,
     31,
     129,
     184
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 95,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 96,
    "type": "winInfo",
    "totalWin": 90,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 5,
      "win": 90,
      "positions": [
       {
        "reel": 4,
        "row": 1
       },
       {
        "reel": 3,
        "row": 1
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 5,
        "row": 2
       },
       {
        "reel": 5,
        "row": 3
       }
      ],
      "meta": {
       "globalMult": 3,
       "clusterMult": 1,
       "winWithoutMult": 30,
       "overlay": {
        "reel": 4,
        "row": 2
       }
      }
     }
    ]
   },
   {
    "index": 97,
    "type": "updateTumbleWin",
    "amount": 90
   },
   {
    "index": 98,
    "type": "vampireKillUpdate",
    "killsAdded": 4,
    "totalKills": 36
   },
   {
    "index": 99,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [],
     [],
     [
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 3,
      "row": 1
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 5,
      "row": 2
     },
     {
      "reel": 5,
      "row": 3
     }
    ]
   },
   {
    "index": 100,
    "type": "setWin",
    "amount": 90,
    "winLevel": 2
   },
   {
    "index": 101,
    "type": "setTotalWin",
    "amount": 1729
   },
   {
    "index": 102,
    "type": "updateFreeSpin",
    "amount": 15,
    "total": 19
   },
   {
    "index": 103,
    "type": "reveal",
    "board": [
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "MOON",
       "scatter": true
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      }
     ]
    ],
    "paddingPositions": [
     29,
     132,
     161,
     18,
     48,
     91
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 104,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 105,
    "type": "winInfo",
    "totalWin": 140,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 5,
      "win": 90,
      "positions": [
       {
        "reel": 2,
        "row": 5
       },
       {
        "reel": 3,
        "row": 5
       },
       {
        "reel": 4,
        "row": 5
       },
       {
        "reel": 5,
        "row": 5
       },
       {
        "reel": 5,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 3,
       "clusterMult": 1,
       "winWithoutMult": 30,
       "overlay": {
        "reel": 4,
        "row": 5
       }
      }
     },
     {
      "symbol": "SMITH",
      "clusterSize": 6,
      "win": 50,
      "positions": [
       {
        "reel": 1,
        "row": 2
       },
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 1,
        "row": 4
       },
       {
        "reel": 1,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 50,
       "overlay": {
        "reel": 1,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 106,
    "type": "updateTumbleWin",
    "amount": 140
   },
   {
    "index": 107,
    "type": "vampireKillUpdate",
    "killsAdded": 4,
    "totalKills": 40
   },
   {
    "index": 108,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 1,
      "row": 4
     },
     {
      "reel": 1,
      "row": 5
     },
     {
      "reel": 2,
      "row": 5
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 5,
      "row": 5
     },
     {
      "reel": 5,
      "row": 4
     }
    ]
   },
   {
    "index": 109,
    "type": "winInfo",
    "totalWin": 70,
    "wins": [
     {
      "symbol": "GUARD",
      "clusterSize": 7,
      "win": 70,
      "positions": [
       {
        "reel": 0,
        "row": 3
       },
       {
        "reel": 0,
        "row": 4
       },
       {
        "reel": 1,
        "row": 4
       },
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 1,
        "row": 2
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 70,
       "overlay": {
        "reel": 1,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 110,
    "type": "updateTumbleWin",
    "amount": 210
   },
   {
    "index": 111,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "J"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      }
     ],
     [],
     [],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 3
     },
     {
      "reel": 0,
      "row": 4
     },
     {
      "reel": 1,
      "row": 4
     },
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 2
     }
    ]
   },
   {
    "index": 112,
    "type": "setWin",
    "amount": 210,
    "winLevel": 4
   },
   {
    "index": 113,
    "type": "setTotalWin",
    "amount": 1939
   },
   {
    "index": 114,
    "type": "updateFreeSpin",
    "amount": 16,
    "total": 19
   },
   {
    "index": 115,
    "type": "reveal",
    "board": [
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "Q"
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      }
     ]
    ],
    "paddingPositions": [
     132,
     99,
     30,
     190,
     44,
     105
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 116,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 117,
    "type": "setTotalWin",
    "amount": 1939
   },
   {
    "index": 118,
    "type": "updateFreeSpin",
    "amount": 17,
    "total": 19
   },
   {
    "index": 119,
    "type": "reveal",
    "board": [
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "J"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "K"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      }
     ]
    ],
    "paddingPositions": [
     10,
     104,
     88,
     67,
     192,
     32
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 120,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 121,
    "type": "winInfo",
    "totalWin": 117,
    "wins": [
     {
      "symbol": "J",
      "clusterSize": 5,
      "win": 3,
      "positions": [
       {
        "reel": 0,
        "row": 3
       },
       {
        "reel": 0,
        "row": 2
       },
       {
        "reel": 0,
        "row": 1
       },
       {
        "reel": 1,
        "row": 1
       },
       {
        "reel": 2,
        "row": 1
       }
      ],
      "meta": {
       "globalMult": 3,
       "clusterMult": 1,
       "winWithoutMult": 1,
       "overlay": {
        "reel": 1,
        "row": 2
       }
      }
     },
     {
      "symbol": "A",
      "clusterSize": 8,
      "win": 24,
      "positions": [
       {
        "reel": 1,
        "row": 2
       },
       {
        "reel": 0,
        "row": 2
       },
       {
        "reel": 0,
        "row": 1
       },
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 3,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 3,
       "clusterMult": 1,
       "winWithoutMult": 8,
       "overlay": {
        "reel": 2,
        "row": 3
       }
      }
     },
     {
      "symbol": "PRIEST",
      "clusterSize": 5,
      "win": 90,
      "positions": [
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 4,
        "row": 1
       },
       {
        "reel": 5,
        "row": 1
       },
       {
        "reel": 3,
        "row": 3
       }
      ],
      "meta": {
       "globalMult": 3,
       "clusterMult": 1,
       "winWithoutMult": 30,
       "overlay": {
        "reel": 4,
        "row": 2
       }
      }
     }
    ]
   },
   {
    "index": 122,
    "type": "updateTumbleWin",
    "amount": 117
   },
   {
    "index": 123,
    "type": "vampireKillUpdate",
    "killsAdded": 4,
    "totalKills": 44
   },
   {
    "index": 124,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "A"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 3
     },
     {
      "reel": 0,
      "row": 2
     },
     {
      "reel": 0,
      "row": 1
     },
     {
      "reel": 0,
      "row": 2
     },
     {
      "reel": 0,
      "row": 1
     },
     {
      "reel": 1,
      "row": 1
     },
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 5,
      "row": 1
     }
    ]
   },
   {
    "index": 125,
    "type": "setWin",
    "amount": 117,
    "winLevel": 3
   },
   {
    "index": 126,
    "type": "setTotalWin",
    "amount": 2056
   },
   {
    "index": 127,
    "type": "updateFreeSpin",
    "amount": 18,
    "total": 19
   },
   {
    "index": 128,
    "type": "reveal",
    "board": [
     [
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "Q"
      },
      {
       "name": "Q"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      }
     ]
    ],
    "paddingPositions": [
     100,
     202,
     244,
     247,
     140,
     118
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 129,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 130,
    "type": "winInfo",
    "totalWin": 6,
    "wins": [
     {
      "symbol": "A",
      "clusterSize": 5,
      "win": 6,
      "positions": [
       {
        "reel": 0,
        "row": 3
       },
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 1,
        "row": 2
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 1,
        "row": 1
       }
      ],
      "meta": {
       "globalMult": 3,
       "clusterMult": 1,
       "winWithoutMult": 2,
       "overlay": {
        "reel": 1,
        "row": 2
       }
      }
     }
    ]
   },
   {
    "index": 131,
    "type": "updateTumbleWin",
    "amount": 6
   },
   {
    "index": 132,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "Q"
      }
     ],
     [
      {
       "name": "GUARD"
      }
     ],
     [],
     [],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 3
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 1,
      "row": 1
     },
     {
      "reel": 2,
      "row": 2
     }
    ]
   },
   {
    "index": 133,
    "type": "setWin",
    "amount": 6,
    "winLevel": 1
   },
   {
    "index": 134,
    "type": "setTotalWin",
    "amount": 2062
   },
   {
    "index": 135,
    "type": "updateFreeSpin",
    "amount": 19,
    "total": 19
   },
   {
    "index": 136,
    "type": "reveal",
    "board": [
     [
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "SMITH"
      },
      {
       "name": "Q"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "SMITH"
      },
      {
       "name": "A"
      }
     ]
    ],
    "paddingPositions": [
     193,
     89,
     54,
     47,
     44,
     226
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 137,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 138,
    "type": "winInfo",
    "totalWin": 510,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 8,
      "win": 300,
      "positions": [
       {
        "reel": 0,
        "row": 1
       },
       {
        "reel": 1,
        "row": 1
       },
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 3,
        "row": 1
       },
       {
        "reel": 4,
        "row": 1
       },
       {
        "reel": 5,
        "row": 1
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 3,
        "row": 3
       }
      ],
      "meta": {
       "globalMult": 3,
       "clusterMult": 1,
       "winWithoutMult": 100,
       "overlay": {
        "reel": 3,
        "row": 1
       }
      }
     },
     {
      "symbol": "GUARD",
      "clusterSize": 6,
      "win": 210,
      "positions": [
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 2
       }
      ],
      "meta": {
       "globalMult": 3,
       "clusterMult": 1,
       "winWithoutMult": 70,
       "overlay": {
        "reel": 3,
        "row": 2
       }
      }
     }
    ]
   },
   {
    "index": 139,
    "type": "updateTumbleWin",
    "amount": 510
   },
   {
    "index": 140,
    "type": "vampireKillUpdate",
    "killsAdded": 10,
    "totalKills": 54
   },
   {
    "index": 141,
    "type": "updateGlobalMult",
    "globalMult": 5
   },
   {
    "index": 142,
    "type": "vampireLevelUp",
    "level": 3,
    "eliminatedSymbol": "SMITH",
    "freeSpinsAwarded": 3
   },
   {
    "index": 143,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "SMITH"
      },
      {
       "name": "K"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "Q"
      },
      {
       "name": "SMITH"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "GUARD"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 1
     },
     {
      "reel": 1,
      "row": 1
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 3,
      "row": 1
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 5,
      "row": 1
     }
    ]
   },
   {
    "index": 144,
    "type": "setWin",
    "amount": 510,
    "winLevel": 5
   },
   {
    "index": 145,
    "type": "setTotalWin",
    "amount": 2572
   },
   {
    "index": 146,
    "type": "updateFreeSpin",
    "amount": 20,
    "total": 22
   },
   {
    "index": 147,
    "type": "reveal",
    "board": [
     [
      {
       "name": "GUARD"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "Q"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "Q"
      },
      {
       "name": "A"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "K"
      }
     ]
    ],
    "paddingPositions": [
     113,
     244,
     93,
     190,
     57,
     140
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 148,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 149,
    "type": "winInfo",
    "totalWin": 550,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 5,
      "win": 150,
      "positions": [
       {
        "reel": 5,
        "row": 1
       },
       {
        "reel": 5,
        "row": 2
       },
       {
        "reel": 5,
        "row": 3
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 5,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 5,
       "clusterMult": 1,
       "winWithoutMult": 30,
       "overlay": {
        "reel": 5,
        "row": 3
       }
      }
     },
     {
      "symbol": "A",
      "clusterSize": 10,
      "win": 400,
      "positions": [
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 0,
        "row": 3
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 4,
        "row": 1
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 1,
        "row": 4
       },
       {
        "reel": 1,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 5,
       "clusterMult": 1,
       "winWithoutMult": 80,
       "overlay": {
        "reel": 2,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 150,
    "type": "updateTumbleWin",
    "amount": 550
   },
   {
    "index": 151,
    "type": "vampireKillUpdate",
    "killsAdded": 4,
    "totalKills": 58
   },
   {
    "index": 152,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "Q"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 3
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 1,
      "row": 4
     },
     {
      "reel": 1,
      "row": 5
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 5,
      "row": 1
     },
     {
      "reel": 5,
      "row": 2
     },
     {
      "reel": 5,
      "row": 3
     },
     {
      "reel": 5,
      "row": 4
     }
    ]
   },
   {
    "index": 153,
    "type": "winInfo",
    "totalWin": 10,
    "wins": [
     {
      "symbol": "A",
      "clusterSize": 5,
      "win": 10,
      "positions": [
       {
        "reel": 1,
        "row": 2
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 3,
        "row": 1
       },
       {
        "reel": 4,
        "row": 1
       }
      ],
      "meta": {
       "globalMult": 5,
       "clusterMult": 1,
       "winWithoutMult": 2,
       "overlay": {
        "reel": 3,
        "row": 2
       }
      }
     }
    ]
   },
   {
    "index": 154,
    "type": "updateTumbleWin",
    "amount": 560
   },
   {
    "index": 155,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [
      {
       "name": "MOON",
       "scatter": true
      }
     ],
     [
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 1
     },
     {
      "reel": 4,
      "row": 1
     }
    ]
   },
   {
    "index": 156,
    "type": "winInfo",
    "totalWin": 20,
    "wins": [
     {
      "symbol": "J",
      "clusterSize": 6,
      "win": 20,
      "positions": [
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 4,
        "row": 1
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 5,
       "clusterMult": 1,
       "winWithoutMult": 4,
       "overlay": {
        "reel": 4,
        "row": 2
       }
      }
     }
    ]
   },
   {
    "index": 157,
    "type": "updateTumbleWin",
    "amount": 580
   },
   {
    "index": 158,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [],
     [
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "GUARD"
      },
      {
       "name": "A"
      }
     ],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     }
    ]
   },
   {
    "index": 159,
    "type": "winInfo",
    "totalWin": 150,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 5,
      "win": 150,
      "positions": [
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 5,
        "row": 4
       },
       {
        "reel": 4,
        "row": 5
       },
       {
        "reel": 3,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 5,
       "clusterMult": 1,
       "winWithoutMult": 30,
       "overlay": {
        "reel": 4,
        "row": 4
       }
      }
     }
    ]
   },
   {
    "index": 160,
    "type": "updateTumbleWin",
    "amount": 730
   },
   {
    "index": 161,
    "type": "vampireKillUpdate",
    "killsAdded": 4,
    "totalKills": 62
   },
   {
    "index": 162,
    "type": "updateGlobalMult",
    "globalMult": 10
   },
   {
    "index": 163,
    "type": "vampireLevelUp",
    "level": 4,
    "eliminatedSymbol": "GUARD",
    "freeSpinsAwarded": 3
   },
   {
    "index": 164,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [],
     [],
     [
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "GUARD"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "K"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 5,
      "row": 4
     }
    ]
   },
   {
    "index": 165,
    "type": "setWin",
    "amount": 730,
    "winLevel": 5
   },
   {
    "index": 166,
    "type": "setTotalWin",
    "amount": 3302
   },
   {
    "index": 167,
    "type": "updateFreeSpin",
    "amount": 21,
    "total": 25
   },
   {
    "index": 168,
    "type": "reveal",
    "board": [
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "Q"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "Q"
      },
      {
       "name": "K"
      }
     ]
    ],
    "paddingPositions": [
     20,
     218,
     44,
     9,
     219,
     217
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 169,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 170,
    "type": "winInfo",
    "totalWin": 15040,
    "wins": [
     {
      "symbol": "J",
      "clusterSize": 6,
      "win": 40,
      "positions": [
       {
        "reel": 3,
        "row": 1
       },
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 3,
        "row": 3
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 4,
       "overlay": {
        "reel": 3,
        "row": 2
       }
      }
     },
     {
      "symbol": "A",
      "clusterSize": 16,
      "win": 15000,
      "positions": [
       {
        "reel": 1,
        "row": 1
       },
       {
        "reel": 0,
        "row": 1
       },
       {
        "reel": 0,
        "row": 2
       },
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 1,
        "row": 2
       },
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 5,
        "row": 3
       },
       {
        "reel": 5,
        "row": 2
       },
       {
        "reel": 5,
        "row": 1
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 3,
        "row": 5
       },
       {
        "reel": 4,
        "row": 5
       },
       {
        "reel": 1,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 1500,
       "overlay": {
        "reel": 2,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 171,
    "type": "updateTumbleWin",
    "amount": 15040
   },
   {
    "index": 172,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "K"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 1
     },
     {
      "reel": 0,
      "row": 2
     },
     {
      "reel": 1,
      "row": 1
     },
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 1,
      "row": 4
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 3,
      "row": 1
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 5,
      "row": 3
     },
     {
      "reel": 5,
      "row": 2
     },
     {
      "reel": 5,
      "row": 1
     }
    ]
   },
   {
    "index": 173,
    "type": "winInfo",
    "totalWin": 180000,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 16,
      "win": 180000,
      "positions": [
       {
        "reel": 0,
        "row": 2
       },
       {
        "reel": 1,
        "row": 2
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 1,
        "row": 4
       },
       {
        "reel": 2,
        "row": 5
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 4,
        "row": 5
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 1,
        "row": 1
       },
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 0,
        "row": 1
       },
       {
        "reel": 0,
        "row": 3
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 18000,
       "overlay": {
        "reel": 2,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 174,
    "type": "updateTumbleWin",
    "amount": 195040
   },
   {
    "index": 175,
    "type": "vampireKillUpdate",
    "killsAdded": 12,
    "totalKills": 74
   },
   {
    "index": 176,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "Q"
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "K"
      }
     ],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 2
     },
     {
      "reel": 0,
      "row": 1
     },
     {
      "reel": 0,
      "row": 3
     },
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 1,
      "row": 4
     },
     {
      "reel": 1,
      "row": 1
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 5
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 5
     }
    ]
   },
   {
    "index": 177,
    "type": "winInfo",
    "totalWin": 380,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 5,
      "win": 300,
      "positions": [
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 0,
        "row": 3
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 1,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 30,
       "overlay": {
        "reel": 1,
        "row": 3
       }
      }
     },
     {
      "symbol": "A",
      "clusterSize": 8,
      "win": 80,
      "positions": [
       {
        "reel": 1,
        "row": 2
       },
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 3,
        "row": 5
       },
       {
        "reel": 2,
        "row": 5
       },
       {
        "reel": 2,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 8,
       "overlay": {
        "reel": 2,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 178,
    "type": "updateTumbleWin",
    "amount": 195420
   },
   {
    "index": 179,
    "type": "vampireKillUpdate",
    "killsAdded": 2,
    "totalKills": 76
   },
   {
    "index": 180,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "Q"
      },
      {
       "name": "K"
      }
     ],
     [],
     []
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 3
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 1,
      "row": 4
     },
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 5
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 5
     }
    ]
   },
   {
    "index": 181,
    "type": "setWin",
    "amount": 195420,
    "winLevel": 9
   },
   {
    "index": 182,
    "type": "setTotalWin",
    "amount": 198722
   },
   {
    "index": 183,
    "type": "updateFreeSpin",
    "amount": 22,
    "total": 25
   },
   {
    "index": 184,
    "type": "reveal",
    "board": [
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "Q"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "Q"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "J"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "K"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      }
     ]
    ],
    "paddingPositions": [
     26,
     97,
     188,
     230,
     149,
     85
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 185,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 186,
    "type": "winInfo",
    "totalWin": 1048,
    "wins": [
     {
      "symbol": "J",
      "clusterSize": 6,
      "win": 40,
      "positions": [
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 3,
        "row": 1
       },
       {
        "reel": 4,
        "row": 1
       },
       {
        "reel": 5,
        "row": 1
       },
       {
        "reel": 5,
        "row": 2
       },
       {
        "reel": 4,
        "row": 2
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 4,
       "overlay": {
        "reel": 4,
        "row": 1
       }
      }
     },
     {
      "symbol": "PRIEST",
      "clusterSize": 6,
      "win": 1000,
      "positions": [
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 5,
        "row": 4
       },
       {
        "reel": 4,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 100,
       "overlay": {
        "reel": 4,
        "row": 3
       }
      }
     },
     {
      "symbol": "A",
      "clusterSize": 6,
      "win": 8,
      "positions": [
       {
        "reel": 1,
        "row": 1
       },
       {
        "reel": 1,
        "row": 2
       },
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 3,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 8,
       "overlay": {
        "reel": 2,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 187,
    "type": "updateTumbleWin",
    "amount": 1048
   },
   {
    "index": 188,
    "type": "vampireKillUpdate",
    "killsAdded": 4,
    "totalKills": 80
   },
   {
    "index": 189,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "Q"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 1,
      "row": 1
     },
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 3,
      "row": 1
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 5,
      "row": 1
     },
     {
      "reel": 5,
      "row": 2
     },
     {
      "reel": 5,
      "row": 4
     }
    ]
   },
   {
    "index": 190,
    "type": "setWin",
    "amount": 1048,
    "winLevel": 5
   },
   {
    "index": 191,
    "type": "setTotalWin",
    "amount": 199770
   },
   {
    "index": 192,
    "type": "updateFreeSpin",
    "amount": 23,
    "total": 25
   },
   {
    "index": 193,
    "type": "reveal",
    "board": [
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "Q"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "A"
      },
      {
       "name": "Q"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      }
     ]
    ],
    "paddingPositions": [
     212,
     121,
     200,
     119,
     72,
     15
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 194,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 195,
    "type": "setTotalWin",
    "amount": 199770
   },
   {
    "index": 196,
    "type": "updateFreeSpin",
    "amount": 24,
    "total": 25
   },
   {
    "index": 197,
    "type": "reveal",
    "board": [
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "K"
      },
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "Q"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "J"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "Q"
      },
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ]
    ],
    "paddingPositions": [
     16,
     138,
     142,
     170,
     51,
     127
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 198,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 199,
    "type": "winInfo",
    "totalWin": 180110,
    "wins": [
     {
      "symbol": "PRIEST",
      "clusterSize": 18,
      "win": 180000,
      "positions": [
       {
        "reel": 0,
        "row": 4
       },
       {
        "reel": 1,
        "row": 4
       },
       {
        "reel": 2,
        "row": 4
       },
       {
        "reel": 3,
        "row": 4
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 5,
        "row": 4
       },
       {
        "reel": 5,
        "row": 5
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 4,
        "row": 1
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 2,
        "row": 3
       },
       {
        "reel": 2,
        "row": 5
       },
       {
        "reel": 1,
        "row": 3
       },
       {
        "reel": 0,
        "row": 3
       },
       {
        "reel": 0,
        "row": 2
       },
       {
        "reel": 0,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 18000,
       "overlay": {
        "reel": 2,
        "row": 3
       }
      }
     },
     {
      "symbol": "Q",
      "clusterSize": 6,
      "win": 50,
      "positions": [
       {
        "reel": 5,
        "row": 2
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 4,
        "row": 1
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 5,
        "row": 3
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 5,
       "overlay": {
        "reel": 4,
        "row": 3
       }
      }
     },
     {
      "symbol": "A",
      "clusterSize": 5,
      "win": 20,
      "positions": [
       {
        "reel": 5,
        "row": 1
       },
       {
        "reel": 4,
        "row": 1
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 2,
       "overlay": {
        "reel": 4,
        "row": 2
       }
      }
     },
     {
      "symbol": "J",
      "clusterSize": 7,
      "win": 40,
      "positions": [
       {
        "reel": 3,
        "row": 1
       },
       {
        "reel": 4,
        "row": 1
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 4,
        "row": 5
       },
       {
        "reel": 3,
        "row": 5
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 4,
       "overlay": {
        "reel": 4,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 200,
    "type": "updateTumbleWin",
    "amount": 180110
   },
   {
    "index": 201,
    "type": "vampireKillUpdate",
    "killsAdded": 11,
    "totalKills": 91
   },
   {
    "index": 202,
    "type": "tumbleBoard",
    "newSymbols": [
     [
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "J"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 0,
      "row": 4
     },
     {
      "reel": 0,
      "row": 3
     },
     {
      "reel": 0,
      "row": 2
     },
     {
      "reel": 0,
      "row": 5
     },
     {
      "reel": 1,
      "row": 4
     },
     {
      "reel": 1,
      "row": 3
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 3
     },
     {
      "reel": 2,
      "row": 5
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 1
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 5,
      "row": 4
     },
     {
      "reel": 5,
      "row": 5
     },
     {
      "reel": 5,
      "row": 2
     },
     {
      "reel": 5,
      "row": 3
     },
     {
      "reel": 5,
      "row": 1
     }
    ]
   },
   {
    "index": 203,
    "type": "winInfo",
    "totalWin": 8800,
    "wins": [
     {
      "symbol": "A",
      "clusterSize": 11,
      "win": 800,
      "positions": [
       {
        "reel": 1,
        "row": 5
       },
       {
        "reel": 2,
        "row": 5
       },
       {
        "reel": 3,
        "row": 5
       },
       {
        "reel": 4,
        "row": 5
       },
       {
        "reel": 5,
        "row": 5
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 4,
        "row": 2
       },
       {
        "reel": 4,
        "row": 1
       },
       {
        "reel": 5,
        "row": 1
       },
       {
        "reel": 2,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 80,
       "overlay": {
        "reel": 3,
        "row": 4
       }
      }
     },
     {
      "symbol": "PRIEST",
      "clusterSize": 9,
      "win": 8000,
      "positions": [
       {
        "reel": 2,
        "row": 2
       },
       {
        "reel": 1,
        "row": 2
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 4,
        "row": 3
       },
       {
        "reel": 5,
        "row": 3
       },
       {
        "reel": 4,
        "row": 4
       },
       {
        "reel": 4,
        "row": 5
       },
       {
        "reel": 3,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 10,
       "clusterMult": 1,
       "winWithoutMult": 800,
       "overlay": {
        "reel": 3,
        "row": 3
       }
      }
     }
    ]
   },
   {
    "index": 204,
    "type": "updateTumbleWin",
    "amount": 188910
   },
   {
    "index": 205,
    "type": "vampireKillUpdate",
    "killsAdded": 5,
    "totalKills": 96
   },
   {
    "index": 206,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 1,
      "row": 5
     },
     {
      "reel": 1,
      "row": 2
     },
     {
      "reel": 2,
      "row": 5
     },
     {
      "reel": 2,
      "row": 4
     },
     {
      "reel": 2,
      "row": 2
     },
     {
      "reel": 3,
      "row": 5
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 2
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 4,
      "row": 3
     },
     {
      "reel": 4,
      "row": 4
     },
     {
      "reel": 4,
      "row": 5
     },
     {
      "reel": 5,
      "row": 5
     },
     {
      "reel": 5,
      "row": 1
     },
     {
      "reel": 5,
      "row": 3
     }
    ]
   },
   {
    "index": 207,
    "type": "winInfo",
    "totalWin": 8,
    "wins": [
     {
      "symbol": "A",
      "clusterSize": 7,
      "win": 8,
      "positions": [
       {
        "reel": 2,
        "row": 1
       },
       {
        "reel": 3,
        "row": 1
       },
       {
        "reel": 4,
        "row": 1
       },
       {
        "reel": 5,
        "row": 1
       },
       {
        "reel": 3,
        "row": 2
       },
       {
        "reel": 3,
        "row": 3
       },
       {
        "reel": 3,
        "row": 4
       }
      ],
      "meta": {
       "globalMult": 1,
       "clusterMult": 1,
       "winWithoutMult": 8,
       "overlay": {
        "reel": 3,
        "row": 2
       }
      }
     }
    ]
   },
   {
    "index": 208,
    "type": "updateTumbleWin",
    "amount": 188918
   },
   {
    "index": 209,
    "type": "tumbleBoard",
    "newSymbols": [
     [],
     [],
     [
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "VLORD",
       "wild": true
      }
     ],
     [
      {
       "name": "PRIEST"
      }
     ]
    ],
    "explodingSymbols": [
     {
      "reel": 2,
      "row": 1
     },
     {
      "reel": 3,
      "row": 1
     },
     {
      "reel": 3,
      "row": 2
     },
     {
      "reel": 3,
      "row": 3
     },
     {
      "reel": 3,
      "row": 4
     },
     {
      "reel": 4,
      "row": 1
     },
     {
      "reel": 5,
      "row": 1
     }
    ]
   },
   {
    "index": 210,
    "type": "setWin",
    "amount": 188918,
    "winLevel": 9
   },
   {
    "index": 211,
    "type": "setTotalWin",
    "amount": 388688
   },
   {
    "index": 212,
    "type": "updateFreeSpin",
    "amount": 25,
    "total": 25
   },
   {
    "index": 213,
    "type": "reveal",
    "board": [
     [
      {
       "name": "A"
      },
      {
       "name": "MOON",
       "scatter": true
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "K"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      }
     ],
     [
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "K"
      },
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "K"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "A"
      },
      {
       "name": "A"
      },
      {
       "name": "K"
      },
      {
       "name": "J"
      }
     ],
     [
      {
       "name": "A"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "PRIEST"
      },
      {
       "name": "Q"
      },
      {
       "name": "A"
      }
     ],
     [
      {
       "name": "J"
      },
      {
       "name": "A"
      },
      {
       "name": "VLORD",
       "wild": true
      },
      {
       "name": "Q"
      },
      {
       "name": "A"
      },
      {
       "name": "J"
      },
      {
       "name": "A"
      }
     ]
    ],
    "paddingPositions": [
     239,
     106,
     223,
     193,
     98,
     51
    ],
    "gameType": "freegame",
    "anticipation": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   {
    "index": 214,
    "type": "updateGrid",
    "gridMultipliers": [
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ],
     [
      0,
      0,
      0,
      0,
      0
     ]
    ]
   },
   {
    "index": 215,
    "type": "setTotalWin",
    "amount": 388688
   },
   {
    "index": 216,
    "type": "freeSpinEnd",
    "amount": 388688,
    "winLevel": 9
   },
   {
    "index": 217,
    "type": "finalWin",
    "amount": 388688
   }
  ]
 }
];
