db.dropDatabase();

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