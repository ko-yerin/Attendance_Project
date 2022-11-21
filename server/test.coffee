cl = console.log
Attendance = require '../api/collection'
A = Attendance.Attendance


cl A.find().map (d) -> d._id
arr = []
A.find().forEach (d) -> arr.push d._id
cl arr
arr = []
for item in A.find().fetch()
  arr.push item._id
#Attendance.Attendance.find().forEach (att) ->
#  cl Attendance.Attendance.update att._id,
#    $set: createdAt: att.in_createdAt or att.out_createdAt

