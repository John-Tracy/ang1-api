/*
gets all Riders objects and sends it to frontend
*/


module.exports = function(app){

	app.get('/getAllRiders', function(req, res){

		var riders = [
			{
				riderName: 'John',
				bikeBrand: 'Yamaha',
				bikeModel: 'yz250f',
				raceNumber: '728',
				raceClass: 'C',
				riderAge: '25'
			},
			{
				riderName: 'Eddie',
				bikeBrand: 'Honda',
				bikeModel: 'crf250',
				raceNumber: '118',
				raceClass: '45+',
				riderAge: '50'				
			}
		];

		res.json(riders);

	});


};