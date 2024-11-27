export const classNames = [ // font is not monospaced so the spaces are all fucked up (inconsistent)
  "Traveller                                  #01",
  "Warrior                                    #02",
  "Swordfighter                           #03",
  "Sorcerer                                  #04",
  "Weasel                                     #05",
  "Trickster                                  #06",
  "Summoner                              #07",
  "Drunk                                       #08",
  "Spy                                          #09",
  "Time Traveller                         #10",
  "Sheriff                                      #11",
  "Communist                             #12",
  "Witch                                       #13",
  "Murderer                                 #14"
];

export const classImages = [
  require("../images/traveller.png"),
  require("../images/warrior.png"),
  require("../images/swordfighter.png"),
  require("../images/sorcerer.png"),
  require("../images/weasel.png"),
  require("../images/trickster.png"),
  require("../images/summoner.png"),
  require("../images/drunk.png"),
  require("../images/spy.png"),
  require("../images/timetraveller.png"),
  require("../images/sheriff.png"),
  require("../images/communist.png"),
  require("../images/witch.png"),
  require("../images/murderer.png"),
]

export const classQuotes = [
  "[No quote yet]",
  "[No quote yet]",
  "[No quote yet]",
  "[No quote yet]",
  "[No quote yet]",
  "[No quote yet]",
  "[No quote yet]",
  "[No quote yet]",
  "\"Gentlemen\"",
  "\"I love class uno so much\"",
  "[No quote yet]",
  "\"ты Сталин\"",
  "[No quote yet]",
  "[No quote yet]"
];

export const posEffects = [
  "+ 1 luck",
  "",
  "",
  "+ Adds 2 to all pickups played",
  "",
  "",
  "+ May jump in regardless of color, using numbers",
  "+ May jump in with action cards (Color must match, except wilds)",
  "",
  "+ When they play +4 card, everyone switches hands in the direction opposite the turn order",
  "",
  "",
  "+ May stack without picking up (you weasel out of it)",
  "",
  "",
  "+ May jump in with a zero on any action card to remove the action card’s effects",
  "+ When they play a reverse, they must switch two people’s hands (after picking up)",
  "",
  "+ Summon a new minion when you play a wild card (or +4). The minion is a new player of class of random type (not summoner), sitting anywhere.",
  "",
  "",
  "+ You may swap classes with someone else when you play 2 reverse cards in a chain",
  "+ If you started as drunk you only need 1 reverse instead",
  "",
  "+ You may look at anyone’s hand at any time",
  "",
  "",
  "+ When you jump in, the player who played the card before yours draws the top 4 cards from the discard pile.",
  "+ You may jump in with skip cards, regardless of symbol. It is instantly your turn after you do this. The card has no other effects.",
  "+ 1 luck",
  "+ Can target anyone with skips, instead of just the next player",
  "+ Discard a card when you miss your turn",
  "",
  "+ When you play a +4, instead of the normal effect, shuffle everyone’s hands together and deal them out equally. (round up using more cards from draw pile)",
  "",
  "",
  "+ When you play a skip, instead of skipping, choose someone to control on their next turn. (Controls accumulate like skips)",
  "+ On a controlled players turn, you perform all their actions for them",
  "",
  "+ Skip cards you play also skip all your other opponents",
  "+ All your other opponents also pickup when you play a pickup",
  "",
]

export const negEffects = [
  "",
  "",
  "- May only play up to 2 cards per turn",
  "",
  "- Jumped-in action cards have no effect",
  "- Next turn is skipped when anyone jumps in",
  "- Their +4 card has no [additional] effect, and matches the color below",
  "- Instantly draws a card when they uno (must win with a chain of 2 or more)",
  "- Failure to weasel results in an extra +2 and their turn is skipped [effectively missed, since it is already their turn]",
  "",
  "- When anyone plays a reverse, they must draw a card, and their turn is skipped.",
  "",
  "- Minion loses the game upon reaching zero or over 14 cards",
  "- Cannot chain action cards (minions can though)",
  "- Turn is skipped when someone else plays reverse, and reveal your hand.",
  "- Draw an extra card from pickups played on you.",
  "- If you end your turn without playing, your opponent(s) with the least cards may reveal and give you up to two of theirs instead of allowing you to draw a card.",
  "",
  "- When your turn is skipped, double the number of skips.",
  "",
  "- All your pickups played are reduced to +0 (you can still continue a stack)",
  "",
  "- Pickup 4 does nothing else",
  "",
  "- Reveal your hand when anyone plays a wild or +4",
  "",
  "- When you win, instead choose someone, take their hand, and they lose the game.",
  ""
]