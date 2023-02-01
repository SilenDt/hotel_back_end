use hotel;
//hotel is the collection
db.dropDatabase();
//guests is a document within the hotel collection
db.guests.insertMany([
    {name: "Theodora Smith", email:"smithydodo@gmail.com", checked_in: false, check_in_time:"12:00pm", id: 17},
    {name: "Gertrude Constantine", email:"constantlyrude@yahoo.com", checked_in: true, check_in_time:"2:00pm", id: 11},
    {name: "Betsy Manderson", email:"i_am_man@hotmail.co.uk", checked_in: true, check_in_time:"9:00am", id: 23}
]);

