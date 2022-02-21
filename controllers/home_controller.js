const Task = require("../models/task");
// rendering the home page
module.exports.home = function (req, res) {
  Task.find({}, function (err, tasks) {
    if (err) {
      console.log(`Error in fetching the tasks from db: ${err}`);
      return;
    }
    return res.render("home", {
      title: "TODO App",
      task_list: tasks,
    });
  });
};

//utility function to format the date
function formatDate(dueDate) {
  let date = new Date(dueDate);

  return date;
}

// adding a new task to the database
module.exports.addTask = function (req, res) {
  Task.create(
    {
      description: req.body.description,
      category: req.body.category,
      dueDate: formatDate(req.body.dueDate),
    },
    function (err, newTask) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(newTask);
      return res.redirect("back");
    }
  );
};


//function to delete task from database
function deleteTaskOne(task) {
  Task.findByIdAndDelete(task, function (err) {
    if (err) {
      console.log(`Error in deleting an object from db: ${err}`);
      return;
    }
  });
}

function deleteTask(tasks) {
  if (typeof tasks == "string") {
    deleteTaskOne(tasks);
  } else {
    for (let task of tasks) {
      deleteTaskOne(task);
    }
  }
}

//function to delete multiple task
module.exports.deleteMultipleTask = function (req, res) {
  if (Object.keys(req.body).length === 0) {
    return res.redirect("back");
  }
  deleteTask(req.body.tasks);
  return res.redirect("back");
};
