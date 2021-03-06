module.exports = async function (context, req) {
    context.log('Adding a task to the planner');

    const task = req.body;
    // Implement the response
    const responseMessage = { response: task};

    context.res = {
        status: 201,
        body: responseMessage
    };
}