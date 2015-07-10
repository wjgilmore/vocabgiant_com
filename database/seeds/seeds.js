db.dropDatabase();

db.lists.insert(
  { name: 'Colors', 
    language: 'Italian',
    terms: [
      {
        origin: 'arancione',
        translation: 'orange'
      },
      {
        origin: "azzurro/a",
        translation: 'blue'
      },
      {
        origin: "bianco / bianca",
        translation: 'white'
      },
      {
        origin: 'giallo / gialla',
        translation: 'yellow'
      },
      {
        origin: 'marrone',
        translation: 'brown'
      },
      {
        origin: 'grigio',
        translation: 'gray'
      },
      {
        origin: 'rosso / rossa',
        translation: 'gray'
      },
      {
        origin: 'verde',
        translation: 'green'
      },
      {
        origin: 'nero / nera',
        translation: 'black'
      }

    ]
  }
  )

db.lists.insert(
  { name: 'Family', 
    language: 'Italian',
    terms: [
      {
        origin: 'la famiglia',
        translation: 'Family'
      },
      {
        origin: "il fratello",
        translation: 'brother'
      },
      {
        origin: "la sorella",
        translation: 'sister'
      },
      {
        origin: 'la madre',
        translation: 'mother'
      },
      {
        origin: 'il padre',
        translation: 'father'
      },
      {
        origin: 'il nonno',
        translation: 'grandfather'
      },
      {
        origin: 'la nonna',
        translation: 'grandmother'
      },
      {
        origin: 'il cugino / la cugina',
        translation: 'cousin'
      },
      {
        origin: 'lo zio',
        translation: 'uncle'
      },
      {
        origin: 'la zia',
        translation: 'aunt'
      },
      {
        origin: 'il marito',
        translation: 'husband'
      },
      {
        origin: 'la moglie',
        translation: 'wife'
      }
    ]
  }
  )

db.lists.insert(
  { name: 'Seasons', 
    language: 'Italian',
    terms: [
      {
        origin: 'primavera',
        translation: 'Spring'
      },
      {
        origin: "estate",
        translation: 'Summer'
      },
      {
        origin: "autunno",
        translation: 'Autumn'
      },
      {
        origin: 'inverno',
        translation: 'Winter'
      }
    ]
  }
  )

db.lists.insert(
  { name: 'Days of the Week', 
    language: 'Italian',
    terms: [
      {
        origin: 'lunedì',
        translation: 'Monday'
      },
      {
        origin: 'martedì',
        translation: 'Tuesday'
      },
      {
        origin: 'mercoledì',
        translation: 'Wednesday'
      },
      {
        origin: 'giovedì',
        translation: 'Thursday'
      },
      {
        origin: 'venerdì',
        translation: 'Friday'
      },
      {
        origin: 'sabato',
        translation: 'Saturday'
      },
      {
        origin: 'domenica',
        translation: 'Sunday'
      },
    ]
  }
  )

db.lists.insert(
  { name: 'Months of the Year', 
    language: 'Italian',
    terms: [
      {
        origin: 'gennaio',
        translation: 'January'
      },
      {
        origin: 'febbraio',
        translation: 'February'
      },
      {
        origin: 'marzo',
        translation: 'March'
      },
      {
        origin: 'aprile',
        translation: 'April'
      },
      {
        origin: 'giugno',
        translation: 'June'
      },
      {
        origin: 'luglio',
        translation: 'July'
      },
      {
        origin: 'agosto',
        translation: 'August'
      },
      {
        origin: 'settembre',
        translation: 'September'
      },
      {
        origin: 'ottobre',
        translation: 'October'
      },
      {
        origin: 'novembre',
        translation: 'November'
      },
      {
        origin: 'dicembre',
        translation: 'December'
      }
    ]
  }
  )