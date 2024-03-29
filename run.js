const { writeFileSync, readFileSync } = require("fs");

const lockers = [];

const names = [
  "Legacy Trejo",
  "Wesson Bailey",
  "Kennedy McPherson",
  "Foster Landry",
  "Brynleigh Webster",
  "Shawn Zamora",
  "Sierra Frank",
  "Braylen Melendez",
  "Bethany Montes",
  "Darren Foster",
  "Brielle Duncan",
  "Avery Frederick",
  "Sariyah Guzman",
  "Jude Rollins",
  "Araceli Vo",
  "Gordon Pacheco",
  "Paris Gray",
  "Nicholas Solomon",
  "Mylah Clay",
  "Yosef Haynes",
  "Lexi Nash",
  "Chandler Mata",
  "Lillie Johnson",
  "Noah Fuller",
  "Oakley Suarez",
  "Soren Sutton",
  "Izabella Hardy",
  "Jayceon Delgado",
  "Alani Pollard",
  "Jad Ingram",
  "Katie Moyer",
  "Ahmir Hall",
  "Anita Maveen",
  "Remy Vaughn",
  "Reign Davis",
  "Lucas Hayden",
  "Avayah Bradley",
  "Richard O’Neal",
  "Treasure Sparks",
  "Drake Glenn",
  "Blaire Hardin",
  "Hassan Martin",
  "Mila James",
  "Jaxson Thornton",
  "Haisley Mora",
  "Arturo Lamb",
  "Amaia Tate",
  "Dalton Velazquez",
  "Jaliyah Waters",
  "Maximilian Ruiz",
  "Emery McCullough",
  "Briar Sims",
  "Lena Blair",
  "Troy Munoz",
  "Kehlani Case",
  "Bentlee Guzman",
  "Ashley McGee",
  "Conner Shannon",
  "Harlee Page",
  "Pablo Berg",
  "Emmalyn Guevara",
  "Tommy Shepherd",
  "Katalina Meyer",
  "Tristan Magana",
  "Amaris Gentry",
  "Magnus Baxter",
  "Lara Sanchez",
  "Joseph Vega",
  "Dakota Jarvis",
  "Marlon Goodman",
  "Carolina Hull",
  "Salem Griffith",
  "Alicia Nixon",
  "Cory Velazquez",
  "Jaliyah Love",
  "Jeffrey Powell",
  "Vivian Peralta",
  "Dangelo Rich",
  "Sunny Dejesus",
  "Rio Leblanc",
  "Novalee Woodard",
  "Westley Bonilla",
  "Romina Dickson",
  "Maxton Robles",
  "Felicity Quintana",
  "Kelvin Decker",
  "Aleena Salinas",
  "Edgar Watts",
  "Melissa Rasmussen",
  "Will Sims",
  "Lena Ahmed",
  "Harry Maddox",
  "Zainab Carlson",
  "Paul Hendrix",
  "Zhuri Bonilla",
  "Aden Fitzgerald",
  "Marlee Conway",
  "Orlando Young",
  "Zoey Nava",
  "Stefan Proctor",
  "Chandler Garrett",
  "Kairo Kaur",
  "Holland Dudley",
  "Colter Richardson",
  "Allison Hampton",
  "Hank Gentry",
  "Amelie Dickson",
  "Maxton Pugh",
  "Landry Hutchinson",
  "Korbin Navarro",
  "Winter Zimmerman",
  "Sergio Martin",
  "Mila Costa",
  "Kenji Good",
  "Nathalia English",
  "Junior Strickland",
  "Nia Snyder",
  "Thiago Reeves",
  "Lana Kramer",
  "Kylan Myers",
  "Lydia Wolf",
  "Jase Morales",
  "Skylar Meyers",
  "Julien Barnett",
  "Harlow Velazquez",
  "Drew Page",
  "Cataleya Cherry",
  "Rome Vance",
  "Maxine Rowe",
  "Kamden Leonard",
  "Demi Mueller",
  "Albert Randall",
  "Christina Spears",
  "Ameer Patel",
  "Madeline Rush",
  "Kaiser Stokes",
  "Miranda Duke",
  "Kalel Larson",
  "Alayna Figueroa",
  "Spencer Howard",
  "Sophie Durham",
  "Kellen Cameron",
  "Julie Powell",
  "Bennett Cohen",
  "Destiny Dunlap",
  "Aries Norton",
  "Kylee Long",
  "Jace Rojas",
  "Adaline Collier",
  "Edison Jenkins",
  "Rylee Bravo",
  "Genesis Sampson",
  "Meilani Schneider",
  "Raymond Whitehead",
  "Sylvie Andersen",
  "Alistair Bean",
  "Jenesis Kelley",
  "Eric Bender",
  "Lilyana Frank",
  "Braylen Hurst",
  "Adalee Carpenter",
  "Jeremy Boyd",
  "Georgia Murray",
  "Ashton Mullins",
  "Maliyah O’Donnell",
  "Lian Morales",
  "Skylar Mathis",
  "Gustavo Parsons",
  "Maia Shields",
  "Devon Garner",
  "Jacqueline Huang",
  "Ayaan Benjamin",
  "Jianna Zimmerman",
  "Sergio Peralta",
  "Malayah Strickland",
  "Keegan Lynch",
  "Malia Daugherty",
  "Turner Bowers",
  "Elisa Stephens",
  "Messiah Davis",
  "Mia Haley",
  "Leif Cochran",
  "Alma Salinas",
  "Edgar Jacobson",
  "Royal Richard",
  "Ahmed Villarreal",
  "Jazlyn Brennan",
  "Curtis Medina",
  "Elliana Fields",
  "Clayton Mullins",
  "Maliyah Tang",
  "Rogelio Smith",
  "Olivia Pacheco",
  "Erik Higgins",
  "Leighton Patton",
  "Moises Hinton",
  "Jaelynn Sexton",
  "Mylo Palmer",
  "Juniper Harrison",
  "Gavin McIntosh",
  "Gwen Weber",
  "Crew Warren",
  "Sloane Horne",
  "Zev Hampton",
  "Leona Anderson",
  "Jacob Grimes",
  "Braelyn Merritt",
  "Colten Weaver",
  "Teagan Morton",
  "Roland Gillespie",
  "Alianna Valencia",
  "Dax Shepherd",
  "Katalina Spencer",
  "Ace Hubbard",
  "Rosie Thornton",
  "Malik Roy",
  "Savanna Morales",
  "Aaron Rich",
  "Sunny Camacho",
  "Tatum Dawson",
  "Veronica Alvarado",
  "Andres Fleming",
  "Fatima Sherman",
  "Adan Snyder",
  "Callie Kline",
  "Ramon Parrish",
  "Tiana Cross",
  "Fabian Donaldson",
  "Natasha Rosario",
  "Jedidiah Sawyer",
  "Marina Powell",
  "Bennett Carson",
  "Nalani Lane",
  "Matias Melton",
  "Kamiyah Fields",
  "Clayton Shaw",
  "Emersyn Henderson",
  "Beau Walls",
  "Lilianna Murray",
  "Ashton McClain",
  "Marleigh Calhoun",
  "Gary Burton",
  "Miriam Foster",
  "Kayden Zavala",
  "Liv Hill",
  "Isaac Hamilton",
  "Mackenzie O’Neill",
  "Marcel Barton",
  "Danna Melton",
  "Lennon Hayes",
  "Iris Washington",
  "Juan Macias",
  "Adley Marks",
  "Amos Christensen",
  "Carmen Lin",
  "Conor Clayton",
  "Saige Conley",
  "Marvin Joseph",
  "Gracelynn Church",
  "Terrance Shannon",
  "Harlee Barr",
  "Harley Richardson",
  "Allison Manning",
  "Seth Cano",
  "Egypt Hunt",
  "Jesus Juarez",
  "Juliet Murillo",
  "Lance Wolf",
  "Jolene Bradford",
  "Ander Marks",
  "Monica Thomas",
  "Logan Kim",
  "Gabriella Pollard",
  "Jad Walls",
  "Lilianna Baxter",
  "Tomas Potts",
  "Ellison Cox",
  "Connor Calhoun",
  "Thalia Craig",
  "Odin Greene",
  "Selena McCullough",
  "Briar House",
  "Sariah Baldwin",
  "Jaiden Wiley",
  "Lauryn Vega",
  "Aidan Acosta",
  "Kaia Vincent",
  "Aarav Stout",
  "Chana Watson",
  "Greyson Terry",
  "Wren Howard",
  "Jeremiah Morrison",
  "Rebecca Dejesus",
  "Rio Shepherd",
  "Katalina Leach",
  "Westin Pugh",
  "Landry Wong",
  "Walter Hancock",
  "Katelyn Diaz",
  "Nathan Gilbert",
  "Jocelyn Moss",
  "Porter Brown",
  "Charlotte Zimmerman",
  "Sergio Lester",
  "Averi Christensen",
  "Gregory Gill",
  "Jordan Lane",
  "Matias Vasquez",
  "Rose Armstrong",
  "Grant Hoffman",
  "Aspen Blair",
  "Troy Poole",
  "Bonnie Meza",
  "Lucian Knapp",
  "Linda Shaw",
  "Elliot Graham",
  "Alaia Rush",
  "Kaiser Glover",
  "Alessia Bush",
  "Tyson Blanchard",
  "Layne Martin",
  "Mateo Knapp",
  "Linda Carpenter",
  "Jeremy Davidson",
  "Jayla Ball",
  "Shane Hill",
  "Hannah Santos",
  "Walker Hardin",
  "Vada Kane",
  "Brock Singleton",
  "Malaysia Travis",
  "Willie Hamilton",
  "Mackenzie Costa",
  "Kenji Huerta",
  "Dulce Merritt",
  "Colten Torres",
  "Violet Hill",
  "Isaac Aguilar",
  "Josie Morales",
  "Aaron Vu",
  "Kimora Portillo",
  "Wallace Santiago",
  "Nyla Terry",
  "Armani Anthony",
  "Macy Garner",
  "Sage Turner",
  "Brooklyn Palmer",
  "Theo Day",
  "Hayden Strickland",
  "Keegan Prince",
  "Greta Ingram",
  "Tripp Barton",
  "Danna Vazquez",
  "Jesse Dougherty",
  "Alisson Lucero",
  "Felipe Ayala",
  "Blair Warren",
  "Abel Bowen",
  "Dream Myers",
  "Adam Joseph",
  "Gracelynn Ortega",
  "Kobe Bautista",
  "Antonella Wilcox",
  "Jerry Dalton",
  "Lilian Lara",
  "Caiden Proctor",
  "Chandler Boyer",
  "Zeke Stanton",
  "Jaycee Taylor",
  "Jackson Castro",
  "Eloise Holt",
  "Niko Collier",
  "Ivory Beltran",
  "Ricky Dickson",
  "Emmalynn Blackburn",
  "Zahir Enriquez",
  "Nellie Kramer",
  "Kylan Mullins",
  "Maliyah Luna",
  "Erick Woods",
  "Reese Burke",
  "Jax Tanner",
  "Harmoni Patterson",
  "Amir Fischer",
  "Maci Ho",
  "Morgan Franco",
  "Charleigh Banks",
  "Martin Medrano",
  "Halle Grimes",
  "Harlan Costa",
  "Robin Aguirre",
  "Andy English",
  "Kelly Nicholson",
  "Rodrigo Acevedo",
  "Ashlynn Sims",
  "Brian Hawkins",
  "Ariel Chambers",
  "Orion Bowman",
  "Fiona Clark",
  "John Ponce",
  "Aileen McCullough",
  "Briar Vu",
  "Kimora Chambers",
  "Orion Simmons",
  "Reagan Page",
  "Pablo Chang",
  "Ophelia Benitez",
  "Justice Alfaro",
  "Yasmin Greene",
  "Griffin Jarvis",
  "Elisabeth Hunter",
  "Archer Yu",
  "Navy McDaniel",
  "Major Gill",
  "Jordan Livingston",
  "Ambrose Myers",
  "Lydia Hendrix",
  "Korbyn Trevino",
  "Priscilla Haley",
  "Leif Perkins",
  "Sage Pacheco",
  "Erik Newman",
  "Oaklynn Espinosa",
  "Khalid Simon",
  "Kalani Martinez",
  "Alexander McIntyre",
  "Rebekah Ortiz",
  "Landon Kaur",
  "Holland Mercado",
  "Abram Clayton",
  "Saige Randolph",
  "Eugene Duncan",
  "Elise Medrano",
  "Arian Deleon",
  "Gabrielle Marsh",
  "Bo Soto",
  "Brynlee Lugo",
  "Santos Parrish",
  "Tiana Ahmed",
  "Harry Haynes",
  "Lexi Dalton",
  "Fletcher Church",
  "Ayleen Lester",
  "Lee Townsend",
  "Azalea King",
  "Julian Cochran",
  "Alma Trejo",
  "Wesson Wood",
  "Natalia Warren",
  "Abel Griffin",
  "Charlie Walton",
  "Dominick Bowers",
  "Elisa Martin",
  "Mateo Adams",
  "Stella Delarosa",
  "Osiris Deleon",
  "Gabrielle Meza",
  "Lucian Coleman",
  "Julia Vasquez",
  "Rowan Roy",
  "Savanna Barton",
  "Cassius Lloyd",
  "Emely Moreno",
  "Myles Dougherty",
  "Alisson Bush",
  "Tyson Xiong",
  "Amayah Vo",
  "Gordon Heath",
  "Amani Rivera",
  "Charles Escobar",
  "Erin Wyatt",
  "Sam Portillo",
  "Nathalie Berg",
  "Cayson Stevenson",
  "Regina Tang",
  "Rogelio Hahn",
  "Fallon McConnell",
  "London Velasquez",
  "Esme Caldwell",
  "Rylan Guerrero",
  "Margot Dominguez",
  "Kaden Nava",
  "Scout Schroeder",
  "Izaiah Everett",
  "Noah Santiago",
  "Beckham Lowery",
  "Estelle Wolfe",
  "Donovan Lugo",
  "Kaylie Avila",
  "Jaylen Bell",
  "Melody Eaton",
  "Leighton Adams",
  "Stella Richmond",
  "Mordechai Boyle",
  "Aliya Kerr",
  "Louie Pierce",
  "Arabella Collier",
  "Edison Poole",
  "Bonnie Becker",
  "Lawson Jarvis",
  "Elisabeth Herman",
  "Juelz Bowen",
  "Dream Lawrence",
  "Kaleb Tucker",
  "Esther Huber",
  "Mac Rush",
  "Maleah Pugh",
  "Judson Peck",
  "Crystal Harris",
  "Samuel McMahon",
  "Belen Craig",
  "Odin Fletcher",
  "Anaya Garner",
  "Sage Jimenez",
  "Adeline Branch",
  "Keenan Knapp",
  "Linda Mason",
  "Brandon Stevens",
  "Katherine Klein",
  "Marco Villalobos",
  "Zoya McGee",
  "Conner Dean",
  "Julianna Berg",
  "Cayson Ventura",
  "Zora Dickerson",
  "Flynn Barry",
  "Waverly Howe",
  "Alaric Rodriguez",
  "Evelyn Huff",
  "Finnley Ellis",
  "Ayla Wise",
  "Frederick Ramsey",
  "Lyric Fernandez",
  "Bentley Hopkins",
  "Gabriela Salgado",
  "Trace Knapp",
  "Linda Fuller",
  "Andre Pineda",
  "Nola Pearson",
  "Gunner Juarez",
  "Juliet Pope",
  "Gunnar Hammond",
  "Holly Lopez",
  "Michael Wiggins",
  "Capri Smith",
  "Liam Schmitt",
  "Queen Archer",
  "Ephraim Fields",
  "Annie Newton",
  "Santino Brennan",
  "Elodie Perez",
  "Owen Jordan",
  "Adalynn Baldwin",
  "Jaiden Keith",
  "Elyse George",
  "Mark Baldwin",
  "Esmeralda Keith",
  "Jagger Leon",
  "Amora Daniel",
  "Grady Waters",
  "Bristol Valenzuela",
  "Jamari Williamson",
  "Catherine Ochoa",
  "Winston Henry",
  "Summer Ahmed",
  "Harry Barker",
  "Remington Gilmore",
  "Vihaan Gonzalez",
  "Abigail Calderon",
  "Oakley Huff",
  "Karsyn Bell",
  "Emmett Wiley",
  "Lauryn Osborne",
  "Augustus Herman",
  "Paulina Vega",
  "Aidan Peters",
  "Leila Jones",
  "William Brandt",
  "Loretta Norman",
  "Aziel Ward",
  "Ariana Stein",
  "Creed McKenzie",
  "Briar Hodges",
  "Alonzo Valdez",
  "Diana Hughes",
  "Everett Hurley",
  "Rylan Davis",
  "Lucas Shelton",
  "Makenzie Frost",
  "Dario Dalton",
  "Lilian Lester",
  "Lee Pham",
  "Raelyn Cline",
  "Cullen Gibbs",
  "Carter Grimes",
  "Harlan Dawson",
  "Veronica Lee",
  "Jack Moon",
  "Naya Ward",
  "Jameson Gates",
  "Melina Kim",
  "Roman Blankenship",
  "Rosalee Cochran",
  "Danny Berry",
  "Annabelle Reeves",
  "Clark Hines",
  "Poppy Cantu",
  "Anakin James",
  "Quinn McClure",
  "Reese Ballard",
  "Alejandra Baxter",
  "Tomas Welch",
  "Amira McIntosh",
  "Kristian Nguyen",
  "Nova Evans",
  "Elias Stanley",
  "Gracelyn Dixon",
  "Camden Norris",
  "Arielle Wolfe",
  "Donovan Hobbs",
  "Lacey Stanton",
  "Zyair Saunders",
  "Meadow Cordova",
  "Vicente Fernandez",
  "Amara Melton",
  "Lennon Crane",
  "Della Bartlett",
  "Kace Bernal",
  "Emmeline Cook",
  "Ezekiel Mayo",
  "Aarya Boone",
  "Mauricio Hurley",
  "Rylan Hayes",
  "Legend Howard",
  "Sophie Parsons",
  "Lewis Kramer",
  "Hanna Leach",
  "Westin Patton",
  "Lorelei Hogan",
  "Sonny Trejo",
  "Rosalyn Person",
  "Moses Wolf",
  "Jolene Rosales",
  "Wilder Anthony",
  "Macy Meadows",
  "Wayne Dunlap",
  "Iliana Arias",
  "Alec Velasquez",
  "Esme Correa",
  "Zakai Todd",
  "Zariah Marks",
  "Amos Marquez",
  "Milani Ventura",
  "Branson McGuire",
  "April Davila",
  "Grey Peters",
  "Leila Medina",
  "George Conway",
  "Ryann Pratt",
  "Rowen Wheeler",
  "Sydney Pope",
  "Gunnar Schwartz",
  "Lilliana Smith",
  "Liam Nolan",
  "Itzayana Hull",
  "Salem Small",
  "Zaria Le",
  "Damien McFarland",
  "Annika Galindo",
  "Salvatore Berger",
  "Laylah Kemp",
  "Melvin Pollard",
  "Marisol Ibarra",
  "Asa McCullough",
  "Hana Acosta",
  "Jensen Richardson",
  "Allison Alfaro",
  "Xzavier Martin",
  "Mila McKinney",
  "Romeo Estes",
  "Brittany Curry",
  "Briggs Powers",
  "Michelle O’Neal",
  "Eddie Riley",
  "Kayla Zhang",
  "Isaias Hurst",
  "Adalee Bruce",
  "Uriah Ross",
  "Peyton Collier",
  "Edison Esparza",
  "Ramona Rosas",
  "Remi Conner",
  "Alondra Zamora",
  "Quentin Collier",
  "Ivory Finley",
  "Calum Schneider",
  "Delaney Velasquez",
  "Sullivan Ashley",
  "Khalani Dixon",
  "Camden Flores",
  "Emilia Palacios",
  "Thaddeus English",
  "Kelly Villarreal",
  "Nikolai Ashley",
  "Khalani Santana",
  "Mohamed Wong",
  "Adelaide Ochoa",
  "Winston Bell",
  "Melody Watkins",
  "Nash Ortega",
  "Lilah McIntyre",
  "Eliseo Good",
  "Nathalia Randall",
  "Trenton Schmidt",
  "Kimberly Shaffer",
  "Dexter Ali",
  "Zelda Vang",
  "Jimmy Walsh",
  "Leia Noble",
  "Idris Owens",
  "Amaya Calhoun",
  "Gary Gallagher",
  "Elliott Luna",
  "Erick Franco",
  "Charleigh Jones",
  "William Frye",
  "Raya Howe",
  "Alaric Yang",
  "Angelina Henderson",
  "Beau Berger",
  "Laylah Collins",
  "Miles Adams",
  "Stella Wong",
  "Walter Arnold",
  "Finley Phelps",
  "Hamza Bentley",
  "Jaylin Santos",
  "Walker Orozco",
  "Renata McIntosh",
  "Kristian Cannon",
  "Noa Leonard",
  "Ricardo Burton",
  "Miriam Ingram",
  "Tripp McLean",
  "Sky Simon",
  "Zayne Meza",
  "Rosa Davila",
  "Grey Schroeder",
  "Cameron Nicholson",
  "Rodrigo Keller",
  "Logan Howe",
  "Alaric Davidson",
  "Jayla Walsh",
  "Bodhi Park",
  "Lia Dean",
  "Ronan Hood",
  "Briana Hanna",
  "Aydin Murillo",
  "Mikaela Benitez",
  "Justice Kemp",
  "Anika Duke",
  "Kalel Turner",
  "Brooklyn Schmitt",
  "Murphy Carroll",
  "Zara Velazquez",
  "Drew Duncan",
  "Elise Horne",
  "Zev Tapia",
  "Michaela Stanton",
  "Zyair Silva",
  "Lucia Boyle",
  "Robin Harvey",
  "Nicole Wolf",
  "Jase Murray",
  "Faith Gilbert",
  "Tobias Compton",
  "Elina Fernandez",
  "Bentley Mays",
  "Denisse Clark",
  "John Owen",
  "Mikayla Abbott",
  "Kohen Daniel",
  "Joy McClain",
  "Mitchell Khan",
  "Mabel Rush",
  "Kaiser Pena",
  "Rachel Frederick",
  "Kase Murphy",
  "Bella Quintana",
  "Kelvin Truong",
  "Judith Hodge",
  "Reign McCarthy",
  "Kira Erickson",
  "Johnny Phillips",
  "Naomi Hendrix",
  "Korbyn Xiong",
  "Amayah Wolfe",
  "Donovan Schroeder",
  "Cameron Bernard",
  "Jair Yu",
  "Navy Bartlett",
  "Kace Franklin",
  "Angela Young",
  "Asher Bowen",
  "Dream Ramsey",
  "Luciano Burnett",
  "Emberly House",
  "Yehuda Peck",
  "Crystal Duncan",
  "Avery Ramsey",
  "Lyric Perkins",
  "Kyrie Esquivel",
  "Jaylee O’Connor",
  "Princeton Davenport",
  "Adrianna Arellano",
  "Kellan Woodward",
  "Drew Nicholson",
  "Rodrigo Mullins",
  "Maliyah Alvarado",
  "Andres Mueller",
  "Imani Floyd",
  "Pierce Jaramillo",
  "Guadalupe Padilla",
  "Jaden Giles",
  "Bailee Delacruz",
  "Memphis Hudson",
  "Kamila Padilla",
  "Jaden Lester",
  "Averi Gregory",
  "Travis Dyer",
  "Estrella Francis",
  "Harvey Higgins",
  "Leighton Oliver",
  "Karson Cortes",
  "Lea Frost",
  "Dario Warren",
  "Sloane Mack",
  "Esteban Gaines",
  "Aya Pratt",
  "Rowen Myers",
  "Lydia English",
  "Junior Peterson",
  "Caroline Blair",
  "Troy Adams",
  "Stella Walls",
  "Larry Gill",
  "Jordan McCullough",
  "Briar Pennington",
  "Yareli Hayes",
  "Legend Nixon",
  "Deborah Reese",
  "Alijah Kerr",
  "Baylee Coffey",
  "Kody Rosales",
  "Kinley Luna",
  "Erick Russo",
  "Tinsley Ward",
  "Jameson Simpson",
  "Anastasia Travis",
  "Willie Rice",
  "Ada Wiley",
  "Mathew Anthony",
  "Macy Henry",
  "Carlos Houston",
  "Lylah Farley",
  "Graysen Morrow",
  "Reyna Cunningham",
  "Alejandro Kirk",
  "Ellis Molina",
  "Prince Little",
  "Harley McDonald",
  "Calvin Dodson",
  "Etta Wolf",
  "Jase Clark",
  "Chloe Mason",
  "Brandon Berger",
  "Laylah House",
  "Yehuda Travis",
  "Mazikee Michael",
  "Bronson Dominguez",
  "Raegan Holloway",
  "Sutton Bowers",
  "Elisa Frost",
  "Dario Parrish",
  "Tiana McClure",
  "Reese Blackwell",
  "Saoirse Avalos",
  "Coen Lawson",
  "Phoebe Lawrence",
  "Kaleb Wolf",
  "Jolene Orozco",
  "Keanu Kerr",
  "Baylee Rodriguez",
  "Henry Delgado",
  "Alani Robbins",
  "Finnegan Murphy",
  "Bella Ellis",
  "Cole Melton",
  "Kamiyah Lara",
  "Caiden Park",
  "Lia Armstrong",
  "Grant Vang",
  "Madisyn Ortega",
  "Kobe Glover",
  "Alessia Fry",
  "Jacoby Schmitt",
  "Queen Garza",
  "Judah Kelley",
  "Rosalie Carter",
  "Maverick Colon",
  "Remy Barron",
  "Dustin Rosales",
  "Kinley Cummings",
  "Raiden O’Neill",
  "Kenna Velez",
  "Kareem Blanchard",
  "Layne Colon",
  "Bruce Boyle",
  "Aliya Winters",
  "Deandre Pena",
  "Rachel Singh",
  "Louis Beck",
  "Gia Galvan",
  "Kingsley Frye",
  "Raya Ellis",
  "Cole Floyd",
  "Yaretzi Charles",
  "Conrad Wise",
  "Mira Solis",
  "Ronin Harmon",
  "Maren Reyes",
  "Eli Christian",
  "Anahi Parra",
  "Davion Wall",
  "Jayda Whitaker",
  "Keith Felix",
  "Paisleigh Pollard",
  "Jad Holt",
  "Adelynn Franklin",
  "Simon Norris",
  "Arielle Estrada",
  "Phoenix Avery",
  "Meghan Jacobs",
  "Bryan Mata",
  "Lillie Boone",
  "Mauricio Gillespie",
  "Alianna Charles",
  "Conrad Myers",
  "Lydia Espinosa",
  "Khalid Bentley",
  "Jaylin Berger",
  "Byron Collier",
  "Ivory Price",
  "Brooks Villalobos",
  "Zoya Bishop",
  "Paxton Vazquez",
  "Journee Rivera",
  "Charles Johns",
  "Giovanna Mack",
  "Esteban Lowery",
  "Estelle Walsh",
  "Bodhi McFarland",
  "Annika Nguyen",
  "Gabriel Huff",
  "Karsyn Cantrell",
  "Harris Gonzalez",
  "Abigail McIntosh",
  "Kristian Zamora",
  "Sierra Lane",
  "Matias Abbott",
  "Melany Atkins",
  "Cason James",
  "Quinn Malone",
  "Ruben Wolfe",
  "Hallie Choi",
  "Khari Zimmerman",
  "Ariyah Felix",
  "Rodney Sellers",
  "Mercy Barry",
  "Emery McIntyre",
  "Rebekah Madden",
  "Everest Nguyen",
  "Nova Torres",
  "Jayden Underwood",
  "Ensley Villarreal",
  "Nikolai Huber",
  "Raquel Stuart",
  "Dion Barajas",
  "Keilani Velasquez",
  "Sullivan Austin",
  "Alivia Chen",
  "Emmanuel Colon",
  "Remy Charles",
  "Conrad Randolph",
  "Kailey Pratt",
  "Rowen McPherson",
  "Emmaline Rhodes",
  "Titus Jordan",
  "Adalynn Rodgers",
  "Mathias Whitney",
];

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const zones = [
  { hallName: "History/Geography", low: 1318, high: 1396, floor: 1 },
  { hallName: "Main Hall", low: 1397, high: 1450, floor: 1 },
  { hallName: "Business", low: 1495, high: 1588, floor: 1 },
  { hallName: "South Wing", low: 3000, high: 3303, floor: 1 },
  { hallName: "Music", low: 2176, high: 2275, floor: 2 },
  { hallName: "Office", low: 2276, high: 2306, floor: 2 },
  { hallName: "English", low: 2307, high: 2355, floor: 2 },
  { hallName: "Science", low: 2356, high: 2503, floor: 2 },
  { hallName: "South Wing", low: 4001, high: 4111, floor: 2 },
  { hallName: "South Wing", low: 4200, high: 4259, floor: 2 },
  { hallName: "Math", low: 6000, high: 6107, floor: 3 },
  { hallName: "French", low: 7000, high: 7084, floor: 3 },
];

function write() {
  for (const { low, high, hallName, floor } of zones) {
    for (let i = low; i <= high; i++) {
      let owner = null;
      if (getRandomArbitrary(0, 1)) {
        owner = { grade: getRandomArbitrary(9, 13), name: names[0] };
        if (getRandomArbitrary(0, 3) != 2 && owner.grade == 13) {
          owner.grade -= getRandomArbitrary(1, 4);
        }
        names.shift();
      }
      lockers.push({
        lockerNumber: i,
        Hallway: hallName,
        Owner: owner,
        Floor: floor,
      });
    }
  }
  console.log(lockers, names.length);

  writeFileSync("students.json", JSON.stringify(lockers));
}

function read() {
  const bytes = readFileSync("./students.json").toString();
  console.log(JSON.parse(bytes).length);
}
write();
