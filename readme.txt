Hello this is ashish 
here is the description and full working of project 

first of all you have to download postman for fetching data from server or for posting
you can open server with URL = localhost:8008
this will open the front page where you find a text ="please visit to this link or URL localhost:8008/school"

localhost:8008/school ---> here you can find all the routes for accessing

you you have to open post man and there enter the URL = localhost:8008/school/student -->here you will all the students registered or provided through assignment -->10 student by default
localhost:8008/school/teacher -->here you will find all the teachers detail and 5 teacher by default

localhost:8008/school/addstudent -- from this URL you can add the student from the post man 
localhost:8008/school/addteacher -- from this URL you can add the teacher from the post man 
localhost:8008/school/editstudent/:id  -- from this route you can edit the student or a student can edit it self by knowing its id (  in the :id you have to provide student id)
localhost:8008/school/getteacher/:subject -- from this you can fetch teacher with there subject name  --->for example --->localhost:8008/school/getteacher/maths
localhost:8008/school/getstudent/:classs/:section --  from this you can fetch student with there class and section name   --->for example --->localhost:8008/school/getstudent/8/A
localhost:8008/school/assignteacher/:id --from this you can get all the student assigned to a teachere here you have to provide the teacher id   --->for example --->localhost:8008/school/assignteacher/6138f3f480a0ffb1cc4cc148


subjects of teacher - maths , physics , chemistry , hindi , englisg  ---->please enter subject name from these and in same manner
class and section - 8 or 9 and section A , B , C

teacher id = {
	teacher id 1 = 6138f3f480a0ffb1cc4cc148
	teacher id 2 = 6138f660a2d24f4ee212ac14
	teacher id 3 = 6138f673a2d24f4ee212ac16
	teacher id 4 = 6138f68da2d24f4ee212ac18
	teaceher id 5 = 6138f69ca2d24f4ee212ac1a
}