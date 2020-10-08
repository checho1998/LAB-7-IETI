module.exports = async function (context) {
	context.log('obtener tareas');

	const list = [
	{
	"text": "This is my first task",
        "priority": "6",
        "dueDate": "new Date(2020, 5, 22)",
        },
	{
        "text": "This is my task",
        "priority": "4",
        "dueDate": "new Date(2020, 8, 2)",
        },
	{
        "text":"Facebook Integration",
        "priority": "3",
        "dueDate": "new Date(2020, 7, 25)",
        },
	];

	const responseMessage = { response: list};

	context.res = {
        status: 200,
        body: responseMessage
    };
}