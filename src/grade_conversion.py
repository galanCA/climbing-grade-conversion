from flask import Flask
from flask_restful import Resource, Api, reqparse
from climbing_scales import *

app = Flask(__name__)
api = Api(app)
'''
Make a dictionary for each scale that translate to IRCRA grade
From there you can get the IRCRA to the corresponding grade
'''

class grade_conversion(Resource):
	def post(self):
		parser = reqparse.RequestParser() # initialize

		# arguments
		parser.add_argument('grade', required = True)
		parser.add_argument('from', required = True)
		parser.add_argument('to', required = True)

		args = parser.parse_args()

		data = {
		args[1] : args[0],
		args[2] : self.conversion(args[0],args[1],args[2])
		}

		return data, 200

	def conversion(self, grade, fromGrade, toGrade):
		ircraGrade = self.grade2ircra(grade, fromGrade)

		if "ircra" in toGrade: # tolower(toGrade)
			return ircraGrade

		return self.ircra2grade(ircraGrade, toGrade)


	def grade2ircra(self, grade, scale):
		pass

	def ircra2grade(self, ircra_grade, scale):
		pass

api.add_resource(grade_conversion, '/conversion')

print(verminScale)
#app.run()