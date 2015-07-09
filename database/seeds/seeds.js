db.dropDatabase();

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