let taskNumber = 0;

$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })
    $('#btn-task-cancel').click(function(){
        $('form').slideUp();
    })
    $('form').on('submit', function(e){
        e.preventDefault();

        const newTaskName = $('#inp-task-name').val();
        const newTaskDeadline = $('#inp-task-deadline').val();
        const newTask = $('<tr style="display: none"></tr>');

        $(`<td>${newTaskName}</td><td>${newTaskDeadline}</td>`).appendTo(newTask);
        $(newTask).appendTo('tbody');
        $(newTask).fadeIn(1000);

        taskNumber++;
        $('#total-tasks').text(taskNumber);

        $('#inp-task-name').val('');
        $('#inp-task-deadline').val('');
    })

    $('tbody').on('click', 'tr', function(){
        $(this).find('td').toggleClass('completed');
    })
})