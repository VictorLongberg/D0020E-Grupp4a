var student = require('./student.js');
var queue = require('./queue.js');

/** Class representing a Lecture. */
class Lecture {
	constructor(){
		this.students = [];
		this.queues = [];
	}

	get_student_by_id(id){
		for (var i = 0; i < this.students.length; i++){
			if (this.students[i].session_id == id){
				return this.students[i];
			}
		}
		return null;
	}

	student_exist(id){
		if (this.get_student_by_id(id) == null){
			return false;
		}
		return true;
	}

	add_student(id, name, socket){
		var stud = this.get_student_by_id(id);
		if (stud == null){
			var stud = new student.Student(id, name, socket);
			this.students.push(stud);
		} else {
			stud.set_name(name);
		}
	}

	get_student_name(id){
		var student = this.get_student_by_id(id);
		if (student == null){
			return "Unknown";
		}
		return student.get_name();
	}

	get_queue(name){
		for (var i = 0; i < this.queues.length; i++){
			if (this.queues[i].name == name){
				return this.queues[i];
			}
		}
		return null;
	}

	add_queue(name){
		var queue_e = this.get_queue(name);
		if (queue_e == null){
			var q = new queue.queue(name);
			this.queues.push(q);
		} else {
			return;
		}
	}

	remove_queue(name){
		for (var i = 0; i < this.queues.length; i++){
			if (this.queues[i].name == name){
				this.queues.splice(i, 1);
			}
		}
		return;
	}
}

module.exports = {Lecture};
